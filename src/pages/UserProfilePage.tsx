import UserProfileForm from "../forms/user-profile-form/UserProfileForm";
import { useGetMyUser, useUpdateMyUser } from "../api/MyUserApi";

const UserProfilePage = () => {
  const { updateUser, isLoading: isGetLoading } = useUpdateMyUser();
  const { currentUser, isLoading: isUpdateLoading } = useGetMyUser();

  if (isGetLoading) {
    return <span>Loading...</span>;
  }
  if (!currentUser) {
    return <span>Error loading user</span>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
