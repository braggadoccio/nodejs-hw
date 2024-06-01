import express from "express";
// prettier-ignore
import { addContact, getAllContacts, getContactById, deleteContactById, updateContactById, updateStatusContact } from "../../controllers/contactsController.js";
import { ctrlWrapper } from "../../helpers/ctrlWrapper.js";
import { authenticateToken } from "../../middlewares/autenticateToken.js";

const router = express.Router();

router.get("/", ctrlWrapper(getAllContacts));

router.get("/:contactId", ctrlWrapper(getContactById));

router.post("/", authenticateToken, ctrlWrapper(addContact));

router.delete("/:contactId", authenticateToken, ctrlWrapper(deleteContactById));

router.put("/:contactId", authenticateToken, ctrlWrapper(updateContactById));

// prettier-ignore
router.patch( "/:contactId/favorite", authenticateToken, ctrlWrapper(updateStatusContact));

export { router };
