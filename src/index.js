import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

const progressBar = $(".progress-bar");

function scrollProgress() {
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  const scrollHeight = document.body.scrollHeight;
  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  progressBar.css('--width', Math.round(scrollPercentage));
  progressBar.attr("aria-valuenow", scrollPercentage);
}

document.addEventListener("scroll", scrollProgress);



// window.onscroll = function() {scrollFunction();};

// function scrollFunction() {
//   if(document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
//     console.alert("if fired");
//     document.getElementById("navbar").style.backgroundColor = "red";
//   } else {
//     console.alert("else fired");
//     document.getElementById("navbar").style.backgroundColor = "blue";
//   }
// }