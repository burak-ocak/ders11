import kisiler from "./veri";
import Kisi from "./Kisi";

function KisiListe(){
    //array içerisinden eleman bulur. Belirlediğimiz koşula sahip olan ilk elemenı direkt olarak ele alır. Diğerlerine bakmaz.
    //let arananKisi = kisiler.find( eleman=>eleman.name.first === "Bella"  )

    let kadinVarmi = kisiler.some( eleman => eleman.gender === "female" );
    //geriye ya true ya da false döndürür.

    let dogumKosulu = kisiler.every( eleman => { 
                let yil = new Date(eleman.dob.date).getFullYear();
                return yil > 1950;
            });
    //bu da true ya false gönderir. Anlamı array içerisindeki elemanların hepsi bizim sunduğumuz koşula uyuyor mu diye kontrol eder.

    let kadinlar = kisiler.filter( eleman => eleman.gender === "female" );
    let erkekler = kisiler.filter( eleman => eleman.gender === "male" );
    

    return(

        <div className="row">
            {dogumKosulu ? <p>Tüm kişiler 1950'den sonra doğmuş.</p> : <p>En az 1 kişi 1950'den önce doğmuş.</p>}
            {kadinVarmi ? <p>En az 1 kadın üye mevcut</p> : <p>Hiç kadın üye yok.</p>}
            {kadinlar.map( (kisi, index) =>{ return <Kisi key={index} veri={kisi}/> } )}
            {erkekler.map( (kisi, index) =>{ return <Kisi key={index} veri={kisi}/> } )}
        </div>
    )
}

export default KisiListe;