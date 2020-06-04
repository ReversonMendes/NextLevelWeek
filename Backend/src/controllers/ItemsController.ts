import { Request, Response } from 'express';
import knex from "../database/connection";

class ItemsController {
  async index(request: Request, response: Response) {

    const items = await knex("items").select("*");
    const serializeItems = items.map(item => ({
      id: item.id,
      name: item.title,
      image_url: `http://localhost:5000/uploads/${item.image}`
    }))
    return response.json(serializeItems);
  }
}

export default new ItemsController;