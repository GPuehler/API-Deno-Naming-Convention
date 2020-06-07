import * as tipos from "https://deno.land/x/case/mod.ts";


const getLink = ({response} :{response:any}) => {
    response.body = {'Teste' : tipos.camelCase('testando teste')}
};

const postLink = async ({request,response} : {request:any,response:any}) => {
    const palavra = await request.body(JSON);

    response.body = { 'Formatações' : {
        'Camel Case': tipos.camelCase(palavra.value.key_wrong),
        
    }};
};

export {getLink, postLink};
