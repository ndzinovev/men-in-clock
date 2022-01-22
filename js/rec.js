$(document).ready(function(){

    $('.rec-form').each(function(){               // Письмо соискателя
            
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
              url: 'rec.php',
              data: th.serialize(),
              
            }).done(() => {
              
              th.trigger('reset');
                                     
            alert("Ваше сообщение успешно отправлено. Спасибо!   Мы свяжемся с Вами в ближайшее время")
              
            });
            return false;
          }
        });
      });

      
        
      


});



