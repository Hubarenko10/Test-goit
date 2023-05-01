import { Community, Heading, Paragraph } from "./HomeComponentStyled"

export const HomeComponent = () =>{
return (
    <div>
      <Heading>A world of instant updates</Heading>
      <Paragraph>
        Tweets is an online platform for real-time communication and sharing,
        where users can express their thoughts, ideas and feelings in a limited
        message format called tweets. The Tweets home page is a window to a
        world of instant updates, where users can follow news, trends,
        correspond with friends and meet new people.
      </Paragraph>
      <Paragraph>
        Not only do thousands of posts and news items await you on the Tweets
        page, but you can also connect in a community where every voice counts.
        Get ready for an exciting and dynamic Tweets experience!
      </Paragraph>
      <Community to="/tweets">Join our community today!</Community>
    </div>
    )

}