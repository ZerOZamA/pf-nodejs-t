window.onload=init;
function init (){
    if (!localStorage.getItem("token")){
        document.querySelector('.btn-secondary').addEventListener('click',function(){
            window.location.href="login.html"
        });
        document.querySelector('.btn-primary').addEventListener('clck',login);
    }else{
        window.location.href="pokedex.html";
    }

    
}

function signin(){
var mail=document.getElementById('input-mail').value;
var password=document.getElementById('input-password').value;
var name=document.getElementById('inptut-name').value;
axios({
    method:'post',
    url:'locallhost:3000/user/signin',
    data:{
        user_name:name,
        user_mail:mail,
        user_password:password}
}).then(function(res){
   console.log(res);
   alert("registro exitoso");
   window.location.href="login.html";
}).catch(function(err)
    {console.log(err);
    })
}