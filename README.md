# Hunam
This is Hun&a's Music player by Web!

# How to use
## Pre requirement
We need to install the `libav` for converting mp3 from webm. (on Mac OSX)

```
brew install libav
```

## clone from github

```
$ git clone git@github.com:seunghun-kim/Hunam.git
```

## crate the configure file
- Create the conf directory on root of project.

```
$ cd Hunam
$ mkdir conf
```

- Create the `setting.json` on conf directory

```json
{
  "admin":"Email address of yours",
  "key":"Your API key for YouTube Data API"
}
```

  - If you don't have API key then please refer to [YouTube Data API](https://developers.google.com/youtube/v3/getting-started)

## Start the application
```
$ npm start
```

# GUI
The GUI was referenced in https://codepen.io/markhillard/pen/Hjcwu. Thank you [mh](http://www.markhillard.com/).

# License
- [MIT](./LICENSE)
