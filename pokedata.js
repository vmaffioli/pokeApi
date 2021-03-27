

function inputPokemon() {
    return readline.question('Digite o nome de um pokemon: ').toLowerCase()
}

async function returnJSON(pokemon) {
    return response
}

async function getPokeData(pokemon) {

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const api = await response
    const data = api.data

    document.getElementById('p001').innerHTML = data.name
    document.getElementById('p002').innerHTML = data.types

    

    

    const name = document.getElementById('stats').textContent



    console.log(name)

}

getPokeData('pikachu')

