export class Users{ 
    constructor( 
        private id : string, 
        private name: string, 
        private email: string, 
        private passoword: string, 
        private role: string, 
        private createdAt: string 
        ){} 

        public getId(): string{ 
            return this.id 
        } 
        
        public setId(value:string):void{ 
            this.id= value 
        } 
        
        public getName(): string{ 
            return this.name 
        } 
        
        public setName(value:string):void{ 
            this.name= value 
    } 
    public getEmail(): string{ 
        return this.email 
    } 
    
    public setEmail(value:string):void{ 
        this.email= value 
    } 
    
    public getPassoword(): string{ 
        return this.passoword 
    } 
    
    public setPassoword(value:string):void{ 
        this.passoword= value 
    } 
    
    public getRole(): string{ 
        return this.role 
    } 
    
    public setRole(value:string):void{ 
        this.role= value 
    } 
    
    public getCreateAt(): string{ 
        return this.createdAt 
    }
}