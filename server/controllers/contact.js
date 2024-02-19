import Contact from "../models/Contact.js";

const contact = async (req, res) => {
  await Contact.create(req.body)
    .then((result) => {
      if (result) {
        res.status(201).send({ message: "Contact created", result });
      }
    })
    .catch((err) => {
      res.status(403).send({ message: "Contact not created" });
    });
};
export default contact;
