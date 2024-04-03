import {  KeyboardEventHandler, forwardRef } from "react";
import WordTiles from "../../Components/WordTiles/WordTiles";
import "./WordContainer.scss";

type WordContainerProps = {
  classname: string;
  guesses: string[];
  currentGuess: string[];
  onKeyboardPress: KeyboardEventHandler<HTMLDivElement>;
  ref: React.RefObject<HTMLDivElement>;
};

const WordContainer = 
  ({ classname, guesses, currentGuess, onKeyboardPress, ref }: WordContainerProps) => {
  return (
    <section className={`${classname}__container`} onKeyDown={onKeyboardPress} ref={ref}>
      {guesses.length > 0 ? (
        guesses.map((guess, i) => (
        <WordTiles classname={`${classname}__word`} key={i} guesses={guesses}/>
      ))
      ) : (
        Array.from({ length: 6 }, (_, i) => (
          <WordTiles classname={`${classname}__word`} key={i} guesses={[]} />
        )
      )
      )
        }
    </section>
  );
 }

export default WordContainer;
