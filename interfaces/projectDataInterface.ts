import { StaticImageData } from "next/image"

export interface ProjectInterface {
 name:string
 description:string
 technologies:string[]
 image:string | StaticImageData
 liveSite:string
 sourceCode:string
}