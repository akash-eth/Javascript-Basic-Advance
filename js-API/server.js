/* 
    ReferenceError: fetch is not defined:
        This command will only work on the browser console.
*/
fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        // console.log(response);
        // console.log("API", response.json());   // this gives the body present inside response !!
        return response.json();
    })
    .then((data) => {
        // console.log("DATA:", data);
        var joke = data.value;
        console.log("JOKE:", joke);
    })
    .catch(err => {
        console.log(err);
    })