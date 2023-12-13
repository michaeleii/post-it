"use client";

import { Button } from "@/components/ui/button";
import { Loader2Icon, Trash2 } from "lucide-react";
import { deletePost } from "./delete-post-action";
import { useTransition } from "react";

export default function DeletePostButton({ postId }: { postId: number }) {
  const [isPending, startTransition] = useTransition();

  const handleDeletePost = async () => {
    startTransition(async () => await deletePost(postId));
  };

  return (
    <Button
      className="space-x-2 w-full"
      variant="destructive"
      disabled={isPending}
      onClick={handleDeletePost}
    >
      {isPending ? (
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
