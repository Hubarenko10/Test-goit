import styled from 'styled-components';

export const ProfileBox = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  width: 380px;
  height: 80px;
  &::after {
    content: '';
    position: absolute;
    top: 36px;
    left: 0;
    width: 380px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const ProfileThumb = styled.div`
  position: absolute;
  top: 0;
  left: 150px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const ProfileImage = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

