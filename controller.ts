import * as tipos from "https://deno.land/x/case/mod.ts";

const getLink = ({response} :{response:any}) => {
    response.body = {'Teste' : tipos.camelCase('testando teste')}
};

const postLink = async ({request,response} : {request:any,response:any}) => {
    const result  = await request.body(JSON);
    const palavra = result.value.key_wrong;

    response.body = { 'Formatações' : {
        'Camel Case': tipos.camelCase(palavra),
        'Constant Case': tipos.constantCase (palavra),
        'Dot Case': tipos.dotCase(palavra),
        'Headers Case': tipos.headerCase (palavra),
        'Lower Case': tipos.lowerCase (palavra),
        'Lower First Case': tipos.lowerFirstCase(palavra),
        'Normal Case': tipos.normalCase  (palavra),
        'Param Case': tipos.paramCase (palavra),
        'Pascal Case': tipos.pascalCase (palavra),
        'Path Case': tipos.pathCase (palavra),
        'Sentence Case': tipos.sentenceCase (palavra),
        'Snake Case': tipos.snakeCase (palavra),
        'Swap Case': tipos.swapCase (palavra),
        'Title Case': tipos.titleCase (palavra),
        'Upper Case': tipos.upperCase (palavra),
        'Upper First Case': tipos.upperFirstCase (palavra),
    }};
};

export {getLink, postLink};
