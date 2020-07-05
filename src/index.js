const app = require('./server');
require('./db')

app.listen(app.get('port'), /* '192.168.0.6', */ () => {
   console.log(`Server on port ${app.get('port')}`);
});