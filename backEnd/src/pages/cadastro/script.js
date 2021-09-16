function registerUser(...users){
    const expression =  /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
   
    users.forEach((user) =>{
        const tam = user.password;
        if(
            user.name == "" && 
            user.email == "" &&  
            user.password == "" && 
            user.contact == ""
        ){
            throw Error("Não é possível cadastrar usuário!");
        }
        else if(!expression.test(user.email) ){
            throw Error("Email inválido!");
        }
        else if( tam.length < 6){
            throw Error("Insira uma senha de no mínimo 6 digitos!");
        }
    })
}

export {registerUser}  
    

