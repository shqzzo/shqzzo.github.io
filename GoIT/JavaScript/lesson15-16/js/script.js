$(function() {

    $('.query_form').keyup(function(e){
        if (e.keyCode == 13) {
            googleIt();
        }
    });

    $('.search_btn').on('click', googleIt);

    function googleIt() {
        var query = $('.query_form').val();

        $.ajax({
            url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=8&q=' + query + '&callback=GoogleCallback&context=?',
            dataType: "jsonp"
        });
    }
});

function GoogleCallback (func, data) {
    var htmlResult = $('#resultsGoogle').html();
    var content = tmpl(htmlResult, data);

    $('.results').html('').append(content);
}

    //Prototypes

function Human(name, age, sex, height, weight) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.height = height;
    this.weight = weight;
}

function Worker() {
    this.job = 'Big company';
    this.salary = 30000;
    this.work = function(){
        return 'working.';
    };
}

function Student() {
    this.study = 'University';
    this.grants = 1500;
    this.watchTv = function() {
        return 'watch TV show.';
    };
}

var John = new Human('John', 27, 'male', 189, 89);
var Jane = new Human('Jane', 18, 'female', 183, 53);

Worker.prototype = John;
var WorkerJohn = new Worker();

Student.prototype = Jane;
var StudentJane = new Student;

console.log('Worker name:',WorkerJohn.name,
    "\n age:", WorkerJohn.age,
    "\n sex:", WorkerJohn.sex,
    "\n height:", WorkerJohn.height,
    "\n weight:", WorkerJohn.weight,
    "\n work:", WorkerJohn.job,
    "\n salary:", WorkerJohn.salary
);
console.log(WorkerJohn.name, WorkerJohn.work());

console.log ("---------------------------------");

console.log('Student name:',StudentJane.name,
    "\n age:", StudentJane.age,
    "\n sex:", StudentJane.sex,
    "\n height:", StudentJane.height,
    "\n weight:", StudentJane.weight,
    "\n study:", StudentJane.study,
    "\n grants:", StudentJane.grants
);
console.log(StudentJane.name,StudentJane.watchTv());

console.log ("---------------------------------");