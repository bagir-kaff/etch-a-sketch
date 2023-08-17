const body = document.querySelector('body')
let container = document.createElement('div')
const setSizeButton = document.querySelector('.size')
let n = 16;

function setNewGrid(){
  do{
    n = Number(prompt('input resolution max 100'))
    if(container.childNodes[0]){
      body.removeChild(container)
    }
    setGrid()
  }while(!(n>=0 && n<=100))
}
setSizeButton.addEventListener('click',setNewGrid)
container.classList.add('container')
function changeBackground(e){
    if (this.classList.value === 'pixel'){
        this.style.backgroundColor = 'black';
    }
};
function formGrid(){
  for (let i=1;i<=n;i++){   // n x
    const div = document.createElement('div')
    div.classList.add('flexdiv');
    for(let i =1;i<=n;i++){    // n
      const tempDiv = document.createElement('div');
      // tempDiv.textContent = i;
      tempDiv.classList.add('pixel')
      div.appendChild(tempDiv);
    }
    container.appendChild(div)
  }
}

function setGrid(){
  if(container){
    container = document.createElement('div')
    container.classList.add('container')
  }
  formGrid()
  const divs = container.querySelectorAll('.pixel')
  divs.forEach(div => {
      div.addEventListener('mouseover',changeBackground)
  })
  body.appendChild(container)
}
setGrid()