---
layout: post
title: "Alarm Clock App"
date: 2019-02-12 13:58:24 -0400
comments: true
---
Lately, I have been trying to be more proactive with my blog. I want to try to create blog posts for the little side projects I’ve been working on to explain how I went about creating it. What better way to retain the things I’ve been learning than to make a post explaining those things? So, this will the first of (hopefully) many posts doing just this.

I asked myself what is the most used application today? Besides social media it would probably be a clock app. One that can give you the current time (in your current time zone), and has a function to set an alarm for a certain time. So, I decided to try putting a simple alarm clock together from scratch using vanilla JavaScript. It may not be the prettiest of code but it’ll do its job.

First, I set myself up with a few lines of HTML and CSS and linked in a new js file. I wanted to get the actual clock squared away, so I used JavaScript’s built in Date object and the functions used to grab the individual data (year, month, hour, minute, etc.).

<img src="{{ site.url }}/{% link img/clock-blog/img1.png %}">

I soon noticed that things like months and days were actually numbered so I created two arrays so that when called instead of having it return “2” it would say February.

<img src="{{ site.url }}/{% link img/clock-blog/img2.png %}">

Next were a few logical things. The Date Object returns everything in a 24-hour clock. Since most people generally use a 12-hour clock I decided to change it up. Using if statements, I check if the hour is over 12, if it is, I subtract 12 and set AM to PM. I ran into an issue though where 12 PM would read as 12AM so I had to create a separate statement to fix this.

<img src="{{ site.url }}/{% link img/clock-blog/img3.png %}">

Then I wanted every number under 10 to have a 0 before to make it look a little more uniform so I made some statements to fix that. 
With all the logic set it was time create the html to append onto the page. I wanted to refresh every second so I used a setInterval function to do this. 

<img src="{{ site.url }}/{% link img/clock-blog/img4.png %}">
<img src="{{ site.url }}/{% link img/clock-blog/img5.png %}">


Next was to create the alarm. I decided to make a <code>select</code> element. I created a loop to make every hour and minute and add zeros to the beginning of them to make them readable with the actual Date Object.

<img src="{{ site.url }}/{% link img/clock-blog/img6.png %}">