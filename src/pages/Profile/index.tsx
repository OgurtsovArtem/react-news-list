import { CardList } from 'widgets/card-list';
import { ProfileInfo } from 'widgets/profile-info';

const Profile = () => {
    return (
        <>
            <ProfileInfo />
            <CardList type="profile" />
        </>
    );
};

export default Profile;
