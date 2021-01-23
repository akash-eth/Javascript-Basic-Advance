// var getUserRole = function userRole(name,role){

//     switch (role) {

//         case "admin":
//             return `Hey ${name} You have full access`
            
//         case "subadmin":
//             return `Hey ${name} You have access to create/delete products`
            
//         case "testprep":
//             return `Hey ${name} You gets access to create/delete tests`
            
//         case "user":
//             return `Hey ${name} You are allowed to view products`
            
//         default:
//             return `Sorry ${name}Invalid role`
//     }

// }

// console.log(getUserRole("Akash", "testprep"));


var getUserRole = (name,role) => {

    switch (role) {

        case "admin":
            return `Hey ${name} You have full access`
            
        case "subadmin":
            return `Hey ${name} You have access to create/delete products`
            
        case "testprep":
            return `Hey ${name} You gets access to create/delete tests`
            
        case "user":
            return `Hey ${name} You are allowed to view products`
            
        default:
            return `Sorry ${name}Invalid role`
    }

}

console.log(getUserRole("Akash", "testprep"));

