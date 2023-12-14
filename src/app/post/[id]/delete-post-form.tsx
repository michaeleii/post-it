"use client";

import { Loader2Icon, Trash2 } from "lucide-react";
import { deletePost } from "./delete-post-action";
import { useFormState } from "react-dom";
import FormSubmitButton from "@/components/form-submit-button";

const initialState = { message: "" };

export default function DeletePostForm({ postId }: { postId: number }) {
  const [state, formAction] = useFormState(deletePost, initialState);
  return (
    <form action={formAction}>
      <input type="hidden" name="postId" value={postId} />
      <FormSubmitButton
        variant="destructive"
        value={
          <>
            <Trash2 />
            <span>Delete</span>
          </>
        }
        loadingValue={
          <>
            <Loader2Icon className="animate-spin" />
            <span>Deleting...</span>
          </>
        }
      />
      {state.message && (
        <p className="mt-2 text-sm text-destructive">{state.message}</p>
      )}
    </form>
  );
}
