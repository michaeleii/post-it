import { db, eq, sql } from "..";
import { users } from "../schema/users";

export const profileQuery = db
  .select()
  .from(users)
  .where(eq(users.id, sql.placeholder("userId")));
