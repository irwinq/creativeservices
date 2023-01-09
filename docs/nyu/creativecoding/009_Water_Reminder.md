---
title: Assignment 9 Arduino Water Reminder
lang: en-US
sidebarDepth: 2
---

# Week 9 Arduino Water Reminder  

## Intro

One of the issues I have to face every day is simply I don't drink enough water. It could cause a lot of problems since I usually went out and did a lot of exercises. And play balls. During the process of cardio and sweating, my body lost a lot of water. Then I always forget to drink it. 

Then I have water reminder app on my phone, which reminds me I need to drink water. However, I tend to drink too much water because it reminds me pretty often. I guess it kind of insane about arguing how much water I should drink. But I really enjoy the process of tracking my daily diet as part of my fitness journey. So tracking water intake is important. 

Another issue is I can't find a good way to track the volume of water I am going to take. Usually, in the app, there are functions like manually input your water intake. But it requires you to have a cup with measurement. I drink water using a different bottle, maybe bowl sometimes. So I am planning to have a functional scale (maybe as my final project). For feasibility, this week, I am going to achieve the first step, which creates an LED reminding system base on time. 



## Steps

I followed the tutorial posted on YouTube and started to wire everything up. Then I found some example of how to create a timer without using `delay()` 

Because `delay()` will completely paste the system until the time is up, I only use delay for a very short time. 

Here's the function of my little water reminder: 

When you press the button, the blue LED will be flashing several times, indicates 

**Yay! You just drunk some water! Good for you!**

Then the timer will start to count, I am planning to set the count as per hour. But in order to test, I shorted the amount to **5 seconds**. 

After a certain amount of time, the red LED will light up again. It reminds you that you need to drink some more water. 
After you drink water, you go back and press the button again; it will start the new interval. 

Here's video: 

<iframe src="https://player.vimeo.com/video/478190301" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

## Code

```javascript
const int LEDPinA = 2;
const int switchPinA = 3;
const int LEDPinB = 4;
const int switchPinB = 5;
int switchValA;
int switchValB;
unsigned long interval = 5000; //set the delay of the LED flashes
unsigned long startTime; //set start time, and reset it everytime after press

void setup() {
  pinMode(LEDPinA, OUTPUT);
  pinMode(LEDPinB, OUTPUT);
  pinMode(switchPinA, INPUT);
  pinMode(switchPinB, INPUT);
}

void loop() {
  switchValA = digitalRead(switchPinA);
  switchValB = digitalRead(switchPinB);
  if (switchValA == HIGH) {
    startTime = millis();
    digitalWrite(LEDPinA, HIGH);
    delay(100);
    digitalWrite(LEDPinA, LOW);
    delay(100);
    digitalWrite(LEDPinA, HIGH);
    delay(100);
    digitalWrite(LEDPinA, LOW);
    delay(100);
    digitalWrite(LEDPinA, HIGH);
    delay(100);
    digitalWrite(LEDPinA, LOW);
    delay(100);
    digitalWrite(LEDPinA, HIGH);
    delay(100);
    digitalWrite(LEDPinA, LOW);
    delay(100);
    digitalWrite(LEDPinB, LOW);
   }
   if (millis() - startTime >= interval)
   {
     digitalWrite(LEDPinB, HIGH);
   }
   if (switchValB == HIGH) {
    digitalWrite(LEDPinB, HIGH);
    } else {
    digitalWrite(LEDPinB, LOW);  
   }
}
```





## Future

A scale system. 

I am going to buy a digital scale that works with Arduino. I found one online, Force Sensitive Resistor, for ten bucks. 

![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20201111143951.png)

Is this sound like an approachable plan? Is this kind of product work with the board we got? 

I hope to create a system by pushing a button, and it will measure the weight of the cup first, then you push the button again, it will calculate the weight again minus the cup weight. 

This is something I will dig into this week and future. 

I also write a little bit of pseudocode about how I might approach this: 

```pseudocode
const int LEDPinA = 2;
const int switchPinA = 3;
const int LEDPinB = 4;
const int switchPinB = 5;
const int weightscalePin = 7;
const unsigned long = 0; 
const weightscalpin = weightresult;
const unsigned long weightresultbefore;
const unsigned long weightresultafter;
if (weightresult ==! 0) {
	weightresult = weightresultbefore
}
if (weightresults doesn't change within 0.5s) {
	weightresult = weightresultbefore;
}
if (weightresults == 0) {
	reset the scale
	if (weightresults > weightresultbefore) {
	weightresult = weightresultafter;
}
const single_waterintake = weightresultafter - weightresultbefore;
const total_waterintake = 0;
total_waterintake = signle_waterintake + total_waterintake;
```

