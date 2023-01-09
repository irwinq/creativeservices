---
title: Final Project Hydrate Tracker
lang: en-US
sidebarDepth: 2
---

# Final Project: Hydrate Tracker 

## Background

I like to go to the gym and to do exercise regularly. One of the tips I got from professional athletes is you need to keep hydrated throughout the day to maximize your performance.  

The thing is, I always forget to drink water. There is one theory online; I don't know if that is true, but it said when you feel thirsty, your body is already dehydrated. I tried the mobile app on the phone, but there is one central part that is missing. First, you have to input how much water you drink each time manually, but most of the time, I use a cup that doesn't have a graded or scale. I have no idea how much water I drink. 

Second, how much water should I drink daily? I know there is a formula based on weight, but my daily activities are totally different. The water intake should be based on how many minutes of exercise I did.

Hence, I deceived to create a web app connected to the Arduino scale system, with some built-in features. 

Here is the bulletin of features: 

- Calculate water intake based on the weight 
- Calculate water intake based on 
- Conversion and Change unit between Ounce and milliliter 
- Tare manually 
- Reset 
- Track Daily Intake and Goal

Also, based on the feedback I received during the final presentation, have the button of tare one certain drinkware. I picked the cup I used most frequently; the weight is 393 milliliter. The tare cup button could only use once. 



## Final Result

### Video

<iframe src="https://player.vimeo.com/video/491512693" width="640" height="288" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/491512693">Hydrate Tracker</a> from <a href="https://vimeo.com/user66884124">Irwin Qi</a> on <a href="https://vimeo.com">Vimeo</a>.</p>



[P5.js Sketch: https://editor.p5js.org/irwinchyi/sketches/sgauI6wcH](https://editor.p5js.org/irwinchyi/sketches/sgauI6wcH)

## Water Intake Formula

This formula is based on article: 

 Retrieved from [How to Calculate How Much Water You Should Drink A Day](https://www.slenderkitchen.com/article/how-to-calculate-how-much-water-you-should-drink-a-day)

**Body Weight** * 2/3 = **water intake** (ounces)

12 ounces of water per **30 min** exercise. 



## Hardware List

Besides Arduino, all hardware brought from Amazon. 

[MakerHawk Digital Load Cell Weight Sensor HX711 AD](https://www.amazon.com/gp/product/B07GQPV6C4/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)

[EDGELEC 120pcs Breadboard Jumper Wires Male to Female Male to Male Female to Female Multicolored Ribbon Cables](https://www.amazon.com/gp/product/B07GD2BWPY/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1)

[SunFounder IIC I2C TWI Serial 2004 20x4 LCD Module Shield for Arduino R3 Mega2560](https://www.amazon.com/gp/product/B01GPUMP9C/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1)

| Product List, Image from the product description             |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Digital Load Cell                                            | Cables                                                       | I2C 20x4                                                     |
| ![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20201216004127.png) | ![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20201216004058.png) | ![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20201216003958.png) |



## Wire

![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/Untitled%20Sketch_bb.jpg)





## Library used

[HX711-Load-Cell-Amplifier -- Github](https://github.com/sparkfun/HX711-Load-Cell-Amplifier)

[LiquidCrystal I2C -- Arduino Library](https://www.arduinolibraries.info/libraries/liquid-crystal-i2-c)



## Calibration

### Manual Calibration

HX711 Chip will have to calibrate to make sure the accurate of the measurement. 

I gathered the result using serial monitor with the number on 0, measured several times to have the average number, then 148 gram, and 500 gram. 

![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20201202132642.png)

Using Microsoft Excel, I genarated this formula of 
$$
y = 385.77x - 83167
$$
Changing the equation back so 
$$
y + 83167 = 385.77x;
(y + 83167)/385.77 = x;
$$

Then I tried auto calibration, got reference calibration number. Wrote the number into Arduino. 



## User Interface

UI is a huge part of the experience. Here's the first look at the software before I started to design the interface. 

![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20201216004314.png)

The information is unclear. So I totally redesign the interface. I really like the night mode, so I design my UI default with dark color. 
Here's the image of the new UI:

![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20201216005331.png)



## Arduino Code

```c++
#include "HX711.h"
#include <Wire.h> 
#include <LiquidCrystal_I2C.h>
#include <ArduinoBLE.h>
#define calibration_factor 389120

#define LOADCELL_DOUT_PIN  4
#define LOADCELL_SCK_PIN  5

HX711 scale;
LiquidCrystal_I2C lcd(0x27,20,4);

void setup() {
  Serial.begin(9600);
  Serial.println("HX711 scale demo");
  lcd.init();
  lcd.backlight();
  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);
  scale.set_scale(calibration_factor); 
  scale.tare();	
  Serial.println("Readings:");
}

void loop() {
  long reading = scale.get_units() * 1000;
    if (reading == -1) {
    scale.tare();  
    }
  int readingg = reading;
  Serial.print(reading); //scale.get_units() returns a float
  Serial.println(); 
  lcd.setCursor(0,1);
  lcd.print(String(reading) + String("   gram        "));
  if(Serial.available())
  {
    char readresult = Serial.read();
    if (readresult == 't')
    {
      scale.tare();
      };
   };
}
```



## Code Referenced / Use from Others

Bisides the libary mentioned above required for hardware, I use the firework example as eastern egg.

[https://editor.p5js.org/ShawnMa/sketches/SJbLpafn-](https://editor.p5js.org/ShawnMa/sketches/SJbLpafn-)



## Future / More Time

Yay! I really like my project that combines the physical object with something graphic on the screen. I hope it could expand to more screen. I don't know how p5 works on iOS devices, but I hope it could be a PWA(Progressive Web Apps) so I could open it on my phone and connect through Bluetooth. 
Also, I hope I could design another UI for mobile devices. 

During the design process, I have some thoughts, but it will take too much time to finish. I thought that there is a log function; the user could check the time, the volume of the water drank. Also, they could delete certain ones if they want to. 

Some random thoughts: 

I export all my UI as SVGs, but it somehow looks blurry in the background. I did research they said p5 would load SVG as an image. But my button looks crystal clear, and I guess p5 create button as HTML elements. HTML could load SVG properly. 

I hope p5 could support SVG natively someday~