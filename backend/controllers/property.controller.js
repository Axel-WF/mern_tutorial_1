import mongoose from "mongoose";
import Property from "../models/property.model.js";

export const getProperty = async (req, res) => {
    try {
        const properties = await Property.find({});
        res.status(200).json({ success: true, data: properties });
    } catch (error) {
        console.log( "Error al recuperar lista de propiedades: ", error.message );
        res.status(500).json({ sucess: false, message: "Server Error" });
    }
}

export const createProperty = async (req, res) => {
    const property = req.body;

    if ( !property.name || !property.price || !property.image ) {
        return res.status(400).json({ sucess:false, message: "Por favor rellena todos los campos necesarios." });
    }
    const newProperty = new Property(property)
    try {
        await newProperty.save();
        res.status(201).json({ success:true, data: newProperty });
    } catch (error) {
        console.error( "Error en el registro de una propiedad: ", error.message );
        req.status(500).json({ sucess:false, message: "Server Error" });
    }
}

export const updatedProperty = async (req, res) => {
    const {id} = req.params;
    const property = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ sucess: false, message: "Propiedad no encontrada." })
    }
    try {
        const updatedProperty = await Property.findByIdAndUpdate(id, property, {new:true});
        res.status(200).json({ success: true, data: updatedProperty });
    } catch (error) {
        res.status(500).json({ sucess: false, message: "Server Error" });
    }
}

export const deleteProperty = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ sucess: false, message: "Propiedad no encontrada." })
    }
    try {
        await Property.findByIdAndDelete(id);
        res.status(200).json({ sucess:true, message: "Propieded eliminada." });
    } catch (error) {
        console.log( "Error eliminando una propiedad: ", error.message );
        res.status(500).json({ success: false, message: "Server Error" });
    }
}