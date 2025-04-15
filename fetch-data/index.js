var para = document.getElementById("para")
var btn = document.getElementById("btn");

function fetchData(){
    fetch("https://baconipsum.com/api/?type=all").then(response =>{
        return response.json().then(data =>{
            para.innerHTML = data.join("<br>");
            
        }).catch(error =>{
            para.innerHTML = "Error in the API"
        })
    })
}

fetchData();


btn.addEventListener("click", (e)=>{
    fetchData();
})