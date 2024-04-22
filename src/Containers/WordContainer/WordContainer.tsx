import {  KeyboardEventHandler, forwardRef } from "react";
import WordTiles from "../../Components/WordTiles/WordTiles";
import "./WordContainer.scss";

type WordContainerProps = {
  classname: string;
  guesses: string[];
  currentGuess: string;
  onKeyboardPress: KeyboardEventHandler<HTMLDivElement>;
  turn: number;
};

const WordContainer = 
  ({ classname, guesses, currentGuess, onKeyboardPress, turn }: WordContainerProps) => {
  return (
    <section className={`${classname}__container`} onKeyDown={onKeyboardPress}>
      {guesses && guesses.map((guess, index) => (
        <WordTiles key={index} classname={classname} guesses={guesses} currentGuess={currentGuess} />
      ))}  
    </section>
  );
 }

export default WordContainer;
