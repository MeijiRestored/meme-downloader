const fetch = require("node-fetch")
const fs = require("fs");
const request = require("request");

console.log("\nMeme downloader started !\n ");

console.log("Reading the config file...")
let rawdata = fs.readFileSync('config.json');
let config = JSON.parse(rawdata);
console.log(`Config file succesfully loaded !\nAmount of memes to download : ${config["amount"]}\nDelay between downloads : ${config["delay"]}ms\n `);

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

fs.mkdirSync("output", { recursive: true })

const memeDownloader = async _ => {
    for (let i = 0; i <= config["amount"]; i++) {
        console.log(`Fetching meme ${i} / ${config["amount"]} - ${Math.round(((i / config["amount"]) * 100 + Number.EPSILON) * 100) / 100}%`);

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
        else (await sleep(config["delay"]));
    }
}

memeDownloader();