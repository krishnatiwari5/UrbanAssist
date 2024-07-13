const asyncHandler = require("express-async-handler")

// const inputSearchbar = document.getElementById("mainSearchInput")

//  const searchOnEnter = (e) => {
//     e.preventDefault();
//     if (e.key === "Enter") {
//       e.preventDefault();
//       console.log("do validate");
//       document.getElementById("introSearchBtn").click();
//     }
//   };

//   inputSearchbar.addEventListener("keypress", searchOnEnter)

const handleSearchLocation = asyncHandler( async (req,res) => {
console.log(req.params)

res.send(req.params)
}) 

module.exports = handleSearchLocation