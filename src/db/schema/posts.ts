import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { users } from "./users";

export const posts = sqliteTable("posts", {
  id: integer("id").notNull().primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  heading: text("heading"),
  content: text("text"),
});
