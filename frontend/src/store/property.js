import { create } from "zustand";

export const usePropertyStore = create((set) => ({
    properties: [],

    setProperties: ( properties ) => set({ properties }),

    createProperty: async ( newProperty ) => {
        if ( !newProperty.name || !newProperty.price || !newProperty.image ) {
            return { success: false, message: "Por favor completa todos los campos." };
        }
        const res = await fetch("/api/properties", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProperty),
        });
        const data = await res.json();
        set((state) => ({properties: [...state.properties, data.data]}));
        return { success: true, message: "Propiedad publicada con éxito." };
    },

    fetchProperties: async () => {
        const res = await fetch("/api/properties");
        const data = await res.json();
        set({properties: data.data});
    },

    deleteProperty: async (pid) => {
        const res = await fetch(`/api/properties/${pid}`, { method: "DELETE" });
        const data = await res.json();
        if (!data.success) return { success: false, message: data.message };

        set((state) => ({ properties: state.properties.filter((property) => property._id !== pid) }));
		return { success: true, message: data.message };
    },
    updateProperty: async (pid, updatedProperty) => {
        const res = await fetch(`/api/properties/${pid}`, { method: "PATCH", headers: {"Content-Type":"application/json"}, body: JSON.stringify(updatedProperty), });
        const data = await res.json();
        if (data.success) return { success: false, message: data.message };
        set((state) => ({ 
            properties: state.properties.map((property) => (property._id === pid ? data.data : property ))
        }));
        return { success: true, message: data.message };
    }
}));