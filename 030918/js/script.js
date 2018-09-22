var getHeightofDisplayBlock = function(element){
  element.style.display = 'block';
  var height = element.scrollHeight+"px";
  element.style.display = '';
  return height;
}
let closeOpenAccordionBlock = () =>{
  const acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
          const displayBlock = acc[i].nextElementSibling.style;
          const arrow = acc[i].childNodes[1].classList;
          if(parseInt(displayBlock.height) > 0){
            displayBlock.height = 0+"px";
            arrow.remove("fa-angle-up");
            arrow.add("fa-angle-down");
          }
  }
}
function accordion() {
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        const height = getHeightofDisplayBlock(this.nextElementSibling);
        const arrow = this.childNodes[1].classList;
        if(arrow.contains("fa-angle-up")){
            this.nextElementSibling.style.height = 0+"px";
            arrow.remove("fa-angle-up");
            arrow.add("fa-angle-down");
        }else{
            closeOpenAccordionBlock();
            this.nextElementSibling.style.height = height;
            arrow.add("fa-angle-up");
            arrow.remove("fa-angle-down");
        }
        this.nextElementSibling.classList.toggle("panel-show");
      });
    }
}

function validate(){
    const password = document.getElementById("transaction-password-input").value;
    const allowedCharacters = /^[0-9a-zA-Z]+$/;
    const messageDiv = document.getElementById("warnning-message");
    messageDiv.classList.add("show")
    if(password.length > 0){
       if(password.match(allowedCharacters)){
        messageDiv.classList.remove("show");
        alert("Password accepted");
    }
    else{
        messageDiv.innerHTML="Please enter password which should not contain any symbols";
    }
    }else{
        messageDiv.innerHTML="Please enter password which should not contain any symbols";
       }
}

function removeMsg(){
    document.getElementById("warnning-message").classList.remove("show");
}
