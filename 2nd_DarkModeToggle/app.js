const BtnHolder = document.querySelectorAll('.btn-holder');
const btn = BtnHolder[0];

btn.addEventListener('click', function () {
    document.body.classList.toggle("dark-theme");
    btn.classList.toggle("dark-theme");

    let allNodes = btn.children;
 
    allNodes[0].classList.toggle('active');
    allNodes[1].classList.toggle('active');
})
