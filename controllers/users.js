import {v4 as uuidv4} from 'uuid';

let  users = [ ]

export const createUser = (req,res)=>{
    const user =req.body;  
    users.push( {...user, id:uuidv4() });
    res.send(users);
}
export const getUsers = (req,res)=>{
    console.log(users);
    res.send(users);
};
export const getUser = (req,res) => {
    const { id } = req.params;

    users.find((user) =>user.id==id);
    res.send(users);
};
export const deleteUser =  (req,res)=>{
    const { id } = req.params;
    // john 23
    //jane 324
    users = users.filter((user) =>user.id !=id);
    res.send(`User with the id ${id } deleted from database`) ;

};
export const patchUser = (req,res)=>{

    const {id} = req.params;

    const {firstname, lastname, age} = req.body;
    const user = users.find((user)=>user.id==id);

    if(firstname)   user.firstname = firstname; 
    if(lastname)   user.lastname = lastname;
    if(age)     user.age = age;

    res.send(`User with the id: ${id} has been updated`);
 

};
 //