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
    const url = `https://mhw-db.com/monsters/`;
    fetch(url)
    .then( res => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        const monster = {};
        monster['name'] = data.name;
        monster['species'] = data.species;
        monster['ailments'] = data.ailments;
        monster
        monster['elements'] = data.elements;
        monster['weaknesses'] = data.weaknesses;
        monster['description'] = data.description;
        console.log(monster);
    })
   
};


fetchMonsters();