"use server";

import { db, eq } from "@/db";
import { posts } from "@/db/schema/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type State = {
  message?: string;
};

export async function deletePost(_: State, formData: FormData) {
  const id = Number(formData.get("postId"));
  try {
    await db.delete(posts).where(eq(posts.id, id));
  } catch (e) {
    return { message: "Database Error: Failed to delete post." };
  }
  revalidatePath("/");
  redirect("/");
}
