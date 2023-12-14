"use server";

import { db } from "@/db";
import { insertPostSchema, posts } from "@/db/schema/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// This is temporary until @types/react-dom is updated
type State = {
  errors?: {
    id?: string[] | undefined;
    content?: string[] | undefined;
    userId?: string[] | undefined;
    heading?: string[] | undefined;
  };
  message?: string;
};

export async function createPost(_: State, formData: FormData) {
  const newPost = {
    heading: formData.get("heading"),
    content: formData.get("content"),
    userId: 1,
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
    await db.insert(posts).values(post);
  } catch (error) {
    return {
      message: "Database Error: Failed to create post.",
    };
  }
  revalidatePath("/");
  redirect("/");
}
