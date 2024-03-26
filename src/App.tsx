import { useEffect, useState } from "react";
import WordContainer from "./Containers/WordContainer/WordContainer";
import "./App.scss";


const App = () => {

  const [word, setWord] = useState<string[]>([]);
  const [blanks, setBlanks] = useState<string[]>([""]);

  const getWord = async () => {
    const url = `https://random-word-api.herokuapp.com/word?length=5`;
    const response = await fetch(url);
    const randomWord = await response.json();
    setWord(randomWord);
  }
 
  useEffect(() => {
    getWord();
  }, [])


  return (
    <>
    <main>
    <WordContainer classname={"wordle"} blanks={blanks} />
    </main>
    </>
  )
}

export default App
