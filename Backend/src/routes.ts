import { Router } from "express";

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const itemsController = new ItemsController();
const pointsController = new PointsController();

export default Router()
  .get("/items", itemsController.index)
  .post("/points", pointsController.create);
