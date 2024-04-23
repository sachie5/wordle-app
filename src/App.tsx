import { KeyboardEvent, RefObject, useEffect, useRef, useState } from "react";
import WordContainer from "./Containers/WordContainer/WordContainer";
import "./App.scss";
import WordTiles from "./Components/WordTiles/WordTiles";

const App = () => {
  const [word, setWord] = useState<string>("");
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([...Array(6)]);
  const [turn, setTurn] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  let index = guesses.length;

  const getWord = async () => {
    const url = `https://random-word-api.herokuapp.com/word?length=5`;
    const response = await fetch(url);
    const randomWord = await response.json();
    setWord(randomWord[0].toUpperCase());
  };

  useEffect(() => {
    getWord();
    console.log(word);
  }, []);

  useEffect(() => {
    window.addEventListener("keyup", onKeyboardPress);

    return () => window.removeEventListener("keyup", onKeyboardPress);
  }, [currentGuess]);

  const onKeyboardPress = (key: KeyboardEvent) => {
    const pressedKey = key.key;
    console.log(pressedKey);
    console.log(currentGuess);
    if (/^[A-Za-z]$/.test(pressedKey)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + pressedKey.toUpperCase();
        });
      }
    } else if (pressedKey === "Backspace") {
      setCurrentGuess((prevGuess) => {
        const updatedGuess = prevGuess.slice(0, -1);
        return updatedGuess;
      });
    } else if (pressedKey === "Enter") {
      if(currentGuess.length === 5){
        guesses[turn] = currentGuess;
        console.log(guesses)
        compareAnswer();
        setTurn(turn + 1);
        setCurrentGuess("");
        console.log(turn)
        
      }

    }
  };

  const compareAnswer = () => {
    const current = [...currentGuess];
    const solution = [...word];
    
    current.forEach((letter, i) => {
      if(current[i] === solution[i]){

      } else if (solution.includes(current[i])){

      } else {

      }
    })
    
    setGuesses((prevGuess) => {
      let newGuess = [...prevGuess];
      newGuess[turn] = currentGuess;
      return newGuess;

  })
    
  };

  return (
    <>
      <main>
        <p>Solution: {word}</p>
        <p onKeyUp={onKeyboardPress}>Current guess: {currentGuess}</p>
         <WordContainer classname={"wordle"} guesses={guesses} currentGuess={currentGuess} onKeyboardPress={onKeyboardPress} turn={turn}  />
      </main>
    </>
  );
};

export default App;
