import express from "express";
import Middleware from "../middleware";
import ledgerController from "../controller/ledger-controller";

const router = express.Router();

router.get("/:id", ledgerController.readByID);

export default router;
