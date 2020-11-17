import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function clearFields() {
  $("#haiku-input").val("");
}

$(document).ready(function() {
  $("#haiku-submit").click(function() {
    let haiku = $("#haiku-input").val();
    clearFields();
  });
});