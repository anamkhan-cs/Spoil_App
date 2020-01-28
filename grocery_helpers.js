function results() {
	var foodName = document.getElementById('food-name').value;
	var foodGroup = document.getElementById('group-name');
	var selectedGroup = foodGroup.options[foodGroup.selectedIndex].text;

	if (selectedGroup == "" || foodName == "") {
		console.log("EMPTY");
		alert("Fill All Fields!");
		return false;
	} else {
		display2.style.display = "block";
		display2.innerHTML += "<li class='grocery-item'> Name: " + foodName + "</br> Food Group: " + selectedGroup + "</br></li>";
	}
	document.getElementById("add-form1").reset();

}

function deleteItem() {
	var list = document.getElementById("display2");
	list.removeChild(list.childNodes[0]);
}

function __init__() {

  console.log("in init");
  display1.style.display = "none";
  display2.style.display = "none";
	if ((localStorage.getItem("flag")) == 2) {
		console.log("in loop");
    console.log(localStorage.setItem("flag", 1));
    display2.style.display = "block";
		display2.innerHTML += "<li class='grocery-item'>" + localStorage.getItem("name") + "</br>" + localStorage.getItem("group") + "</li>";
	}
	return false;
}

__init__();
