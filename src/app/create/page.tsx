import CreatePostForm from "./create-post-form";

export default function Create() {
  return (
    <main className="pt-5 px-5 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Create Post</h1>
      <CreatePostForm />
    </main>
  );
}
