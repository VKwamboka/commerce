export interface User{
    name:string
    email:string
    password:string 
    confirmPassword:string
    isAdmin?:boolean 
}

export interface login{
    email:string
    password:string
}