import express from "express";
// prettier-ignore
import {addContact, getAllContacts, getContactById, deleteContactById, updateContactById, updateStatusContact} from "../../controllers/contactsController.js";
import { ctrlWrapper } from "../../helpers/ctrlWrapper.js";

const router = express.Router();

router.get("/", ctrlWrapper(getAllContacts));

router.get("/:contactId", ctrlWrapper(getContactById));

router.post("/", ctrlWrapper(addContact));

router.delete("/:contactId", ctrlWrapper(deleteContactById));

router.put("/:contactId", ctrlWrapper(updateContactById));

router.patch("/:contactId/favorite", ctrlWrapper(updateStatusContact));

export { router };
