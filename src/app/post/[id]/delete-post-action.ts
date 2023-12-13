"use server";

import { db, eq } from "@/db";
import { posts } from "@/db/schema/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deletePost(id: number) {
  await db.delete(posts).where(eq(posts.id, id));
  revalidatePath("/");
  redirect("/");
}
