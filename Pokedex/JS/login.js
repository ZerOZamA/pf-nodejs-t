window.onload=init;
function init (){
    if (!localStorage.getItem("token")){
        document.querySelector('.btn-secondary').addEventListener('click',function(){
        window.location.href="signin.html"
    });
    document.querySelector('.btn-primary').addEventListener('clck',login);
    }else{
        window.location.href="pokedex.html";
    }
}

function login(){
var mail=document.getElementById('input-mail').value;
var password=document.getElementById('input-password').value;
axios({
    method:'post',
    url:'locallhost:3000/user/login',
    data:{
        user_mail:mail,
        user_password:password}
    }).then(function(res){
        console.log(res);
        if(  res.data.code == 200){
            localStorage.setItem("token",res.data.mensage)
            alert("inicio exitoso");  
            window.location.href="pokedex.html"    
        }
        else {
            alert("usuario y o contraseña incorrewcta");
        }
        
     }).catch(function(err)
         {console.log(err);
         })
     }