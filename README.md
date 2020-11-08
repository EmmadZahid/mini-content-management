# MiniContentManangement

Mini Content Management is a simple application for blogs. It allows the user to create blogs and with each blog user can select any random image. There is a blog list where user can see all the created blogs. The blogs list is a paginated list. User can also select any blog from the list to view the details of blog. While viewing the details of blog the high resolution image is fetched and shown to user.

This project is created with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## How to run?

* Clone the repository to your local machine
* Run `npm i --save`
* Run `npm i --save-dev` (optional)
* Run `npm start` for a dev server. Navigate to `http://localhost:9090/`. The app will automatically reload if you change any of the source files.

## Allowing the user to add HTML inside blog

In order to allow the user to add content of blog as HTML, it can be done by binding the `innerHtml` property of div as below:

    <div [innerHTML]="yourHtml">

But there is a XSS security risk. For that purposer Angular give DomSanitizer utility. DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing values to be safe to use in the different DOM contexts. Before binding the html, just sanitize the HTML with DomSanitizer.
