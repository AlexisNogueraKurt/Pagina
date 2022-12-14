document.addEventListener('DOMContentLoaded', () => {

    const url = 'https://api-sportapp-production.up.railway.app/api/camisetas'

    axios.get(url)
        .then(respuesta => {
            camisetas = respuesta.data.camisetas
            console.log(respuesta.data.camisetas)
            let divCamisetas = document.getElementById('camisetas')
            let tarjetasCamisetas = '<div class="columns">'

            for (let i = 0; i < camisetas.length; i++) {
                tarjetasCamisetas += `
                    <div class="column is-one-fifth-desktop">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                <a href="Camisetas/${camisetas[i].nombre.replace(/ /g, '_')}.html">${camisetas[i].nombre}</a>&nbsp;&nbsp;
                                    ${camisetas[i].fecha}&nbsp;
                                    ${camisetas[i].categoria}
                                </p>
                            </header>
                            <div class="card-content">
                            <a href="Camisetas/${camisetas[i].nombre.replace(/ /g, '_')}.html"><img src="${camisetas[i].imagen}" alt="Placeholder image">
                            </div>
                            <header class="card-header">
                                <p class="card-header-title -2 are-medium">
                                $ ${Math.floor(Math.random() * 9000 + 5000)} ARS
                                </p>
                            </header>  
                        </div>
                    </div>
                `
                if ((i + 1) % 5 == 0 && i > 0) {
                    tarjetasCamisetas += `
                    </div> 
                    <div class="columns">
                    `
                }
            }

            console.log(tarjetasCamisetas)

            divCamisetas.innerHTML = tarjetasCamisetas

        })
})
