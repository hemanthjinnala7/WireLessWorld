function showloginform() {
    document.getElementById("signupform").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}
function showsignform() {
    document.getElementById("signupform").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
}

function signupclick() {
    let cnt=0;
    let namesjs = document.getElementById("name-signup").value;
    let emailsjs = document.getElementById("email-signup").value;
    let passsjs = document.getElementById("password-signup").value;
    if(namesjs === null || namesjs.trim() === "") 
    {
        cnt++;
    }
    if(emailsjs === null || emailsjs.trim() === "")
    {
        cnt++;
    }
    if ( passsjs === null || passsjs.trim() === "")
    {
        cnt++;
    }
    if(cnt>0)
    {
        document.getElementById("parasjs").innerHTML="please fill properly";
    }
    document.getElementById("parasjs").innerHTML="Thank you..you complete data";
    let caps_flag = false;
    let small_flag = false;
    let num_flag = false;
    for(let i=0;i<passsjs.length;i++)
    {
        if(passsjs.charCodeAt(i) >= 65 && passsjs.charCodeAt(i) <= 90)
        {
            caps_flag = true;
        }
        if(passsjs.charCodeAt(i) >= 97 && passsjs.charCodeAt(i) <= 122)
        {
            small_flag = true;
        }
        if(passsjs.charCodeAt(i) >= 48 && passsjs.charCodeAt(i) <= 57)
        {
            num_flag = true;
        }
    }
    if(caps_flag && small_flag && num_flag && passsjs.length>=10)
    {
        document.getElementById("parasjs").innerHTML = "strong password";
    }
    else
    {
        document.getElementById("parasjs").innerHTML="invalid password parameter";
    }
    
}