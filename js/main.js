var nameInput = document.getElementById("nameInput");
var linkInput = document.getElementById("linkInput");

var rowsContainer;
if (localStorage.getItem("rows") == null) {
  rowsContainer = [];
} else {
  rowsContainer = JSON.parse(localStorage.getItem("rows"));
  display();
}
function addRow() {
  var row = {
    index: rowsContainer.length + 1,
    name: nameInput.value,
    link: linkInput.value,
    delete: "delete",
  };
  rowsContainer.push(row);
  localStorage.setItem("rows", JSON.stringify(rowsContainer));
  display();
  clearForm();
}

function display() {
  var rows = ``;
  for (var i = 0; i < rowsContainer.length; i++) {
    rows += `<tr>
          <th scope="row">${i + 1}</th>
          <td  >${rowsContainer[i].name}</td>
          <td><button class="btn  btn-visit px-3" onClick="openLink(${i})"> <i class="fa-solid fa-eye me-1"></i> Visit</button></td>
          <td><button class="btn  btn-delete px-3" onClick="deleteRow( ${i} )"> <i class="fa-solid fa-trash me-1"></i> Delete</button></td>
         </tr>`;
  }
  document.getElementById("tableBody").innerHTML = rows;
}

function openLink(index) {
  var link = rowsContainer[index].link;
  window.open(link, "_blank");
}

function deleteRow(deleteindex) {
  rowsContainer.splice(deleteindex, 1);
  localStorage.setItem("rows", JSON.stringify(rowsContainer));
  display();
}

function clearForm() {
  nameInput.value = "";
  linkInput.value = "";
}
