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




const fetchMonsters = () => {

    const promises = []
    for(let i = 17; i <= 60; i++){
        if(i === 45) {
            i = i + 3
        }
        const url = `https://mhw-db.com/monsters/${i}`;
        promises.push(fetch(url).then( (res) => res.json()));
        
    }

    Promise.all(promises).then(results => {
        const monster = results.map((data) => ({
            name: data.name,
            species: data.species,
            description: data.description,
            elements: data.elements.map((elements) => elements).join(', '),
            weaknesses: data.weaknesses.map((weaknesses) => weaknesses.element + ": " + weaknesses.stars).join(', '),
        }));
        displayMonster(monster)
    });
    
};

const displayMonster = (monster) => {
    console.log(monster);
    newMonst = monster.sort((a, b, c) => (a.species > b.species) ? 1 : -1)
   
    console.log(newMonst)
    const monsterString = monster.map(monst => `
    <li class = "card">
        <h2 class = "card-title">${monst.name}</h2>
        <p class = "card-subtitle">Species: ${monst.species}</p>
    </li>`
    ).join('');
    monsterDex.innerHTML = monsterString;
}; 

fetchMonsters();