fetch('https://pokeapi.co/api/v2/pokemon').then(
    function (response) {
        if (response.status != 200) {
            console.log('oppp' + response.status);
            return;
        }
        response.json().then(function (data) {
            const pokemons = data.results;
            pokemons.forEach(pokemon => {
                document.getElementById('list').insertAdjacentHTML('beforeend',
                    `<li onclick='detail("${pokemon.url}")'>${pokemon.name}</li>`
                );
            });
        });
    }
)
    .catch(function (err) {
        console.log(err);
    });

function detail(url) {
    fetch(url).then(function (response){
        response.json().then(function (pokemon) {
            document.getElementById('detail').innerHTML = '';
            document.getElementById('detail').insertAdjacentHTML('beforeend',
                `<h3>${pokemon.name}</h3>
                <img src='${pokemon.sprites.front_default}'/>
                <h5>Jurus :${pokemon.moves[0].move.name}</h5>
                <h5>Tinggi :${pokemon.height}</h5>
                <h5>Berat :${pokemon.weight}</h5>
                `
            )
        });
    })
}