'use strict';
class TodoController {
    #todoListView = null;
    #formView = null;
    #todosCollection = null;

    constructor(container) {
        this.#todoListView = new TodoListView({
            onToggle: this.toggle,
            onDelete: this.delete,
            onEdit: this.edit,
        });
        container.append(this.#todoListView.el);

        this.#formView = new FormView({
            onSave: this.save,
        });
        container.append(this.#formView.el);

        this.#todosCollection = new TodosCollection();
        this.#todosCollection
            .fetchList()
            .then(() =>
                this.#todoListView.renderList(this.#todosCollection.list)
            );

        console.log(this);
    }

    toggle = (id) => {
        // console.log('toggle', this);
        this.#todosCollection
            .toggle(id)
            .then(() =>
                this.#todoListView.renderList(this.#todosCollection.list)
            );
    };

    delete = (id) => {
        this.#todosCollection
            .delete(id)
            .then(() =>
                this.#todoListView.renderList(this.#todosCollection.list)
            );
    };

    save = (data) => {
        this.#todosCollection
            .save(data)
            .then(() =>
                this.#todoListView.renderList(this.#todosCollection.list)
            );
    };

    edit = (id) => {
        const item = this.#todosCollection.getItem(id);

        this.#formView.fillData(item);
    };
}
