"use server";

import * as z from "zod";

import { cookies } from "next/headers";
import { db, eq } from "@/db";
import { users } from "@/db/schema/users";
import { redirect } from "next/navigation";

type State = {
  message?: string;
} | void;

const LoginSchema = z.object({
  username: z.string(),
});

export async function login(_: State, formData: FormData) {
  const { username } = LoginSchema.parse({
    username: formData.get("username"),
  });

  try {
    const user = await db
      .select({
        id: users.id,
        username: users.username,
      })
      .from(users)
      .where(eq(users.username, username))
      .then((users) => users[0]);

    if (!user) {
      return { message: "User not found." };
    }
    cookies().set("user_id", user.id.toString());
    cookies().set("username", user.username);
  } catch (e) {
    return { message: "Database Error: Failed to delete post." };
  }
  redirect("/");
}
