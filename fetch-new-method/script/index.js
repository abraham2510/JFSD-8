var para = document.getElementById("para");
var btn = document.getElementById("btn");

async function fetchData() {
  try {
    var response = await fetch("https://baconipsum.com/api/?type=all");
    var data = await response.json();
    para.innerHTML = data.join("<br>")

  } catch (error) {
    para.innerHTML = "the error in get data"
    
  }
}

fetchData();

btn.addEventListener("click" ,()=>{
    fetchData();
})
