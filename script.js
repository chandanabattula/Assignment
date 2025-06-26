let darkElement = document.getElementById("dark-moon");
let headEl = document.getElementById("head");
let navList = document.getElementById("nav-list");
let darkEl = document.getElementById("dark-mode");
let titleEl = document.getElementById("title");
let infoEl = document.getElementById("info");
let paraEl = document.getElementById("paragaraph");
let logonameEl = document.getElementById("logo-name");
let logosEl = document.getElementById("logos");
let navEl = document.getElementById("nav-lists");
let navlogoEl = document.getElementById("nav-logo");
let btmlogoEl = document.getElementById("btm-logo");
let btnEl = document.getElementById("btn");
let socialContainerEl = document.getElementById("social-container");


darkElement.onclick = function() {
    // Change background color
    document.body.style.backgroundColor = "black";
    paraEl.style.color = "white";
    logonameEl.style.color = "white";
    headEl.style.color = "white";

    btnEl.style.border = "2px solid black";


    // Change list items color
    let listItems = navList.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "white";
    }

    let socialListDiv = document.createElement("div");
    socialListDiv.id = "social-list";
    socialListDiv.className = "d-flex flex-column mt-5 m-3";

    // Social media image links
    let socialLinks = [
        "https://res.cloudinary.com/dddrjslg5/image/upload/v1750911868/Facebook_yhpafu.svg",
        "https://res.cloudinary.com/dddrjslg5/image/upload/v1750911730/Instagram_mpru7c.svg",
        "https://res.cloudinary.com/dddrjslg5/image/upload/v1750911714/Twitter_v2izye.svg",
        "https://res.cloudinary.com/dddrjslg5/image/upload/v1750911781/GitHub_dija9z.svg",
        "https://res.cloudinary.com/dddrjslg5/image/upload/v1750911707/LinkedIn_zmv1us.svg",
        "https://res.cloudinary.com/dddrjslg5/image/upload/v1750909855/Group_12_y1oeqe.svg",
        "https://res.cloudinary.com/dddrjslg5/image/upload/v1750911778/Koo_zo4dj5.svg"
    ];

    // Loop through the links and create image elements
    socialLinks.forEach(link => {
        let img = document.createElement("img");
        img.src = link;
        img.className = "social-links m-2";
        socialListDiv.appendChild(img);
    });

    // Append the generated social list div to the container
    socialContainerEl.appendChild(socialListDiv);

    // Optional: Disable button to prevent adding the list multiple times
    darkElement.onclick = null;


    darkElement.src = "https://res.cloudinary.com/dddrjslg5/image/upload/v1750873455/Group_21_fsszxc.svg";
    let listItem = navEl.getElementsByTagName('li');
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].style.color = "white";
    }
    darkEl.src = "https://res.cloudinary.com/dddrjslg5/image/upload/v1750873455/Group_21_fsszxc.svg";
    document.body.style.backgroundColor = "black";
    titleEl.style.color = "white";
    infoEl.style.color = "white";
    logosEl.style.color = "white";
    navlogoEl.src = "https://res.cloudinary.com/dddrjslg5/image/upload/v1750902486/Group_15_q4zydc.svg";
    btmlogoEl.src = "https://res.cloudinary.com/dddrjslg5/image/upload/v1750902486/Group_15_q4zydc.svg";
}