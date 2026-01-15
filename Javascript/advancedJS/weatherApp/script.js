async function fetchData(city){
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca018df54353f065aaed7d802825b8be`)
    .then(res=>res.json())
    .then(data=>renderData(data))
    .catch(err=>console.log(err))
    .finally(()=>console.log("api called"))
}


document.getElementById("btnData").addEventListener('click', ()=>{
    const city = document.getElementById("inputCity").value    
    fetchData(city)

})


function renderData(data){
    document.getElementById("showData").innerHTML = `
                        <h2>${data.name} <span class="text-primary">${data.sys.country}</span></h2>
                        <p>${data.weather[0].main} : ${data.weather[0].description}</p>
    `
}
