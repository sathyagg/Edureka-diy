
console.log("start");
console.log("mid");
// setTimeout(function(){
    // console.log("set timeout")
// },10000)
// for(let i =0; i<500;i++){
    function loginUser(email,password) {
        const promise = new  promise (function (resolve,reject) {
    
        setTimeout(function() {
            console.log("working..")
            resolve({username: "abc"});
        },3000)
    });
    return
    }
    function getUserDetails(username,callback) {
        //hit the backend
        const promise = new  promise (function (resolve,reject) {
        setTimeout(function () {
            resolve({username,age:25,likes:100});
            
        },2000);
    });
    }
    function fetchposts(username,callback) {
        setTimeout(function () {
            callback(['post1','post2']);
        },2000)
    }
    
console.log("end");
const promise = new Promise(function (resolve,reject) {
    setTimeout(function() {
        reject("your request has been rejected..")
    },2000);
    
});
    promise
    .then(function (value) {
        console.log(value);

    })
    .catch(function(reason) {
        console.log(reason)
        
    });

loginUser("ssathyaedureka","12345678",function(userObj){
    console.log(userObj);
    getUserDetails(userObj.username,function(data){
         console.log(data);
    });
    fetchposts(userObj.username,function(posts){
        console.log(posts);
    })

});
   



// }