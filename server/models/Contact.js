import { Schema, model } from "mongoose";

const contactSchema = new Schema({
    phone: {
        type: Number,
        required: [true, 'Number is required!'],
    },
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
});

const Contact = model('collection_contact', contactSchema);

export default Contact;