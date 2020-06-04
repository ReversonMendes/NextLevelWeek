import { Request, Response } from 'express';
import knex from "../database/connection";

class PointsController {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = request.body;


    const pointsData = {
      image: "image-fake",
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    }
    const trx = await knex.transaction();
    const pointsId = await trx("points").insert(pointsData);
    const points_id = pointsId[0];
    const pointItems = items.map((items_id: number) => ({
      items_id,
      points_id
    }))

    await trx("points_items").insert(pointItems);
    await trx.commit();

    return response.json({
      points_id,
      ...pointsData
    })
  }
}

export default new PointsController;