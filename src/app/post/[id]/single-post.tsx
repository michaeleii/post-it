import { Button } from "@/components/ui/button";
import { SinglePost } from "@/db/queries/posts";
import Link from "next/link";

export default function SinglePostItem({ post }: { post: SinglePost }) {
  return (
    <main className="pt-5 px-5 max-w-xl mx-auto">
      <Link href="/">
        <Button className="w-full">Back</Button>
      </Link>
      <article className="border-gray-200 p-4 mt-5">
        <h2 className="text-2xl font-bold mb-2">{post.heading}</h2>
        <p className="mb-5">
          by {post.user.firstName} {post.user.lastName}
        </p>
        <p className="text-lg">{post.content}</p>
      </article>
    </main>
  );
}
