import { UsersDataBase } from "../database/UserDataBase";
import { Users } from "../models/Users";

export class UsersBusiness {
    constructor(public usersDataBase: UsersDataBase) { }

    public getUsers = async (input: any) => {
        const { q } = input;
        const usersDB = await this.usersDataBase.findUsers(q) 
        const users: Users[] = usersDB.map((userDB) => new Users(userDB.id,
            userDB.name,
            userDB.email,
            userDB.passoword,
            userDB.role,
            userDB.created_at)) 
            
            const output = users.map(user => ({ id: user.getId(), 
                name: user.getName(), 
                email: user.getEmail(), 
                passoword: user.getPassoword(), 
                role: user.getRole(), 
                createAt: user.getCreateAt() })) 
                return output
    }
}