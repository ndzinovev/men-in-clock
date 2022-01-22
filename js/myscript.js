$(document).ready(function(){

    $(function(){                                   //scroll
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });

    
    $('.owl-carousel').owlCarousel({                // slider
        margin:12,
        dots:false,
        navText: ['<img src="images/arr-l.png" >', '<img src="images/arr-r.png" >'],
        nav:true,
        loop:true,
        dotsEach: 1,
        responsiveClass:true,
		    responsive:{
            0:{ items:1 },
            550:{ items:2 },
            1020:{ items:3 },
            1200:{ items:4 },
            1500:{ items:5 }
                 
    }
    });

    $('.userphone').inputmask({"mask": "+7(999) 999-99-99"}); //маска телефона

    $('.menu-button').click(function(){
        $('.nav-menu').fadeToggle().css('display' , 'flex');
    });

    $('.cress-out').click(function(){
        $('.bg-pop, .cell-master, .cell-work, .item-ws').hide(300);
    });
    
    $('.btn-about').click(function(){                    // Отправка формы Вызова мастера
        $('.bg-pop, .cell-master, .cell-work').hide(300);
        $('.bg-pop').show(300).css('display' , 'flex');
        $('.cell-master').css('display' , 'flex');
    });

    $('.btn-work').click(function(){                      // Отправка формы УСЛУГИ
        $('.cell-master, .cell-work, .item-ws').hide();
        $('.bg-pop').show().css('display' , 'flex');
        $('.cell-work').css('display' , 'flex');
    });


    $('.btn-c').click(function(){                       // кнопки Подробнее
      $('.bg-pop').show().css('display' , 'flex');
      $('.work-box3').show(300).css('display' , 'flex');
    });
    $('.btn-c1').click(function(){                        
        $('.bg-pop').show().css('display' , 'flex');
        $('.work-box1').show(300).css('display' , 'flex');
    });
    $('.btn-c2').click(function(){
      $('.bg-pop').show().css('display' , 'flex');
      $('.work-box2').show(300).css('display' , 'flex');
    });
    $('.btn-c3').click(function(){
      $('.bg-pop').show().css('display' , 'flex');
      $('.work-box4').show(300).css('display' , 'flex');
    });
    $('.btn-c4').click(function(){
      $('.bg-pop').show().css('display' , 'flex');
      $('.work-box5').show(300).css('display' , 'flex');
    });
    $('.btn-c5').click(function(){
      $('.bg-pop').show().css('display' , 'flex');
      $('.work-box6').show(300).css('display' , 'flex');
    });
    $('.btn-c6').click(function(){
      $('.bg-pop').show().css('display' , 'flex');
      $('.work-box7').show(300).css('display' , 'flex');
    });
    $('.btn-c7').click(function(){
      $('.bg-pop').show().css('display' , 'flex');
      $('.work-box8').show(300).css('display' , 'flex');
    });
    $('.btn-c8').click(function(){
      $('.bg-pop').show().css('display' , 'flex');
      $('.work-box9').show(300).css('display' , 'flex');
    });


    $('.btn-qwiz').click(function(){                  //qwiz
      $('.qwiz').hide(300);
      $('.qwiz1').show(300).css('display' , 'flex');
    });
    $('.btn-qwiz1').click(function(){                  
      $('.qwiz1').hide(300);
      $('.qwiz2').show(300).css('display' , 'flex');
    });
    $('.btn-qwiz2').click(function(){                  
      $('.qwiz2').hide(300);
      $('.qwiz3').show(300).css('display' , 'flex');
    });
    $('.btn-qwiz3').click(function(){                  
      $('.qwiz3').hide(300);
      $('.qwiz4').show(300).css('display' , 'flex');
    });
    $('.btn-qwiz4').click(function(){                  
      $('.qwiz4').hide(300);
      $('.qwiz').show(300).css('display' , 'flex');
    });


    $('.vizit-men').each(function(){                           // Письмо ВЫЗОВА МАСТЕРА
        
        $(this).validate({                                   
          errorPlacement: function(error, element) {
            return true;
         },
          rules: {
            username:{
              required: true,
              },
              userphone:{
                required: true,
                },
            }, 
          submitHandler(form) {
            let th = $(form);
    
            $.ajax({
              type: 'POST',
              url: 'quest.php',
              data: th.serialize(),
              
            }).done(() => {
              
              th.trigger('reset');
              $(".bg-pop , .cell-master").css('display' , 'none');
                           
             alert("Ваше сообщение успешно отправлено. Спасибо!   Мы свяжемся с Вами в длижайшее время")
              
            });
    
            return false;
          }
        });
    });

    $('.order-serv').each(function(){               // Письмо Заказа услуги
        
      $(this).validate({                                   
        errorPlacement: function(error, element) {
          return true;
       },
        rules: {
          username:{
            required: true,
            },
            userphone:{
              required: true,
              },
            }, 
        submitHandler(form) {
          let th = $(form);
  
          $.ajax({
            type: 'POST',
            url: 'send.php',
            data: th.serialize(),
            
          }).done(() => {
            
            th.trigger('reset');
            $(".bg-pop , .cell-work").css('display' , 'none');
                         
           alert("Ваше сообщение успешно отправлено. Спасибо!   Мы свяжемся с Вами в длижайшее время")
            
          });
  
          return false;
        }
      });
  });

    $('.qwiz-form').each(function(){               // Письмо с пройденного квиза
          
      $(this).validate({                                   
        errorPlacement: function(error, element) {
          return true;
      },
        rules: {
          username:{
            required: true,
            },
            userphone:{
              required: true,
              },
          }, 
        submitHandler(form) {
          let th = $(form);

          $.ajax({
            type: 'POST',
            url: 'qwiz.php',
            data: th.serialize(),
            
          }).done(() => {
            
            th.trigger('reset');
          // $(".bg-pop , .cell-work").css('display' , 'none');
                        
          alert("Ваш тест успешно отправлен. Спасибо!   Мы свяжемся с Вами в длижайшее время")
            
          });

          return false;
        }
      });
  });

  $('#foot-form').each(function(){               //  Вопрос бригадиру
          
    $(this).validate({                                   
      errorPlacement: function(error, element) {
        return true;
    },
      rules: {
        dow:{
          required: true,
          },
          userphone:{
            required: true,
            },
        }, 
      submitHandler(form) {
        let th = $(form);

        $.ajax({
          type: 'POST',
          url: 'sendfoot.php',
          data: th.serialize(),
          
        }).done(() => {
          
          th.trigger('reset');
        // $(".bg-pop , .cell-work").css('display' , 'none');
                      
        alert("Ваш вопрос успешно отправлен. Спасибо!   Мы свяжемся с Вами в длижайшее время")
          
        });

        return false;
      }
    });
});

  

});  // end script