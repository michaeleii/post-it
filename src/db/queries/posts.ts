import { db, eq, ilike, or, sql } from "..";
import { posts } from "../schema/posts";
import { users } from "../schema/users";

const baseQuery = db
  .select({
    id: posts.id,
    heading: posts.heading,
    content: posts.content,
  })
  .from(posts)
  .innerJoin(users, eq(users.id, posts.userId));

export const homeQuery = baseQuery.prepare();

export const searchPostQuery = baseQuery
  .where(
    or(
      ilike(posts.heading, `%${sql.placeholder("query")}%`),
      ilike(posts.content, `%${sql.placeholder("query")}%`)
    )
  )
  .prepare();

export const userPostsQuery = baseQuery
  .where(eq(users.id, sql.placeholder("userId")))
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
