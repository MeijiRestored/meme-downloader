# Meme Downloader

##### A simple NodeJS app to download a bunch of memes from reddit without any effort

![Commit activity](https://img.shields.io/github/commit-activity/m/32Vache/meme-downloader)
![Repo size](https://img.shields.io/github/repo-size/32Vache/meme-downloader)
![Open issues](https://img.shields.io/github/issues-raw/32Vache/meme-downloader)
![Downloads](https://img.shields.io/github/downloads/32Vache/meme-downloader/total)
![Version](https://img.shields.io/badge/Version-1.1.0-green)
![License](https://img.shields.io/github/license/32Vache/meme-downloader)

![Meme downloader in action](https://i.imgur.com/wUt8wbX.png)

Prerequisites :
- Latest NodeJS version
- Internet
- Have nodejs commands in your PATH (recommended)
- Have looked in the config file

Before running the program, look out the `config.json`  file. Make sure to check `HOW TO EDIT THE CONFIG.md`  before editing.

How to Run :

1. Open CMD (no admin required)
2. Navigate to the folder where you extracted the files using `cd <path>`
3.  Type in `node index.js`

**Note :** Node packages arent installed by default. Before doing the above 3. , type in `npm i` and wait until the dependencies are downloaded.

4. Wait for the program to end. It downloads memes, placing them in the output folder
5. Open the output folder and enjoy ! You can run the program again if you wish.

Else you can skip steps 1, 2 and 3 by simply running the `start.bat` file. However it might close straight away if an error happens, with no way to check what the error was.

### Known issues

Please do not make a new issue in github for those, as they are already known.

--  The same meme can be sometimes downloaded twice. The chance of this happening increases as the program download more and more memes. There is no fix for that, since the memes are fetched from an external API.
On the meanwhile you can use a program such as https://giorgiotani.github.io/PeaZip/peautils-hash-secure-delete.html or code your own to check file's checksums and delete one of them if they have the same. A separate program to do this will probably be coded soon and will be available on this repository.


Feel free to improve the code and make a pull request on github ! You will be credited

Credit to https://github.com/R3l3ntl3ss/Meme_Api for the API used by this program. It uses MIT license

###### Made by 32Vache. 30/07/2020 - Updated 30/07/2020

![Yay memes!](https://i.imgur.com/Ss9uOSq.png)
