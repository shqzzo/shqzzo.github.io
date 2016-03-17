define(
    'Controller', ['model', 'view'],
    function () {
        function Controller(model, view) {
            var self = this;

            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.item-delete', removeItem);
            view.elements.listContainer.on('click', '.item-edit', editItem);

            function addItem() {
                var newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }

            function removeItem() {
                var item = $(this).attr('data-value');

                model.removeItem(item);
                view.renderList(model.data);
            }

            function editItem() {
                var item = $(this).attr('data-value');

                $('.icon').addClass('active');
                $('.card').addClass('active');

                model.removeItem(item);
                view.elements.input.val(item);
                view.renderList(model.data);
            }
        }

        return Controller;
    }
);