import { Router }from 'https://deno.land/x/oak/mod.ts'; //Para métodos HTTP
import { setFormat } from './controller.ts';

const router = new Router();

router
    .post('/format', setFormat);

export default router;