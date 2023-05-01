import { useState, useEffect } from 'react';
import {
  DescriptionBox,
  FollowBtn,
  FollowBtnActive,
  Followers,
  Name,
  Tweets,
} from './DescriptionStyled';

export const Description = ({ id, tweets, name, followers,following }) => {
  const [active, setActive] = useState(following);
  const [newFollower, setNewFollower] = useState(parseInt(followers));

  const handleClick = () => {
    const newActive = !active;
    const newFollowerCount = newActive ? newFollower + 1 : newFollower - 1;
    setActive(newActive);
    setNewFollower(newFollowerCount);
    localStorage.setItem(`following-${id}`, newActive.toString());
    localStorage.setItem(`followers-${id}`, newFollowerCount.toString());
  };

  useEffect(() => {
    const savedActive = localStorage.getItem(`following-${id}`);
    const savedFollowers = localStorage.getItem(`followers-${id}`);
    if (savedActive !== null) {
      setActive(savedActive === 'true');
    }
    if (savedFollowers !== null) {
      setNewFollower(parseInt(savedFollowers));
    }
  }, [id]);

  return (
    <DescriptionBox>
      <Name>{name}</Name>
          <Tweets>{tweets} Tweets</Tweets>
          <Followers>{newFollower} FOLLOWERS</Followers>
          {active ? (
            <FollowBtnActive onClick={handleClick}>FOLLOWING</FollowBtnActive>
          ) : (
            <FollowBtn onClick={handleClick}>FOLLOW</FollowBtn>
          )}
    </DescriptionBox>
  );
};
