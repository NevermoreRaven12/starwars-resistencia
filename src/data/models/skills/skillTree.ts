import { Classes } from "../char/classes";
import { Skill } from "./skill";

export interface SkillTree {
    classe: typeof Classes[number]
    skills: Skill[]
}