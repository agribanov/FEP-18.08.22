import $ from 'jquery';
import { interpolate } from '../../../common/js/utils';

export default class BoardView {
    #config = null;
    $el = null;

    static SELECTORS = {
        DRAG: '.drag-note',
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
        const r = Math.round(Math.random() * 255).toString(16);
        const g = Math.round(Math.random() * 255).toString(16);
        const b = Math.round(Math.random() * 255).toString(16);
        const color = `#${r}${g}${b}`;
        return interpolate(BoardView.noteTemplate, { ...note, color });
    }

    static getElementId($el) {
        return '' + $el.closest(BoardView.SELECTORS.NOTE).data('noteIndex');
    }

    constructor(config) {
        this.#config = config;

        this.#initView();
    }

    #initView() {
        this.$el = $(BoardView.template);

        // console.log(BoardView.SELECTORS);

        this.$el.on('click', BoardView.SELECTORS.DELETE, (e) => {
            const id = BoardView.getElementId($(e.target));

            this.delete(id);
        });

        this.$el.on('change', BoardView.SELECTORS.TEXTAREA, (e) => {
            const $textarea = $(e.target);
            const id = BoardView.getElementId($textarea);

            this.changeDescription(id, $textarea.val());
        });
    }

    renderList(list) {
        const items = list.map(BoardView.getNoteHtml).join('');

        this.$el.html(items);
    }

    delete(id) {
        this.#config.onDelete(id);
    }

    changeDescription(id, newValue) {
        this.#config.onUpdate(id, { description: newValue });
    }
}
