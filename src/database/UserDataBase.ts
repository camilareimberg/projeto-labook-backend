import { UsersDB } from "../types"; 
import { BaseDatabase } from "./BaseDatabase"; 


export class UsersDataBase extends BaseDatabase{ 
    public static TABLE_USERS= "users"; 


public async findUsers(q:string | undefined){ 
    if(q){ 
        const result: UsersDB[] = await BaseDatabase.connection(UsersDataBase.TABLE_USERS).where("name", "LIKE", `%${q}%`); 
        return result }
        else{ const result: UsersDB[] = await BaseDatabase.connection(UsersDataBase.TABLE_USERS) 
            return result }
        }
    }