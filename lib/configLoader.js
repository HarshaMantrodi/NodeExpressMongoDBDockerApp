<<<<<<< HEAD
'use strict';

var logger  = require('./logger'),
    env     = process.env.NODE_ENV;

if (!env) {
  env = 'development';
} 

logger.log('Node environment: ' + env);
logger.log('loading config.' + env + '.json');

=======
'use strict';

var logger  = require('./logger'),
    env     = process.env.NODE_ENV;

if (!env) {
  env = 'development';
} 

logger.log('Node environment: ' + env);
logger.log('loading config.' + env + '.json');

>>>>>>> 07587da31d055484ddcc90ac85d480175f9987e6
module.exports = require('../config/config.' + env + '.json');