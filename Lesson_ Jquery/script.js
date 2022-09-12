import $ from "jquery";

// const btn = $("#btn"); //получение элемента

// console.log(btn);

$(document).ready(function () { // Добавить класс active к первой кнопке
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });
    
    $('.list-item:eq(2)').on('click', function() { // скрыть все четные элементы
        $('.image:even').fadeToggle();
    });
});