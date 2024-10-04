import styled,{keyframes} from 'styled-components';

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px); /* Adjust the value to control the movement */
  }
`;

const clarifyAnimation = keyframes`
  0% {
    opacity: 0;
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
`;

const riseAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const FullScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  margin: 0;
  padding: 0;
`;

export const BackgroundImage = styled.img`
  height: 110%;
  width: 110%;
  object-fit: cover;
  position: absolute;
  top: -5%;
  left: -5%;
  animation: ${moveUpDown} 5s infinite;
`;

export const StartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 45%; /* Adjust this value to move the content up */
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const StartButton = styled.button`
  height: 65px;
  width: 175px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 2rem;
  font-size: 1.5rem;
  color: #140057;
  margin-top: 30px;
  background-color: #C67DE0;
  animation: ${riseAnimation} 1s ease-out;
`;

export const WelcomeTextLine1 = styled.h1`
  font-size: 10rem;
  font-family: 'Pixelify Sans', sans-serif;
  color: #C67DE0; /* For "AXIS" */
  text-shadow: 1px 1px 0 #7EDAF2; /* Outline effect */
  letter-spacing: 2px; /* For pixelated spacing */
  height: fit-content;
  line-height: 75%;
  
  
  @media (max-width: 1200px) {
    font-size: 8rem;
  }

  @media (max-width: 992px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 576px) {
    font-size: 3rem;
  }
`;

export const WelcomeTextLine2 = styled.h1`
  font-size: 10rem;
  font-family: 'Pixelify Sans', sans-serif;
  color: #7EDAF2; /* For "AXIS" */
  text-shadow: 1px 1px 0 #C67DE0; /* Outline effect */
  letter-spacing: 2px; /* For pixelated spacing */
  height: fit-content;
  line-height: 75%;
  animation: ${clarifyAnimation} 5s ease-out;

  @media (max-width: 1200px) {
    font-size: 8rem;
  }

  @media (max-width: 992px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 576px) {
    font-size: 3rem;
  }
`;

export const WelcomeTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px; /* Adjust the gap between the text lines */
`;

export const RobotoText = styled.p`
  margin-top: 40px;
  font-family: "Roboto Condensed", sans-serif; 
  font-size: 1.4rem;
  color: white;
  text-align: center;
`;

export const MaryKate = styled.p`
  font-family: 'MaryKate', sans-serif;
  font-size: 2.5rem;
  font-weight: 300;
  color: white;
  margin-top: 80px;
  display: flex ;
  justify-content: center;
`;