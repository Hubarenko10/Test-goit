import { Card } from 'components/Card/Card';
import { CardListBox } from './CardListStyled';

export const CardList = ({ user }) => {
  return (
    <CardListBox>
      {user &&
        user.map(({ tweets, name, avatar, followers, id }) => {
          return (
            <li key={id}>
              <Card
                id={id}
                tweets={tweets}
                name={name}
                avatar={avatar}
                followers={followers}
              />
            </li>
          );
        })}
    </CardListBox>
  );
};
