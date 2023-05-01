import { ProfileBox, ProfileImage, ProfileThumb } from "./UserProfileStyled";
// import avatar from "../../Icons/Hansel.png"

const UserProfile = ({avatar}) => {
    return (
      <ProfileBox>
        <ProfileThumb>
          <ProfileImage src={avatar} alt="user avatar" />
        </ProfileThumb>
      </ProfileBox>
    );
  };
  
  export default UserProfile;