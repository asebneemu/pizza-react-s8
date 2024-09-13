import React, {useState} from "react";

export default function Secimler() {
    const [boyut,setBoyut] = useState("");
    const [hamur, setHamur] = useState("");

    const handleBoyutChange = (event) => {
        setBoyut(event.target.value);
    }
    const handleHamurChange = (event) => {
        setHamur(event.target.value);
    }

    return (
        <>
            <h2>Boyut Seç</h2>
            <label htmlFor="">
                <input type="radio" name="boyut" value="Kucuk" onChange={handleBoyutChange} />
                Küçük
            </label>
            <label htmlFor="">
                <input type="radio" name="boyut" value="Orta" onChange={handleBoyutChange} />
                Orta
            </label>
            <label htmlFor="">
                <input type="radio" name="boyut" value="Buyuk" onChange={handleBoyutChange} />
                Buyuk
            </label>
            <h2>Hamur Seç</h2>
            <select name="" id="" value={hamur} onChange={handleHamurChange}>
                <option value="">Hamur Kalınlığı</option>
                <option value="Ince">İnce</option>
                <option value="Kalın">Kalın</option>
            </select>
        
        </>
    )
}

