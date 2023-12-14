"use client";

import { Button } from "@/components/ui/button";
import { Loader2Icon, Trash2 } from "lucide-react";
import { deletePost } from "./delete-post-action";
import { useFormState, useFormStatus } from "react-dom";

const initialState = { message: "" };

function DeletePostButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="space-x-2 w-full"
      variant="destructive"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2Icon className="animate-spin" />
          <span>Deleting...</span>
        </>
      ) : (
        <>
          <Trash2 />
          <span>Delete</span>
        </>
      )}
    </Button>
  );
}

export default function DeletePostForm({ postId }: { postId: number }) {
  const [state, formAction] = useFormState(deletePost, initialState);
  return (
    <form action={formAction}>
      <input type="hidden" name="postId" value={postId} />
      <DeletePostButton />
      {state.message && (
        <p className="mt-2 text-sm text-destructive">{state.message}</p>
      )}
    </form>
  );
}
