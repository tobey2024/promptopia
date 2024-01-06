import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        console.log(params.id)
        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator');

        return new Response(JSON.stringify(prompts), { status: 200}); 
    } catch (error) {
        return new Response('failed to fetch all prompts', {status: 500})
    }
}