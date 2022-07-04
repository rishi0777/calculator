"use-strict";
let label = document.getElementById("num1");
let textbox = document.getElementById("num2");

let num1 = 0;
let num2 = 0;
let operation = "";

function change() {
  if (num1 == 0 && operation == "") {
    label.textContent = "";
  } else {
    label.textContent = num1 + operation;
  }
}

function writeNumber(x) {
  textbox.value += x;
}

function writeOperation(op) {
  if (textbox.value == "") {
    label.textContent = "Write number first, then select operation";
    setTimeout(change, 2500);
  } else if (operation == "") {
    operation = op;
    num1 = parseInt(textbox.value);
    label.textContent = textbox.value + operation;
    textbox.value = "";
  } else {
    //operation already contains something
    num2 = parseInt(textbox.value);
    label.textContent = textbox.value + operation;
    result(op);
  }
  //   console.log(num1 + " " + op + " " + num2);
}

function result(op) {
  if (num1 == "") {
    label.textContent = "Write num1,select operation,write num2,press equal";
    setTimeout(change, 3000);
  } else if (textbox.value == "") {
    //this means num2 is null
    if (operation == "") {
      label.textContent = "3. Select Valid Operation";
      setTimeout(change, 2500);
    } else {
      label.textContent = "Write second number then press equal button";
      setTimeout(change, 2500);
    }
  } else {
    if (op == "") {
      //equal to key  is pressed
      num2 = parseInt(textbox.value);

      if (operation == "+") {
        operation = "";
        add(num1, num2, "");
      } else if (operation == "-") {
        operation = "";
        sub(num1, num2, "");
      } else if (operation == "/") {
        operation = "";
        div(num1, num2, "");
      } else if (operation == "%") {
        operation = "";
        mod(num1, num2, "");
      } else if (operation == "^") {
        operation = "";
        pow(num1, num2, "");
      } else if (operation == "*") {
        operation = "";
        prod(num1, num2, "");
      }
    } else {
      //operation key to is pressed
      num2 = parseInt(textbox.value);

      if (operation == "+") {
        operation = op;
        add(num1, num2, "+");
      } else if (operation == "-") {
        operation = op;
        sub(num1, num2, "-");
      } else if (operation == "/") {
        operation = op;
        div(num1, num2, "/");
      } else if (operation == "%") {
        operation = op;
        mod(num1, num2, "%");
      } else if (operation == "^") {
        operation = op;
        pow(num1, num2, "^");
      } else if (operation == "*") {
        operation = op;
        prod(num1, num2, "*");
      }
    }
  }
}
function add(x, y, opType) {
  label.textContent = x + y + operation;
  num1 = x + y;
  opType == "" ? (textbox.value = num1) : (textbox.value = "");
  //   console.log(num1);
}
function sub(x, y, opType) {
  label.textContent = x - y + operation;
  num1 = x - y;
  opType == "" ? (textbox.value = num1) : (textbox.value = "");
  //   console.log(num1);
}
function prod(x, y, opType) {
  label.textContent = x * y + operation;
  num1 = x * y;
  opType == "" ? (textbox.value = num1) : (textbox.value = "");
  //   console.log(num1);
}
function mod(x, y, opType) {
  label.textContent = (x % y) + operation;
  num1 = x % y;
  opType == "" ? (textbox.value = num1) : (textbox.value = "");
  //   console.log(num1);
}
function div(x, y, opType) {
  label.textContent = x / y + operation;
  num1 = x / y;
  opType == "" ? (textbox.value = num1) : (textbox.value = "");
  //   console.log(num1);
}
function pow(x, y, opType) {
  label.textContent = x ** y + operation;
  num1 = x ** y;
  opType == "" ? (textbox.value = num1) : (textbox.value = "");
  //   console.log(num1);
}

function erase() {
  label.textContent = "";
  textbox.value = "";
  num1 = 0;
  num2 = 0;
  operation = "";
}
