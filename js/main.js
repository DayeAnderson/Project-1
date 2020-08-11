//chached element refs
const bruteWy = document.getElementById("brute")
const flyWy = document.getElementById('fly')
const fangWy = document.getElementById('fang')
const birdWy = document.getElementById('bird')
const piscineWy = document.getElementById('piscine')
const elderWy = document.getElementById('elder')
const monsterDex = document.getElementById('monsterDex')

//vars

//event listeners




const fetchMonsters = async () => {
    
    const url = `https://mhw-db.com/monsters`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    let monster = data.map( (result, index) => ({
    ...result.url,
    name: result.name,
    species: result.species,
    type: result.type,
    id: index + 1,
    }));
    displayMonster(monster);
};

const displayMonster = (monster) => {
    noSmall = monster.filter(monster => monster.type === "large" && monster.species !== "elder dragon")
    elder = monster.filter(monster => monster.species === "elder dragon");
    sortedMonst = noSmall.concat(elder);
    console.log(noSmall)
    console.log(sortedMonst)
    const monsterString = sortedMonst.map(monst => `
    <li class = "card" onclick = "selectMonster(${monst.id})">
        <p class = "card-subtitle">Species: ${monst.species}</p>
        <h2 class = "card-title">${monst.name}</h2>
    </li>`
    ).join('');
    monsterDex.innerHTML = monsterString;
}; 

const selectMonster = (id) => {
    console.log(id);
}

fetchMonsters();