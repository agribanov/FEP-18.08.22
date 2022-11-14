class BoardView {
    #config = null;
    el = null;

    static SELECTORS = {
        DELETE: '.delete-note',
        NOTE: '.note',
        TEXTAREA: '.edit-note-control',
    };

    static CLASSES = {
        DELETE: 'delete-note',
        NOTE: 'note',
        TEXTAREA: 'edit-note-control',
    };

    static template = `
        <div class="field row u-full-height"></div>
    `;

    static noteTemplate = `
        <div class="note" data-note-index="{{id}}" >
            <span class="drag-note">o</span>
            <span class="delete-note">x</span>
            <textarea class="edit-note-control" name="description">{{description}}</textarea>
        </div>
    `;

    static getNoteHtml(note) {
        return interpolate(BoardView.noteTemplate, note);
    }

    static getElementId(el) {
        return el.closest(BoardView.SELECTORS.NOTE).dataset.noteIndex;
    }

    constructor(config) {
        this.#config = config;

        this.#initView();
    }

    #initView() {
        this.el = htmlToElement(BoardView.template);

        console.log(BoardView.SELECTORS);

        this.el.addEventListener('click', (e) => {
            if (e.target.classList.contains(BoardView.CLASSES.DELETE)) {
                const id = BoardView.getElementId(e.target);

                this.delete(id);
            }
        });

        this.el.addEventListener('change', (e) => {
            if (e.target.classList.contains(BoardView.CLASSES.TEXTAREA)) {
                const id = BoardView.getElementId(e.target);

                this.changeDescription(id, e.target.value);
            }
        });
    }

    renderList(list) {
        const items = list.map(BoardView.getNoteHtml).join('');

        this.el.innerHTML = items;
    }

    delete(id) {
        this.#config.onDelete(id);
    }

    changeDescription(id, newValue) {
        this.#config.onUpdate(id, { description: newValue });
    }
}
