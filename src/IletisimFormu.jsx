import { useState } from "react";

function IletisimFormu() {
    const [ad, adGuncelle] = useState("");
    const [soyad, soyadGuncelle] = useState("");
    const [dogum, dogumGuncelle] = useState("");
    const [tel, telGuncelle] = useState("");

    function adDegistir(olay) {
        adGuncelle( olay.target.value )
    };
    
    function soyadDegistir(olay) {
        soyadGuncelle( olay.target.value )
    };
    
    function dogumDegistir(olay) {
        dogumGuncelle( olay.target.value )
    };
    
    function telDegistir(olay) {
        telGuncelle( olay.target.value )
    };

    function formGonder(olay){
        olay.preventDefault();
        if(dogum.length !== 4){
            alert("Doğum tarihi 4 karakter olmalıdır." )
        }else{
            olay.target.submit();
        }


        
    }

    return (
        <>
            <form onSubmit={formGonder}>
                <input value={ad} onChange={adDegistir} type="text" placeholder="Adınız" />
                <input value={soyad} onChange={soyadDegistir}  type="text" placeholder="Soyadınız" />
                <input value={dogum} onChange={dogumDegistir}  type="text" placeholder="Doğum Yılı" />
                <input value={tel} onChange={telDegistir}  type="text" placeholder="Telefon" />
                <button type="submit">Gönder</button>
            </form>

            <div>
                <p>Ad: {ad}</p>
                <p>Soyad: {soyad}</p>
                <p>Doğum Tarihi: {dogum}</p>
                <p>Telefon: {tel}</p>
            </div>
        </>
    )
}

export default IletisimFormu;