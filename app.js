function fetchData(){
    fetch('https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json');
    
    
async function getURL() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    if(response) {
        show(data);
}

function show(data) {
    let tab = 
        `<tr>
        <th>fakt.nr</th>
        <th>förvaltning</th>
        <th>konterat</th>
        <th>konto</th>
        <th>leverantör</th>
        <th>org.nr</th>
        </tr>`;

    for (let r of data) {
        tab += `<tr> 
    <td>${r.faktnr} </td>
    <td>${r.forvaltning}</td>
    <td>${r.konterat}</td> 
    <td>${r.konto}</td> 
    <td>${r.leverantor}</td>
    <td>${r.orgnr}</td>                 
    </tr>`;
    }

    document.getElementById("Transactions").innerHTML = tab;
} 