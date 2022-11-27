const btn = document.querySelector(".theme-button");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "./css/light.css") {
    theme.href = "./css/dark.css";
  } else {
    theme.href = "./css/light.css";
  }
});

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const url = "https://api.quotable.io/random";
let getQuote = () => {
fetch(url)
 .then((data) => data.json())
 .then((item) => {
   quote.innerText = ` "${item.content}"`;
   author.innerText = item.author;
 });
};
window.addEventListener("load", getQuote);

  document.querySelector('#add').addEventListener('click', function () {
    event.preventDefault();
    const input = document.querySelector('#text');
    const list = document.querySelector('#list'); 
    const item = document.createElement('li'); 
    const itemText = document.createTextNode(input.value[0].toUpperCase() + input.value.slice(1));
    item.appendChild(itemText);
    const aa = list.appendChild(item); 
    aa.innerHTML +=  '<button class="dots"></button>';
    item.classList.add('item') 
    input.value = ""; // clear input
  });

function delList(){
  const btnDel = document.querySelectorAll('.dots');
  btnDel.forEach(btn => {
    btn.addEventListener('click', () => {
        const cartItem = btn.closest('.item');
        cartItem.parentNode.removeChild(cartItem);
    });
})}
window.addEventListener("click", delList);

function fulfilled(){
  const cartPageItemDeleteBtn1 = document.querySelectorAll('.item');
  cartPageItemDeleteBtn1.forEach(btn => {
      btn.addEventListener('click', () => {
          const cartItem = btn.closest('.item');
          cartItem.id = 'close';
      });
  });}
  window.addEventListener("click", fulfilled);