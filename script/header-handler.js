const header  = document.getElementById('header')

window.onscroll = () => {
  if (scrollY > 75) {
    header.style.background = 'white';
    header.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
  } else {
    header.style.background = 'transparent';
    header.style.boxShadow = 'none';
  }
}