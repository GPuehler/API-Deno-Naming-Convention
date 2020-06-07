import { Router }from 'https://deno.land/x/oak/mod.ts';
import { getLink, postLink } from './controller.ts';

const router = new Router();

router
    .get('/qrcode',getLink)
    .post('/post',postLink); //Enviar um link do Linkedin e retornar um link pro QR-Code

export default router;