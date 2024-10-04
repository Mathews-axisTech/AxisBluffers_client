import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import * as Styled from "./styles";
import StartingPage from './components/StartingPage';

const socket = io('https://axisbluffers-server.onrender.com');

const App = () => {
  const [name, setName] = useState('');
  const [facts, setFacts] = useState(['', '', '']);
  const [roomNumber, setRoomNumber] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [currentFacts, setCurrentFacts] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [factsSubmitted, setFactsSubmitted] = useState(false); // To track if facts are submitted
  const [isRoomCreator, setIsRoomCreator] = useState(false);
  const [enteredRoomNumber, setEnteredRoomNumber] = useState('');
  const [hasGuessed, setHasGuessed] = useState(false);
  const [playersScores, setPlayersScores] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [isStartingPage,setIsStartingPage] = useState(true);
  const [radioFactIndex, setRadioFactIndex] = useState(null);
  const [CurrentPlayerName, setCurrentPlayerName] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [dropdownIndex,setDropdownIndex] = useState(null);

  useEffect(() => {

    socket.on('roomCreated', ( roomNum ) => {
      setRoomNumber(roomNum);
      setIsRoomCreator(true);
      console.log("roomNumber : ",roomNum);
      setTimeout(() => {
        console.log(`state variable after 3 seconds: ${roomNumber}`);
      }, 3000);
    });

    socket.on('roomJoined', ( roomNumber ) => {
      setRoomNumber(roomNumber);
    });

    socket.on('roomNotFound', () => {
      alert('Room not found');
      setEnteredRoomNumber('');
    });

    // Handle game start
    socket.on('startGame', (players) => {
      setGameStarted(true);
    });

    socket.on('showPlayerFacts', ({ playerId,playerName, facts }) => {
      setCurrentPlayerName(playerName);
      setCurrentPlayer(playerId);
      setCurrentFacts(facts);
      setHasGuessed(false);
      setTimeLeft(20);
      setRadioFactIndex(null);
      console.log(`Player ${playerId} facts:`, facts);

      const timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if(prevTime>0){
            return prevTime - 1;
          }else{
            clearInterval(timerInterval);
            if(!hasGuessed ){
              console.log('Time up! for player:', playerName);
              handleGuess();
            }
            return 0;
          }
        });
      }, 1000);
    
      return () => clearInterval(timerInterval);
    });


    // Handle game over event
    socket.on('gameOver', ({ players }) => {
      setPlayersScores(players);
      setGameOver(true);
    });

    return () => {
      socket.off('roomCreated');
      socket.off('roomJoined');
      socket.off('roomNotFound');
      socket.off('startGame');
      socket.off('showPlayerFacts');
      socket.off('gameOver');

    };
  });


  // Create a new room
  const createRoom = () => {
    socket.emit('createRoom',name);
  };

  const joinRoom = () => {
    socket.emit('joinRoom',enteredRoomNumber,name);  
  }

  // Handle submitting facts (Step 2)
  const handleSubmitFacts = () => {
    socket.emit('submitFacts', roomNumber,facts, dropdownIndex ); // Set the index of the wrong fact
    console.log(dropdownIndex);
    setFactsSubmitted(true); // Track that facts have been submitted
  };

  // Handle guessing the wrong fact
  const handleGuess = () => {
    console.log('Guessing wrong fact:', radioFactIndex);
    setHasGuessed(true);
    socket.emit('guessWrongFact', roomNumber, currentPlayer, radioFactIndex );
    console.log("socket emit guessWrongFact");
  };

  const handlebutton = () => {
    setIsStartingPage(false);
  }

  const handleRadioChange = (index) => {
    setRadioFactIndex(index);
  }

  const isFormValid = facts.every(fact => fact.trim() !== '') && dropdownIndex !== null;

  return (
    <>
    {!isStartingPage && (
      <Styled.LogoContainer>
        <img src="/images/logo.png" alt="Logo" className="logo" />
      </Styled.LogoContainer>
    )}
    {isStartingPage? (
      <StartingPage handlebutton={handlebutton} />
      ) : (
    <Styled.ContentContainer>
    <Styled.Container>
        {!gameOver ? ( 
          !gameStarted ? (  
              !factsSubmitted &&(
                !roomNumber ? (
                    <Styled.OuterTitles>Create or Join a Room</Styled.OuterTitles>     
                  ) : (
                    <Styled.OuterTitles>Enter Something Interesting About You</Styled.OuterTitles> 
          ))) : (
            <Styled.OuterTitles>Guess the wrong fact of {CurrentPlayerName}</Styled.OuterTitles>
          )) : (
            <Styled.OuterTitles>Game Over !</Styled.OuterTitles>
          )
        }
      {!gameOver ? (
        !gameStarted ? (
          !factsSubmitted ? (
            <>
              {!roomNumber ? (
                <Styled.CreateRoomContainer>
                  <Styled.RoomImg>
                  <img src="/images/Room.png" alt="Logo" className='room'/>
                  </Styled.RoomImg>
                  <Styled.Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                  
                  <Styled.Input
                    value={enteredRoomNumber}
                    onChange={(e) => setEnteredRoomNumber(e.target.value)}
                    placeholder="Enter room number"
                  />
                  <Styled.ButtonSet>
                  <Styled.Button onClick={createRoom} disabled={!name.trim()}>Create Room</Styled.Button>
                  <Styled.Button onClick={joinRoom} disabled={!name.trim() || enteredRoomNumber.length !== 6}>Join Room</Styled.Button>
                  </Styled.ButtonSet>
                </Styled.CreateRoomContainer>
              ) : (
                <Styled.FactsContainer>
                  <Styled.Title>Room number : {roomNumber}</Styled.Title>
                  <Styled.Input
                    value={facts[0]}
                    onChange={(e) => setFacts([e.target.value, facts[1], facts[2]])}
                    placeholder="Fact 1"
                  />
                  <Styled.Input
                    value={facts[1]}
                    onChange={(e) => setFacts([facts[0], e.target.value, facts[2]])}
                    placeholder="Fact 2"
                  />
                  <Styled.Input
                    value={facts[2]}
                    onChange={(e) => setFacts([facts[0], facts[1], e.target.value])}
                    placeholder="Fact 3 "
                  />
                  <Styled.WrongFactContainer>
                  <h1>Select the wrong fact : </h1>
                  <Styled.Select
                    value={dropdownIndex}
                    onChange={(e) => setDropdownIndex(Number(e.target.value))}
                  >
                    <option value="" disabled selected>Select a fact</option>
                    <option value={0}>Fact 1</option>
                    <option value={1}>Fact 2</option>
                    <option value={2}>Fact 3</option>
                  </Styled.Select>
                  </Styled.WrongFactContainer>
                  <Styled.Button onClick={handleSubmitFacts} disabled={!isFormValid}>Submit Facts</Styled.Button>
                  
                </Styled.FactsContainer>
              )}
            </>
          ) : (
              <>
              <Styled.Paragraphs>
              Waiting for other players to submit their facts...
              </Styled.Paragraphs>
              {isRoomCreator && !gameStarted && (
                <Styled.Button onClick={() => socket.emit('startGameEarly', roomNumber)}>
                  Start Game
                </Styled.Button>
              )}
              </>

            
          )
        ) : (
          <Styled.GuessingContainer>
            {currentFacts.length > 0 ? (
              <>
              
              <Styled.Title>Time left: {timeLeft} seconds</Styled.Title>
              {currentFacts.map((fact, index) => (
                <Styled.FactContainer key={index}>
                  <label htmlFor={`fact-${index}`}>{fact}</label>
                  <input
                    type="radio"
                    id={`fact-${index}`}
                    name="fact"
                    value={index}
                    onChange={() => handleRadioChange(index)}
                    disabled={hasGuessed}
                  />
                  
                </Styled.FactContainer>
              ))}
              <Styled.ButtonSet>
              <Styled.SubmitButton onClick={handleGuess} disabled={hasGuessed || radioFactIndex === null}>
                Submit
              </Styled.SubmitButton>
              {isRoomCreator &&
              <Styled.Button onClick={()=> socket.emit('forceNextRound',roomNumber,radioFactIndex)} >
                Force Round
              </Styled.Button>
}
              </Styled.ButtonSet>
            </>
            ) : (
              <Styled.Paragraphs>Loading facts...</Styled.Paragraphs>
            )}
          </Styled.GuessingContainer>
        )
      ) : (
          <Styled.ScoreContainer>
          <Styled.Subtitle>Scoreboard</Styled.Subtitle>
          <Styled.Table>
            <thead>
              <tr>
                <Styled.Th>Player</Styled.Th>
                <Styled.Th>Score</Styled.Th>
              </tr>
            </thead>
            <tbody>
              {playersScores.map((player) => (
                <tr key={player.id}>
                  <Styled.Td>{player.name}</Styled.Td>
                  <Styled.Td>{player.score}</Styled.Td>
                </tr>
              ))}
            </tbody>
          </Styled.Table>
          </Styled.ScoreContainer>
      )}
    </Styled.Container>
    </Styled.ContentContainer>
      )}
    </>
  );
};

export default App;
