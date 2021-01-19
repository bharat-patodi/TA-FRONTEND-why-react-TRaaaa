let ul = document.querySelector(".movie-watch-list__list");

let submit = document.querySelector('input[name="submit"]');
let movieInput = document.querySelector('input[name="movie-input"]');

submit.addEventListener('click', (event) => {
    event.preventDefault();
    insertListItem();
    console.log(localStorage);
});

ul.addEventListener('click', (e) => {
    if([...e.target.classList].includes('fa-times-circle')) {
        e.target.parentElement.style.display = "none";
    }
});

function insertListItem() {
    let li = document.createElement("li");
    ul.append(li);
    li.classList.add("movie-watch-list__list-item");
    li.innerHTML = `<i class="fas fa-ticket-alt"></i>${movieInput.value}<i class="far fa-times-circle"></i>`;
    localStorage.setItem("movie", movieInput.value);
    movieInput.value = ""; // Empty the input box
    // localStorage.clear()
}
console.log(submit);
console.log(movieInput);