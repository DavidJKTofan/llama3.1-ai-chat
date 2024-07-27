export default {
	async fetch(request, env) {
	  // Extract query parameters from the URL
	  const url = new URL(request.url);
	  const prompt = url.searchParams.get('prompt') || "Tell the user to add a prompt in the URL by writing their question after the prompt query.";
  
	  const response = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
		  prompt: prompt
		}
	  );
  
	  return new Response(JSON.stringify(response));
	}
  };
  