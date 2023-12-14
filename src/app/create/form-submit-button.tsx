"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function FormSubmitButton({
  value,
  loadingValue,
}: {
  value: React.ReactNode;
  loadingValue: React.ReactNode;
}) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="mt-3 w-full" disabled={pending}>
      {pending ? loadingValue : value}
    </Button>
  );
}
