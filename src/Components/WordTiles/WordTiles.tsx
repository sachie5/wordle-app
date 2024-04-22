import "./WordTiles.scss";

type WordTilesProps = {
  classname: string;
  guesses: string[];
  currentGuess: string;
};

const WordTiles = ({ classname, guesses, currentGuess }: WordTilesProps) => {
  {guesses.map((guess) => {
    if(guess){
      const guessLetters = guess.split("");
      return (        
      <div className={`${classname}--container`}>
       {guessLetters.map((letter, index) => (
        <div key={index }className={`${classname}--letters`} >
          {letter}
        </div>
      ))}      
       </div>
      )
    }
  }   
  )}
  return (
    <div className={`${classname}--container`}>
        <div className={`${classname}--letters`} >
        </div>
        <div className={`${classname}--letters`} >
        </div>
        <div className={`${classname}--letters`} >
        </div>
        <div className={`${classname}--letters`} >
        </div>
        <div className={`${classname}--letters`} >
        </div>
      </div>
  );
    }



export default WordTiles;