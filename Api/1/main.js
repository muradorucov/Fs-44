// GET
// POST
// PUT
// PATCH
// DELETE




// fetch();

// Promise
// pending
// fulfilled
// rejected


// async function myFunc() {
//   return "TEst"
// }

// const ulElem = document.querySelector("ul");

// let url = "https://dummyjson.com/products";
// let reqInfo = {
//   headers: {
//     "Accept-Language": "az-AZ",
//     "X-Api-Key": "whdgw38739343rh-349034u",
//     auth: "Test"
//   },
//   body: {

//   },
//   method: "GET"
// }
// fetch("https://dummyjson.com/products", {
//   method: "POST"
// })
//   .then(res => res.json())
//   .then(data => {
//     data.products.forEach(product => {
//       ulElem.innerHTML += `
//       <li>
//       <img src="${product.thumbnail}" alt="">
//       <span>${product.title}</span>
//     </li>
//       `
//     });
//   })



// Promise
/*
  then()
  catch()
  finally()
*/

fetch("https://admin.ttm.az/api/headers", {
  method: "GET"
})
  .then(res => res.json())
  .then(data => console.log("all companies", data))



fetch("https://northwind.vercel.app/api/suppliers/4", {
  method: "GET"
})
  .then(res => res.json())
  .then(data => console.log("single company", data))



fetch("https://northwind.vercel.app/api/suppliers", {
  method: "POST",
  body: JSON.stringify({
    companyName: "Test edirem",
    contactName: "Test edirem",
    contactTitle: "Test edirem"
  }),
  headers: {
    "Content-type": "Application/json"
  }
})
  .then(res => res.json())
  .then(data => console.log("post data", data))



fetch("https://northwind.vercel.app/api/suppliers/4", {
  method: "PUT",
  body: JSON.stringify({
    companyName: "Test edirem",
    contactName: "Test edirem",
    contactTitle: "Test edirem"
  }),
  headers: {
    "Content-type": "Application/json"
  }
})
  .then(res => res.json())
  .then(data => console.log("post data", data))


fetch("https://northwind.vercel.app/api/suppliers/5", {
  method: "PATCH",
  body: JSON.stringify({
    companyName: "Test edirem",
    contactName: "Test edirem",
    contactTitle: "Test edirem"
  }),
  headers: {
    "Content-type": "Application/json"
  }
})
  .then(res => res.json())
  .then(data => console.log("post data", data))