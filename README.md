# ReactJS Menu Project

This repo shows how to build a simple menu in ReactJS using router and components. Router is using to control which page is shown. Each page is a basic React component.

### React Router

To learn more about Router [https://reactrouter.com/] (https://reactrouter.com/)

### React Component

To learn more about Components [https://reactjs.org/docs/react-component.html] (https://reactjs.org/docs/react-component.html)

## About the project

1. The project was created using React 17.0.2

2. If you're using a new version of React, the API could have changed. If the API has changed, this project will probably break. If you use the same version of React, it should work.

3. The sample was inspired by [https://www.youtube.com/watch?v=CXa0f4-dWi4] React Sidebar Navigation Tutorial. The vidoe uses an older version of React, which doesn't work in version 17.0.2

4. The code doesn't use third party libraries

5. The project doesn't cover unit tests, but you should watch some videos on React Unit testing.

6. If you want to use a newer version of React, look at the compile errors and update the javascript to use the latest API. I recommend trying it to see how React has evolved over time. If you ever have to update older websites built with older versions of React, it will be good to know the differences. 

## Setting up project

Before you can run the project on your system, you will need to install some React libraries. It assumes you have NodeJS installed on your system. If you don't have NodeJS installed, please do that first.

I recommend installing es7 React/Redux plugin, if you are use VSCode.

[https://nodejs.org/en/download/] NodeJS download

### Manual Install

1. npm install react-icons

2. npm install react-router-dom

### Easy Install

1. copy the dependencies in project.json

2. npm install


## Running the project

1. To start the project in NodeJS run "npm start"

2. To create a build of the website run "npm run build"

## CSS Tips

1. the example defines a wild card style in App.css. In practice, you shouldn't do this. It's handy for demo purposes, but doing it in a real project will cause a lot of pain.

2. try to organize your styles to make it easier to maintain. A style that spans multiples pages should go in App.css. Styles that are used by a single page can go in the page level CSS file.

3. define the font family in App.css

4. make sure to test your website on multiple browsers and platforms to make sure it looks consistent
