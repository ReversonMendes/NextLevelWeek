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

    await knex("points").insert(pointsData);
    return response.json({ msg: true })
  }
}

export default PointsController;