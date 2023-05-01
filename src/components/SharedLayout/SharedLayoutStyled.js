import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 60px;
  padding: 16px 0;
  margin-bottom: 32px;
  color: #373737;
  > nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
  }
`;

export const Navigate = styled(NavLink)`
  padding: 8px 0;
  text-decoration: none;
  color: #373737;
  border-bottom: 2px solid transparent;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &.active {
    color: #5cd3a8;
    border-bottom: 2px solid #5cd3a8;
  }
`;