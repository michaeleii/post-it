import MainWrapper from "@/components/main-wrapper";
import CreatePostForm from "./create-post-form";

export default function Create() {
  return (
    <MainWrapper>
      <h1 className="text-2xl font-bold mb-5">Create Post</h1>
      <CreatePostForm />
    </MainWrapper>
  );
}
