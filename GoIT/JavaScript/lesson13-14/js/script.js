'use strict';

$(function () {

    var info = [
        {
            question: "Вопрос №1:",
            answers: ["Правильный ответ",
                "Неправильный ответ",
                "Неправильный ответ"],
            correctAnswer: 0
        },
        {
            question: "Вопрос №2:",
            answers: ["Неправильный ответ",
                "Правильный ответ",
                "Неправильный ответ"],
            correctAnswer: 1
        },
        {
            question: "Вопрос №3:",
            answers: ["Неправильный ответ",
                "Неправильный ответ",
                "Правильный ответ"],
            correctAnswer: 2
        }
    ];

    localStorage.setItem('data', JSON.stringify(info));

    var test = JSON.parse(localStorage.getItem('data'));
    var html = $('#test-tmpl').html();
    var content = tmpl(html, {
        data: test
    });
    $('.test').append(content);

    var resultsWindow = {

        show: function () {
            $('.window_wrapper').fadeIn(200);
            $('.window_results').animate({
                top: 0
            }, 100);

            //Check answers
            for (var i = 0; i < test.length; i++) {
                var inputs = $('.box' + i + ' input:checkbox');
                var correct = test[i].correctAnswer;

                if (inputs[correct].checked) {
                    $('<h3>' + (i + 1) + '. Правильно!</h3>')
                        .appendTo('.window_results')
                        .addClass("alert alert-success");
                } else {
                    $('<h3>' + (i + 1) + '. Неправильно!</h3>')
                        .appendTo('.window_results')
                        .addClass("alert alert-danger");
                }
            }
        },

        hide: function () {
            $('.window_wrapper').fadeOut(500);
            $('.window_results').animate({
                top: -500
            }, 100, function() {
                $('.window_wrapper h3').remove();
            });
            $('input:checkbox').removeAttr('checked');
        }
    };

    $('.btn').on('click', resultsWindow.show);
    $('.window_wrapper').on('click', resultsWindow.hide);

});