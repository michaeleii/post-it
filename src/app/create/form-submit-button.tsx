"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function FormSubmitButton({
  value,
  loadingValue,
}: {
  value: string;
  loadingValue: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-3" disabled={pending}>
      {pending ? loadingValue : value}
    </Button>
  );
}
