
class BreadCalculator {
  
  constructor(flour=0,water=0,sugar=0,fat=0,salt=0,yeast=0) {
    this.flourWeight = Math.round(flour);
    this.waterWeight = Math.round(flour * (water * 0.01));
    this.sugarWeight = Math.round(flour * (sugar * 0.01));
    this.fatWeight = Math.round(flour * (fat * 0.01));
    this.saltWeight = Math.round(flour * (salt * 0.01));
    this.yeastWeight = Math.round(flour * (yeast * 0.01));
    this.waterPercent = Math.round(water);
    this.sugarPercent = Math.round(sugar);
    this.fatPercent = Math.round(fat);
    this.saltPercent = Math.round(salt);
    this.yeastPercent = Math.round(yeast);
    this.estimatedWeight = this.flourWeight + this.waterWeight + this.sugarWeight + this.fatWeight + this.saltWeight + this.yeastWeight;
  }

  createForm() {    
    let breadMakerTitle = document.createElement('h1');
    breadMakerTitle.innerText = "Bread Calculator";
    breadMakerTitle.id = "breadTitle";
    document.body.appendChild(breadMakerTitle);
    
    let breadBasket = document.createElement('div');
    breadBasket.id = "breadBasket";
    document.body.appendChild(breadBasket);


    let breadForm = document.createElement('form');
    breadForm.id = "breadForm";
    breadBasket.appendChild(breadForm);


    let flourLabel = document.createElement('label');
    flourLabel.innerHTML = "<p>Flour Weight in Grams</p>";
    flourLabel.for = "flourInput";
    breadForm.appendChild(flourLabel);
    let flourInput = document.createElement('INPUT');
    flourInput.id = "flourInput";
    flourInput.type = "number";
    flourInput.value = this.flourWeight;
    flourLabel.appendChild(flourInput);

    let waterLabel = document.createElement('label');
    waterLabel.innerText = "Percent Water";
    waterLabel.for = "waterInput";
    breadForm.appendChild(waterLabel);
    let waterInput = document.createElement('INPUT');
    waterInput.id = "waterInput";
    waterInput.type = "number";
    waterInput.value = this.waterPercent;
    waterLabel.appendChild(waterInput);
    
    let sugarLabel = document.createElement('label');
    sugarLabel.innerText = "Percent Sugar";
    sugarLabel.for = "sugarInput";
    breadForm.appendChild(sugarLabel);
    let sugarInput = document.createElement('INPUT');
    sugarInput.id = "sugarInput";
    sugarInput.type = "number";
    sugarInput.value = this.sugarPercent;
    sugarLabel.appendChild(sugarInput);
    
    let fatLabel = document.createElement('label');
    fatLabel.innerText = "Percent Fat";
    fatLabel.for = "fatInput";
    breadForm.appendChild(fatLabel);
    let fatInput = document.createElement('INPUT');
    fatInput.id = "fatInput";
    fatInput.type = "number";
    fatInput.value = this.fatPercent;
    fatLabel.appendChild(fatInput);

    let saltLabel = document.createElement('label');
    saltLabel.innerText = "Percent Salt";
    saltLabel.for = "saltInput";
    breadForm.appendChild(saltLabel);
    let saltInput = document.createElement('INPUT');
    saltInput.id = "saltInput";
    saltInput.type = "number";
    saltInput.value = this.saltPercent;
    saltLabel.appendChild(saltInput);
    
    let yeastLabel = document.createElement('label');
    yeastLabel.innerText = "Percent Yeast";
    yeastLabel.for = "yeastInput";
    breadForm.appendChild(yeastLabel);
    let yeastInput = document.createElement('INPUT');
    yeastInput.id = "yeastInput";
    yeastInput.type = "number";
    yeastInput.value = this.yeastPercent;
    yeastLabel.appendChild(yeastInput);

    let submitButton = document.createElement('div');
    submitButton.innerText = "Calculate";
    submitButton.className = "btn";
    submitButton.id = "breadBtn";
    breadForm.appendChild(submitButton);
  }

  createResult() {
    let resultPage = document.createElement('div');
    resultPage.id = "resultPage";
    let breadBasket = document.getElementById('breadBasket');
    breadBasket.appendChild(resultPage);
    let resultTitle = document.createElement('h2');
    resultTitle.innerText = "Results";
    resultPage.appendChild(resultTitle);
    let resultList = document.createElement('ul');
    resultPage.appendChild(resultList);

    let flourResult = document.createElement('li');
    flourResult.innerText = `Flour: \n${this.flourWeight}g`
    resultList.appendChild(flourResult);

    let waterResult = document.createElement('li');
    waterResult.innerText = `Water: \n${this.waterWeight}g (${this.waterPercent}%)`
    resultList.appendChild(waterResult);

    let sugarResult = document.createElement('li');
    sugarResult.innerText = `Sugar: \n${this.sugarWeight}g (${this.sugarPercent}%)`
    resultList.appendChild(sugarResult);

    let fatResult = document.createElement('li');
    fatResult.innerText = `Fat: \n${this.fatWeight}g (${this.fatPercent}%)`
    resultList.appendChild(fatResult);

    let saltResult = document.createElement('li');
    saltResult.innerText = `Salt: \n${this.saltWeight}g (${this.saltPercent}%)`
    resultList.appendChild(saltResult);

    let yeastResult = document.createElement('li');
    yeastResult.innerText = `Yeast: \n${this.yeastWeight}g (${this.yeastPercent}%)`
    resultList.appendChild(yeastResult);

    let estimatedResult = document.createElement('li');
    estimatedResult.innerText = `Estimated Final Weight: \n${this.estimatedWeight}g`
    resultList.appendChild(estimatedResult);
  }

  addButtonListener(){
    let button = document.getElementById('breadBtn');
    button.addEventListener('click', () => {
      let flour = parseInt(document.getElementById('flourInput').value);
      let yeast = parseInt(document.getElementById('yeastInput').value);
      let sugar = parseInt(document.getElementById('sugarInput').value);
      let fat = parseInt(document.getElementById('fatInput').value);
      let salt = parseInt(document.getElementById('saltInput').value);
      let water = parseInt(document.getElementById('waterInput').value);
      let calculated = new BreadCalculator(flour, water, sugar, fat, salt, yeast);
      document.getElementById('breadBasket').remove();
      calculated.loadCalc();
    });
  };

  loadCalc() {
    this.createForm();
    this.createResult();
    this.addButtonListener();
  }
}

let breadCalc = new BreadCalculator()
breadCalc.loadCalc();

// calculateWeight(flourWeight, percentWater, percentFat, percentSugar, percentSalt, percentYeast)

// addButtonListener(breadCalc);
