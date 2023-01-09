---
title: Assignment 5 UV and Midterm Project
lang: en-US
sidebarDepth: 2
---

# Week 5 UV and Midterm Project

## Coding

[https://editor.p5js.org/irwinchyi/sketches/9J0gaA0Ej](https://editor.p5js.org/irwinchyi/sketches/9J0gaA0Ej)



## Midterm Project

### Introduction

For my midterm project, I wish to create a combination of both text-based adventure games with additional interactivity. 

On the foundation of text-based adventure, this game will have more interactive elements with elements on the canvas. And every text on the screen will be created as elements. The player could drag the text to a different location to solve the mystery. 

For example: 

**"The door is locked, and you don't have the key to unlock it. "**

The players have two way to solve this puzzle, first, they could drag away the **don't** 

The sentence will becomes 

**"The door is locked, and you have the key to unlock it"**

Another way to solve is drag **unlock** and to replace the door is **locked** 

Using this method, it will be trickier than text-only based game, and give more space to allow user to interactive will different object on canvas. 

![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/Untitled_Artwork%2011.jpg)

![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/Untitled_Artwork%2012.jpg)

The game will have two to three mini-games. Based on time, it will have 2 to 3 different levels and let the user solve. 



## Pseudocode 

```pseudocode
function draggble() intoduce the draggable function. 

p5 js canvas() or function draw()
loadImage("background image here");
loadImage("thedoorisclose");
if(passlevel1 = true) {
	hide loadImage("thedoorisclosed"); or set opacity to 0; 
	loadImage("thedoorisopen");
}

function checkfallintorelm() {
  let passlevel1 = false; 
  if (dist(draggable1dont, the right location) < width of draggble1dont) {
    passlevel1 = true; 
  } else {
    passlevel1 = false; 
    return
  }
}

function keyPressed() {
	if key == 'left'
} select option1
```



## Code Reference

Following code will be reference, or borrow for the mid term project. 

### P5 JS Draggable 

[https://editor.p5js.org/icm/sketches/BkRHbimhm](https://editor.p5js.org/icm/sketches/BkRHbimhm)

```javascript
let shape1;
let shape2;

function setup() {
  createCanvas(640, 360);
  shape1 = new Draggable(100, 100, 50, 50);
  shape2 = new Draggable(150, 100, 50, 50);
}

function draw() {
  background(255);
  shape1.over();
  shape1.update();
  shape1.show();
  shape2.over();
  shape2.update();
  shape2.show();

}

function mousePressed() {
  shape1.pressed();
  shape2.pressed();
}

function mouseReleased() {
  shape1.released();
  shape2.released();
}
class Draggable {
  constructor(x, y, w, h) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(50);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill(175, 200);
    }
    rect(this.x, this.y, this.w, this.h);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}
```



## Gap in my JavaScript Knowledge

Here's question, I will continue my research and add what I found online to the Code Reference system. 

- Score System 
- How to reload everything to next level? It might use Javascript outside the p5.js 
- How to trigger when user drag and drop the elements to the right location? 
- How to manage all variables when there is multiple things on canvas can be dragged? 