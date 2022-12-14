document.addEventListener('DOMContentLoaded', () => {

    const url = 'https://api-sportapp-production.up.railway.app/api/mochilas'

    axios.get(url)
        .then(respuesta => {
            mochilas = respuesta.data.mochilas
            console.log(respuesta.data.mochilas)
            let divMochilas = document.getElementById('mochilas')
            let tarjetasMochilas = '<div class="columns">'

            for (let i = 0; i < mochilas.length; i++) {
                tarjetasMochilas += `
                    <div class="column is-one-fifth-desktop is-full-mobile">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                <a href="Mochilas/${mochilas[i].nombre.replace(/ /g, '_')}.html">${mochilas[i].nombre}</a>&nbsp;&nbsp;&nbsp;
                                    ${mochilas[i].marca}
                                </p>
                            </header>
                            <div class="card-content">
                            <a href="Mochilas/${mochilas[i].nombre.replace(/ /g, '_')}.html"><img src="${mochilas[i].imagen}" alt="Placeholder image">
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
                    tarjetasMochilas += `
                    </div> 
                    <div class="columns">
                    `
                }
            }

            console.log(tarjetasMochilas)

            divMochilas.innerHTML = tarjetasMochilas

        })
})
