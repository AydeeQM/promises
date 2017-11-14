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
        .then(res => res.json())
        .then(res => {
            let newList = [...store.getState().mydata];
            let getPlanets = newList.concat({
                name: res.pl_name,
            })
            store.setState({
                mydata: getPlanets
            });
        })

}

export async function planets() {
    const url = "data/earth-like-results.json";
    fetch(url)
        .then(res => res.json())
        .then(res => {
            res.results.map(planet => {
                return (search(planet));
            })
        })
}