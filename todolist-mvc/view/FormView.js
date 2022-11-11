class FormView {
    #config = null;
    el = null;
    #form = null;

    static template = `
        <div class="row">
            <form id="newTodoForm">
                <div class="ten columns">
                    <input name="id" type="text" />
                    <input
                        type="text"
                        class="u-full-width"
                        name="title"
                    />
                </div>
                <div class="two columns">
                    <button>Save</button>
                </div>
            </form>
        </div>
    `;

    constructor(config) {
        this.#config = config;

        this.#initView();
    }

    #initView() {
        this.el = htmlToElement(FormView.template);
        this.#form = this.el.querySelector('form');

        this.el.addEventListener('submit', (e) => {
            e.preventDefault();

            const obj = this.getValues();

            this.#config.onSave(obj);
            e.target.reset();
        });
    }

    clear() {
        this.#form.reset();
    }

    getValues() {
        return {
            id: this.#form.elements.id.value,
            title: this.#form.elements.title.value,
        };
    }

    fillData({ id, title }) {
        this.#form.elements.id.value = id;
        this.#form.elements.title.value = title;
    }
}
