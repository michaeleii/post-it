import { singlePostQuery } from "@/db/queries/posts";
import { notFound } from "next/navigation";
import SinglePostItem from "./single-post";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DeletePostButton from "./delete-post-button";

export default async function PostPage({ params }: { params: { id: string } }) {
  const postId = Number(params.id);
  const post = await singlePostQuery.all({ postId }).then((posts) => posts[0]);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-5 px-5 max-w-xl mx-auto">
      <Link href="/">
        <Button className="w-full">Back</Button>
      </Link>
      <SinglePostItem post={post} />
      <div className="mt-5">
        <DeletePostButton postId={post.id} />
      </div>
    </main>
  );
}
