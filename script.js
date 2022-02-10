let frm=document.forms[0];
let message=[]
function validator(){
    if (!(frm.check.checked)){

    }
    else if (frm.username.value ==''){
       document.getElementById('erroruser').innerText='نام کاربری خود را وارد کنید';

    }
    else if (frm.username.value.length <= 4){
        document.getElementById('erroruser').innerText='نام کاربری شما باید بیش از4کاراکتر باشد ';
    }

    else if (frm.pass.value ==''){
        document.getElementById('errorpass').innerText='لطفا رمز عبور خود را وارد کنید';

    }
    else if (frm.pass.value.length <= 3){
        document.getElementById('errorpass').innerText='رمز عبور خود را افزایش دهید';

    }

    else if (frm.mail.value ==''){
        document.getElementById('erroremail').innerText='لطفا ایمیل خود را وارد کنید';

    }

}
document.getElementById("sub").addEventListener("click", function(event){
    event.preventDefault()
});