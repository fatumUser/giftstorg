document.getElementById('btn-gift-sell').onclick = myFunction;
document.getElementById('btn-close-pop-ap').onclick = myFunction2;

function myFunction() {
    document.getElementById('pop-ap-feedback').classList.add("el-show-display-flex");
}
function myFunction2() {
    document.getElementById('pop-ap-feedback').classList.remove("el-show-display-flex");
}

document.querySelectorAll('.block-gift').forEach(el => 
  el.addEventListener('click', () => document.getElementById('pop-ap-feedback').classList.add("el-show-display-flex"))
);