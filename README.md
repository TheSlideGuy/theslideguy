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


Don't forget to `npm install`!

### Running

Run `npm start`, and navigate to [localhost:3000](localhost:3000)


## License
[MIT License](license.md)
