# react
Repository for learning react based applications

Setup guide for React projects on Windows platforms using Create React App (CRA) with NodeJS. 
(Vite can be used as well)

1. Install NodeJs - v22.11.0
https://nodejs.org/en/download/prebuilt-installer

Note: If you choose yes in the installtion for additional necessary tools then
it will install chocolatey.

2. Open the command line and run the below commands

   npx create-react-app frontend

    It will say need to install : create-react-app@5.0.1, choose yes
    Installing react, react-dom, and react-scripts with cra-template...

3. cd fronend (switch the directory to project directory)

4. npm start

5. This will open up the development server at http://localhost:3000/ and you'll see the react app running.
   Runtime environment is of course the NodeJS. We don't need this at the server side, only client side needed.

Installing Material UI:

- Run this: npm install @mui/material @emotion/react @emotion/styled
- npm install @mui/icons-material

To deploy to AWS

- npm run build

Notes:

- The .js files you see in src folder are special type and not the typical js files.
  These files are understood by the REACT.
- index.js is the entry point here. With Vite you would have seen main.jsx