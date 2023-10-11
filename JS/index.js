const r = document.querySelector(":root");
const bodyElement = document.body;
const randomizeElement = document.querySelector(".randomize");
const destinations = [
    {
        name: "WEDDING",
        location: "倆倆拾光",
        img:
            "../img/banner/01.jpg"
    },
    {
        name: "couple",
        location: "倆倆拾光",
        img:
            "../img/banner/02.jpg"
    },
    {
        name: "MATERNITY",
        location: "倆倆拾光",
        img:
            "../img/banner/03.jpg"
    },
    {
        name: "FAMALIES",
        location: "倆倆拾光",
        img:
            "../img/banner/04.jpg"
    },
    {
        name: "WEDDING",
        location: "倆倆拾光",
        img:
            "../img/banner/05.jpg"
    }

];
let nextDestination = destinations[1];

const getRandomDestination = () => {
    const randomId = Math.floor(Math.random() * destinations.length);
    return destinations[randomId];
};

const displayNextContent = () => {
    if (bodyElement.classList.contains("body--animated")) {
        return;
    }

    bodyElement.classList.add("body--animated");

    setTimeout(() => {
        r.style.setProperty("--img-current", `url(${nextDestination.img})`);
        r.style.setProperty("--text-current-title", `"${nextDestination.name}"`);
        r.style.setProperty(
            "--text-current-subtitle",
            `"${nextDestination.location}"`
        );
        setTimeout(() => {
            bodyElement.classList.remove("body--animated");
            setTimeout(() => {
                nextDestination = getRandomDestination();
                r.style.setProperty("--img-next", `url(${nextDestination.img})`);
                r.style.setProperty("--text-next-title", `"${nextDestination.name}"`);
                r.style.setProperty(
                    "--text-next-subtitle",
                    `"${nextDestination.location}"`
                );
            }, 1000);
        }, 1000);
    }, 1000);
};

randomizeElement.addEventListener("click", displayNextContent);



/*置頂按鈕 ===================================================================================================== RWD OK**/

document.querySelector('.sticky-icon').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
});



