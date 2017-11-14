import store from './store';

export async function search(direction) {
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