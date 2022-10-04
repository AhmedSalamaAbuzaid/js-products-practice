let create = ele => document.createElement(ele);

// create elements
let header = create("header");
let logo = create("h1")
let nav = create("ul")
let content = create("div")
let footer = create("footer")


// create clasess
header.classList.add("website-head");
logo.className = "logo"
nav.className = "nav"
content.classList.add("content");
footer.classList.add("footer");



// append to header
header.appendChild(logo);
header.appendChild(nav);

// append to body
document.body.prepend(footer);
document.body.prepend(content);
document.body.prepend(header);

for (i=1; i <= 15; i++){
    if (i <= 4){
        let li = create("li");
        li.className = `menu-list-${i}`
        li.style.cssText = "padding-right: 10px; padding-right: 10px;align-self: center;"
        nav.appendChild(li)
    }
    // create products boxs
    let prodBox = create("div");
    prodBox.className = "box";
    prodBox.textContent = `products`

    let prodnum = create("span");
    prodBox.prepend(prodnum);
    prodnum.textContent = `${i}`
    content.appendChild(prodBox);
    // prodBox style
    prodBox.style.cssText = " color: rgb(136,136,136) ; color: rgb(136, 136, 136); padding: 20px; background-color: white; border: 1px solid rgb(221,221,221); width: calc((100% - 150px ) /3); border-radius: 0.5rem; text-align: center;" ;
    prodnum.style.cssText = "display: block ; font-size: 25px; color: black ; padding-bottom: 10px " ;
}

function getElement (className,Text) {
    let element = document.querySelector(className);
    element.textContent = Text;
}
getElement(".logo","Elzero")
getElement(".menu-list-1","Home")
getElement(".menu-list-2","About")
getElement(".menu-list-3","Service")
getElement(".menu-list-4","Content")
getElement(".footer","copyright 2021")

// webepage styling 

// body CSS style
document.body.style.cssText = "height :100vh;margin: 0px; box-sizing: border-box; background-color: rgba(236, 236, 236); font-family:tahoma, Arial";

//content CSS style
content.style.cssText = "display: flex; flex-wrap: wrap; gap: 10px;justify-content: space-between; align-content: center;padding: 15px;";

// header style cssText
header.style.cssText = "background-color: white;align-items: center; display: flex; justify-content: space-between; padding: 10px;";

// logo style cssText
logo.style.cssText = "padding: 0px 5px; font-weight: bold; color: #2ab72a;font-size: 18px";

// nav style cssText
nav.style.cssText = "padding: 0px; margin: 0px; display: flex;text-decoration: none; list-style: none;color: #333;font-size: 13px;";

// footer style cssText
footer.style.cssText = "background-color:#2ab72a; color: white;padding:10px; text-align: center"
