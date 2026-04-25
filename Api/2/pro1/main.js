// GET
// POST
// PUT
// Delete
// Patch


//! https://pixabay.com/api/?key=24090419-925e057925ba4cc124682bb5f&q=Baku

//! https://dummyjson.com/products?limit=100&page=2&title=apple

// fetch("https://pixabay.com/api", {
//   method: "GET",
//   headers: {
//     "key": "24090419-925e057925ba4cc124682bb5f"
//   }
// })

// req.query = {
//   "key": "24090419-925e057925ba4cc124682bb5f",
//   "q": "Baku"
// }
const elements = document.getElementById("elements");
const form = document.querySelector("form");
const searchInput = document.getElementById("search")
getData("Baku")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getData(searchInput.value)
})


function getData(param) {
  fetch(`https://pixabay.com/api/?key=24090419-925e057925ba4cc124682bb5f&q=${param}`)
    .then(res => res.json())
    .then(data => {
      elements.innerHTML = ""
      data.hits.forEach(hit => {
        elements.innerHTML += `
        <div class="shadow-md border-2 border-red-700 rounded-md">
          <img
            src="${hit.largeImageURL}"
            class="h-[250px] w-full object-cover">
        </div>
`
      });
    })
}

