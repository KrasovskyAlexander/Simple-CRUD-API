import { getUser } from './getUser';

const serverHandler = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const { url, method } = req;

    const code = 200;
    let response;


    if (method === "GET"){
        res.writeHead(code);
        response = getUser();
    }
    
    console.log(url, method);
    res.end(JSON.stringify(response));
};

export default serverHandler;