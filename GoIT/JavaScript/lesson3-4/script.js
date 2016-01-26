var app = {

  createElement: function(params) {
    var element = document.createElement(params.tagName);

    if (params.inputType){
      element.setAttribute('type', params.inputType);
      element.setAttribute('value', params.inputValue);
    }

    if (params.className){
      element.className = params.className;
    }

    if (params.content){
      element.innerHTML = params.content;
    }

    if (params.parentElement){
      params.parentElement.appendChild(element);
    }

    return element;
  },

  generateQuestions: function(questionsAmount, answersAmount) {

    for (var i = 0; i < questionsAmount; i++) {

      this.createElement({
        tagName: 'h2',
        className: 'questions',
        content: (i + 1) + '.' + ' Вопрос №' + (i + 1),
        parentElement: form,
      });

      for (var j = 0; j < answersAmount; j++) {

        var label = this.createElement({
          tagName: 'label',
          className: 'answers',
          content: 'Вариант ответа №' + (j + 1),
          parentElement: form
        });

        var checkbox = this.createElement({
          tagName: 'input',
          className: 'answers_checkbox',
          inputType: 'checkbox'
        });

        label.insertAdjacentElement('afterBegin', checkbox);
      }
    }
  }
};

var body = document.querySelector('body');

app.createElement({
  tagName: 'h1',
  className: 'title_center',
  content: 'Тест по программированию',
  parentElement: body
});

var form = app.createElement({
  tagName: 'form',
  className: 'form_group',
  parentElement: body
});

app.generateQuestions(3, 3);

app.createElement({
  tagName: 'input',
  inputType: 'submit',
  className: 'button_style',
  inputValue: 'Проверить мои результаты',
  parentElement: form
});