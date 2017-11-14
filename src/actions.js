import store from './store';

/* function getJSON(url){
    return new Promise(function(resolve, error){
        var ajax = new XMLHttpRequest();
        ajax.open("GET", url)
        ajax.send()
        ajax.onreadystatechange = function {
            if(ajax.readyState==4){
                var responde = JSON.parse(ajax.responseText)
                resolve(responde)
            }
        }
    })
}

getJSON("data/earth-like-results.json")
.then(function(response) {
    return getJSON(response.result[0])
})
.then(function(responsePlanet){
    console.log(responsePlanet)
} */


async function search(direction) {
    const url = direction
    fetch(url)
        .then(response => response.json())
        .then(response => {
            let newList = [...store.getState().mydata];
            let getPlanets = newList.concat({
                img: response.pl_img,
                name: response.pl_name,
            })
            store.setState({
                mydata: getPlanets
            });
        })

}

export async function planets() {
    const response = await fetch("data/earth-like-results.json")
    const json = await response.json();
         json.results.map(planet => {
                return (search(planet));
            })
}