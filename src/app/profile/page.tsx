import MainWrapper from "@/components/main-wrapper";
import { profileQuery } from "@/db/queries/users";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import FormSubmitButton from "../../components/form-submit-button";
import { logout } from "./logout-action";

export default async function Profile() {
  const userId = cookies().get("user_id")?.value;
  if (!userId) {
    redirect("/login");
  }

  const user = await profileQuery
    .all({ userId: +userId })
    .then((users) => users[0]);
  return (
    <MainWrapper>
      <h1 className="font-bold text-3xl">
        {user.firstName} {user.lastName}
      </h1>
      <form action={logout} className="w-full">
        <FormSubmitButton value="Sign Out" loadingValue="Signing Out..." />
      </form>
    </MainWrapper>
  );
}
