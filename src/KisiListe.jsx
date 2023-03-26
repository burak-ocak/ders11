import kisiler from "./veri";
import Kisi from "./Kisi";

function KisiListe(){

    return(

        <div className="row">
            {kisiler.map( (kisi, index) =>{ return <Kisi key={index} veri={kisi}/> } )}
        </div>
    )
}

export default KisiListe;