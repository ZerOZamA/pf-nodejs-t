module.exports=(rec , res , next) => {

    return res.status('404').json({code:404, mensage : "pagina no encontrada se lo que intentas ¬¬ "});

}