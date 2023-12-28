import axios from "axios";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = import.meta.env.VITE_SYB_ADDRESS

export interface RoutingMapping {
    keys: string[];
}

export async function getRoutingMappings(): Promise<RoutingMapping> {
    if (!import.meta.env.VITE_SYB_ADDRESS) {
        throw new Error('Missing required environment variable: SYB_ADDRESS');
    }

    try {
        const response = await axios.get(`${import.meta.env.VITE_SYB_ADDRESS}/info/routing`); 
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}