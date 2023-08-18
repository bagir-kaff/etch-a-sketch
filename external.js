const body = document.querySelector('body');
let container = document.createElement('div');
container.classList.add('container');
//it was written like const container
const setSizeButton = document.querySelector('.size');
setSizeButton.addEventListener('click',setNewGrid);
let n = 16;
let coloring = 0;

function setNewGrid(){
  do{
    n = Number(prompt('input resolution max 100'));
  }while(!(n>=0 && n<=100)); //was at the end of dis function
    if(container.childNodes[0]){ // basicaly checks if container exist
      body.removeChild(container);
    }
    setGrid();
}
function changeBackground(e){
    if (this.classList.value === 'pixel'){
      this.style.backgroundColor = `hsl(${coloring},100%,50%)`;
      if(coloring === 360)
        coloring = 0;
      coloring++;
    }
}
function formGrid(){
  for (let i=1;i<=n;i++){
    const div = document.createElement('div');
    div.classList.add('flexdiv');
    for(let i =1;i<=n;i++){
      const tempDiv = document.createElement('div');
      // tempDiv.textContent = i;
      tempDiv.classList.add('pixel');
      //set height and width
      div.appendChild(tempDiv);
      tempDiv.addEventListener('mouseover',changeBackground)
      // it was written using forEach outside of this function
    }
    container.appendChild(div);
    //put a row of pixel into container
  }
}
function setGrid(){
  if(container){
    container = document.createElement('div'); //clean variable
    container.classList.add('container');
  }
  formGrid();
  body.appendChild(container);
}
setGrid();