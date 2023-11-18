window.onload = function () {
  const selectBox = document.querySelector('.square');

  const btn1 = document.querySelector('.btn1');
  const btn2 = document.querySelector('.btn2');

  const score = document.querySelector('.score>span');
  const validation = document.querySelector('.validation');

  const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  
  let storageColors = [];
  
  const randomColors = () => {
    storageColors = [];
    let storageRightColor = ['#'];
    let storageWrongColor = ['#'];
    //Right Colors
    for (let i = 0; i <= 5; i++) {
      const randomRightColors = Math.floor(Math.random() * colors.length);
      const newRightColors = colors[randomRightColors];
      storageRightColor.push(newRightColors);
    }
    //Remove Comma 
    const convertStorageRightColor = storageRightColor.join('');
    storageColors.push(convertStorageRightColor);

    //Display Colors
    selectBox.style.background = storageColors[0];

    //Wrong Colors
    for (let i = 0; i <= 5; i++) {
      const wrongColors = colors.sort(() => Math.random() - 0.5);
      const randomWrongColors = Math.floor(Math.random() * wrongColors.length);
      const newWrongColors = colors[randomWrongColors];
      storageWrongColor.push(newWrongColors);

    }
    //Remove Comma      
    const convertStorageWrongColor = storageWrongColor.join('');
    storageColors.push(convertStorageWrongColor);

  }
  randomColors();
  //Shuffle value in the button 
  const shuffleColors = () => {
    const randomValue = Math.floor(Math.random() * storageColors.length);
    if (randomValue > 0 || randomValue <= 1) {
      if (randomValue == 1) {
        let a = randomValue - 1;
        btn1.innerHTML = storageColors[a];
      } else {
        let b = randomValue + 1;
        btn1.innerHTML = storageColors[b];
      }
      btn2.innerHTML = storageColors[randomValue];
    } else {
      btn1.innerHTML = storageColors[0];
      btn2.innerHTML = storageColors[1];
    }

  }
  shuffleColors();

let scoreResult = 0;
let highScoreResult = 0;
  btn1.addEventListener('click', function () {

    if (btn1.innerHTML == storageColors[0]) {
      highScoreResult = scoreResult++ + 1;
      score.innerHTML = highScoreResult;
      validation.innerHTML = "<div class='right'>Correct!</div>";
      btn2.disabled = true;
      btn1.classList.add("active");
      setTimeout(() => {
        randomColors();
        shuffleColors();
        btn2.disabled = false;
        validation.innerHTML = "";
        btn1.classList.remove("active");
      }, 1000);

    } else {
      validation.innerHTML = "<div class='wrong'>Wrong!</div>";
      btn2.disabled = true;
      btn1.classList.add("active");
      scoreResult = 0;
      score.innerHTML = "0";
      setTimeout(() => {
        randomColors();
        shuffleColors();
        btn2.disabled = false;
        validation.innerHTML = "";
        btn1.classList.remove("active");
      }, 1000);
    }
  });

  btn2.addEventListener('click', function () {
    if (btn2.innerHTML == storageColors[0]) {
      score.innerHTML = scoreResult++ + 1;
      validation.innerHTML = "<div class='right'>Correct!</div>";
      btn1.disabled = true;
      btn2.classList.add("active");
      setTimeout(() => {
        randomColors();
        shuffleColors();
        btn1.disabled = false;
        validation.innerHTML = "";
        btn2.classList.remove("active");
      }, 1000);
    } else {
      validation.innerHTML = "<div class='wrong'>Wrong!</div>";
      btn1.disabled = true;
      btn2.classList.add("active");
      scoreResult = 0;
      score.innerHTML = "0";
      setTimeout(() => {
        randomColors();
        shuffleColors();
        btn1.disabled = false;
        validation.innerHTML = "";
        btn2.classList.remove("active");
      }, 1000);
    }
  });
}




