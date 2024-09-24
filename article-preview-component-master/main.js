//desktop
const shareCon=document.getElementById('share');

shareCon.addEventListener('click',toggleShare);

function toggleShare(){
    const shareShapeCon=document.querySelector(".mobile-active-con");
    shareShapeCon.classList.toggle("display-none");
}