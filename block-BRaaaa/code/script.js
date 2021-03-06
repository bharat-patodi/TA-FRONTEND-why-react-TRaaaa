let ul = document.querySelector(".movie-watch-list__list");

let submit = document.querySelector('input[name="submit"]');
let movieInput = document.querySelector('input[name="movie-input"]');
// let allStatus = document.querySelector('input[type="checkbox"]');

let moviesStorage = [];

submit.addEventListener('click', (event) => {
    event.preventDefault();
    insertListItem();
    console.log(localStorage);
});

ul.addEventListener('click', (e) => {
    if([...e.target.classList].includes('fa-times-circle')) {
        e.target.parentElement.style.display = "none";
    }
    if([...e.target.classList].includes('movie-status')) {
        console.log(e.target.parentElement); // TODO: the status needs to update
    }
});

function insertListItem() {
    let li = document.createElement("li");
    ul.append(li);
    li.classList.add("movie-watch-list__list-item");
    li.innerHTML = `<i class="fas fa-ticket-alt"></i>${movieInput.value}<div class="actions"><input type="checkbox" class="movie-status" checked>To Watch</input><i class="far fa-times-circle"></i></div>`;
    moviesStorage.push({name: movieInput.value, status: "to-watch"});
    localStorage.setItem("movie", JSON.stringify(moviesStorage));
    movieInput.value = ""; // Empty the input box
}


console.log(submit);
console.log(movieInput);