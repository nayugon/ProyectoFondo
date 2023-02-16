function comprueba(test){
    return new Promise(function(resolve, reject) {
        if (test==0){
            reject(test);
        }else {
            resolve(0);
        } 
    });
}

comprueba(80).then(res=>console.log(`${res}: Este era el número esperado`))
.catch(res=>console.log(`${res}: No esperaba esta respuesta`))

comprueba(0).then(res=>console.log(`${res}: No esperaba esta respuesta`))
.catch(res=>console.log(`${res}: Este era el número esperado`))