import { Request, Response } from "express";
import { UsersBusiness } from "../business/UsersBusiness";
import { ZodError } from "zod";
import { BaseError } from "../error/BaseError";


export class UsersController {
    constructor(
        public usersBusiness: UsersBusiness) { }

    public getAllUsers = async (req: Request, res: Response) => {
        try {
            const input = {
                q: req.query.q
            }

            const output = await this.usersBusiness.getUsers(input);
            res.status(200).send(output);
        }

        catch (error) {
            console.log(error)
            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            }
            else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("erro inesperado!")
            }
        }
    }
}
