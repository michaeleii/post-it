import { singlePostQuery } from "@/db/queries/posts";
import { notFound } from "next/navigation";
import SinglePostItem from "./single-post";

export default async function PostPage({ params }: { params: { id: string } }) {
  const postId = Number(params.id);
  const post = await singlePostQuery.all({ postId }).then((posts) => posts[0]);

  if (!post) {
    notFound();
  }

  return <SinglePostItem post={post} />;
}
