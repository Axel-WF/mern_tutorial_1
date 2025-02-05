import mongoose from "mongoose";

const propertySchema = mongoose.Schema({
    property_type: { type: String },
    operation_type: { type: String },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }

} , {
    timestamps: true
});

const Property = mongoose.model('Property', propertySchema)

export default Property;