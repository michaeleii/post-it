import Link from "next/link";
import PostItem from "./post-item";
import { homeQuery } from "@/db/queries/posts";

async function PostList() {
  const posts = await homeQuery.all();
  return (
    <section>
      {posts.map((post) => (
        <Link key={post.id} href={`/post/${post.id}`}>
          <PostItem post={post} />
        </Link>
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <main className="max-w-xl mx-auto">
      <PostList />
    </main>
  );
}
