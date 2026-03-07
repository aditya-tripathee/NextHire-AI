import axios from "axios";

export const askAi = async ({ message }) => {
  try {
    if (!message || !Array.isArray(message) || message.length === 0) {
      throw new Error("Messages array is empty");
    }
    const response = await axios.post(
      `${process.env.OPENROUTER_URL}`,
      {
        model: process.env.OPENROUTER_MODELS,
        messages: message,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPEN_ROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );
    const content = response?.data?.choices[0]?.message?.content;
    if(!content){
        throw new Error("AI returned empty responses");
    }
    return content;
  } catch (error) {
            console.error("OpenRouter Error",error?.message?.data || error?.message);
            throw new Error("OpenRouter API Error!");
  }
};

