var role = "subadmin";

switch (role) {
    case "admin":
        console.log("You have full access");
        break;
    case "subadmin":
        console.log("access to create/delete products");
        break;
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "user":
        console.log("allowed to view products")
        break;
    default:
        console.log("Invalid role");
}