let menu = [
  {
    id: 1,
    titile: "buttermilk pancake",
    category: "breakfast",
    price: 15.99,
    img: "Images/item-1.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
  {
    id: 2,
    titile: "veg burger",
    category: "lunch",
    price: 19.99,
    img: "Images/item-2.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
  {
    id: 3,
    titile: "milk shake",
    category: "shakes",
    price: 10.99,
    img: "Images/item-3.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
  {
    id: 4,
    titile: "bread omlate",
    category: "breakfast",
    price: 8.99,
    img: "Images/item-4.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
  {
    id: 5,
    titile: "jinger crash burger",
    category: "lunch",
    price: 16.8,
    img: "Images/item-5.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
  {
    id: 6,
    titile: "choclate shake",
    category: "shakes",
    price: 9.99,
    img: "Images/item-6.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
  {
    id: 7,
    titile: "egg patsa",
    category: "lunch",
    price: 10.11,
    img: "Images/item-7.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
  {
    id: 8,
    titile: "veg burger",
    category: "breakfast",
    price: 10.0,
    img: "Images/item-8.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
  {
    id: 9,
    titile: "milk pancake",
    category: "breakfast",
    price: 17.99,
    img: "Images/item-9.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, this si one of the best food in our ares",
  },
  {
    id: 10,
    titile: "veg special burger",
    category: "lunch",
    price: 13.59,
    img: "Images/item-2.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
  {
    id: 11,
    titile: "shrja shake",
    category: "shakes",
    price: 9.99,
    img: "Images/item-3.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
  {
    id: 12,
    titile: "burger omlate",
    category: "breakfast",
    price: 11.99,
    img: "Images/item-4.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
  {
    id: 13,
    titile: "rice burger",
    category: "lunch",
    price: 18.8,
    img: "Images/item-5.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
  {
    id: 14,
    titile: "choclate icecream shake",
    category: "shakes",
    price: 12.99,
    img: "Images/item-6.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
  {
    id: 15,
    titile: "eggwhite patsa",
    category: "lunch",
    price: 14.11,
    img: "Images/item-7.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
  {
    id: 6,
    titile: "sugarfree burger",
    category: "breakfast",
    price: 12.0,
    img: "Images/item-8.jpeg",
    desc: "   ipsum dolor sit amet consectetur adipisicing elit. Earum nisi quae atque! Vero aliquam, odit corrupti consequatur minus reprehenderit eum",
  },
];

let sectioncenter = document.querySelector(".section-center");
let container = document.querySelector(".btn-container");

//  load items
let loaded = () => {
  displaymenuitems(menu);
  displaymenubtn();
};

//  event listeners
window.addEventListener("DOMContentLoaded", loaded);

let displaymenuitems = (menuitem) => {
  let displaymenu = menuitem.map((item) => {
    return ` <article class="menu-item">
          <img src=${item.img} alt=${item.titile} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.titile}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
             ${item.desc}
            </p>
          </div>
        </article>`;
  });

  displaymenu = displaymenu.join("");
  sectioncenter.innerHTML = displaymenu;
};

let displaymenubtn = () => {
  let categorys = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  let categorybtns = categorys
    .map((category) => {
      return ` <button type="button" class="filter-btn" data-id=${category}>
    ${category}
  </button>`;
    })
    .join("");
  container.innerHTML = categorybtns;
  let filterbtns = document.querySelectorAll(".filter-btn");
  //  filter items

  filterbtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let category = e.currentTarget.dataset.id;
      let menucategory = menu.filter((item) => {
        // console.log(item.category);
        if (item.category === category) {
          return item;
        }
      });
      // console.log(menucategory)

      if (category === "all") {
        displaymenuitems(menu);
      } else {
        displaymenuitems(menucategory);
      }
    });
  });
};
