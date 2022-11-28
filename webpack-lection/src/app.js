import '../../common/css/normalize.css';
import '../../common/css/skeleton.css';
import '../../common/css/dark-theme.css';
import './styles.css';

import $ from 'jquery';
import NotesController from './controller/NotesController';

const controller = new NotesController($('.container'));
