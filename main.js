class Human {
	constructor(name, age, weight) {
	  this.name = name;
	  this.age = age;
	  this.weight = weight;
	}
  }
  
  class Adult extends Human {
	constructor(name, age, weight, passportNumber) {
	  super(name, age, weight);
	  this.passportNumber = passportNumber;
	}
  
	isAdult() {
	  return this.age >= 18;
	}
  }
  
  function verifyAdult() {
	const name = document.getElementById("personName").value;
	const age = parseInt(document.getElementById("personAge").value);
	const weight = parseInt(document.getElementById("personWeight").value);
	const passportNumber = document.getElementById("passportNumber").value;
  
	const person = new Human(name, age, weight);
	const adult = new Adult(name, age, weight, passportNumber);
  
	let resultHtml = "<h3>Результат перевірки повноліття:</h3>";
	resultHtml += `<p>${name} ${adult.isAdult() ? "є повнолітній(ня)" : "не є повнолітній(ня)"}</p>`;

	document.getElementById("adultResult").innerHTML = resultHtml;
  }
  