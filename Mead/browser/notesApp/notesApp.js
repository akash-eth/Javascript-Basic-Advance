// single query selector !!
    // let para = document.querySelector('p');
    // para.remove()

let paras = document.querySelectorAll('p');

paras.forEach(function(p) {
    p.textContent = "#######"
})

let newPara = document.createElement('p');
newPara.textContent = 'this is the new para';
document.querySelector('body').appendChild(newPara);