# Meme Downloader

##### A simple NodeJS app to download a bunch of memes from reddit without any effort

![Commit activity](https://img.shields.io/github/commit-activity/m/32Vache/meme-downloader)
![Repo size](https://img.shields.io/github/repo-size/32Vache/meme-downloader)
![Open issues](https://img.shields.io/github/issues-raw/32Vache/meme-downloader)
![Downloads](https://img.shields.io/github/downloads/32Vache/meme-downloader/total)
![Version](https://img.shields.io/github/v/release/32Vache/meme-downloader)
![License](https://img.shields.io/github/license/32Vache/meme-downloader)

Prerequisites :
- Latest NodeJS version
- Internet
- Have nodejs commands in your PATH (recommended)

How to Run :

1. Open CMD (no admin required)
2. Navigate to the folder where you extracted the files using `cd <path>`
3.  Type in `node index.js`

**Note :** Node packages arent installed by default. Before doing the above 3. , type in `npm i` and wait until the dependencies are downloaded.

**Note 2 :** The output folder should be extracted with all the other files. However, it is empty and it is possible that it dosent get extracted. Make sure you have a folder called output located in the same folder than index.js. The folder is gonna be created by the program in a future release.
4. Wait for the program to end. It downloads 50 memes, placing them in the output folder
5. Open the output folder and enjoy ! You can run the program again if you wish.

Else you can skip steps 1, 2 and 3 by simply running the `start.bat` file

### Known issues

Please do not make a new issue in github for those, as they are already known.

-- Program will fail if output folder does not exist (`EONENT`)

--  The same meme can be sometimes downloaded twice. The chance of this happening increases as the program download more and more memes. There is no fix for that, apart from waiting a day or two between uses, so new memes surface up on reddit
On the meanwhile you can use a program such as https://giorgiotani.github.io/PeaZip/index.html or code your own to check file's checksums and delete one of them if they have the same. A separate program to do this will probably be coded soon and will be available on this repository.

-- Users cant specify an amount of memes to download. This will be added as a config file in a future release.


Feel free to improve the code and make a pull request on github ! You will be credited

Credit to https://github.com/R3l3ntl3ss/Meme_Api for the API used by this program. It uses MIT license

###### Made by 32Vache. 30/07/2020
