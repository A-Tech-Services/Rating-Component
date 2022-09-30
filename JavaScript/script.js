// References
let buttons = Array.from(document.getElementsByClassName("btn"));
let Submit = document.querySelector(".submit");
let Rate = document.getElementById("selectedN");
let btnClicked = false;



buttons.forEach(item =>{
    item.addEventListener('click', () =>{
        let activeBtn = document.querySelector(".active");
        activeBtn?.classList.remove("active");
        item.classList.add("active");
        btnClicked = true;

        Rate.innerHTML = item.innerText;
    });
});

Submit.addEventListener("click", () => {
    if(btnClicked == true){
        let beforeRating = document.querySelector(".beforeFeedback");
        let afterRating = document.querySelector(".thankyou");

        beforeRating.classList.add("down");
        afterRating.classList.add("active");
    }
})


