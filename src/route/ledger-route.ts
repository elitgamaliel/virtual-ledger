import express from "express";
import Middleware from "../middleware";
import ledgerController from "../controller/ledger-controller";

const router = express.Router();

router.get("/", ledgerController.read);

export default router;
