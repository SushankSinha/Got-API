function myFunc(){

    let character = document.getElementById("character").value;
    let characterAll = character.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

const promise = fetch('https://thronesapi.com/api/v2/Characters');

promise.then((data)=>data.json()).then((res)=>{
    res.forEach((obj)=>{ 
        if(characterAll == obj.firstName || characterAll == obj.fullName || characterAll == obj.lastName){
            // document.getElementById('firstName').innerHTML = `First Name : <b> ${obj.firstName} <b>`;
            // document.getElementById('lastName').innerHTML = `Last Name : <b>  ${obj.lastName} <b>`;
            document.getElementById('fullName').innerHTML = `<b>  ${obj.fullName} <b>`;
            document.getElementById('title').innerHTML = `Title : <b> ${obj.title} <b>`;
            document.getElementById('family').innerHTML = `Family :<b> ${obj.family} <b>`;
            document.getElementById('imageUrl').src = obj.imageUrl;
            document.getElementById('link').href = `https://en.wikipedia.org/wiki/${obj.firstName}_${obj.lastName}`;
            document.getElementById('img').href = `https://www.google.co.in/search?q=${obj.firstName}+${obj.lastName}&hl=en&authuser=0&tbm=isch&sxsrf=APwXEdchFctVQSvLIe70QW3tkBZkvbZL-A%3A1682857382821&source=hp&biw=767&bih=704&ei=pl1OZM-gL8ve2roP57amkA0&iflsig=AOEireoAAAAAZE5rtqQKl3AGuAv3vmkXK_cYw1R6QBz6&ved=0ahUKEwjPi4ikzNH-AhVLr1YBHWebCdIQ4dUDCAc&oq=jon+snow&gs_lcp=CgNpbWcQDFAAWABgAGgAcAB4AIABAIgBAJIBAJgBAKoBC2d3cy13aXotaW1n&sclient=img`;
        }
    })
})
}


