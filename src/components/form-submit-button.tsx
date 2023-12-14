"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function FormSubmitButton({
  value,
  loadingValue,
  variant = "default",
}: {
  value: React.ReactNode;
  loadingValue: React.ReactNode;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | null
    | undefined;
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      variant={variant}
      type="submit"
      className="mt-3 w-full"
      disabled={pending}
    >
      {pending ? loadingValue : value}
    </Button>
  );
}
