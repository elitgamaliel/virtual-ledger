import express, { Request, Response } from "express";
import { Ledger } from "../model/ledger";
import { User } from "../model/user";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const record = await User.create({ ...req.body });
      return res.json({
        record,
        msg: "Successfully created a user",
      });
    } catch (e) {
      return res.json({
        msg: "Failed to create a New user",
        status: 500,
        jsMsg: (e as Error).message,
        route: "/user",
      });
    }
  }

  async read(req: Request, res: Response) {
    try {
      const limit = req.query?.limit as number | undefined;
      const offset = req.query?.offset as number | undefined;
      const records = await User.findAll({
        where: {},
        include: [
          {
            model: Ledger,
            as: "ledger",
          },
        ],
        limit,
        offset,
      });
      return res.json(records);
    } catch (e) {
      return res.json({
        msg: "Failed to read Users",
        status: 500,
        jsMsg: (e as Error).message,
        route: "/user",
      });
    }
  }

  async readByID(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await User.findOne({ where: { id } });
      return res.json(record);
    } catch (e) {
      return res.json({
        msg: "Failed to read the user",
        status: 500,
        jsMsg: (e as Error).message,
        route: "/user/:id",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await User.findOne({ where: { id } });

      if (!record) {
        return res.json({ msg: "Can't find existing record." });
      }

      const updatedRecord = await record.update({ ...req.body });
      return res.json(updatedRecord);
    } catch (e) {
      return res.json({
        msg: "Failed to update the user",
        status: 500,
        jsMsg: (e as Error).message,
        route: "/user/:id",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await User.findOne({ where: { id } });

      if (!record) {
        return res.json({ msg: "Can't find existing record." });
      }

      const deletedRecord = await record.destroy();
      return res.json(deletedRecord);
    } catch (e) {
      return res.json({
        msg: "Failed to delete the user",
        status: 500,
        jsMsg: (e as Error).message,
        route: "/user/:id",
      });
    }
  }
}

export default new UserController();
