let modalPics = document.querySelectorAll('.modal-img');
let modalPopup = document.querySelector('.modal-popup');
let modalIsOpen = false;
let isClickedOutside = false;
let modalClose = document.querySelector('.fa-times');
let modalPopupPic = document.querySelector('.modal-popup-pic')

modalClose.addEventListener('click', imageClose, false)

modalPics.forEach((modalPic) => {
  modalPic.addEventListener('click',imageOpen, false)
})

function imageOpen(){
  listenLaunch();
  modalPopup.style.display = "flex";
  modalPopupPic.innerHTML = '<img src=" ' + this.src + '">';
  isClickedOutside = false;
  modalIsOpen = true;
  console.log('open')
}

function imageClose() {
  modalIsOpen = false;
  modalPopup.style.display = "none";
  console.log('closed')
}

function listenLaunch() {
  modalPopup.addEventListener('click', (e) => {
    isClickedOutside = !modalPopupPic.getElementsByTagName('img')[0].contains(e.target);
    if(isClickedOutside && modalIsOpen){
      modalPopup.style.display = "none";
      modalIsOpen = false;
      console.log('listening')
    }
  })
}