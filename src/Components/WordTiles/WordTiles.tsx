import "./WordTiles.scss";

type WordTilesProps = {
  classname: string;
  guesses: string[];
  currentGuess: string;
};

const WordTiles = ({ classname, guesses, currentGuess }: WordTilesProps) => {
  const current = currentGuess.split("");
  if(current.length > 0) {
    return (
    <div className={`${classname}--container`}>
        {guesses.map((guess, i) => (
          <div className={`${classname}--letters`} tabIndex={0}>
          <p>{guess}</p></div>
        ))
        }
         </div>
  );
 }

return (
    <div className={`${classname}--container`}>
        <div className={`${classname}--letters`} tabIndex={0}>
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