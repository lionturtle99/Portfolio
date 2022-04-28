import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function scrollProgress() {
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  const scrollHeight = document.body.scrollHeight;
  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

  $(".progress-bar").css('--width', Math.round(scrollPercentage));
  $(".progress-bar").attr("aria-valuenow", scrollPercentage);

  if(document.body.scrollTop > 880 || scrollTop > 880) {
    $("#navbar").addClass("navbar-light");
    $("#navbar").removeClass("navbar-dark");
  } else {
    $("#navbar").removeClass("navbar-light");
    $("#navbar").addClass("navbar-dark");
  }
}

$(document).on("scroll", scrollProgress);