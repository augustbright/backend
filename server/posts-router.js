import { Router } from 'express';
import postsController from './posts-controller.js';

const router = new Router({});

router.post('/', postsController.create);
router.get('/', postsController.getAll);
router.get('/:id', postsController.getOne);
router.put('/:id', postsController.update);
router.delete('/:id', postsController.delete);

export default router;