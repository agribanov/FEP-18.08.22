class TodoController {
    #todoListView = null;
    #todosCollection = null;

    constructor(container) {
        this.#todoListView = new TodoListView({
            onToggle: (id) => this.toggle(id),
            onDelete: (id) => this.delete(id),
        });
        container.append(this.#todoListView.el);

        this.#todosCollection = new TodosCollection();
        this.#todosCollection
            .fetchList()
            .then(() =>
                this.#todoListView.renderList(this.#todosCollection.list)
            );
    }

    toggle(id) {
        this.#todosCollection
            .toggle(id)
            .then(() =>
                this.#todoListView.renderList(this.#todosCollection.list)
            );
    }

    delete(id) {
        this.#todosCollection
            .delete(id)
            .then(() =>
                this.#todoListView.renderList(this.#todosCollection.list)
            );
    }
}
