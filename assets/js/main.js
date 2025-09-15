jQuery(document).ready(function () {


   jQuery('#menuToggleIcon').click(function () {
      jQuery('#navmenu').toggleClass('active');
      jQuery(this).toggleClass('bi-list bi-x');
   });


   jQuery('.navmenu a').click(function () {
      jQuery('.navmenu a').removeClass('active');
      jQuery(this).addClass('active');
      jQuery('#navmenu').removeClass('active');
      jQuery('#menuToggleIcon').removeClass('bi-x').addClass('bi-list');
   });

   jQuery("#contactForm").on("submit", function (e) {
      e.preventDefault();

      var form = document.getElementById("contactForm");
      var formData = new FormData(form);

      jQuery.ajax({
         url: "https://api.web3forms.com/submit",
         method: "POST",
         data: formData,
         processData: false,
         contentType: false,
         success: function () {
            jQuery(".alert-success").fadeIn().delay(4000).fadeOut();
            form.reset();
         },
         error: function () {
            alert("Something went wrong. Please try again.");
         }
      });
   });


   jQuery('a').on('click', function (e) {
      var href = jQuery(this).attr('href');

      if (href.startsWith('#')) {
         e.preventDefault();

         if (jQuery(href).length) {
            jQuery('html, body').animate({
               scrollTop: jQuery(href).offset().top
            }, 800);
         }

         var pageName = href.replace('#', '');
         history.pushState(null, '', '/' + pageName);
      }
   });
});