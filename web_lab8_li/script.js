var i = 1;
var count =0;
var inputs=[];

function saveResult(){
  field = document.querySelector(".all_button");
  const result = document.createElement("p");
  var resultText = '';
  var elements =  Array.from(document.querySelectorAll(".part"));
  elements.forEach(e => resultText += '"' + e.querySelector(".input1").value + '"' + ":" + '"' + e.querySelector(".input2").value.toString() + '"' + ",");
  result.innerHTML = "{" + `${resultText.substring(0, resultText.length-1)}` + "}";
  field.appendChild(result);
}

window.onload =function(){
  addNewElem();
}

function addNewElem(){
  var current = document.getElementById("container");
  const d = document.createElement("div");
  d.classList.add("part");
  d.style.display = "flex";
  d.id = `${i}`;
  inputs.push(d.id);
  // console.log(d.id);

  i += 1;
  count=count+1;

  const x = document.createElement("input");
  x.classList.add("input1");
  x.setAttribute("type", "text");
  d.appendChild(x);

  const y = document.createElement("input");
  y.classList.add("input2");
  y.setAttribute("type", "number");
  d.appendChild(y);

  const d_button = document.createElement("div");
  d_button.style.display = "flex";
  const b1 = document.createElement("input");
  b1.setAttribute("type","button");
  b1.value = "↑";
  d_button.appendChild(b1);
  b1.onclick = function(){
    if(d.id!= "1"){
      var el = document.getElementById(d.id);
      var el2 = document.getElementById(((Number(d.id)-1).toString()));
      var help = d.id;
      d.id= ((Number(d.id)-1).toString());
      el2.id = help;
      el.parentNode.insertBefore(el,el2);
    }
  }

  const b2 = document.createElement("input");
  b2.setAttribute("type","button");
  b2.value = "↓";
  d_button.appendChild(b2);
  b2.onclick = function(){
    if(d.id != `${i-1}`){
      var el = document.getElementById(d.id);
      var el2 = document.getElementById(((Number(d.id)+1).toString()));
      var help = d.id;
      d.id= ((Number(d.id)+1).toString());
      el2.id = help;
      el.parentNode.insertBefore(el2,el);
    }
}

  const b3 = document.createElement("input");
  b3.setAttribute("type","button");
  b3.value = "x";
  d_button.appendChild(b3);
  b3.onclick = function(){
    var num = Number(d.id);
    d.id = null;
    Array.from(document.querySelectorAll(`#container > div:nth-child(n+${num})`)).forEach(e => e.id = ((Number(e.id)-1).toString()))
    i--;
    current.removeChild(d);
  }

  d.appendChild(d_button);
  console.log(d.id);
  current.appendChild(d);
}
// var current = document.getElementById ("container");
// var d = document.createElement("div");
// var x = document.createElement("input");
// x.setAttribute("type", "text");
// inputs.push(x);
// i += 1;
// count=count+1;
// current.appendChild(x);

