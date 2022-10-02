// body CSS style
document.body.style.cssText = "height :100vh;margin: 0px; box-sizing: border-box; background-color: rgba(236, 236, 236); font-family:tahoma, Arial";


// header
let header = document.createElement("header");
header.className = "website-head";
header.style.cssText = "background-color: white;align-items: center; display: flex; justify-content: space-between; padding: 10px;";

//logo
let logo = document.createElement("div");
logo.className = "logo";
logo.innerText = "Logo"
logo.style.cssText = "padding: 0px 5px; font-weight: bold; color: #2ab72a;font-size: 18px";
header.appendChild(logo);

//ul (nav)
let nav = document.createElement("ul");
header.appendChild(nav);
nav.style.cssText = "padding: 0px; margin: 0px; display: flex;text-decoration: none; list-style: none;color: #333;font-size: 13px;";

// li home
let home = document.createElement("li");
let homeText =document.createTextNode("Home");
home.appendChild(homeText);
nav.appendChild(home);

// li about
let about = document.createElement("li");
let aboutText = document.createTextNode("About");
about.appendChild(aboutText);
nav.appendChild(about);

// li service
let service = document.createElement("li");
let serviceText = document.createTextNode("Service");
service.appendChild(serviceText);
nav.appendChild(service);

// li contact
let contact = document.createElement("li");
let contactText = document.createTextNode( "Contact");
contact.appendChild(contactText);
nav.appendChild(contact);

console.log(nav.children.length);
for (i=0 ; i< nav.children.length;i++){
  nav.children[i].style.cssText = "padding-right: 10px; padding-right: 10px;align-self: center;"

}

// main content

let main = document.createElement("main");
main.style.cssText = "display: flex; flex-wrap: wrap;margin: 10px 10px 0; justify-content: space-between;"

// display: grid; gap: 10px; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr))


//products 
for (i=1 ; i <= 15 ; i++){
  let products = document.createElement("div");
  products.className = "box"
  products.style.cssText = "font-size: 13px; background-color: white; flex-basis: calc((100% - 80px)/ 3); text-align: center;margin-bottom: 10px; padding: 10px; height: 70px;display: flex; align-items: center; justify-content: center;flex-direction: column;"
  
  let productsSpan = document.createElement("span");
  productsSpan.innerHTML = `${i}`
  productsSpan.style.cssText = "font-size: 20px; font-weight: bold;"
  products.prepend(productsSpan)
  
  let productsText = document.createTextNode("product");
  products.appendChild(productsText)
  main.appendChild(products);
}


// footer
let footer = document.createElement("footer");
footer.innerHTML = "Copyright 2021"
footer.style.cssText = "background-color:#2ab72a; color: white;padding:10px; text-align: center"




document.body.prepend(footer)
document.body.prepend(main)
document.body.prepend(header)