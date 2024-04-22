import "./WordTiles.scss";

type WordTilesProps = {
  classname: string;
  guesses: string[];
  currentGuess: string;
};

const WordTiles = ({ classname, guesses, currentGuess }: WordTilesProps) => {
  return(
    guesses.map((guess, index) => (
      <div className={`${classname}--container`}>
        {guess && guess.split("").map((letter, letterIndex) => (
              <div key={letterIndex }className={`${classname}--letters`} >
              {letter}
              </div>
  ))} : {!guess &&
    <><div className={`${classname}--letters`}>
          </div><div className={`${classname}--letters`}>
            </div><div className={`${classname}--letters`}>
            </div><div className={`${classname}--letters`}>
            </div><div className={`${classname}--letters`}>
            </div></>
  }
      </div>
  ))
  )
  }   



export default WordTiles;