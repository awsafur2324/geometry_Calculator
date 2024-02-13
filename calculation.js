//traingle
function trainglelike(inp1, inp2,type) {
  const input1 = document.getElementById(inp1).value;
  const input2 = document.getElementById(inp2).value;
  const ans = 0.5 * input1 * input2;
  addHtml(ans, type);
}
//Rectangle
function rectanglelike(inp1, inp2,type) {
  const input1 = document.getElementById(inp1).value;
  const input2 = document.getElementById(inp2).value;
  const ans = input1 * input2;
  addHtml(ans, type);
}
//Ellipse
function Ellipse(inp1, inp2,type) {
  const input1 = document.getElementById(inp1).value;
  const input2 = document.getElementById(inp2).value;
  const ans = Math.PI*input1 * input2;
  addHtml(ans, type);
}
//Ans add to html
function addHtml(ans, type) {
  const ansAd = document.getElementById("ansAdd");
  const p = document.createElement("p");
  p.innerText = `${type} Area is : ${ans}`;
  p.style.cursor='pointer';
  p.setAttribute('title','Click for remove it from the list');
  ansAd.appendChild(p);
  remove();
}
//remove from html
function remove(){
const childs = document.getElementById('ansAdd');
// for(let child of childs){
// child.addEventListener('click' , function(event){
//     console.log(event.target.parentNode.removeChild(event.target));
// })
// }
childs.addEventListener('click' , function(event){
        console.log(event.target.parentNode.removeChild(event.target));
    })
}