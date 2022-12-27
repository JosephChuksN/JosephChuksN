import { ProjectInterface } from "./interfaces/projectDataInterface";
import Efolio  from "./assets/Efolio.png"
import linkpath from "./assets/linpath-2.png"
import weatherApp from "./assets/weatherApp.png"




const projectDatas:ProjectInterface[]  = [
    {
        name:"Linkpath",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam leo, a lacinia lacus condimentum id. Mauris sodales fringilla magna ut",
        technologies:["React", "Tailwind", "Firebase", "Node.js"],
        image:linkpath
    },
    {
        name:"E-Folio",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam leo, a lacinia lacus condimentum id. Mauris sodales fringilla magna ut",
        technologies:["React", "Tailwind", "Firebase", "Node.js"],
        image:Efolio
    },
    {
        name:"WeatherApp",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam leo, a lacinia lacus condimentum id. Mauris sodales fringilla magna ut",
        technologies:["Html", "Css", "JavaScript", "OpenweatherApi"],
        image:weatherApp
    },
    // {
    //     name:"Tasktivities",
    //     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum diam leo, a lacinia lacus condimentum id. Mauris sodales fringilla magna ut",
    //     technologies:["React", "TypeScript", "Tailwind", "Firebase", "Node.js"],
    //     image:todoApp
    // }


]

export {projectDatas}