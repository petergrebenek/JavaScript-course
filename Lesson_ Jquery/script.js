import $ from "jquery";

// const btn = $("#btn"); //получение элемента

// console.log(btn);

$(document).ready(function () { // Добавить класс active к первой кнопке
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });
    
    $('.list-item:eq(2)').on('click', function() { // скрыть все четные картинки
        $('.image:even').fadeToggle();
    });

    $('.list-item:eq(4)').on('click', function() { // создание собственных анимаций
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);
    });
});