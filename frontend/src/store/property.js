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
        try {
            const res = await fetch(`/api/properties/${pid}`, { 
                method: "DELETE"
            });
            const data = await res.json();
            
            // Si la respuesta no es exitosa, retornamos el error
            if (!data.success) {
                return { success: false, message: data.message };
            }
            
            // Actualizamos el estado de forma inmediata
            set((state) => {
                const filteredProperties = state.properties.filter(
                    property => property._id !== pid
                );
                return { properties: filteredProperties };
            });
            
            return { success: true, message: "Propiedad eliminada con éxito" };
        } catch (error) {
            console.error("Error al eliminar:", error);
            return { success: false, message: "Error al eliminar la propiedad" };
        }
    },
    updateProperty: async (pid, updatedProperty) => {
        try {
            const res = await fetch(`/api/properties/${pid}`, { 
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedProperty)
            });
            const data = await res.json();
            
            // Si la respuesta no es exitosa, retornamos el error
            if (!data.success) {
                return { success: false, message: data.message };
            }
            
            // Actualizamos el estado de forma inmediata
            set((state) => ({
                properties: state.properties.map(property => 
                    property._id === pid ? data.data : property
                )
            }));
            
            return { success: true, message: "Propiedad actualizada con éxito" };
        } catch (error) {
            console.error("Error al actualizar:", error);
            return { success: false, message: "Error al actualizar la propiedad" };
        }
    }
}));