"use server";

import { db } from "@/db";
import { insertPostSchema, posts } from "@/db/schema/posts";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// This is temporary until @types/react-dom is updated
type State = {
  errors?: {
    content?: string[] | undefined;
    heading?: string[] | undefined;
  };
  message?: string;
};

export async function createPost(_: State, formData: FormData) {
  const newPost = {
    heading: formData.get("heading"),
    content: formData.get("content"),
  };
  const validatedFields = insertPostSchema.safeParse(newPost);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation Error: Failed to create post.",
    };
  }

  const post = validatedFields.data;
  const userId = cookies().get("user_id")?.value;
  if (!userId) {
    redirect("/login");
  }
  try {
    await db.insert(posts).values({ ...post, userId: +userId });
  } catch (error) {
    return {
      message: "Database Error: Failed to create post.",
    };
  }
  revalidatePath("/");
  redirect("/");
}
