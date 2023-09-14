const body = document.querySelector('body');
let container = document.createElement('div');
container.classList.add('container');//it was written with const
const box = document.querySelector('.box');
const setSizeButton = document.querySelector('.size');
setSizeButton.addEventListener('click',setNewGrid);
const sizeInfoPanel = document.querySelector('.size-info')

const colorPickers = document.querySelectorAll('input[type=color]');
colorPickers.forEach((colorPicker)=>colorPicker.addEventListener('click', enableSolidColor))
const solidColorButton = document.querySelector('.solid-color');
const rainbowButton = document.querySelector('.rainbow')
const colorNoiseButton = document.querySelector('.color-noise')
const darkenButton = document.querySelector('.darken')
const lightenButton = document.querySelector('.lighten')

let previousMode = 0
let lightValue = 25.5 //255/10 atau 10%
let n = 16;//px
let hueValue = 0;
let hueAddition = 1;
let currentMode = 0;
let isActive = false;
let mouseButton = 0; /// 0/2
sizeInfoPanel.textContent = 'res: '+ n + 'px * '+n+'px';
//
const buttons = document.querySelectorAll('button');
window.addEventListener('keydown',e=>{
  if(e.code === 'KeyA')
    enableSolidColor()
  else if(e.code === 'KeyS')
  enableColorNoise()
  else if(e.code === 'KeyD')
  enableRainbow()
  else if(e.code === 'KeyZ')
  enableDarken()
  else if(e.code === 'KeyX')
  enableLighten()
})
window.addEventListener('mousedown',(e)=>{
  isActive = true
  mouseButton = e.button
},true)
window.addEventListener('mouseup',()=>isActive = false)

solidColorButton.addEventListener('click',enableSolidColor);
colorNoiseButton.addEventListener('click',enableColorNoise)
rainbowButton.addEventListener('click',enableRainbow);
darkenButton.addEventListener('click',enableDarken);
lightenButton.addEventListener('click',enableLighten);
/////////////////
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
}, false);
////////////////////////////
function setNewGrid(){
  do{
    let resolInput = prompt('input resolution max 100')
    if(resolInput === '' || resolInput === null)
    return;
    resolInput = Number(resolInput)
    console.log('works' + resolInput)
    n=resolInput
  }while(!(n>0 && n<=100)); //was at the end of dis function
  if(container.childNodes[0]){ // basicaly checks if container exist
    body.removeChild(container);
    
  }
  setGrid();
  console.log('works' + n)
  sizeInfoPanel.textContent = 'res: '+ n + 'px * '+n+'px';
}
function checkMode(){
  if(currentMode ===0 )
    console.log('Mode: Solid'+currentMode)
  else if (currentMode ===1)
    console.log('Mode: colored noise'+currentMode)
  else if(currentMode ===2)
    console.log('Mode: Rainbow'+currentMode)
  else if(currentMode ===3)
    console.log('Mode: Darken'+currentMode)
 else if(currentMode ===4)
    console.log('Mode: Lighten'+currentMode)
  else{
    console.log('idk, '+currentMode )
  }
} 
function enablingButton(className){
  buttons.forEach((button)=>{
    if(button.classList.value !== className)
      button.classList.remove('enabled')
    else if(button.classList.value === className){
      button.classList.add('enabled')
    }
  })
}
function enableSolidColor(){
  currentMode = 0;
  enablingButton(solidColorButton.classList.value);
}
function enableColorNoise(){
  currentMode=1
  enablingButton(colorNoiseButton.classList.value)
}
function enableRainbow(){
  // if(currentMode === 1)
  currentMode = 2;
  enablingButton(rainbowButton.classList.value);
}
function enableDarken(){
  currentMode = 3
  enablingButton(darkenButton.classList.value);
}
function enableLighten(){
  currentMode = 4
  enablingButton(lightenButton.classList.value);
}
let randomN;
function changeBackground(){
  // console.log('ngambang')
  if(!isActive){return;} //mousehover
  // checkMode()
  if(currentMode === 0){
    if (mouseButton === 0)
      this.style.backgroundColor = `${colorPickers[0].value}`
    else if(mouseButton ===2)
    this.style.backgroundColor = `${colorPickers[1].value}`
  }
  else if(currentMode ===1){
    randomN = (Math.floor(Math.random()*360))
    // console.log(randomN)
    this.style.backgroundColor = `hsl(${randomN},100%,50%)`
  }
  else if(currentMode ===2) {
    this.style.backgroundColor = `hsl(${hueValue},100%,50%)`
    if((hueValue = hueValue+hueAddition) === 361)hueValue=0;
  }
  else if(currentMode ===3){
    let backColor = this.style.backgroundColor;
    if((backColor !== 'rgb(0, 0, 0)')){
      let array = backColor.slice(backColor.indexOf('(')+1,backColor.indexOf(')')).split(',')
      for(let i=0;i<3;i++){
        array[i]= String(+array[i] -lightValue)
      }
      let string = array.join()
      this.style.backgroundColor = `rgb(${string})`
    }
  }
  else if(currentMode ===4){
    let backColor = this.style.backgroundColor;
    if((backColor !== 'rgb(255, 255, 255)')){
      let array = backColor.slice(backColor.indexOf('(')+1,backColor.indexOf(')')).split(',')
      for(let i=0;i<3;i++){
        array[i]= String(+array[i] +lightValue)
      }
      let string = array.join()
      this.style.backgroundColor = `rgb(${string})`
    }
  }
}
function formGrid(){
  for (let i=1;i<=n;i++){
    const div = document.createElement('div');
    div.classList.add('flexdiv');
    for(let j =1;j<=n;j++){
      const tempDiv = document.createElement('div');
      // tempDiv.textContent = i +' ' + j;
      tempDiv.classList.add('pixel');
      tempDiv.style.backgroundColor = '#ffffff';
      //set height and width
      div.appendChild(tempDiv);
      tempDiv.addEventListener('mouseover',changeBackground)
      // was written using forEach outside of this function
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
