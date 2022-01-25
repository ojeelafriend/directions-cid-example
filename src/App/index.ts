import express from 'express';
import container from './dependency-injection/index';

const app = express();
app.use(express.json(), express.urlencoded({ extended: false }));

const serviceDirection = container.get('service.direction');
const direction = serviceDirection.create().then((success: object) => {
  console.log(success);
});

app.listen(4000, () => {
  console.log('Server is running');
});
