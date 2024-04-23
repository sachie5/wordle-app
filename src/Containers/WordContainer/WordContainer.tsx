import {  KeyboardEventHandler, forwardRef } from "react";
import WordTiles from "../../Components/WordTiles/WordTiles";
import "./WordContainer.scss";

type WordContainerProps = {
  classname: string;
  guesses: string[];
  currentGuess: string;
  onKeyboardPress: KeyboardEventHandler<HTMLDivElement>;
  backgroundColor: string;
  turn: number;
};

const WordContainer = 
  ({ classname, guesses, currentGuess, onKeyboardPress, turn, backgroundColor }: WordContainerProps) => {
  return (
    <section className={`${classname}__container`} onKeyDown={onKeyboardPress}>
        <WordTiles classname={classname} guesses={guesses} currentGuess={currentGuess} backgroundColor={backgroundColor} /> 
    </section>
  );
 }

export default WordContainer;
