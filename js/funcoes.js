
        function copiarTexto(message, duration) {
          Materialize.toast(message, duration, 'rounded');
          var textoCopiado = document.getElementById("link"),
              texto = textoCopiado.value ;
          textoCopiado.value = "****************************************************\n\nToner entregue, conforme código de rastreio " + textoCopiado.value + ".\n\n******************************************************";
          textoCopiado.select();
          document.execCommand("Copy");
          textoCopiado.value = texto;

          var textoCopiado = document.getElementById('link').value;
          document.getElementById("demo").innerHTML = textoCopiado;
        }

        