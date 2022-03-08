# Getting Started

Follow these steps to get started.

1. Install NodeJS. NodeJS Download [https://nodejs.org/en/download/]

2. From terminal or powershell create a new React project with "npx create-react-app testMenuApp"

3. Install the React libraries with "npm install react-icons react-router-dom"

4. Install es7 React/Redux plugin. The plugin is optional. It has a bunch of short cuts for React that make things easier

5. In VSCode create two folders under src folder: components and pages

6. Create three files in components folder named Navbar.js, Navbar.css and NavbarData.js

7. Copy and paste the contents for each of the files from the Github repository src/components/

8. Create 4 pages in pages folder: Home.js, Contact.js, Inbox.js, Search.js

9. Open App.js and delete the lines between return ()

10. Copy and paste lines 12-21 from the App.js example on github in your App.js

11. Save the changes and refresh your browser. You should see a hamburger menu in the upper left corner


## ReactJS Menu Project

This repo shows how to build a simple menu in ReactJS using router and components. Router is using to control which page is shown. Each page is a basic React component.

### React Router

To learn more about Router [https://reactrouter.com/]

### React Component

To learn more about Components [https://reactjs.org/docs/react-component.html]

## About the project

1. The project was created using React 17.0.2

2. If you're using a new version of React, the API could have changed. If the API has changed, this project will probably break. If you use the same version of React, it should work.

3. The sample was inspired by [https://www.youtube.com/watch?v=CXa0f4-dWi4] React Sidebar Navigation Tutorial. The vidoe uses an older version of React, which doesn't work in version 17.0.2

4. The code doesn't use third party libraries

5. The project doesn't cover unit tests, but you should watch some videos on React Unit testing.

6. If you want to use a newer version of React, look at the compile errors and update the javascript to use the latest API. I recommend trying it to see how React has evolved over time. If you ever have to update older websites built with older versions of React, it will be good to know the differences. 

### About NodeJS

What is node? [https://www.youtube.com/watch?v=uVwtVBpw7RQ]

### Useful VSCode extension for React

I recommend installing es7 React/Redux plugin for VSCode.

1. click on the extension icon on the left

2. in the search box enter "dsznajder" to find the plugin by the author

3. select the plugin and click install


## Running the project

1. To start the project in NodeJS run "npm start"

2. To create a build of the website run "npm run build"

## CSS Tips

1. the example defines a wild card style in App.css. In practice, you shouldn't do this. It's handy for demo purposes, but doing it in a real project will cause a lot of pain.

2. try to organize your styles to make it easier to maintain. A style that spans multiples pages should go in App.css. Styles that are used by a single page can go in the page level CSS file.

3. define the font family in App.css

4. make sure to test your website on multiple browsers and platforms to make sure it looks consistent
