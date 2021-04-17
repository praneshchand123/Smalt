import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

import routes from './routes';
app.use('/', routes);

app.listen(port, () => console.log(`App server listening on port ${port}!`));