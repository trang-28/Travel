$(document).ready(function() {
  
    $(function() {
        $("#my_date_picker1").datepicker({});
    });

    $(function() {
        $("#my_date_picker2").datepicker({});
    });

    $('#my_date_picker1').change(function() {
        startDate = $(this).datepicker('getDate');
        $("#my_date_picker2").datepicker("option", "minDate", startDate);
    })

    $('#my_date_picker2').change(function() {
        endDate = $(this).datepicker('getDate');
        $("#my_date_picker1").datepicker("option", "maxDate", endDate);
    })
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        900: {
            slidesPerView: 3,
            spaceBetween: 30,
        }, 
        500: {
            slidesPerView: 2,
            centeredSlides: true,
            loop: true,
        },
        400: {
            slidesPerView: 1,
            spaceBetweenSlides: 20
        },
        280: {
          freemode:true,
          slidesPerView: 1,
          spaceBetween: 20,
        }
  }
  });

  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    320: {
        freemode:true,
        slidesPerView: 1,
        spaceBetween: 20,
      }
  });

  
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


  
function animateValue(obj, initVal, lastVal, duration) {

    let startTime = null;

    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();

    //pass the current timestamp to the step function
    const step = (currentTime ) => {

        //if the start time is null, assign the current time to startTime
        if (!startTime) {
              startTime = currentTime ;
        }

        //calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime  - startTime) / duration, 1);

        //calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

        //checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
              window.requestAnimationFrame(step);
        }
        else{
              window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };

    //start animating
    window.requestAnimationFrame(step);
}
  
  const obj = document.getElementById("number");
  const obj1 = document.getElementById("number1");
  const obj2 = document.getElementById("number2");
  animateValue(obj, 0, 300, 5000);
  animateValue(obj1, 0, 24000, 5000);
  animateValue(obj2, 0, 200, 5000);