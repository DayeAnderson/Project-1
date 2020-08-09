//chached element refs
const bruteWy = document.getElementById("brute")
const flyWy = document.getElementById('fly')
const fangWy = document.getElementById('fang')
const birdWy = document.getElementById('bird')
const piscineWy = document.getElementById('piscine')
const elderWy = document.getElementById('elder')
const dex = document.getElementById('monsterDex')
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
        console.log(monster)
    });
    
};



fetchMonsters();