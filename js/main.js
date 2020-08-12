//chached element refs
const bruteWy = document.getElementById("brute")
const flyWy = document.getElementById('fly')
const fangWy = document.getElementById('fang')
const birdWy = document.getElementById('bird')
const piscineWy = document.getElementById('piscine')
const elderWy = document.getElementById('elder')
const monsterDex = document.getElementById('monsterDex')
const poppy = document.getElementsByClassName('popup')
//vars

//event listeners




const fetchMonsters = async () => {
    
    const url = `https://mhw-db.com/monsters/`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    const monster = data.map( (result, index) => ({
    ...result.url,
    name: result.name,
    species: result.species,
    type: result.type,
    elements: result.elements.map((elements) => elements).join(', '),
    weaknesses: result.weaknesses.map((weaknesses) => weaknesses.element + ": " + weaknesses.stars).join(', '),
    id: index + 1 
    }));
    console.log(data)
    displayMonster(monster);
};

const displayMonster = (monster) => {
    
    noSmall = monster.filter(monster => monster.type === "large") 
    
    console.log(noSmall)
    const monsterString = noSmall.map(monst => `
    <li class = "card" onclick = "selectMonster(${monst.id})">
        <h2 class = "card-title">${monst.name}</h2>
        <p class = "card-subtitle">${monst.species}</p>
    </li>`
    ).join('');
    monsterDex.innerHTML = monsterString;
};

const selectMonster = async (id) => {
    if(id >= 46) {
        id = id + 2;
    } 
    const url = `https://mhw-db.com/monsters/${id}`;
    const res = await fetch(url);
    const monst = await res.json();
    displayPopUp(monst);

};
const displayPopUp = (monst) => {
        const htmlString = `
        <div class = "popup">
        <div>
            <button id = "closeBtn"
            onclick = "closePopup()">X</
            button>
            </div>
            <div class = "cards">
                <h2 class = "card-title">${monst.name}</h2>
                <img class = "card-image" src = "images/azure.png"
                <p id = "ele">Element: ${monst.elements}<p>
                <p id = "desc">Description: ${monst.description}<p>
                <p id = "weak">Weaknesses: ${monst.weaknesses.map((weaknesses) => weaknesses.element + ": " + weaknesses.stars).join(', ')}<p>
            </div>
        </div>
        `;
         monsterDex.innerHTML = htmlString + monsterDex.innerHTML
        console.log(htmlString)
};

const closePopup = () => {
    const popup = document.querySelector('.popup')
    popup.parentElement.removeChild(popup);
};

fetchMonsters();