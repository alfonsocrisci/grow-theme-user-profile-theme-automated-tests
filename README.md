# Grow Theme User Profile automated tests

## Scope of the project
This project aims to automate front-end tests for a Liferay DXP intranet page styled with a custom theme

## How to run the project
1) Get the necessary files for Jasmine and Jasmine-Jquery:

- jasmine.css
- jasmine.js
- jasmine-html.js
- boot.js

- jasmine-jquery.js
- The JS file where your tests specs are coded. For this project, [user-profile-theme-tests.js](https://github.com/alffox/grow-theme-user-profile-theme-automated-tests/blob/master/js/tests/user-profile-theme-tests.js)

2) Include them in your HTML through portal_normal.ftl:
```
    <head>
        <link rel="stylesheet" href="${javascript_folder}/libs/jasmine-3.1.0/jasmine.css">

        <script src="${javascript_folder}/libs/jasmine-3.1.0/jasmine.js"></script>

        <script src="${javascript_folder}/libs/jasmine-3.1.0/jasmine-html.js"></script>

        <script src="${javascript_folder}/libs/jasmine-3.1.0/boot.js"></script>
    </head>
```
and right before the closing `</body>` tag:
```
    <script src="${javascript_folder}/libs/jasmine-3.1.0/jasmine-jquery.js"></script>

    <script src="${javascript_folder}/tests/user-profile-theme-tests.js"></script>
```
You may see an example here: [portal_normal.ftl](https://github.com/alffox/grow-theme-user-profile-theme-automated-tests/blob/master/templates/portal_normal.ftl)

3) Compile and deploy your theme, apply the theme to a page, the tests should run as the page loads and should be visible at the bottom:

![A screenshot of the tests as they will appear](https://github.com/alffox/grow-theme-user-profile-theme-automated-tests/blob/master/images/preview.png)


## Specs

The tests ensure that the:

**User Profile Theme**
- is present on page
- has the intended layout

**Activities portlet**
- is present on page
- is relevant for the currently logged user
- has visible tags
- has hyperlinks pointing to valid URLs
- has views text with 12px font size
- has preview text with 16px font size
- shows the icons next to the actions for the Wiki articles

**Activity selector**
- is present on page
- calls *filterByActivityType()* function on Activity selector *change* event

**Grow Subscriber portlet**
- is present on page

**User Card**
- is present on page
- has the right spacing and appears on the left
- has hyerlink that leads to a relevant Loop URL

The library used ([jasmine] / [jasmine-jquery]) is specified in comments at the top of each spec, in the [user-profile-theme-tests.js](https://github.com/alffox/grow-theme-user-profile-theme-automated-tests/blob/master/js/tests/user-profile-theme-tests.js) file

## External libraries used

- [Jasmine](https://jasmine.github.io/) - v. 3.1.0
- [Jasmine-Jquery](https://github.com/velesin/jasmine-jquery) - v. 2.1.1
