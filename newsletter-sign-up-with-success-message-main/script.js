const form = document.getElementById('form');
const success=document.getElementById('successSection');
const formSection=document.getElementById('formSection');
const dismiss=document.getElementById('dismiss');


dismiss.onclick=function(){
    formSection.style.display='flex';
    success.style.display="none";
    error.style.display='none';
    em.classList.remove('error');
}


function handleSubmit(e) {
    
  e.preventDefault();
  const email=document.getElementById('email').value;
  const em=document.getElementById('email');
  const emailAdd=document.getElementById('emailAdd');
  const error=document.getElementById('error');
 
  if(email==""){
    console.log("error");
    error.style.display='flex';
    error.textContent="Valid email requried";
    em.classList.add('error');
  }
  else{
    error.style.display='none';
    console.log(email);
    emailAdd.textContent=email;
    success.style.display="flex";
    formSection.style.display='none';
  }
}

form.addEventListener('submit', handleSubmit);