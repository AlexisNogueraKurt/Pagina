document.addEventListener('DOMContentLoaded', () => {

    const url = 'http://localhost:3000/api/gorras'

    axios.get(url)
        .then(respuesta => {
            gorras = respuesta.data.gorras
            console.log(respuesta.data.gorras)
            let divGorras = document.getElementById('gorras')
            let tarjetasGorras = '<div class="columns">'

            for (let i = 0; i < gorras.length; i++) {
                tarjetasGorras += `
                    <div class="column is-one-fifth-desktop is-full-mobile">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                <a href="Gorras/${gorras[i].nombre.replace(/ /g, '_')}.html">${gorras[i].nombre}</a>
                                
                                    ${gorras[i].fecha}
                                    ${gorras[i].marca}
                                </p>
                            </header>
                            <div class="card-content">
                            <a href="Gorras/${gorras[i].nombre.replace(/ /g, '_')}.html"><img src="${gorras[i].imagen}" alt="Placeholder image">
                            </div>
                            <header class="card-header">
                                <p class="card-header-title -2 are-medium">
                                    ${gorras[i].precio}
                                </p>
                            </header>  
                        </div>
                    </div>
                `
                if ((i + 1) % 5 == 0 && i > 0) {
                    tarjetasGorras += `
                    </div> 
                    <div class="columns">
                    `
                }
            }

            console.log(tarjetasGorras)

            divGorras.innerHTML = tarjetasGorras

        })
})
