---
title: Assignment 1 Selfie
lang: en-US
sidebarDepth: 2
---

# Assignment 1 Selfie

## Result

If embedded media file is not showing properly, please [visit here](https://editor.p5js.org/irwinchyi/present/UMOV43tu4). Codes [here](https://editor.p5js.org/irwinchyi/sketches/UMOV43tu4). 

<iframe src="https://editor.p5js.org/irwinchyi/embed/UMOV43tu4" height="1000px" width="1000px" style="overflow: hidden;"></iframe>

## Steps

1. Draw the hat, NYU Logo, and UNL Logo using Sketch App

   ![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20200909114745.png)

2. Get the polygon points X and Y Axis, also Filling Color 

   <img src="https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20200909113726.png"  />

3. Using triangle(), and quad() to create polygon 

```javascript
triangle(x1,y1,x2,y2,x3,y3);
quad(x1,y1,x2,y2,x3,y3,x4,y4);
```

4. Using Adobe Illustrator, draw the face, followed a tutorial down below in Reference Section 

   <img src="https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20200909114430.png"  />

5. Use same method to create the half of the face
6. Create function called 'halfface()', reuse this function and flip horizontally 
7. Add subtle animation by using mouseX 



### Method Learned in the project: 

- Using push() and pop() to limit the range of scale() or translate()
- Create function in JavaScript, reuse function 

### Current limitation and Future Improvement: 

- Maybe a plugin in sketch to generate all the points for me, so I can copy and paste. 
- Reuse color by define color variables 



## Reference 

[Youtube Video: Illustrator Tutorial: Low Poly Portrait!](https://www.youtube.com/watch?v=v0nmI_stsZk&t=323s)

[p5.js Reference](https://p5js.org/reference/)



## Reading Assignment 

[Delusions of Dialogue: Control and Choice in Interactive Art by Jim Campbell](https://www.jstor.org/stable/1576847)

It is fascinating to read this article as it took a time machine trip back to the 1990s when computing machines became PC: Personal computer. Campbell was excited about the future of interactive arts. His envisionments are both advancing and imaginative. And so many of his forecasting came out to be true. 
Breaking down his few ideas and added my understanding:

**An Openworld**

> "I have often wondered why most interactive work feels contrived and designed for a calculated response, like bad art-school art. "

Even today, when I play games on console, sometimes feel stuck into the game's characters' dialogs. Developers and game designers give predeterminate narratives. You simply follow along. Fortunately, most games have a fascinating, interesting narrative. 

When developers think outside the box, leave the black for the user to fill or create the tool to let users building their own story. 

Particularly, two games I have to mention is, Minecraft and The Stanley Parable. Minecraft is more like a tool. It allows users to create art.  

Stanley Parable is simply an art. (it still creep me out every time I play it)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fBtX0S2J32Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Programs have meanings**

> "This is generally what we want computers for: we want them to be passive slaves."

We all learn computing language from true/false, boolean 0101011. If we break everything down, code, dig deeper: machine language is meaningless to humans, and its all our slaves. 

Since the Stone age, the creators give things meanings. A sharp stone is meaningless, tied it to a stick, then it became a Handaxe. Paper and pigments are meaningless. Painters give it meanings. It has been vested a cause, a function, an expression, an attitude to call it meaningful. So does the art made by computer, a vested meaning made it alive. 

**Memory**

That's exactly how movie/video editing changed: from using scissors to cut negative films to nowadays the digitized linear video editing software. His envisionments came true. 