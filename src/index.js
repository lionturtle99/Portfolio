import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import '@fortawesome/fontawesome-free';

window.onscroll = () => {scrollFunction();};

const scrollFunction = () => {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundColor = "white";
  }
};