document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    buildToDo(event.target.querySelector("#new-task-description").value);
    form.reset();
  });
});

function buildToDo(todo) {
  const p = document.createElement("p");
  const button = document.createElement("button");
  
  button.addEventListener("click", handleDelete);
  button.textContent = "❌";

  p.textContent = `${todo}`;

  p.appendChild(button);

  document.querySelector("#list").appendChild(p);
}

function handleDelete(event) {
  event.target.parentNode.remove();
}
