
jQuery("body").live("vrp-ready vrp-ajax-complete", function() {
jQuery('.new-vehicle .our-price .price').each(function() {
  var disc= 500;
  var start_price = parseInt(jQuery(this).text().replace(/[^0-9.]/g, ''));

  jQuery(this).text("$" + parseInt(start_price - disc).toLocaleString());
});
jQuery('.new-vehicle .discounts .price').each(function() {
  var moredisc= 500;
  var start_disc = parseInt(jQuery(this).text().replace(/[^0-9.]/g, ''));

  jQuery(this).text("$" + parseInt(start_disc + moredisc).toLocaleString());
});

});
