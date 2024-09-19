// // https://api.thecatapi.com/v1/images/search?limit=100

async function getApi(usuario) {
    try {
        const request = await fetch(`https://api.github.com/users/${usuario}`)
        const response = await request.json()
        return response
    } catch (error) {
        console.error(error);

    }

}




const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const usuario = document.getElementById('user')
    mostrarResultado(usuario.value)
})


async function mostrarResultado(userSearch) {
    const resultado = document.querySelector('.resultado')
    const user = await getApi(userSearch)
    console.log(user)
    resultado.innerHTML = `
    <h1>${user.name}</h1>
    <img src='${user.avatar_url}'/>
    `
}