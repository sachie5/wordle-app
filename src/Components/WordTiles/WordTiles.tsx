import "./WordTiles.scss";

type WordTilesProps = {
  classname: string;
  guesses: string[];
  currentGuess: string;
  turn?: number;
};

const WordTiles = ({ classname, guesses, currentGuess, turn }: WordTilesProps) => {
  if(currentGuess){
    let letters = currentGuess.split("");
    return(
      <div className={`${classname}--container`} key={turn}>
      {letters.map((letter, index) => (
        letter && (
          <div key={index} className={`${classname}--letters`} >
            {letter}
        </div>
        )     
      ))}
      </div>
    )
  }

  return(
    guesses.map((guess, index) => (
      <div className={`${classname}--container`}>
        {guess && guess.split("").map((letter, letterIndex) => (
              <div key={letterIndex }className={`${classname}--letters`} >
              {letter}
              </div>
  ))}  
  {!guess && 
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