import menuList from "./dataMenu.js";

export default function createMenu() {
    const title = "Menu";

    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");

    const h1 = document.createElement("h1");
    h1.textContent = title;

    const menuSection = document.createElement("div");
    menuSection.setAttribute("id", "menu-section");

    menuList.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("menu-section__item");

        const h3 = document.createElement("h3");
        h3.textContent = item.title;

        const description = document.createElement("p");
        description.textContent = item.description;

        const price = document.createElement("p");
        price.textContent = `$ ${item.price}`;

        div.appendChild(h3);
        div.appendChild(description);
        div.appendChild(price);
        
        menuSection.appendChild(div);
    })

    menu.appendChild(h1);
    menu.appendChild(menuSection);
    
    return menu;
}
