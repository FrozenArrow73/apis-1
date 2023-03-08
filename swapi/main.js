

let button = document.querySelector("button")
function clicked () {
    console.log("button clicked")
    axios.get("https://swapi.dev/api/planets/?search=alderaan").then((result)=>{
        result.data.results[0].residents.forEach((element)=> {
            axios.get(element).then((result)=>{
                console.log(result.data.name)
                h2 = document.createElement("h2")
                h2.textContent = result.data.name
                document.body.appendChild(h2)
            })
        })
    })
}
button.addEventListener("click", clicked)