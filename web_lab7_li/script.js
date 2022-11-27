
function drawSquareCycle(){
  var input = document.getElementById("figure");
  var num = input.value;
  for(var i = 0; i < num; i++){
    drawSquare();
  }
}

function drawCircleCycle(){
  var input = document.getElementById("figure");
  var num = input.value;
  for(var i = 0; i < num; i++){
    drawCircle();
  }
}

function drawTriangleCycle(){
  var input = document.getElementById("figure");
  var num = input.value;
  for(var i = 0; i < num; i++){
    drawTriangle();
  }
}

function drawSquare(){
  var field = document.getElementById("field");
  const Square = document.createElement('div');
  field.append(Square);
  Square.className = 'square';
  let x = Math.floor(Math.random()*600);
  let y = Math.floor(Math.random()*600);
  let w = Math.floor(Math.random() * (200 - 50) + 50);
  Square.style.left = `${x}px`;
  Square.style.top = `${y}px`;
  Square.style.width = `${w}px`;
  Square.style.height = `${w}px`;
  // Square.onmouseover = function(){
  //   Square.style.backgroundColor = "yellow";
  // }
  // Square.onmouseout = function(){
  //   Square.style.backgroundColor = "red";
  // }
  Square.onclick = function(){
    Square.style.backgroundColor = "yellow";
  }
  Square.ondblclick = function(){
    Square.remove();
  }
}

function drawTriangle(){
  var field = document.getElementById("field");
  const Triangle = document.createElement('div');
  field.append(Triangle);
  Triangle.className = 'triangle';
  let x = Math.floor(Math.random()*600);
  let y = Math.floor(Math.random()*600);
  let w = Math.floor(Math.random() * (200 - 50) + 50);
  Triangle.style.left = `${x}px`;
  Triangle.style.top = `${y}px`;
  Triangle.style.borderBottomWidth = `${w}px`;
  Triangle.style.borderLeftWidth = `${w/1.2}px`;
  Triangle.style.borderRightWidth = `${w/1.2}px`;
 
  Triangle.onclick = function(){
    Triangle.style.borderBottomColor = "yellow";
  }
  Triangle.ondblclick = function(){
    Triangle.remove();
  }
}

function drawCircle(){
  var field = document.getElementById("field");
  const Circle = document.createElement('div');
  field.append(Circle);
  Circle.className = 'circle';
  let x = Math.floor(Math.random()*600);
  let y = Math.floor(Math.random()*600);
  let w = Math.floor(Math.random() * (200 - 50) + 50);
  Circle.style.left = `${x}px`;
  Circle.style.top = `${y}px`;
  Circle.style.width = `${w}px`;
  Circle.style.height = `${w}px`;
  Circle.style.borderRadius = `${w/2}px`;
  // Circle.onmouseover = function(){
  //   Circle.style.backgroundColor = "yellow";
  // }
  // Circle.onmouseout = function(){
  //   Circle.style.backgroundColor = "green";
  // }
  Circle.onclick = function(){
    Circle.style.backgroundColor = "yellow";
  }
  Circle.ondblclick = function(){
    Circle.remove();
  }
}
