var id;
var totalPokemons = 893

function inputPokemon() {
    return readline.question('Digite o nome de um pokemon: ').toLowerCase()
}

async function returnJSON(pokemon) {
    return response
}


async function getPokeData(pokemon) {

    var response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    var api = await response
    var data = api.data

    id = data.id

    function countTypes(types) {
        var result
        for (var i = 0; i < types.length; i++) {
            if (i > 0) {
                result = result + " / " + types[i].type.name
            } else {
                result = types[i].type.name
            }
        }
        return result
    }

    function countAbilities(abilities) {
        var result
        for (var i = 0; i < abilities.length; i++) {
            if (i > 0) {
                result = result + " / " + abilities[i].ability.name
            } else {
                result = abilities[i].ability.name
            }
        }
        return result
    }


    var newContent = (
        "<strong>Name:</strong> " + data.name + "<br />" +
        "<strong>ID:</strong> " + data.id + "<br />" +
        "<strong>Type:</strong> " + countTypes(data.types) + "<br />" +
        "<strong>Ability:</strong> " + countAbilities(data.abilities) + "<br /><br />"
        // "<strong>The duck Pokemon</strong><br />" +
        // "Uses mysterious powers to perform various attacks."
    )

    document.getElementById('stats').innerHTML = newContent

    document.getElementById('img001').src = data.sprites.front_default

    response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    api = await response
    data = api.data

    document.getElementById('stats').innerHTML = (
        newContent +
        data.flavor_text_entries[0].flavor_text
    )

    

}


function nextPokemon() {
    if (id < totalPokemons) {
        id++
    }
    getPokeData(id)
}

function prevPokemon() {
    if (id > 1) {
        id--
    }
    getPokeData(id)
}

function prev10Pokemon() {
    if (id > 10) {
        id = id - 10
    } 
    getPokeData(id)
}

function next10Pokemon() {
    if (id < totalPokemons - 10) {
        id = id + 10
    } 
    getPokeData(id)
}


