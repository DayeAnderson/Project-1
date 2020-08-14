//chached element refs
const monsterDex = document.getElementById('monsterDex')
const poppy = document.getElementsByClassName('popup')
const infoAil = document.getElementById('ailInfo')
//functions
//fetch frst api
const fetchMonsters = async () => {
    const url = `https://mhw-db.com/monsters/`;
    const res = await fetch(url);
    const data = await res.json();
    const monster = data.map( (result, index) => ({
        ...result.url,
        name: result.name,
        species: result.species,
        type: result.type,
        elements: result.elements.map((elements) => elements).join(', '),
        weaknesses: result.weaknesses.map((weaknesses) => weaknesses.element + ": " + weaknesses.stars).join(', '),
        id: index + 1
    }));
    console.log(monster)
    displayMonster(monster);
};
//fetch second api
const fetchAilments = async () => {
    const url = `https://mhw-db.com/ailments/`;
    const res = await fetch(url);
    const dataA = await res.json();
    console.log(dataA)
    const ailments = dataA.map((result, index) => ({ 
        ...result.url,
        blight: result.name,
        info: result.description,
        id: index
    }));
    console.log(ailments);
    displayAilments(ailments)
    };
    //create function to display ailments from second api
const displayAilments = (ailments) => {
    const ailString = ailments.map(ail => `
    <p id = "ails"><img id = "blizzy" src = "images/bl${ail.id}.png">${ail.blight}: ${ail.info}</p>`
    ).join('');
    infoAil.innerHTML = ailString
};
 //display monster onto page
const displayMonster = (monster) => {
    noSmall = monster.filter(monster => monster.type === "large") 
    console.log(noSmall)
    const monsterString = noSmall.map(monst  => `
    <li class = "card" onclick = "selectMonster(${monst.id})">
        <img class = "icon" src = "images/icon${monst.id}.png"/>
        <h2 class = "card-title">${monst.name}</h2>
        <p class = "card-subtitle">${monst.species}</p>
    </li>`
    ).join('');
    monsterDex.innerHTML = monsterString
};
//pull individual monster info from page
const selectMonster = async (id) => {
    if(id >= 46) {
        id = id + 2;
    } 
    const url = `https://mhw-db.com/monsters/${id}`;
    const res = await fetch(url);
    const monst = await res.json();
    displayPopUp(monst);
};
//create popup to display info for individual monster
const displayPopUp = (monst) => {

    if(monst.id >= 46) {
        monst.id = monst.id - 2;
    } 
    if (monst.species !== 'elder dragon') {
        
    }
    const htmlString = `
    <div class = "popup">
    <div>
        <button id = "closeBtn"
        onclick = "closePopup()">X</
        button>
        </div>
        <audio id = "audio" src = '/musica/theme${monst.id}.wav'></audio>
        <div class = "cards">
            <h2 class = "card-title">${monst.name}</h2>
            <img id = "mon" src = "images/mon${monst.id}.png"/>
            <input id = "butt" type = "button" value = "Play Theme" onclick = "play()">
            <p id = "ele">Element: ${monst.elements.join(', ')}</p>
            <p id = "desc">Description: ${monst.description}</p>
            <p id = "weak">Weaknesses: ${monst.weaknesses.map((weaknesses) => weaknesses.element + ": " + weaknesses.stars + "🌟").join(', ')}</p>
        </div>
    </div>`;
    monsterDex.innerHTML = htmlString + monsterDex.innerHTML 
    console.log(htmlString)
};
//create close button for popup
const closePopup = () => {
    const popup = document.querySelector('.popup')
    popup.parentElement.removeChild(popup);
};
//create function to play audio
function play() {
    let audio = document.getElementById("audio");
    audio.play();
};
fetchMonsters();

fetchAilments();