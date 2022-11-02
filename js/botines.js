document.addEventListener('DOMContentLoaded', () => {

    const url = 'https://api-sportapp-production.up.railway.app/api/botines'

    axios.get(url)
        .then(respuesta => {
            botines = respuesta.data.botines
            console.log(respuesta.data.botines)
            let divBotines = document.getElementById('botines')
            let tarjetasBotines = '<div class="columns">'

            for (let i = 0; i < botines.length; i++) {
                tarjetasBotines += `
                    <div class="column is-one-fifth-desktop is-full-mobile">
                        <div class="card card-color red">
                            <header class="card-header">
                                <p class="card-header-title">
                                <a href="Botines/${botines[i].nombre.replace(/ /g, '_')}.html">${botines[i].nombre}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    ${botines[i].fecha}
                                </p>
                            </header>
                            <div class="card-content">
                            <a href="Botines/${botines[i].nombre.replace(/ /g, '_')}.html"><img src="${botines[i].imagen}" alt="Placeholder image">
                            </div>
                            <header class="card-header">
                                <p class="card-header-title -2 are-medium">
                                $ ${Math.floor(Math.random() * 1000 + 3000)} ARS
                                </p>
                            </header>  
                        </div>
                    </div>
                `
                if ((i + 1) % 5 == 0 && i > 0) {
                    tarjetasBotines += `
                    </div> 
                    <div class="columns">
                    `
                }
            }

            console.log(tarjetasBotines)

            divBotines.innerHTML = tarjetasBotines

        })
})
