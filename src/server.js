import express from 'express';
import path from 'path';

import * as config from './config';


var app = express();

// Configure the static path
app.use('/', express.static(path.join(__dirname, '../public')));

app.listen(config.PORT, () => {
  console.log('The server has started on http://localhost:' + config.PORT + '/');
})
