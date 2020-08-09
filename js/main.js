//chached element refs
const bruteWy = document.getElementById("brute")
const flyWy = document.getElementById('fly')
const fangWy = document.getElementById('fang')
const birdWy = document.getElementById('bird')
const piscineWy = document.getElementById('piscine')
const elderWy = document.getElementById('elder')

//vars

//event listeners




const fetchMonsters = () => {
    for(let i = 17; i <= 60; i++){
    const url = `https://mhw-db.com/monsters/${i}`;
    fetch(url)
    .then( res => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        const monster = {
            name: data.name,
            species: data.species,
            elements: data.elements.map((elements) => elements).join(', '),
            weaknesses: data.weaknesses.map((weaknesses) => weaknesses.element + ": " + weaknesses.stars).join(', '),
            description: data.description
        };
        console.log(monster);
    })
    }
};


fetchMonsters();