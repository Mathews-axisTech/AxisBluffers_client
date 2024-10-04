import React from 'react';
import * as Styled from "./styles";


const StartingPage = ({handlebutton}) => {
    return(
    <>
    <Styled.FullScreenContainer>
      <Styled.BackgroundImage src='/images/BG.png' alt='bg' />
      <Styled.StartPageContainer>
      <Styled.WelcomeTitleWrapper>
          <Styled.WelcomeTextLine1>AXIS</Styled.WelcomeTextLine1>
          <Styled.WelcomeTextLine2>BLUFFERS</Styled.WelcomeTextLine2>
        </Styled.WelcomeTitleWrapper>
        <Styled.RobotoText>
Test your skills in this fun multiplayer guessing game! Create or join a room, submit two truths and one lie about yourself, and challenge your friends to spot the lie. The more correct guesses you make, the higher your score. 
        </Styled.RobotoText>
        <Styled.MaryKate>Ready to outsmart your OPPONENTS ?</Styled.MaryKate> 
        <Styled.StartButton onClick={handlebutton}>Start Game</Styled.StartButton>
      </Styled.StartPageContainer>
    </Styled.FullScreenContainer>
    </>
    )
}

export default StartingPage;