import { db } from "@/db";
import { posts } from "@/db/schema/posts";
import { users } from "@/db/schema/users";

const fakeUsers = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Alice", lastName: "Smith" },
  { id: 3, firstName: "Bob", lastName: "Johnson" },
];

const fakePosts = [
  {
    id: 1,
    userId: 1,
    heading: "Exploring Artificial Intelligence",
    content:
      "Just finished reading a fascinating book about artificial intelligence. The author delves deep into the ethical implications of AI in our society. Highly recommended!",
  },
  {
    id: 2,
    userId: 2,
    heading: "Charming Coffee Shop Experience",
    content:
      "Visited a charming coffee shop today and tried their new caramel macchiato. The ambiance was cozy, and the coffee was simply delightful. Can't wait to go back!",
  },
  {
    id: 3,
    userId: 3,
    heading: "Weekend Hiking Adventure",
    content:
      "Spent the weekend hiking in the mountains. The scenic views were breathtaking, and the fresh mountain air was invigorating. Nature truly has a way of rejuvenating the soul.",
  },
];

async function seedDatabase() {
  await db.insert(users).values(fakeUsers);
  await db.insert(posts).values(fakePosts);
}

seedDatabase().then(() => console.log("Database seeded!"));
