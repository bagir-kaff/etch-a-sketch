const body = document.querySelector('body')
const container = document.createElement('div')
let n = 16; 

container.classList.add('container')

function changeBackground(e){
    if (this.classList.value === 'pixel'){
        this.style.backgroundColor = 'black';
    }
};

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
const divs = container.querySelectorAll('.pixel')
divs.forEach(div => {
    div.addEventListener('mouseover',changeBackground)
})
body.appendChild(container)