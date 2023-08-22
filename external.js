const body = document.querySelector('body');
let container = document.createElement('div');
container.classList.add('container');//it was written with const
const setSizeButton = document.querySelector('.size');
setSizeButton.addEventListener('click',setNewGrid);
const coloringButton = document.querySelector('.coloring')

let n = 16;
let colorIsEnabled = false;
coloringButton.addEventListener('click',toggleColor);
window.addEventListener('keydown',(e)=>{
  if (e.code === 'KeyC')
    toggleColor()
})

function toggleColor(){
  colorIsEnabled = !colorIsEnabled
  if(!colorIsEnabled)
  lightValue = 0;
  else
    lightValue = 50;
}
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
  // console.log(e)
  let backColor = this.style.backgroundColor
  // console.log('background color = ' + this.style.backgroundColor)
  if (this.classList.value === 'pixel'){
    if(!this.style.backgroundColor){
      this.style.backgroundColor = `rgb(229.5, 229.5, 229.5)`
      // console.log('ok')
    }
    else if(backColor !== 'rgb(0,0,0)'){
      let array = backColor.slice(backColor.indexOf('(')+1,backColor.indexOf(')')).split(',')
      for(let i=0;i<3&&(array[0]>0||array[1]>0||array[2]>0);i++){
        array[i]= String(+array[i] - 25.5 )
        console.log('ok')
      }
      let string = array.join()
      console.log(string)
      this.style.backgroundColor = `rgb(${string})`
      console.log(this.style.backgroundColor)
}
    if(colorIsEnabled){
      if(hueValue === 360)
        hueValue = 0;
      hueValue++;
    }
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