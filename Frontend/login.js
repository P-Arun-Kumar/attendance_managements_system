const lgnBtn = document.getElementById("lgn-btn")
// console.log(lgnBtn)
lgnBtn.addEventListener("click", function () {
    event.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log(password)
    if (email === "" || password === "") {
        alert("Please fill all the fields")
        return
    }
    const users=JSON.parse(localStorage.getItem("users"))
    const matchedUser=users.find(function (user){
       return user.email===email && user.password === password
    })
    if(matchedUser){
        alert("Login Successful")
        window.location.href="index.html"
    }
    else {
        alert("username or password mismatch")
    }

})