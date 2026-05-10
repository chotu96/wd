function login(){

    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    if(u=="admin" && p=="1234"){
        document.getElementById("message").innerHTML =
        "Login Successful";
    }
    else{
        document.getElementById("message").innerHTML =
        "Invalid Login";
    }

}