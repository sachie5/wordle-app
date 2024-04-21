import "./WordTiles.scss";

type WordTilesProps = {
  classname: string;
  guesses: string[];
  currentGuess: string;
};

const WordTiles = ({ classname, guesses, currentGuess }: WordTilesProps) => {
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