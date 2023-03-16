const fs = require("fs");
const os =require("os");
const path = require("path");
const nodeHtmlToImage = require("node-html-to-image");
//const wallpaper = require("wallpaper");
//const cron = require("node-cron");
//const { v4: uuidv4 } = require("uuid");

// Read html file
const html = fs.readFileSync("./index.html", function (err, html) {
  if (err) {
    throw err;
  }
  return html;
});
prueba=html.toString();
console.log(os.hostname());
prueba= prueba.replace("HOSTNAME001", os.hostname());
console.log(prueba);

  const imgPath = `./wallpaperDPTO.png`;

  // Create image from html file
  nodeHtmlToImage({
    output: imgPath,
    html: prueba,
    //html: html.toString("utf-8"),
  }).then(() => {
    console.log("The image was created successfully!");

    /*
    //Remove last wallpaper image file if exists
    wallpaper.get().then((oldFile) => {
      if (oldFile.includes("wallpaper")) {
        fs.unlink(oldFile, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log("Last image successfully removed");
        });
      }
      */
    });

    /*
    // Set wallpaper with new image
    wallpaper.set(imgPath).then((err) => {
      console.log("Wallpaper set successfully");
    });
    */


