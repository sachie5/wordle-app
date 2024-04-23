import "./WordTiles.scss";

type WordTilesProps = {
  classname: string;
  guesses: string[];
  currentGuess: string;
  turn?: number;
  backgroundColor: string;
};

const WordTiles = ({ classname, guesses, currentGuess, turn, backgroundColor }: WordTilesProps) => {
  if(currentGuess){
    let letters = currentGuess.split("");
    return(
      <div className={`${classname}--container`} key={turn}>
      {letters.map((letter, index) => (
        letter && 
        <div key={index} className={`${classname}--letters`} style={{backgroundColor: backgroundColor}}>
            {letter}
        </div>))}      
      {Array(5 - currentGuess.length).map((_, i) => (
         <div key={i} className={`${classname}--letters`} style={{backgroundColor: backgroundColor}}>
     </div>
      ))
    }
    </div>
    )
  } else {
    return(
      guesses.map((guess) => (
        <div className={`${classname}--container`}>
          {guess && guess.split("").map((letter, letterIndex) => (
                <div key={letterIndex }className={`${classname}--letters`} style={{backgroundColor: backgroundColor}}>
                {letter}
                </div>
    ))}  
    {!guess && 
      <><div className={`${classname}--letters` } style={{backgroundColor: "white"}}>
            </div><div className={`${classname}--letters`} style={{backgroundColor: "white"}}>
              </div><div className={`${classname}--letters`} style={{backgroundColor: "white"}}>
              </div><div className={`${classname}--letters`} style={{backgroundColor: "white"}}>
              </div><div className={`${classname}--letters`} style={{backgroundColor: "white"}}>
              </div></>
    }
        </div>
    ))
    )
  }

  }   



export default WordTiles;