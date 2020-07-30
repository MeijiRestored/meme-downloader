const fetch = require("node-fetch")
const fs = require("fs");
const request = require("request");

console.log("Meme downloader started !");
function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}   
var i = 0;

const forLoop = async _ => {
    for (; i <= 50; i++) {
        console.log(`Fetching meme ${i} / 50 - ${Math.round(((i / 50) * 100 + Number.EPSILON) * 100) / 100}%`);

         const { url } = await fetch("https://meme-api.herokuapp.com/gimme").then(
             response => response.json()
         );

         const download = (url, path, callback) => {
            request.head(url, (err, res, body) => {
             request(url)
                .pipe(fs.createWriteStream(path));
            });
        };
        const path = `./output/${Date.now()}.png`;
        download(url, path, () => {
            console.log(`Meme ${i} downloaded succesfully.`);
        });
        if (i == 50) 
        return (console.log("Finished downloading. Check the output folder."))
        else (await sleep(1000));
    }
}

forLoop();