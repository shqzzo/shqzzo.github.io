$(() => {

    const info = [
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

const test = JSON.parse(localStorage.getItem('data'));
const html = $('#test-tmpl').html();
const content = tmpl(html, {
    data: test
});
$('.test').append(content);

const resultsWindow = {

    show() {
        $('.window_wrapper').fadeIn(200);
        $('.window_results').animate({
            top: 0
        }, 100);

        //Check answers
        for (let i = 0; i < test.length; i++) {
            const inputs = $('.box' + i + ' input:checkbox');
            const correct = test[i].correctAnswer;

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

    hide() {
        $('.window_wrapper').fadeOut(500);
        $('.window_results').animate({
            top: -500
        }, 100, () => $('.window_wrapper h3').remove());
        $('input:checkbox').removeAttr('checked');
    }
};

$('.btn').on('click', resultsWindow.show);
$('.window_wrapper').on('click', resultsWindow.hide);

});