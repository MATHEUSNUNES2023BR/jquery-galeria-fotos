$(document).ready(function()
{   
    $('header button').click(function() {
        $('.Menu').slideDown( 
            document.querySelector('.Menu').style.display = 'flex'
        );
    })
    $('#Button-cancelar').click(function(){
        document.querySelector('.Menu').style.display = 'none'
    })

    $('form').submit(function(evt){
        evt.preventDefault();
        
        const imagem = $('#NovaImagem').val();
        const novoli = $('<li style="display:none"></li>');

        $(`<img src="${imagem}">`).appendTo(novoli);

        $(`
            <a href="${imagem}" target="_blank"> Ver imagem em tamanho real </a>
        `).appendTo(novoli)
        
        $(novoli).appendTo('ul')
        $(novoli).fadeIn(600)
        $('#NovaImagem').val('')
    })   
})  
