const url = "";
fetch(url).then((res)=>{
res.json();
}).then((data)=>{
    console.log(data);
})
.catch((err)=>console.log(err));


//async await other method
try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
} catch (error) {
    console.log(error);
}