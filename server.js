const express = require('express');
const cors = require('cors');
const realm = require('./Router/Realms')
const items = require('./Router/Items')
const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const corsConfig = {
  origin: ['http://localhost:3000', 'https://warcraftauctions.netlify.com']
}
app.use(cors(corsConfig));

app.use('/realm', realm);
app.use('/items', items);

app.listen(port, () => {
    console.log(`|*******************************chilling on http://localhost:${port}*******************************|`);
});
