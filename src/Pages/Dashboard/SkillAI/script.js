
export async function fetchData(userInput) {
    const url = 'https://chatgpt-42.p.rapidapi.com/gpt4';
    const headers = {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'e8a2119330mshfa240ee90ad6166p11956ajsnbdd496ada2ef',  // Ensure you protect your API keys appropriately
        'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
    };
    const body = JSON.stringify({
        messages: [
            {
                role: 'user',
                content: userInput
            }
        ],
        web_access: false
    });

    try {
        const response = await fetch(url, { method: 'POST', headers, body });
        const data = await response.json();
        if (data.status) {
            console.log(data.result); // Keep for debugging; consider removing in production
            return data.result;
        } else {
            return 'There was an error processing your request.';
        }
    } catch (error) {
        console.error(error);
        return 'Failed to fetch data.';
    }
}

