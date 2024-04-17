import { KeyboardEvent, RefObject,  useEffect, useRef, useState } from "react";
import WordContainer from "./Containers/WordContainer/WordContainer";
import "./App.scss";
import WordTiles from "./Components/WordTiles/WordTiles";


const App = () => {

  const [word, setWord] = useState<string>("");
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([]);
  let index = guesses.length;

  const getWord = async () => {
    const url = `https://random-word-api.herokuapp.com/word?length=5`;
    const response = await fetch(url);
    const randomWord = await response.json();
    setWord(randomWord[0]);
  }
 
  const onKeyboardPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const letter = event.key;
    console.log(letter)
    console.log(currentGuess);
    if(letter === "Backspace"){
      setCurrentGuess((prevGuess) => {
        const updatedGuess = prevGuess.split("").slice(0, -1).join();
        return updatedGuess;});
    } else if(letter.match(/[A-Za-z]/)){
        if(currentGuess.length < 5){
          const localGuess  = currentGuess + letter;
         /*  setCurrentGuess(localGuess); */
        }
  } else if (letter === "Enter"){
        compareAnswer();
  }
}

  useEffect(() => {
    getWord();
    console.log(word);
  }, [])

  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
  }
}, [currentGuess])

  const compareAnswer = () => {
    const current = currentGuess;
    if(current === word){
      alert("You have won!")
    } else {
    setGuesses([...guesses, current]);
    index--;
    }
  }

  return (
    <>
    <main>
  <WordContainer classname={"wordle"} guesses={guesses} currentGuess={currentGuess} onKeyboardPress={onKeyboardPress} ref={ref}   />
    </main>
    </>
  )
}

export default App
