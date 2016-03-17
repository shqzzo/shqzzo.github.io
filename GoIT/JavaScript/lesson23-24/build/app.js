requirejs.config({
    paths: {
        'jquery': 'http://code.jquery.com/jquery-1.12.0.min'

    },
    shim: {
        'jquery': {
            exports: 'jquery'
        }
    }
});

require(
    [
        'jquery', 'tmpl', 'animate', 'Model', 'View', 'Controller'
    ],
    function (jquery, tmpl, animate, Model, View, Controller) {
        $(function () {
            var firstToDoList = ['Learn HTML', 'Learn CSS', 'Learn JS'];
            var model = new Model(firstToDoList);
            var view = new View(model);
            var controller = new Controller(model, view);
        });
    }
);