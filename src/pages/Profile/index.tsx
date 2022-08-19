import { CardList } from "widgets/CardList";
import { ProfileInfo } from "widgets/ProfileInfo";

const Profile = () => {
  return (
    <>
      <ProfileInfo />
      <CardList type="profile" />
    </>
  );
};

export default Profile;
