import { ProjectInterface } from "./interfaces/projectDataInterface";
import Efolio  from "./assets/Efolio.png"
import linkpath from "./assets/linkpath-2.png"
import weatherapp from "./assets/weatherapp.png"




const projectDatas:ProjectInterface[]  = [
    {
        name:"Linkpath",
        description:`Linkpath is a full-stack web app built with React and tailwind for the client 
                     side and Node, express, and firebase for the server. It permits authorized  
                     users to embed links to their socials and websites and
                     displays them on a single page with a personalized URL.
                     `,
        technologies:["React", "Tailwind", "Firebase", "NodeJs"],
        image:linkpath,
        liveSite:"https://linkpath-josephn.vercel.app",
        sourceCode:"https://github.com/JosephChuksN/linkpath"
    },
    {
        name:"E-Folio",
        description:`A front-end app that serves as a template for users to build a personalized 
                     resume or portfolio website. It allows users to add, edit, delete, and update 
                     their details. Built with React and tailwind Css.
                     `,
        technologies:["React", "TailwindCss"],
        image:Efolio,
        liveSite:"https://portfolio-builder-josephn.vercel.app",
        sourceCode:"https://github.com/JosephChuksN/E-folio"
    },
    {
        name:"Weather App",
        description:`A weather app built with basic Html, Css, JavaScript and Openweather API. 
                     It gets weather data of users location on the first load and also allows for 
                     the user to search and get weather data for cities located around the globe.
                     `,
        technologies:["Html", "Css", "JavaScript", "OpenWeatherApi"],
        image:weatherapp,
        liveSite:"https://josephchuksn.github.io/WeatherApp/",
        sourceCode:"https://github.com/JosephChuksN/WeatherApp"
    },
    // {
    //     name:"Tasktivities",
    //     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam leo, a lacinia lacus condimentum id. Mauris sodales fringilla magna ut",
    //     technologies:["React", "TypeScript", "Tailwind", "Firebase", "Node.js"],
    //     image:todoApp
    // }


]

export {projectDatas}