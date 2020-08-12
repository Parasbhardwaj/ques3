var employees = [];
var countEmployee = 2;
var available = 1;

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function addRow(tableId) {
  var rows = "";
  var name = document.getElementById("Name").value;
  var gender = document.getElementById("exampleFormControlSelect1").value;
  var age = document.getElementById("Age").value;
  var designation = document.getElementById("Designation").value;
  var department = document.getElementById("Department").value;
  var joining = document.getElementById("Joining").value;
  var newRow = document.getElementById(tableId).insertRow(1);
  rows += `<td> ${name} </td><td> ${department} </td><td>
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="customCheck2"
      />
      <label
        class="custom-control-label"
        for="customCheck2"
      ></label>
    </div>
  </td>
  <td>
    <button
      type="button"
      class="btn btn-outline-info btn-sm"
      data-toggle="modal"
      data-target="#addEmployeeModal"
    >
      <i class="fa fa-edit"></i>&nbsp; Edit
    </button>
    <button
      type="button"
      class="btn btn-outline-danger btn-sm"
      onclick="deleteRow(this)"
    >
      <i class="fa fa-trash"></i>&nbsp; Delete
    </button>
  </td>`;
    newRow.innerHTML = rows;
    $('#addEmployeeModal').modal('hide');
    $('#addEmployeeModal').find('form').trigger('reset');
    employees.unshift({name, gender, age, designation, department, joining});
    countEmployee += 1;
    available += 1;
    document.getElementById('total').innerHTML = countEmployee;
    document.getElementById('available').innerHTML = available;
    alert("Employee successfully added ");
}

window.onload = function () {};
