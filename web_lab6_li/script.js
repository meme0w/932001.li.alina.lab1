function first(){
  var cl1 = document.getElementById('cat');
  var cl2 = document.getElementById('dog');
  cl1.classList.add('cat');
  cl2.classList.add('dog');
  cl1.firstChild.id = "pic1";
  cl2.firstChild.id = "pic2";
  cl1.classList.remove('cat-both');
  cl2.classList.remove('dog-both');
  cl1.classList.remove('cat-third');
  cl2.classList.remove('dog-third');
}

function both(){
  var cl1 = document.getElementById('cat');
  var cl2 = document.getElementById('dog');
  cl1.classList.add('cat-both');
  cl2.classList.add('dog-both');
  cl1.firstChild.id = "pic1-both";
  cl2.firstChild.id = "pic2-both";
  cl1.classList.remove('cat');
  cl2.classList.remove('dog');
  cl1.classList.remove('cat-third');
  cl2.classList.remove('dog-third');
}

function third(){
  var cl1 = document.getElementById('cat');
  var cl2 = document.getElementById('dog');
  cl1.classList.add('cat-third');
  cl2.classList.add('dog-third');
  cl1.firstChild.id = "pic1-third";
  cl2.firstChild.id = "pic2-third";
  cl1.classList.remove('cat');
  cl2.classList.remove('dog');
  cl1.classList.remove('cat-both');
  cl2.classList.remove('dog-both');
}