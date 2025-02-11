//***if you want local or sesssion storage then uncomment below code ***

// const userName = "vijay"
// const password = "JD@2026"

// sessionStorage.setItem("userName", userName);
//  sessionStorage.setItem("password", password);

//***if you want local or sesssion storage then comment out below code ***

window.userList = ""
window.onload = () => {
    fetch('http://localhost:8080/userDetais', {
        method: 'GET',
    }).then(res => res.json())
        .then(data => { window.userList = data; console.log("Added", data) })
        .catch(err => alert('check local api server started or not started and data format'))
    console.log(userList, 'testing')
}


function CheckLoginUser(event) {
    event.preventDefault();

    var getUserName = document.getElementById("userName").value
    var getUserPassword = document.getElementById("password").value

    const isValiduser = window.userList.some((item) =>
        item.userName === getUserName && item.password === getUserPassword

    )
    console.log(isValiduser, 'testing')
    if (isValiduser) {

        window.location.replace('../html/index.html')
    }
    else {
        window.alert("Pleease enter correct details")
    }
}

//***if you want local or sesssion storage then uncomment below code and comment above function*****

// function CheckLoginUser(event) {
//     event.preventDefault();

//     var getUserName = document.getElementById("userName").value
//     var getUserPassword = document.getElementById("password").value

//     const localUserName=sessionStorage.getItem("userName")
//     const localPassword=sessionStorage.getItem("password")

//     if(getUserName===localUserName && getUserPassword===localPassword)
//     {
//         window.location.assign('../html/index.html')
//     }
//     else{
//         window.alert("Pleease enter correct details")
//     }
// }




const AddLoginUser = (event) => {
    event.preventDefault();
    var getUserName = document.getElementById("userName").value
    var getUserPassword = document.getElementById("password").value
    const newUser = {
        userName: getUserName,
        password: getUserPassword
    }
    // fetchdata
    fetch('http://localhost:8080/userDetais', {
        method: 'POST',
        body: JSON.stringify(newUser)
    }).then(res => {
        if (res.ok) {
            res.json()
            alert('Thanks for Signup,Please Try signIn now ')
        }})
        .then(data => console.log("Added", data))
        .catch(err => alert('check local api server started or not started and data format'))

}


//***if you want local or sesssion storage then uncomment below code and comment above function *****

// const AddLoginUser = (event) => {
//     event.preventDefault();
//     var getUserName = document.getElementById("userName").value
//     var getUserPassword = document.getElementById("password").value
//     sessionStorage.setItem("userName", getUserName);
//     sessionStorage.setItem("password", getUserPassword);
//     if (getUserName && getUserPassword !== null) {
//         document.getElementById("myForm").reset();
//         alert('Thanks for Signup ,Please Sign In explore')

//     }
//     else {
//         alert('Please Enter Valid detalis')

//     }

// }

