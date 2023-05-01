import { useState } from 'react';
import {
  DescriptionBox,
  FollowBtn,
  FollowBtnActive,
  Followers,
  Name,
  Tweets,
} from './DescriptionStyled';
import { updateUser } from 'api';

export const Description = ({id,tweets,name,followers}) => {
    const [active,setActive] = useState(false)
    const [following, setFollowing] = useState(
      localStorage.getItem(`following-${id}`) === 'true' || false
    );
    const [currentFollowers, setCurrentFollowers] = useState(followers);
    const credentials = {
      followers: following ? currentFollowers - 1 : currentFollowers + 1,
    };
  
    const handleClick = async () => {
      setActive(prevActive => !prevActive);
      setFollowing(!following);
      try {
        const response = await updateUser(id, credentials);
        setCurrentFollowers(response.followers);
        localStorage.setItem(`following-${id}`, !following);
      } catch (error) {
        console.log(error.message);
      }
    };
  
  return (
    <DescriptionBox>
      <Name>{name}</Name>
      <Tweets>{tweets} Tweets</Tweets>
      <Followers>{followers} FOLLOWERS</Followers>
      {active ? 
      <FollowBtnActive onClick={handleClick}>FOLLOWING</FollowBtnActive> : 
      <FollowBtn onClick={handleClick}>FOLLOW</FollowBtn>}
    </DescriptionBox>
  );
};
