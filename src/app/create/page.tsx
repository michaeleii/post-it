import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/db";
import { posts } from "@/db/schema/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import FormSubmitButton from "./form-submit-button";

async function createPost(formData: FormData) {
  "use server";
  const heading = formData.get("heading") as string;
  const content = formData.get("content") as string;
  await db.insert(posts).values({ heading, content, userId: 1 });
  revalidatePath("/");
  redirect("/");
}

function CreatePostForm() {
  return (
    <form action={createPost} className="flex flex-col gap-3">
      <div className="space-y-2">
        <Label htmlFor="heading">Heading</Label>
        <Input name="heading" type="text" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="heading">Content</Label>
        <Textarea name="content" />
      </div>
      <FormSubmitButton value="Create" loadingValue="Creating..." />
    </form>
  );
}

export default function Create() {
  return (
    <main className="pt-5 px-5 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Create Post</h1>
      <CreatePostForm />
    </main>
  );
}
