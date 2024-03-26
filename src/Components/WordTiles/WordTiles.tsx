import "./WordTiles.scss";

type WordTilesProps = {
    classname: string;
    blanks: string[];
}

const WordTiles = ({classname, blanks}: WordTilesProps) => {
    return (
            blanks.map((letter, index) => 
            <div className={`${classname}`} key={index}>
                <p className={`${classname}--letters ${classname}--first`}>{letter[0]}</p>
                <p className={`${classname}--letters ${classname}--second`}>{letter[1]}</p>
                <p className={`${classname}--letters ${classname}--third`}>{letter[2]}</p>
                <p className={`${classname}--letters ${classname}--fourth`}>{letter[3]}</p>
                <p className={`${classname}--letters ${classname}--fifth`}>{letter[4]}</p>
           </div>)
         )      
    
};

export default WordTiles;