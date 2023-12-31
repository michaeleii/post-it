import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { sql } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";

import { users } from "./users";

export const posts = sqliteTable("posts", {
  id: integer("id").notNull().primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  heading: text("heading"),
  content: text("text"),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const insertPostSchema = createInsertSchema(posts, {
  heading: (schema) =>
    schema.heading
      .min(1, { message: "Heading must be at least 1 character" })
      .max(20, { message: "Heading must be less than 20 characters" }),
  content: (schema) =>
    schema.content
      .min(1, { message: "Content must be at least 1 character" })
      .max(100, { message: "Content must be less than 100 characters" }),
}).omit({ id: true, userId: true });
