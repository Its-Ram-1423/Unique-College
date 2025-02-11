


// window.onload=function(){
   
//     const currentUserName=sessionStorage.getItem("userName")
//    const currentPasswprd=sessionStorage.getItem("password")
//     console.log('test load',currentUserName,currentPasswprd)
//     if(currentUserName==null && currentPasswprd==null)
//     {
//        window.location.assign('../html/Login.html')
//     }
// }

//Arrow function

const logout=()=>{
    sessionStorage.removeItem("userName")
    sessionStorage.removeItem("password")
    window.location.assign('../html/Login.html')

}