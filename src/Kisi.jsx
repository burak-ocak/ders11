
function Kisi({veri}){

    let dogumtarihi = new Date(veri.dob.date).getFullYear();

    return(
        <div className="col-md-3">
            <p>{veri.name.first} {veri.name.last}</p>
            <p>Doğum Tarihi: {dogumtarihi}</p>
            <img className="img" src={veri.picture.medium} alt="profil_fotografi"/>
        </div>
    )
}

export default Kisi;