"use client";

import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FormSubmitButton from "./form-submit-button";
import { createPost } from "./create-post-action";

const initialState = { message: "", errors: {} };

export default function CreatePostForm() {
  const [state, formAction] = useFormState(createPost, initialState);
  return (
    <form action={formAction} className="flex flex-col gap-3">
      <div className="space-y-2">
        <Label htmlFor="heading">Heading</Label>
        <Input name="heading" type="text" aria-describedby="heading-error" />
        <div id="heading-error" aria-live="polite" aria-atomic="true">
          {state.errors?.heading &&
            state.errors.heading.map((error) => (
              <p className="mt-2 text-sm text-destructive" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="heading">Content</Label>
        <Textarea name="content" aria-describedby="content-error" />
        <div id="content-error" aria-live="polite" aria-atomic="true">
          {state.errors?.content &&
            state.errors.content.map((error) => (
              <p className="mt-2 text-sm text-destructive" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <FormSubmitButton value="Create" loadingValue="Creating..." />
    </form>
  );
}
