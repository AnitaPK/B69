const data = [
  {
    id: 1,
    name: "Light and modern house",
    address: "7409 Knollwood Cove, Austin, TX, 78731 ",
    bedrooms: 3,
    batroom: 2,
    area: 1950,
    imgPath: "./assets/LightOne.png",
  },
  {
    id: 2,
    name: "Modern and light and  house",
    address: "09 Knollwood Cove, Austin, TX, 78731 ",
    bedrooms: 4,
    batroom: 3,
    area: 2950,
    imgPath: "./assets/LightTwo.png",
  },
];

document.querySelector("#renderData").innerHTML = data.map(
  (p) => `
                    <div class='col-md-6 col-lg-3'>
<div class="card" style="width: 18rem;">
  <img src=${p.imgPath} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


                    </col>
`
).join('');
