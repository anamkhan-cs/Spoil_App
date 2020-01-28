var __openStatus__ = false;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

function results() {
	var foodName = document.getElementById('food-name').value;
	var expData = document.getElementById('expiration-date').value;
	var foodGroup = document.getElementById('group-name');
	var selectedGroup = foodGroup.options[foodGroup.selectedIndex].text;


	if (expData == "" || selectedGroup == "" || foodName == "") {
		console.log("EMPTY");
		alert("Fill All Fields!");
		return false;
	}
	else {
		if (today > expData) {
			console.log("EXPIRED");
			alert("Item has expired, will be added to Grocery List");
			localStorage.setItem("flag", 2)
			localStorage.setItem("name", "Name: " + foodName);
			localStorage.setItem("group", "Food Group: " + selectedGroup);
			console.log(localStorage.getItem("flag"))
			window.open("grocerylist.html", '_self', false);

		}
		else {
			console.log("still good");
			localStorage.setItem("flag", 1);
			display1.style.display = "block";
			display1.innerHTML += "<li class='inventory-item'> Name: " + foodName +
				'"</br> Date: <span class="expiration" id="expiration1">"' +
				expData + "</span> </br> Food Group: " + selectedGroup +
				'<button class="edit" id="edit-item-button" type="button" onclick="editDate()">' +
				'<img src="ref_images/edit-button.png" height="30px" width="30px">' +
				'</button>'  + "</li></br> " ;
			localStorage.setItem("name", "Name: " + foodName);
			localStorage.setItem("group", "Food Group: " + selectedGroup);
		}
		closeForm();
		document.getElementById("add-form").reset();
	}
}


function editDate() {
		var button_edit =document.getElementsByClassName('edit');
		for(var i=0; i< button_edit.length; i++){
			button_edit[i].addEventListener('click', function(){
				var dateobj = document.getElementsByClassName('expiration');
			  var x= button_edit.length - 1;
				localStorage.setItem("index", x);
					dateobj[x].innerHTML=
					'<form id="edit-form" method="post">' +
					'<input id="expirationDate" placeholder="Expiration Date" type="date">' +
					'<input id="submit" placeholder="Submit" onclick="edit()" type="button" value="Submit">' +
					'		</form>'
					console.log("in edit date");
			});
		}
	}

function edit() {
	var newexpData = document.getElementById('expirationDate').value;
	console.log(newexpData);
	var newdate = document.getElementsByClassName('expiration');
	newdate[localStorage.getItem("index")].innerHTML = newexpData;

	if (today > newexpData) {
		console.log("EXPIRED");
		alert("Item has expired, will be added to Grocery List");
		localStorage.setItem("flag", 2)
		console.log(localStorage.getItem("flag"))
		window.open("grocerylist.html", '_self', false);

	}
}

function __init__() {
	display1.style.display = "none";
	return false;
}

function openForm() {
	if (__openStatus__ == false) {
		document.getElementById('add-form').style.display = "block";
		console.log("Form opened");
		__openStatus__ = true;
	} else {
		console.log("Already open");
	}
	return false;
}

function closeForm() {
	if (__openStatus__ == true) {
		document.getElementById('add-form').style.display = "none";
		console.log("Form closed");
		__openStatus__ = false;
	}
	return false;
}xs
