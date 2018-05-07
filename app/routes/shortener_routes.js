import dbConfig from '../../config/db';

const shortenerRoutes = (app, db) => {
    const collection = db.collection(dbConfig.collections.urls);
    
    app.get('/shortener/:url', (request, response) => {
        const query = { short: parseInt(request.params.url) };
        collection.findOne(query, (err, url) => {
            if(err){
                response.send(err);
            }
            if(url){
                response.redirect(url.url);
            }else{
                response.send('URL NOT FOUND');
            }
        });
    });

    app.get('/shortener', (request, response) => {
        collection.find().toArray((err, urls) => {
            response.send(urls);
        });
    });

    app.post('/shortener', (request, response) => {
        const { url } = request.body;
        collection.insert({
            url,
            short: Date.now()
        }, (err, result)=>{
            if (err) {
                response.send({ 'error': 'An error has occurred' });
            } else {
                response.send(result.ops[0]);
            }
        });
    });

};

export default shortenerRoutes;