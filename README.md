# The Slide Guy
#### *Helping you slide into worship*
The Slide Guy is a web app that aims to facilitate the display of lyrics for Christian worship services. However, the app can easily be adapted to display lyrics for a variety of concert gatherings. 

This repository holds the front-end and Firebase code. As of now, that's all that's needed to run the web app. We might also expand to include an Electron app as well as mobile apps. 

# Features
 - Library of music lyrics and other metadata
 - Advanced presenter controls for the **actual** slide guy a.k.a. *The Slide Guy View*
 - Real-time presentation so that multiple devices can tune in
 - Set creation area to customize slides and...create sets

# Technology
 - NodeJS
 - Firebase
 - WebRTC
 - (Front-end framework TBD)

 Hosting TBD. Choices are Github, Gitlab, and Firebase.

# Core Team
 - Will D. (@nerdondon)
 - Jason (@jasonszhao)

# Contributing
Any form of contribution is welcome!

See [contributing.md](contributing.md).

### Setup

Install [NodeJS](nodejs.org).

You must then ensure that the following packages are installed **globally**:

 - bower
 - karma-cli
 - gulp
 - firebase-tools


 ```
 npm install -g bower karma-cli gulp firebase-tools
 ```

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## License
[MIT License](license.md)
