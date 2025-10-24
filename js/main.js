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
  if (isSiteNameValid() && isSiteLinkValid()) {
  
  var row = {
    index: rowsContainer.length + 1,
    name: nameInput.value,
    link: linkInput.value,
   
  };
  rowsContainer.push(row);
  localStorage.setItem("rows", JSON.stringify(rowsContainer));
  display();
  clearForm();
  nameInput.classList.remove("is-valid");
  linkInput.classList.remove("is-valid");
}
else{
  alert("Please enter valid data");
}
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

// form validation
var siteNameRegex = /^[A-Z][a-z0-9_]{3,}$/;
var siteLinkRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

function isSiteNameValid() {
  if (siteNameRegex.test(nameInput.value)) {
   console.log("valid name");
    
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    nameError.classList.add("d-none");
    nameError.classList.remove("d-block");
    return true;
  }
  else {
    nameInput.classList.add("is-invalid");
    nameInput.classList.remove("is-valid");
    nameError.classList.add("d-block");
    nameError.classList.remove("d-none");
    console.log("not valid name");
    return false;
  }

  
}
function isSiteLinkValid() {
  if (siteLinkRegex.test(linkInput.value)) {
    linkInput.classList.add("is-valid");
    linkInput.classList.remove("is-invalid");
    linkError.classList.add("d-none");
    linkError.classList.remove("d-block");
    return true;
  }
else{
    linkInput.classList.add("is-invalid");
    linkInput.classList.remove("is-valid");
    linkError.classList.add("d-block");
    linkError.classList.remove("d-none");
    return false;
}
  } 

