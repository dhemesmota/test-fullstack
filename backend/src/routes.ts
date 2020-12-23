import { Router } from 'express';

import PageController from './controllers/PageController';
import PostController from './controllers/PostController';

const routes = Router();

routes.get('/pages', PageController.index);
routes.get('/pages/:page', PageController.show);
routes.get('/posts', PostController.index);

export default routes;
