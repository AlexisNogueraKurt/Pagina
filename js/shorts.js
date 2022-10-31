document.addEventListener('DOMContentLoaded', () => {

    const url = 'http://localhost:3000/api/shorts'

    axios.get(url)
        .then(respuesta => {
            shorts = respuesta.data.shorts
            console.log(respuesta.data.shorts)
            let divShorts = document.getElementById('shorts')
            let tarjetasShorts = '<div class="columns">'

            for (let i = 0; i < shorts.length; i++) {
                tarjetasShorts += `
                    <div class="column is-one-fifth-desktop is-full-mobile">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                <a href="Shorts/${shorts[i].nombre.replace(/ /g, '_')}.html">${shorts[i].nombre}</a>&nbsp;&nbsp;&nbsp;
                                
                                    ${shorts[i].fecha}&nbsp;&nbsp;&nbsp;
                                    ${shorts[i].marca}
                                </p>
                            </header>
                            <div class="card-content">
                            <a href="Shorts/${shorts[i].nombre.replace(/ /g, '_')}.html"><img src="${shorts[i].imagen}" alt="Placeholder image">
                            </div>
                            <header class="card-header">
                                <p class="card-header-title -2 are-medium">
                                    ${shorts[i].precio}
                                </p>
                            </header>  
                        </div>
                    </div>
                `
                if ((i + 1) % 5 == 0 && i > 0) {
                    tarjetasShorts += `
                    </div> 
                    <div class="columns">
                    `
                }
            }

            console.log(tarjetasShorts)

            divShorts.innerHTML = tarjetasShorts

        })
})
