function userRole(name,role){

    switch (role) {
        case "admin":
            return `Hey ${name} You have full access`
            break;
        case "subadmin":
            return `Hey ${name} You have access to create/delete products`
            break;
        case "testprep":
            return `Hey ${name} You gets access to create/delete tests`
            break;
        case "user":
            return `Hey ${name} You are allowed to view products`
            break;
        default:
            return `Sorry ${name}Invalid role`
    }

}

console.log(userRole("Akash", "testprep"));

