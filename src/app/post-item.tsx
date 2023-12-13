import { Post } from "@/db/queries/posts";

export default function PostItem({ post }: { post: Post }) {
  return (
    <article className="border-b-2 p-4 hover:bg-secondary transition duration-150 ease-in-out">
      <h2 className="text-lg font-bold mb-2">{post.heading}</h2>
      <p>{post.content}</p>
    </article>
  );
}
