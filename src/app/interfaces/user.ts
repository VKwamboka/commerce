export interface User{
    name:string
    email:string
    password:string 
    isAdmin?:boolean 
    // confirm_password:string
}

export interface login{
    email:string
    password:string
}