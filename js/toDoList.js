"use strict";

const toDoListContainer = document.querySelector(".toDoContainer");
const addInput = document.querySelector(".addItem");
const addBtn = document.querySelector(".add");
const toDoList = document.querySelector(".toDoList");
const deleteBtn = document.querySelector(".delete");
let toDoArr = [];
if (localStorage.getItem("toDo") === null) {
  localStorage.setItem("toDo", JSON.stringify(toDoArr));
} else {
  getDataInList();
}

function getDataInList() {
  let localStorageData = localStorage.getItem("toDo");
  let arrLocalStorageData = JSON.parse(localStorageData);
  if (arrLocalStorageData.length > 0) {
    toDoArr = JSON.parse(localStorage.getItem("toDo"));
    showItemsToDo();
  }
}

addBtn.addEventListener("click", function () {
  if (addInput.value === "") {
    return false;
  }
  let toDoListObj = {
    toDo: addInput.value,
    checked: false,
  };
  toDoArr.push(toDoListObj);
  addInput.value = "";
  showItemsToDo();
  localStorage.setItem("toDo", JSON.stringify(toDoArr));
});

function showItemsToDo() {
  let itemList = "";
  toDoArr.forEach(function (item, index) {
    if (item.checked === false) {
      itemList += `
    <li id="li_${index}">
    
    <label for="item_${index}"><input type="checkbox" id="item_${index}">${item.toDo}</label>
    </li>
    `;
    } else {
      itemList += `
    <li id="li_${index}">
    
    <label for="item_${index}"><input type="checkbox" id="item_${index}" checked>${item.toDo}</label>
    </li>
    `;
    }
  });
  toDoList.innerHTML = itemList;
}

toDoList.addEventListener("change", function (event) {
  let clickedItem = event.target.id.slice(-1);
  toDoArr[clickedItem].checked = !toDoArr[clickedItem].checked;
  localStorage.setItem("toDo", JSON.stringify(toDoArr));
});

function deleteItem(index) {
  toDoArr.splice(index, 1);
  localStorage.setItem("toDo", JSON.stringify(toDoArr));
  showItemsToDo();
}

deleteBtn.addEventListener("click", function () {
  let flag = true;
  while (flag) {
    flag = false;
    let deletedItemIndex = -1;
    for (let i = 0; i < toDoArr.length; i++) {
      if (toDoArr[i].checked === true) {
        deletedItemIndex = i;
        flag = true;
        break;
      }
    }
    if (deletedItemIndex !== -1) {
      deleteItem(deletedItemIndex);
    }
  }
});
