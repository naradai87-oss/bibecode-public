class SimpleGreeting extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');
    const text = document.createElement('p');
    text.textContent = `Hello, ${this.getAttribute('name') || 'World'}!`;
    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 8px;
      }
    `;
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(text);
  }
}
customElements.define('simple-greeting', SimpleGreeting);

function generate(){

let output=""

for(let s=0;s<5;s++){

let nums=[]

while(nums.length<6){

let n=Math.floor(Math.random()*45)+1

if(!nums.includes(n)){
nums.push(n)
}

}

nums.sort((a,b)=>a-b)

output+="🎯 "+nums.join(" - ")+"<br>"

}

document.getElementById("results").innerHTML=output

}
