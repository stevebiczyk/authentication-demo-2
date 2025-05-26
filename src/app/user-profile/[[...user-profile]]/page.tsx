import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <div className="flex items-center justify-center py-8">
      <UserProfile path="/user-profile" />
    </div>
  );
}
