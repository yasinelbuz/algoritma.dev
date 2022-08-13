const link = document.querySelector(".question");

document.addEventListener('click', e => {
    if (e.composedPath().includes(link)) {
        const divPopup = document.querySelector(e + ".popup");
        divPopup.style.display = "block";
    } else {
        console.log("dışına tıkladın");
    }
});