import MainWrapper from "@/components/main-wrapper";
import Search from "./search";
import Link from "next/link";
import PostItem from "../post-item";
import { searchPostQuery } from "@/db/queries/posts";

async function SearchPostList({ query }: { query: string }) {
  if (!query) {
    return null;
  }
  const posts = await searchPostQuery.all({ query: `%${query}%` });
  if (!posts.length) {
    return <p className="mt-5">No posts found.</p>;
  }
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

export default function SearchPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  return (
    <MainWrapper>
      <h1 className="font-bold text-3xl mb-5">Search</h1>
      <Search placeholder="Search post..." />

      <SearchPostList query={query} />
    </MainWrapper>
  );
}
