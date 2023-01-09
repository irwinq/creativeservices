---
title: Assignment 2 Clock
lang: en-US
sidebarDepth: 2
---

# Assignment 2 PAClock

## Result

If embedded media file is not showing properly, [codes here](https://editor.p5js.org/irwinchyi/sketches/6yhcoXL7a).

<iframe src="https://editor.p5js.org/irwinchyi/embed/6yhcoXL7a" width="1000px" height="600px" style="overflow: hidden;"></iframe>

The shape of the clock arc reminds me of Pac Man game. 

![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/pac_man_hed.jpg.png)

> BY DIEGO MOYA - OWN WORK, [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0), [WIKIMEDIA COMMONS](https://commons.wikimedia.org/w/index.php?curid=18072455)

</br>

So why not create a Pac Man theme clock?

The issue I encountered was: the second arc is moving too jumpy. Every motion designer can't live with ease in and out. I was trying to find a solution to create in between frame of the second arc movement. 

After stuck here forever, I asked Scott and he provided me this example down below: 

```javascript
/* 
In order to interpolate between each second along the arc, you'll need to keep track of the current second, the previous second, and the next second.

With lerp(), the current second is your starting point. the next second is your target. You can use the speed at which your animation plays to figure out how much to interpolate every frame.

at 30fps, you'll be updating the screen every .033 seconds. Adding this number to a counter will let you interpolate smoothly.

To accurately update the interpolation, you'll want to keep track of when the second changed to a new one. By setting a variable to keep track of the previous time in a draw loop, you can identify when time has changed, and update your sketch apropriately.
*/

let count = 0.0; // a counter to determine the percetage to interpolate when using lerp()

let currsec, psec; // global variables

function setup() {
  createCanvas(400, 400);
  frameRate(30); // limit the framerate so you can
  // keep track of time between frames more accurately
  currsec = second(); // set the current second
}

function draw() {
  background(220);

  // if we have entered a new second since the last 
  // timne in the draw functions
  if (psec != currsec) {
    // set the current second variable
    currsec = second();
    // reset the counter
    count = 0.0;
  }
  // the next second is the current second plus one
  let nextsec = currsec + 1;

  // get the angle in radians for the current second
  let ang = ((currsec / 60) * TWO_PI);
  // get the angle in radians for the next second
  let nextAng = ((nextsec / 60) * TWO_PI);
  // use lerp to interpolate between the 
  // current second angle and the next second angle
  let newang = lerp(ang, nextAng, count);

  // draw the arc
  arc(width / 2, height / 2, 100, 100, 0, newang);

  // increment the counter
  count += .033;
  // if the counter goes beyond .99, reset the counter to 0
  if (count >= .99) count = 0.0;

  // set the previous second variable to the current time
  // when the sketch enters draw the next time
  // this will reflect the old time, not the new time
  psec = second();
}
```

## Reading Assignment

**Interactivity**

Crawford explained and separated the interaction into a cyclic process: listen, think, and speak. 

I believe interaction itself; it's a form of communication. By examining it using communication models, I imaged it layers by layers to have a more translucent structure. 

![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/27-Why-is-basic-communication-so-important..jpg)

> Source of Image "Why is basic communication so important?" https://thecsopro.com/why-is-basic-communication-so-important/

In his explanation, two actors in the communications model are the sender and receiver. Listen is the channel. Speak is the message and feedback. The thinking process is encoding and decoding. 

I talked about the example that personal assistant like Google Assistant or Siri was very dumb. They can't comprehend the user's instruction. The channel of Noise, or Decoding process, has been compromised. It ends up compromised and uncredited the whole communication process. As a result, the degree of interactivity decreased. If any part of the chain in this process is totally broken, things aren't interactive. You can talk with a wise man with his story for a while, but no one has a long conversation with Siri. 

If the user, which is the sender, give a vague, unclear message. It also damaged the process and lowered the intractability. The book isn't mention anything about the Noise in this chapter. How could we define Noise in human-computer interaction? Maybe the keyboard or microphone isn't functioning properly? One of the theories I came up with is the design behind it. A bad and extremely complex user interface could baffle the user. The user can't perform the activity in a timely manner. In the section of "User Interface" in this chapter, the author introduced the relations with interactivity design. It focuses on the bigger picture, not only the Noise (bad UX Design) itself but also the whole encoding, decoding process. 

 I felt this communication model is extremely helpful to me in understanding the relations and the bigger picture. So let's use it to examine the questions. 

**Book** might be medium degree of interactive. One example is S. By Dorst Novel. 

![](https://www.texasobserver.org/wp-content/uploads/2014/02/S-Book.jpg)

> Image Source: Untangling *S.*, Doug Dorst’s Novel within a Novel, Jen Reel https://www.texasobserver.org/untangling-s-doug-dorsts-novel-within-novel/

This book is a combination of handwritten notes, postcards, photos. Although it is passive, it does give interactivity by all the preset notes, and sometimes users have to take note of the book. 

**Plant**: Probably not. It does not think nor encoding and decoding messages. 

**Puppy**: A big, yes. He listens to your audio cue, visually see your movement, and make responses. 

**Sketches**: Might process a lower degree of intractability or no. After a certain amount of time, when you look at those sketches, it gives the info back. But it won't think, nor encoding and decoding anything. It's one way. Strictly speaking, no. 

<br>

Thank you for reading this. 

