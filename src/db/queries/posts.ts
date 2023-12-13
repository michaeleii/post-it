import { db, eq, sql } from "..";
import { posts } from "../schema/posts";
import { users } from "../schema/users";

export const homeQuery = db
  .select({
    id: posts.id,
    heading: posts.heading,
    content: posts.content,
  })
  .from(posts)
  .innerJoin(users, eq(users.id, posts.userId))
  .prepare();

export type Post = Awaited<ReturnType<typeof homeQuery.all>>[0];

export const singlePostQuery = db
  .select({
    id: posts.id,
    heading: posts.heading,
    content: posts.content,
    user: {
      id: users.id,
      firstName: users.firstName,
      lastName: users.lastName,
    },
  })
  .from(posts)
  .where(eq(posts.id, sql.placeholder("postId")))
  .innerJoin(users, eq(users.id, posts.userId))
  .prepare();

export type SinglePost = Awaited<ReturnType<typeof singlePostQuery.all>>[0];
