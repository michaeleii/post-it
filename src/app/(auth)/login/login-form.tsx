"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "./login-action";
import { useFormState } from "react-dom";
import FormSubmitButton from "@/app/create/form-submit-button";

const initialState = { message: "" };

export function LoginForm() {
  const [state, formAction] = useFormState(login, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input type="text" name="username" />
        {state.message && (
          <p className="mt-2 text-sm text-destructive">{state.message}</p>
        )}
      </div>
      <FormSubmitButton value="Login" loadingValue="Logging in..." />
    </form>
  );
}
