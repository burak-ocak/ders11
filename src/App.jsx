import { useState } from "react";

function App() {

    const [inputlar, inputlariGuncelle] = useState({});

    function formGuncelle(olay){
        const name = olay.target.name;
        const value = olay.target.value;
        inputlariGuncelle(oncekiObje => ({...oncekiObje, [name]: value}))
    }

    function formGonder(olay){
        olay.preventDefault()
        if(inputlar.yas < 18){
            alert("Yaşınız uygun değildir.")
        }else{
            olay.targer.submit();
        }
    }

    return (
        <form onSubmit={formGonder}>

            <label>İsminizi giriniz:
                <input
                    type="text"
                    name="ad"
                    value={inputlar.ad || ""}
                    onChange={formGuncelle}
                />
            </label>

            <label>Yaşınızı Giriniz:
                <input
                    type="number"
                    name="yas"
                    value={inputlar.yas || ""}
                    onChange={formGuncelle}
                />
            </label>

            <label>Telefon:
                <input
                    type="tex"
                    name="tel"
                    value={inputlar.tel || ""}
                    onChange={formGuncelle}
                />
            </label>

            <input type="submit" />

        </form>
    )
}

export default App;