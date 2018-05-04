import shortenerRoutes from './shortener_routes';

const routes = (app, db) => {
    shortenerRoutes(app, db);
};

export default routes;