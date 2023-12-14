import MainWrapper from "@/components/main-wrapper";
import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <MainWrapper>
      <h1 className="font-bold text-3xl mb-5">Login</h1>
      <LoginForm />
    </MainWrapper>
  );
}
