import React, {useState} from "react";
function EkMalzemeler() {
    const [secilenMalzeme, setSecilenMalzeme] = useState([]);

    const malzemeler = ["Pepperoni","Sosis","Kanada Jambonu","Tavuk Izgara","Sogan","Domates","Misir","Sucuk","Jalepeno","Sarmisak","Biber","Kabak","Ananas"];

    const handleMalzemeChange = (event) => {
        const malzeme = event.target.value;
        setSecilenMalzeme((secilenler)=> {
            secilenler.includes
        })
    }
}