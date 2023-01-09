---
title: Assignment 4 Ballgame
lang: en-US
sidebarDepth: 2
---

## Ball Game

[https://editor.p5js.org/irwinchyi/sketches/9GV_XnO2F](https://editor.p5js.org/irwinchyi/sketches/9GV_XnO2F)



## Something Extra

### Lottie Animation

> A Lottie is a JSON-based animation file format that enables designers to ship animations on any platform as easily as shipping static assets. They are small files that work on any device and can scale up or down without pixelation.
>
> Open-source and free Lottie players exist for the [web](https://github.com/airbnb/lottie-web), [iOS](https://github.com/airbnb/lottie-ios), [Android](https://github.com/airbnb/lottie-android), [Windows](https://github.com/windows-toolkit/Lottie-Windows), [QT](https://www.qt.io/blog/2019/03/08/announcing-qtlottie), [Tizen](https://github.com/Samsung/rlottie) and other platforms.
>
> https://lottiefiles.com/what-is-lottie#:~:text=A%20Lottie%20is%20a%20JSON,easily%20as%20shipping%20static%20assets.&text=Open%2Dsource%20and%20free%20Lottie,QT%2C%20Tizen%20and%20other%20platforms.

### Bodymovin Plugin

What is Bodymovin? 

<iframe title="vimeo-player" src="https://player.vimeo.com/video/217683641" width="640" height="360" frameborder="0" allowfullscreen></iframe>

https://aescripts.com/bodymovin/



## HTML

https://cdnjs.com/libraries/bodymovin

Introduce the code between <body> tag 

```html
<body>
  <div id="svgContainer"></div>
  <script src='https://labs.nearpod.com/bodymovin/demo/markus/halloween/lt.min.js'></script>
  <script src="./script.js"></script>
</body>

```

Then, create an script.JS file

```javascript
var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'pathofyourdata.json'
});
```

ID Caller: svgContainer to the certain div using CSS 

```css
#svgContainer {
  max-width: 100%;
  max-height: 100%;
  background-color: #1E1C26;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

