const input = document.querySelector(".input");
const button = document.querySelector(".add-btn");
let Tasklist = document.querySelector(".task-here");

button.addEventListener("click", () => {
  if (input.value == "") {
    alert("Plz enter something");
  } else {
    let listitem = document.createElement("li");

    // left
    let tasks = document.createElement("div");
    tasks.className = "tasks";

    let image = document.createElement("img");
    image.className = "uncheck-img";
    image.src = "/images/unchecked.png";
    let flag = 0;
    image.addEventListener("click", () => {
      if (flag == 0) {
        image.src = "/images/checked.png";
        flag = 1;
      } else {
        image.src = "/images/unchecked.png";
        flag = 0;
      }
    });

    let inpt = document.createElement("input");
    inpt.className = "value-here";
    inpt.value = input.value;
    inpt.setAttribute("readonly", "");

    // right
    let buttons = document.createElement("div");
    buttons.className = "buttons";
    console.log(buttons);
    let editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.innerText = "Edit";
    let check = 0;
    editBtn.addEventListener("click", () => {
      if (check == 0) {
        editBtn.innerText = "Save";
        inpt.removeAttribute("readonly");
        check = 1;
      } else {
        editBtn.innerText = "Edit";
        inpt.setAttribute("readonly", "");
        check = 0;
      }
    });

    let deletebtn = document.createElement("button");
    deletebtn.className = "delete-btn";
    deletebtn.innerText = "Delete";
    deletebtn.addEventListener('click',()=>{
      listitem.remove();
  })


    Tasklist.append(listitem);
    listitem.append(tasks);
    tasks.append(image);
    tasks.append(inpt);
    listitem.append(buttons);
    buttons.append(editBtn);
    buttons.append(deletebtn);
    input.value = ''
  }
});
