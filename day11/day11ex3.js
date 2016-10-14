var log_and_return = function() {
  console.log(log_and_return);
}

var returned_values = log_and_return;
  console.log(returned_values);

var log_and_return = returned_values;
  console.log(log_and_return);

log_and_return();
