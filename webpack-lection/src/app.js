import './styles.css';
import '../../common/css/normalize.css';
import '../../common/css/skeleton.css';
import '../../common/css/dark-theme.css';

import NotesController from './controller/NotesController';

const controller = new NotesController($('.container'));
