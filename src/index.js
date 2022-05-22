import "./styles/style.scss"
console.log("Hello World!");

async function f(username){
    const s = await fetch(`https://api.github.com/users/${username}`).then((value)=>{
        console.log(value.json().then((value)=>{
            console.log(value)
        }));
    });
}

let a = document.querySelector('.search_area');
console.log(a); 
a.addEventListener("keydown", (e)=>{
    if (e.code === "Enter"){
        e.preventDefault();
        f(a.value);
    }   
})