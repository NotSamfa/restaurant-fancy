import restaurantImg from "./restaurant.jpg";

export default function createIntroduction() {
    const restaurantImgPath = restaurantImg;
    const title = "Restaurant Fantasy";
    const textIntro = `Welcome to a world where culinary artistry meets the magic of fantasy. 
                        At our restaurant, every dish is crafted with the same care 
                        and imagination as the tales of legendary heroes and mythical realms. 
                        Step into an enchanting atmosphere where the flavors are as vibrant as the colors of a crystal, 
                        and every bite tells a story. Whether you're seeking a hearty feast fit for a warrior 
                        or a delicate treat worthy of a royal banquet, our menu is designed to 
                        transport you to a place where dreams and deliciousness collide. Join us for an unforgettable dining experience 
                        that blends the extraordinary with the exquisite.`;

    const introduction =  document.createElement("div");
    introduction.setAttribute("id", "introduction");
    
    const h1 = document.createElement("h1");
    h1.textContent = title;

    const introContent = document.createElement("div");
    introContent.setAttribute("id", "introduction__content");

    const p = document.createElement("p");
    p.textContent = textIntro;

    const img = document.createElement("img");
    img.setAttribute("id", "restaurant-pic");
    img.setAttribute("alt", "Restaurant's photo");
    img.src = restaurantImgPath;

    introduction.appendChild(h1);
    introduction.appendChild(introContent);
    
    introContent.appendChild(p);
    introContent.appendChild(img);

    return introduction; 
}