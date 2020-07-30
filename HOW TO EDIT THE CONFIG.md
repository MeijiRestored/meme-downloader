### How to edit the config.json file

There should be a file called `config.json`  in the folder you downloaded this program, with contents :

`{`

  `"amount": "50",`

  `"delay": "2000"`

`}`

If there no such file, please create it

To edit the configuration, all you need to do is change the numbers quoted.

**Do not edit anything else !**

- `"amount"`  is the amount of memes to download. Please be aware that sometimes the same meme can be downloaded two or even more times if you set a high amount ! Default value is 50.
- `"delay"`  is the time in milliseconds between each meme downloaded. It prevents from being rate limited which can break the program. Default value is 2000 (ms, 1000ms = a second)