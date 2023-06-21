
function interfacesRed(){
  const listado = Object.keys(os.networkInterfaces());
  return listado.filter(element => element.includes("Eth"));
}

function getIP(interfaz){
    const dir = os.networkInterfaces()[interfaz];
    const ipV4 = (dir.filter(element=>element.family==('IPv4')));
    return ipV4[0].address;
    //return dir.forEach(element => {if(element.family==('IPv4')){console.log(element.address); return element.address}})
}

const fs = require("fs");
const os =require("os");
const path = require("path");
const nodeHtmlToImage = require("node-html-to-image");
const wallpaper = require("wallpaper");
const cron = require("node-cron");
//const { v4: uuidv4 } = require("uuid");

const imgPath = `./wallpaperDPTO.png`;
// Set wallpaper with a previous image
wallpaper.set(imgPath).then((err) => {
  console.log("Wallpaper set successfully");
});

// Running every minute
cron.schedule("* * * * *", () => {

// Read html file
const html = fs.readFileSync("./index.html", function (err, html) {
  if (err) {
    throw err;
  }
  return html;
});

const image = fs.readFileSync('./LOGOS/LOGOS/F y L/Fondo informática.jpg');
const base64Image = new Buffer.from(image).toString('base64');
const dataURI = 'data:image/jpeg;base64,' + base64Image

prueba=html.toString();
console.log(os.hostname());
prueba= prueba.replace("HOST", os.hostname());
prueba= prueba.replace("fondo.jpg", dataURI);
int = interfacesRed();
red = "";
int.forEach(element => red+=(`${element}: ${getIP(element)} <br>`));

prueba = prueba.replace("NET", red);

  // Create image from html file
  nodeHtmlToImage({
    output: imgPath,
    html: prueba,
    //html: html.toString("utf-8"),
  }).then(() => {
    // Set wallpaper with new image
    wallpaper.set(imgPath).then((err) => {
      console.log("Wallpaper set successfully");
    });
    });
 });  
