let removeBtns = document.querySelectorAll('#removeBtn')
let statusBtns = document.querySelectorAll('#statusBtn');

const form = document.querySelector('#addBookForm');

const addBookBtn = document.querySelector('#addBookBtn');

const overlay = document.querySelector('.overlay');
const formContainer = document.querySelector('.formContainer');

const booksDisplay = document.querySelector('#booksDisplay');

// Store the "new" book objects into an array.

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents form from submitting

    let submittedTitle = e.target[0].value
    let submittedAuthor = e.target[1].value
    let submittedPages = e.target[2].value
    let submittedIsRead = e.target[3].checked

    let div = document.createElement("div");
    div.setAttribute("class", "bookCard");

    let newTitle = document.createElement("p");
    let newAuthor = document.createElement("p");
    let newPages = document.createElement("p");

    let statusBtn = document.createElement("button");
    let removeBtn = document.createElement("button");

    newTitle.innerText = submittedTitle;
    newAuthor.innerText = submittedAuthor;
    newPages.innerText = `${submittedPages} Pgs`;
    statusBtn.setAttribute("id", "statusBtn");
    removeBtn.setAttribute("class", "btn");
    removeBtn.setAttribute("id", 'removeBtn')
    removeBtn.innerText = "Remove";

    if (submittedIsRead === true) {
      statusBtn.setAttribute("class", "btn completedBtn");
      statusBtn.innerText = "Completed";
    } else if (submittedIsRead === false) {
      statusBtn.setAttribute("class", "btn notCompletedBtn");
      statusBtn.innerText = "Not Completed";
    } else {
        alert("Invalid Entry")
    }

    statusBtn.addEventListener('click', (btn)=>{
        let btnText = btn.target.innerText
        if(btnText === "Completed"){
            btn.target.className = "btn notCompletedBtn";
            btn.target.innerText = "Not Completed";
            return
        }
        if(btnText === "Not Completed"){
            btn.target.className = "btn completedBtn";
            btn.target.innerText = "Completed";
            return
        }
    })

    removeBtn.addEventListener('click', (e) =>{
        e.path[1].remove()
    })

    div.appendChild(newTitle);
    div.appendChild(newAuthor);
    div.appendChild(newPages);
    div.appendChild(statusBtn);
    div.appendChild(removeBtn);

    booksDisplay.appendChild(div);

    overlay.classList.remove('active');
    formContainer.classList.remove('active');
})

addBookBtn.addEventListener('click', ()=>{
    overlay.classList.add('active')
    formContainer.classList.add('active')
})

overlay.addEventListener('click', ()=>{
    overlay.classList.remove('active')
    formContainer.classList.remove('active')
})