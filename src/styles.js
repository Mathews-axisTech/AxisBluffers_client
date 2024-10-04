// Styles.js
import styled from 'styled-components';

export const LogoContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 20px;
  padding: 10px; /* Optional: Add some padding */
  z-index: 10; /* Ensure the logo is above other elements */

  img.logo {
    width: 200px; /* Adjust the size as needed */
    height: auto; /* Maintain aspect ratio */
  }
`;

export const RoomImg = styled.div`
  top: 25px;

  img.room {
    width: 200px; /* Adjust the size as needed */
    height: auto; /* Maintain aspect ratio */
  }
`

export const ContentContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

export const Container = styled.div`
  height: 70%;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  border-radius: 20px;
  display: flex ;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border:1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`;

export const CreateRoomContainer = styled(Container)`
  height: 80%;
  width: 70%;
`;

export const FactsContainer = styled(Container)`
  height: 80%;
  width: 70%;
`;

export const GuessingContainer = styled(Container)`
  height: 80%;
  width: 70%;
`;

export const ScoreContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Select = styled.select`
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #140057;
  background-color: #140057 ;
  color:white;
`;

export const WrongFactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  width: 75%;

  h1{
  font-family: "Roboto Condensed", sans-serif;
  font-size: 20px;
  color:#C67DE0;
  margin-right: 20px;
  }
`

export const FactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #f0f0f0; /* Light gray background */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  cursor: pointer;
  transition: background-color 0.3s;
  width: 85%;
  margin-bottom: 6%;

  &:hover {
    background-color: #e0e0e0; /* Slightly darker on hover */
  }

  input[type="radio"] {
     margin-left:auto;/* Space between radio button and label */
  }

  label {
    cursor: pointer; /* Ensure the label has a pointer cursor */
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #7EDAF2;
  font-size: 20px;
  color: #140057;
  border: none;
  border-radius: 5px;
  min-width: 170px;
  width: auto;
  cursor: pointer;
  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
  &:disabled:hover::after {
    content: 'Please Choose an answer';
    position: absolute;
    bottom: 5%; /* Position above the button */
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    font-size: 14px;
    z-index: 1;
    opacity: 1;
    visibility: visible;
  }
  &:disabled::after {
    content: '';
    position: absolute;
    bottom: 100%; /* Position above the button */
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    font-size: 14px;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }
`;

export const ButtonSet = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;

`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 75%;
  height: 40px;
  border: 1px solid #140057;
  border-radius: 5px;
  background-color:#140057;
  color: white;
  font-size: 20px;

  &::placeholder {
    color: grey;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #7EDAF2;
  font-size: 20px;
  color: #140057;
  border: none;
  border-radius: 5px;
  min-width: 170px;
  width: auto;
  cursor: pointer;
  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
  &:disabled:hover::after {
    content: 'Please fill the required fields first';
    position: absolute;
    bottom: 5%; /* Position above the button */
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    font-size: 14px;
    z-index: 1;
    opacity: 1;
    visibility: visible;
  }
  &:disabled::after {
    content: '';
    position: absolute;
    bottom: 100%; /* Position above the button */
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    font-size: 14px;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }
`;


export const Title = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 38px;
  margin-bottom: 20px;
  color:#C67DE0;
`;

export const OuterTitles = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 38px;
  margin-bottom: 20px;
  color:#C67DE0;
`;

export const Paragraphs = styled.h1`
  font-family: "MaryKate", sans-serif;
  font-size: 50px;
  text-align: center;
  margin-bottom: 20px;
  color:#C67DE0;
`;

export const Subtitle = styled.h3`
  font-family:  sans-serif;
  font-size: 20px;
  text-align: center;
  color:#C67DE0;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  overflow: hidden; /* Add this line to ensure the border-radius is applied */
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
  background-color: rgba(255,255,255,0.2);
	color: #fff;
  text-align: center;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 25px;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: rgba(255,255,255,0.2);
	color: #fff;
  text-align: center;
  font-family: "Roboto Condensed", sans-serif;
`;


export const FactButton = styled(Button)`
  width: 100%;
  max-width: 300px;
`;