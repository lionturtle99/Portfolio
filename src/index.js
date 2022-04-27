import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function scrollProgress() {
  const progressBar = $(".progress-bar");
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  const scrollHeight = document.body.scrollHeight;
  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  progressBar.css('--width', Math.round(scrollPercentage));
  progressBar.attr("aria-valuenow", scrollPercentage);
}

$(document).on("scroll", scrollProgress);