// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

//All images were taken from this site: http://clipart-library.com/

function openInfo(evt, tabName) {

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices() {
  var check = [];
  //checks if any of the inputs are checked, and adds it to the array to save them. Then we can index the array to see which options are checked
  $('#dietSelect input:checked').each(function() {
    check.push($(this).attr('name'));
  });
  var s2 = document.getElementsByClassName('test');
    var vegetables = document.getElementById('Vegetables');
    var fish = document.getElementById('Fish');
    var grains = document.getElementById('Grains');
    var seasoning = document.getElementById('Seasoning');  
    var dairy = document.getElementById('Dairy');

  // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    for (i = 0; i < s2.length; i++) {
        s2[i].innerHTML = "";
    }

  // obtain a reduced list of products based on restrictions
  var optionArray = restrictListProducts(check);

  // sort product list by price
  console.log(optionArray);
optionArray.sort(function(a, b){return a.price - b.price});

  for (i = 0; i < optionArray.length; i++) {

    var productName = optionArray[i].name; //shows product name
    var productPrice = optionArray[i].price; //added to show product price
    var productCategory = optionArray[i].category;
    // create the checkbox and add in HTML DOM
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "product";
    checkbox.value = productName;
    // s2.appendChild(checkbox);

    // create a label for the checkbox, and also add in HTML DOM
    var label = document.createElement('label')
    label.htmlFor = productName;
    label.appendChild(document.createTextNode(productName+":"+productPrice));
    var pic = document.createElement('img');
    pic.src = "images/" + productName + ".png";
    pic.alt = productName;
    pic.width ="100";
    pic.height ="100";
    // s2.appendChild(label);

    var div = document.createElement('div');

    if (productCategory === 'vegetables') {
        vegetables.appendChild(div);
     } else if (productCategory == 'dairy') {
        dairy.appendChild(div);
     } else if (productCategory == 'fish') {
        fish.appendChild(div);
     } else if (productCategory == 'grains') {
        grains.appendChild(div);
     } else if (productCategory== 'seasoning'){
        seasoning.appendChild(div);
     }

        div.appendChild(pic);
        div.appendChild(document.createElement("br"));
        div.appendChild(document.createElement("br"));
        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(document.createElement("br"));
        div.appendChild(document.createElement("br"));

    }

    // create a breakline node and add in HTML DOM
    s2.appendChild(document.createElement("br"));
  }


//This function is from w3schools.
  function openFood(evt, cityName) {
  // Declare all variables
  var i, tabcontent2, tablinks2;

  // Get all elements with class="tabcontent" and hide them
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {

  var ele = document.getElementsByName("product");
  var chosenProducts = [];

  var c = document.getElementById('displayCart');
  c.innerHTML = "";

  // build list of selected item
  var para = document.createElement("P");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      para.appendChild(document.createTextNode(ele[i].value));
      para.appendChild(document.createElement("br"));
      chosenProducts.push(ele[i].value);
    }
  }
   // add paragraph and total price
  c.appendChild(para);
  c.appendChild(document.createTextNode("The total cost of your order is         $" + getTotalPrice(chosenProducts)));

}


