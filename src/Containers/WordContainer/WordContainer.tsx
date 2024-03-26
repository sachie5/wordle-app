import WordTiles from "../../Components/WordTiles/WordTiles";
import "./WordContainer.scss";

type WordContainerProps = {
    classname: string;
    blanks: string[];
}


const WordContainer = ({classname, blanks}: WordContainerProps) => {
    
    
    return (
        <section className={`${classname}__container`}>
            <WordTiles classname={`${classname}__word`} blanks={blanks} />
<WordTiles classname={`${classname}__word`} blanks={blanks} />
            <WordTiles classname={`${classname}__word`} blanks={blanks}  />
            <WordTiles classname={`${classname}__word`} blanks={blanks}  />
            <WordTiles classname={`${classname}__word`} blanks={blanks}  /> 
  <WordTiles classname={`${classname}__word`} blanks={blanks}  /> 
        </section>
    )
}

export default WordContainer;