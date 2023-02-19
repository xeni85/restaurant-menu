//entree objects
let entree = {
  first: {
    id: 0,
    name: "Popcorn Chicken",
    desc: "Beer battered chicken, a duet of sauces",
    price: "$16.00",
    img: "images/pexels-meggy-kadam-aryanto-7428284.jpg",
  },
  second: {
    id: 1,
    name: "Crispy Tenders",
    desc: "Crispy panko crusted chicken tenders, pesto aioli",
    price: "$15.00",
    img: "images/pexels-lukas-1352270.jpg",
  },
  third: {
    id: 2,
    name: "Baby Back Ribs",
    desc: "Slow cooked with a bourbon BBQ glaze",
    price: "$32.00",
    img: "images/pexels-julia-filirovska-8250273.jpg",
  },
  fourth: {
    id: 3,
    name: "Tongue Baguette",
    desc: "Cured tongue, cherry mustard, toasted sourdough",
    price: "$30.00",
    img: "images/pexels-odin-reyna-7455913.jpg",
  },
  fifth: {
    id: 4,
    name: "Pulled Beef Spring Rolls",
    desc: "Pulled beef, crispy fried Asian style, sweet chili",
    price: "$19.00",
    img: "images/pexels-bam-awey-5335751.jpg",
  },
  sixth: {
    id: 5,
    name: "Short Rib Gnocchi",
    desc: "Handmade gnocchi, short rib ragout, white truffle oil",
    price: "$28.00",
    img: "images/pexels-karolina-grabowska-6659622.jpg",
  },
};

//grab the nodes
let entreeDiv = document.querySelector(".entree");
let dishesDiv = document.querySelector(".dishes");
let entreeKeys = Object.keys(entree);
counter = 0;

//place the entree objects in proper div
let populateDishes = () => {
  let btns = [];
  if (counter == 0) {
    for (let i = 0; i < Object.keys(entree).length; i++) {
      let img = document.createElement("img");
      img.setAttribute("src", entree[entreeKeys[i]].img);
      img.setAttribute("id", `img${i}`);
      img.classList.toggle("carouselImages");
      dishesDiv.append(img);
      btns.push(img);
    }
    counter++;
  }

  //Place single dish in center div
  let populateArticle = (btn) => {
    console.log("clicked");
    for (let i = 0; i < Object.keys(entree).length; i++) {
      if ("img" + entree[entreeKeys[i]].id == btn.id) {
        console.log(btn)
        articleHeader.innerText = entree[entreeKeys[i]].name;
        articleSpan.innerText = entree[entreeKeys[i]].price;
        articleP.innerText = entree[entreeKeys[i]].desc;
        articleImg.setAttribute("src", entree[entreeKeys[i]].img);
      }
    }
  }

  //call the fuction from within function with a delay
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      populateArticle(btn)
    })
  });

};

entreeDiv.addEventListener("click", populateDishes);


// let doTHeThingOutside = populateDishes();
// doTHeThingOutside(populateArticle());
// console.log([...document.querySelector(".dishes").children]);
let articleHeader = document.getElementById("article-header");
let articleSpan = document.getElementById("article-span");
let articleP = document.getElementById("article-p");
let articleImg = document.getElementById("article-img");

// let populateArticle = (e) => {
//   console.log("clicked");
//   console.log(btns);
//   if ("img" + entree[entreeKeys].id === e.target.id) {
//     articleHeader.innerText = entree[entreeKeys].name;
//     articleSpan.innerText = entree[entreeKeys].price;
//     articleP.innerText = entree[entreeKeys].desc;
//     articleImg.setAttribute("src", entree[entreeKeys].img);
//   }
//   // outsideBtns.forEach((btn) => {
//   //   btn.addEventListener("click", populateDishes(populateArticle));
//   // });
// };

// class Reservations {
//   constructor(nombre, resTime, howMany) {
//     this.nombre = nombre;
//     this.resTime = resTime;
//     this.howMany = howMany;
//   }

//   setReservation = () => {};
// }