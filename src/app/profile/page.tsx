import MainWrapper from "@/components/main-wrapper";
import { profileQuery } from "@/db/queries/users";

export default async function Profile() {
  const user = await profileQuery.all({ userId: 1 }).then((users) => users[0]);
  return (
    <MainWrapper>
      <h1 className="font-bold text-3xl">
        {user.firstName} {user.lastName}
      </h1>
    </MainWrapper>
  );
}
