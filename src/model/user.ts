export default class User{
    id:number;
    userName: string;
    password: string;
    constructor(userName:string,password:string)
    {
        this.id=Math.random()*1000;
        this.userName=userName;
        this.password=password;
    }
}