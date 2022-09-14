const url = 'https://jsonplaceholder.typicode.com/users'
const url2 = 'https://jsonplaceholder.typicode.com/users'


fetch(url).then((respuesta) => respuesta.json()
)
.then((resultado) => {
    resultado.forEach(comment => {
        console.log(comment)        
    });
})

const consultarAPI = () => {
    fetch(url)
        .then(response => response.json())
        .then(resultado => {
            resultado.forEach(comment => (
                console.log(comment)
            ))
        })
}

consultarAPI


//async await

const consultarAPI2 = async () => {
    const response = await fetch(url)
    const resultado = await response.json()
    resultado.forEach(comment => {
        console.log(comment)
    })
}

const consultarAPI3 = async () => {
    const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)])
    
    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()

    console.log(resultado)
    console.log(resultado2)

}