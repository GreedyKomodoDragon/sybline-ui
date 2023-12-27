import axios from "axios";

export interface RoutingMapping {
    key: string;
    queues: string;
}


export async function getRoutingMappings(): Promise<RoutingMapping[]> {
    if (!process.env.SYB_ADDRESS) {
        throw new Error('Missing required environment variable: SYB_ADDRESS');
    }

    try {
        const response = await axios.get(`${process.env.SYB_ADDRESS}/info/routing`, {

        }); // Replace with your API endpoint

        // Assuming the data returned is an array of user objects
        const data: RoutingMapping[] = response.data.map((mp: any) => ({
            key: mp.key,
            queues: mp.queues,
        }));

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}