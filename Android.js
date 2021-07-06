let section_android = document.getElementById("Android");
let user_device = navigator.userAgent.toLocaleLowerCase();
if(user_device.includes("android")){
    setTimeout(()=>{
        section_android.style.display = "flex";
    },5*1000)
    
    let app_btn = document.getElementById("btn");
    app_btn.addEventListener("click", ()=>{
        window.open("https://play.google.com/store/apps");
    });
}else{
    section_android.style.display = "none";
}
let app_close = document.getElementById("close");
app_close.addEventListener("click", ()=>{
    section_android.style.display = "none";
});  