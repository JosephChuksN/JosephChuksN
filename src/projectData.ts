import { ProjectInterface } from "./interfaces/projectDataInterface";
import Efolio  from "./assets/Efolio.png"
import linkpath from "./assets/linpath-2.png"
import weatherApp from "./assets/weatherApp.png"




const projectDatas:ProjectInterface[]  = [
    {
        name:"Linkpath",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam leo, a lacinia lacus condimentum id. Mauris sodales fringilla magna ut",
        technologies:["React", "Tailwind", "Firebase", "Node.js"],
        image:linkpath,
        liveSite:"https://linkpath-josephn.vercel.app",
        sourceCode:"https://github.com/JosephChuksN/linkpath"
    },
    {
        name:"E-Folio",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam leo, a lacinia lacus condimentum id. Mauris sodales fringilla magna ut",
        technologies:["React", "Tailwind", "Firebase", "Node.js"],
        image:Efolio,
        liveSite:"https://portfolio-builder-josephn.vercel.app",
        sourceCode:"https://github.com/JosephChuksN/E-folio"
    },
    {
        name:"WeatherApp",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam leo, a lacinia lacus condimentum id. Mauris sodales fringilla magna ut",
        technologies:["Html", "Css", "JavaScript", "OpenweatherApi"],
        image:weatherApp,
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