---
layout: post
title: "Nodejs and MySQL"
date: 2018-08-16 23:10:00 -0400
comments: true
---
I have been using the last week or so to learn the ins and outs of Node.js and mySQL. I wanted to put together a little project that would use the two to create an app that would create and interact with a database through a user interface. I decided to put together a simple example making a student database for a college. Since I can’t use a database through Github pages It’ll only be done locally, so there won’t be a live demo. I’ll provide pictures and the code through Github to show the results. 



This app will use node, express, ejs and other modules to put it together. I’ll use mySQL to create and maintain the database and Bootstrap to create a simple style.



To start I’ll create a database locally using mySQL. I will call this database my_school.

<img src="{{ site.url }}/{% link img/node-mysql-blog/img1.png %}">

I'll start out the table within the database, and to test the results later, I’m going to use a program PopSQL to help visualize the table better, once information is added. To start I’ll make a table called ‘students’, and enter in the columns needed.


<img src="{{ site.url }}/{% link img/node-mysql-blog/img2.png %}">
<img src="{{ site.url }}/{% link img/node-mysql-blog/img3.png %}">

It was a success! I’ve added some data to the table so we have something to look at once everything is set up. 


So now that the database is all set up, it’s time to set up node. I’ll need to use install some modules like express, mySQL and body-parser to parse the data into JSON. I created app.js to configure the database and the server which will display the page. 

<img src="{{ site.url }}/{% link img/node-mysql-blog/img4.png %}">

Next, I’ll set up the home page so that it’ll display the current students and give the option to create edit or delete entries to the database. I’m using ejs as the templating engine to display the information. 


I created a function called getHomePage in index.js that displays the home page and all of the data entries. Ejs then uses the template that’s connect to index.js using a loop to display all of the entries. 

<img src="{{ site.url }}/{% link img/node-mysql-blog/img5.png %}">

Now I need to do the same thing to display the page that displays the form for your info to put into the database then create the query that adds everything into the correct column in the table. I’ll make a new student to test it out.


<img src="{{ site.url }}/{% link img/node-mysql-blog/img6.png %}">

After some struggling it worked! I had enctype="multipart/form-data" in the form tag from the html that wasn’t letting the body parser parse through the json. Every form item returned undefined. But I found the problem.
Now I’ll just repeat the steps for the edit page and post the results of an edit page as well as let the page delete entries. 
