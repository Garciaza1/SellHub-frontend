const Tipo = ()=>{
    let client = false

    const tipo = sessionStorage.getItem('tipo');

    if(tipo === "cliente"){
        client = true;
    }

    return client;

}

export default Tipo;