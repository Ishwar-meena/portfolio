async function getProjectsFolders() {
    let response = await fetch("http://127.0.0.1:3000/assets/Projects/");
    let data = await response.text();
    let div = document.createElement("div");
    div.innerHTML = data;
    let temp = div.querySelectorAll("a")
    let folders = [];
    temp.forEach((e) => {
        if (e.innerText != "../") {
            folders.push(e.innerText);
        }
    })
    return folders;
}

async function main() {
    let folder = await getProjectsFolders();
    folder.forEach(async (e) => {
        let cards = document.querySelector(".cards");
        let jsonData = await fetch(`http://127.0.0.1:3000/assets/Projects/${e}info.json`);
        let metaData = await jsonData.json();
        cards.innerHTML += `<div class="card">
                    <img src='Assets/Projects/${e}project.png' alt="${e}">
                    <a href='${metaData.link}'>
                        <p>${metaData.description}
                        </p>
                    </a>
                </div>`
    })

}

let humburgerIcon = document.getElementById("humburger-icon");
let crossIcon = document.getElementById("cross-icon");
let navMenu = document.querySelector("nav ul");

humburgerIcon.addEventListener("click", () => {
    navMenu.style.display = "block";
    humburgerIcon.style.display = "none";
    crossIcon.style.display = "block";
});

crossIcon.addEventListener("click", () => {
    navMenu.style.display = "none";
    crossIcon.style.display = "none";
    humburgerIcon.style.display = "block";
});



main();