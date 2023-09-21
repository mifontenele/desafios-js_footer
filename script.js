// Atribuindo uma fonte (SRC) ao elemento <img> no HTML que está sem src atribuído "<img id="imagem" alt="">" 
imagem.src = "https://www.3cfamilyservices.com/wp-content/uploads/2015/09/homework.jpg";

// Controla a largura da imagem exibida na tela
imagem.style.width = "40em";

// Garante que o documento HTML esteja completamente carregado antes de executar o código dentro da função.
document.addEventListener('DOMContentLoaded', function () {
    
    // Criando 2 variáveis os elementos HTML com os IDs 'act_footer' e 'myfooter'. 
    // O codigo JS precisará acessar esses elementos para definir a visibilidade do footer.
    const selectElement = document.getElementById('act_footer');
    const footerElement = document.getElementById('myfooter');
    
    // 'addEventListener' realizará mudanças (change) de acordo com a opção do elemento com  id 'act_footer'. 
    
    selectElement.addEventListener('change', function () { 
        // Ou seja, o JS fica só aguardando a interação do usuário com o <select> para poder prosseguir.  
             
        if (selectElement.value === 'show') {   
              // remove a classe 'Hidden' <footer>        
            footerElement.classList.remove('Hidden'); 
            // e adiciona a classe 'Show'.           
            footerElement.classList.add('Show');  
            // Se o usuário selecionar"Ocultarr o footer":       
        } else if (selectElement.value === 'hidden') {  
            // remove a classe 'Show' do <footer>          
            footerElement.classList.remove('Show');     
            // e adiciona a classe 'Hidden'.      
            footerElement.classList.add('Hidden');
        }
    });
});
