const app = require('./server');
require('./db')

app.listen(app.get('port'), () => {
   console.log(`Server on http://localhost:${app.get('port')}`);
});