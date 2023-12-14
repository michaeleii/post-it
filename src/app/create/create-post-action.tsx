"use server";

import { db } from "@/db";
import { insertPostSchema, posts } from "@/db/schema/posts";
import { revalidatePath } from "next/cache";
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
  try {
    await db.insert(posts).values({ ...post, userId: 1 });
  } catch (error) {
    return {
      message: "Database Error: Failed to create post.",
    };
  }
  revalidatePath("/");
  redirect("/");
}
