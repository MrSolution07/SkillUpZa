export async function fetchData(userInput) {
    const url = 'https://chatgpt-42.p.rapidapi.com/gpt4';
    const headers = {
        'content-type': 'application/json',
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST || 'chatgpt-42.p.rapidapi.com'
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

    const questionsAboutCreator = [
        // Direct questions
        "who created you?",
        "who created you ?",
        "who made you?",
        "who made you ?",
        "who is your creator?",
        "who is your creator ?",
        "can you tell me who built you?",
        "can you tell me who built you ?",
        "who is responsible for making you?",
        "who is responsible for making you ?",

        // Specific or detailed questions
        "which company developed you?",
        "which company developed you ?",
        "who are the people behind your creation?",
        "who are the people behind your creation ?",
        "who programmed you?",
        "who programmed you ?",
        "who designed your ai?",
        "who designed your ai ?",
        "who invented you?",
        "who invented you ?",

        // Indirect questions
        "where do you come from?",
        "where do you come from ?",
        "who owns you?",
        "who owns you ?",
        "are you made by a specific organization?",
        "are you made by a specific organization ?",
        "who’s behind this technology?",
        "who’s behind this technology ?",
        "who’s the team that built you?",
        "who’s the team that built you ?",

        // Curiosity-driven questions
        "what’s the story of how you were made?",
        "what’s the story of how you were made ?",
        "who decided to create an ai like you?",
        "who decided to create an ai like you ?",
        "why were you created, and by whom?",
        "why were you created, and by whom ?",
        "how were you built, and who did it?",
        "how were you built, and who did it ?",
        "who thought of creating you?",
        "who thought of creating you ?",

        // Casual phrasing
        "so, who made you?",
        "so, who made you ?",
        "who put you together?",
        "who put you together ?",
        "who’s your maker?",
        "who’s your maker ?",
        "who’s behind all this?",
        "who’s behind all this ?",
        "who came up with you?",
        "who came up with you ?"
    ];

    try {
        const response = await fetch(url, { method: 'POST', headers, body });
        const data = await response.json();
        if (data.status) {
            // Convert userInput to lowercase for comparison
            const lowerCaseInput = userInput.toLowerCase();
            if (questionsAboutCreator.includes(lowerCaseInput)) {
                data.result = "Mr solulu aka Christian Bulabula";
            }
            return data.result;
        } else {
            return 'there was an error processing your request.';
        }
    } catch (error) {
        console.error(error);
        return 'failed to fetch data.';
    }
}