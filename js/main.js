$(document).ready(function () {
    $("#telefone").mask("(00) 00000-0000");
    
    var mybutton = $("#myBtn");
  
    $(window).scroll(function () {
      scrollFunction();
    });
  
    function scrollFunction() {
      if (
        $(document).scrollTop() > 20 ||
        $(document.documentElement).scrollTop() > 20
      ) {
        mybutton.css("display", "block");
      } else {
        mybutton.css("display", "none");
      }
    }
  
    mybutton.click(function () {
      $("body, html").animate({ scrollTop: 0 }, 500);
    });
  
    function topFunction() {
      $("body,html").animate({ scrollTop: 0 }, 500);
    }
  
    $("form").validate({
      rules: {
        nome: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        mensagem: {
          required: true,
        },
      },
      messages: {
        nome: '<span class="campoErrado">Por favor, insira o seu nome.</span>',
        email: '<span class="campoErrado">Por favor, insira o seu email.</span>',
        mensagem:
          '<span class="campoErrado">Por favor, insira a sua mensagem.</span>',
      },
      submitHandler: function (form) {
        form.submit();
        alert("Formulário enviado com sucesso!");
      },
      invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
          alert(
            `Existem ${camposIncorretos} campos incorretos. Por favor, verifique os campos e tente novamente.`
          );
        }
      },
    });
  });