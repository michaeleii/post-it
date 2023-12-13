import { SinglePost } from "@/db/queries/posts";

export default function SinglePostItem({ post }: { post: SinglePost }) {
  return (
    <article className="border-gray-200 p-4 mt-5">
      <h2 className="text-2xl font-bold mb-2">{post.heading}</h2>
      <p className="mb-5">
        by {post.user.firstName} {post.user.lastName}
      </p>
      <p className="text-lg">{post.content}</p>
    </article>
  );
}
