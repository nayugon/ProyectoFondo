function time(ms) {
    return new Promise( (resolve, reject) => {
        setTimeout(resolve,ms);
     });
 }
 
async function kitchen(){
    setTimeout(()=>console.log(`Buenas noches`),10000);
	console.log("En breve tomaremos su pedido");
	await time(3000)
	console.log("Diríjase a la cola para recoger su pedido");
}

kitchen();