jQuery('.vehicle .theirPrice .price').each(function() {
  
  var amountToAdd = -500;
  var start_price = parseInt(jQuery(this).text().replace(/\$|,/g, ''));

  jQuery(this).text("$" + parseInt(amountToAdd + start_price).toLocaleString());
});
