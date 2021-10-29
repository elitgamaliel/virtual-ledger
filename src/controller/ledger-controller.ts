import express, { Request, Response } from "express";

class LedgerController {
  async create(req: Request, res: Response) {}
  async readByID(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}
  async delete(req: Request, res: Response) {}
}

export default new LedgerController();
