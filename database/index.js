async function obtenerInfoWeb(opcion) {
    try {
        const response = await fetch('database/infoWeb.json');
        if (!response.ok) {
            throw new Error(`Error al encontrar el archivo json: ${response.status}`);
        }
        const json = await response.json();
        
        switch (opcion) {
            case 'infoPrincipal':
                var infoWeb = json.infoPrincipal;
                console.log(infoWeb);
                break;
                case 'productos':
                    var infoWeb = json.productos;
                    console.log(infoWeb);
                    break;
        }

        // console.log(json);
    } catch (error) {
        console.error('Se ha producido un error:', error);
    }
}

var opcion = 'infoPrincipal';
obtenerInfoWeb(opcion);

opcion = 'productos';
obtenerInfoWeb(opcion);

