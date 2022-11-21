const url = `https://superheroapi.com/api/2613738905429061/search/`
const search = document.getElementsByClassName('card__button')[0]
const inputText = document.getElementById('buscar')
const image = document.getElementsByTagName('img')[0]

let data
async function searchHero(value){
    data = await fetch(`${url}${value}`)
    data = await data.json()
    image.src = data.results[0].image.url;
    console.log(data.results)
}

function getText(){
    searchHero(inputText.value)
}

search.addEventListener('click',getText)
document.addEventListener('keypress',(e)=>{
    if(e.keyCode == 13){
        search.click()
    }
})