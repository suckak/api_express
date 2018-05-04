const shortenerRoutes = (app, db) => {
    app.post('/shortener', (request, response) => {
        console.log('body',request.body);
        response.send('hello');
    });
};

export default shortenerRoutes;