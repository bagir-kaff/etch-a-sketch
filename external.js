const body = document.querySelector('body');
let container = document.createElement('div');
container.classList.add('container');//it was written with const
const setSizeButton = document.querySelector('.size');
setSizeButton.addEventListener('click',setNewGrid);
const coloringButton = document.querySelector('.coloring')
let lightValue = -25.5
let n = 16;
let isActive = false;

window.addEventListener('mousedown',()=>isActive = true,
  {capture: true})
window.addEventListener('mouseup',()=>isActive = false)
function setNewGrid(){
  do{
    n = Number(prompt('input resolution max 100'));
  }while(!(n>=0 && n<=100)); //was at the end of dis function
    if(container.childNodes[0]){ // basicaly checks if container exist
      body.removeChild(container);
    }
    setGrid();
}
function changeBackground(){
  if(!isActive){return;}
  let backColor = this.style.backgroundColor
    if(!this.style.backgroundColor){
      this.style.backgroundColor = `rgb(229.5, 229.5, 229.5)`
    }
    else if(backColor !== 'rgb(0,0,0)'){
      // console.log('back color = ' + backColor)
      let array = backColor.slice(backColor.indexOf('(')+1,backColor.indexOf(')')).split(',')
      for(let i=0;i<3&&(array[0]>0||array[1]>0||array[2]>0);i++){
        array[i]= String(+array[i] +  lightValue)
      }
      let string = array.join()
      this.style.backgroundColor = `rgb(${string})`
  }
  
    // if(colorIsEnabled){
    // }
  }
function formGrid(){
  for (let i=1;i<=n;i++){
    const div = document.createElement('div');
    div.classList.add('flexdiv');
    for(let j =1;j<=n;j++){
      const tempDiv = document.createElement('div');
      // tempDiv.textContent = i +' ' + j;
      tempDiv.classList.add('pixel');
      //set height and width
      div.appendChild(tempDiv);
      tempDiv.addEventListener('mouseover',changeBackground)
      // it was written using forEach outside of this function
      tempDiv.addEventListener('mousedown',changeBackground) //second way to color it
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
