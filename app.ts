import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './rotas.ts';
import { serve } from "https://deno.land/std@0.55.0/http/server.ts";
const s = serve({ port: 8000 });

const env = Deno.env.toObject()
const HOST = env.HOST || 'localhost'
const PORT = env.PORT || 3000

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Rodando na porta ${PORT}`);
app.listen(`${HOST}:${PORT}`);