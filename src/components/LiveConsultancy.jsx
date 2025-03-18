import React, { useState, useEffect, useRef } from "react";
import Groq from "groq-sdk";
import logo from "../images/logo.png"; // Adjust the path if needed

const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const LiveConsultancy = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "You are an empathetic and supportive assistant trained to counsel individuals struggling with drug addiction. Provide encouragement, helpful advice, and practical steps to overcome addiction. Please give short responses and be friendly. Respond in the language the user uses.",
    },
    {
      role: "assistant",
      content:
        "Hi there! I'm here to support you. Feel free to share anything on your mind, and we can work through it together. 😊",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [listening, setListening] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [language, setLanguage] = useState("en-PK"); // Default language
  const chatContainerRef = useRef(null);

  // Initialize SpeechRecognition
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = language; // Set language for speech recognition

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      // Prioritize voices for Pakistani languages
      const urduVoice = availableVoices.find(
        (voice) => voice.lang === "ur-PK" || voice.lang.startsWith("ur")
      );
      const punjabiVoice = availableVoices.find(
        (voice) => voice.lang === "pa-PK" || voice.lang.startsWith("pa")
      );
      const sindhiVoice = availableVoices.find(
        (voice) => voice.lang === "sd-PK" || voice.lang.startsWith("sd")
      );
      const pashtoVoice = availableVoices.find(
        (voice) => voice.lang === "ps-PK" || voice.lang.startsWith("ps")
      );
      const balochiVoice = availableVoices.find(
        (voice) => voice.lang === "bal-PK" || voice.lang.startsWith("bal")
      );
      const selectedVoice =
        urduVoice ||
        punjabiVoice ||
        sindhiVoice ||
        pashtoVoice ||
        balochiVoice ||
        availableVoices[0];
      setSelectedVoice(selectedVoice);
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Handle speech recognition result
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setUserInput(transcript);
    setListening(false);
    handleSubmit(transcript);
  };

  // Handle speech recognition errors
  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    setListening(false);
  };

  // Start listening
  const startListening = () => {
    setListening(true);
    recognition.start();
  };

  // Stop listening
  const stopListening = () => {
    setListening(false);
    recognition.stop();
  };

  // Handle form submission
  const handleSubmit = async (inputText = userInput) => {
    if (!inputText.trim()) return;

    const userMessage = { role: "user", content: inputText };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setLoading(true);
    setError("");

    try {
      // Call the Groq API
      const chatCompletion = await groq.chat.completions.create({
        model: "llama-3.2-90b-vision-preview",
        messages: updatedMessages,
        temperature: 0.7,
        max_tokens: 150,
        top_p: 1,
        stream: false,
      });

      // Get the AI response
      const aiResponse = chatCompletion.choices[0].message.content;

      // Update messages with the AI response
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: aiResponse },
      ]);

      // Speak the assistant's response
      speakText(aiResponse);
    } catch (err) {
      console.error("Error generating response:", err);
      setError("Unable to fetch response. Please try again later.");
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "Error: Unable to fetch response." },
      ]);
    } finally {
      setLoading(false);
      setUserInput("");
    }
  };

  // Speak the assistant's response
  const speakText = (text) => {
    if (!selectedVoice) {
      console.error("No voice selected.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    utterance.pitch = 1.2; // Slightly higher pitch for a pleasant voice
    utterance.rate = 1.0; // Normal speaking rate
    utterance.lang = selectedVoice.lang; // Set the language of the voice

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  // Stop TTS
  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  // Toggle play/stop for TTS
  const toggleSpeak = (text) => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      speakText(text);
    }
  };

  // Scroll to the bottom of the chat
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  // Automatically scroll to the bottom when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="min-h-screen bg-gradient-to-b mt-24 from-green-200 to-gray-100 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
        <i>Live Consultancy</i>
      </h1>

      {/* Chat Container */}
      <div className="relative w-full max-w-4xl rounded-xl shadow-2xl flex flex-col overflow-hidden h-[80vh] bg-white">
        {/* Background Logo */}
        <div
          className="absolute inset-0 bg-center opacity-20 bg-no-repeat"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "40%",
          }}
        ></div>

        {/* Chat Body */}
        <div
          ref={chatContainerRef}
          className="relative flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-100"
        >
          {messages.slice(1).map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-sm px-4 py-2 rounded-xl text-sm md:text-base ${
                  msg.role === "user"
                    ? "bg-green-600 text-white"
                    : "bg-green-100 text-green-900"
                } shadow-md`}
              >
                {msg.content}
                {msg.role === "assistant" && (
                  <button
                    onClick={() => toggleSpeak(msg.content)}
                    className="ml-2 text-sm text-green-500 hover:text-green-700"
                    aria-label={isSpeaking ? "Stop speaking" : "Speak response"}
                  >
                    {isSpeaking ? "⏹️" : "🔊"}
                  </button>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="px-4 py-2 bg-green-100 text-green-900 rounded-xl shadow-md">
                Typing...
              </div>
            </div>
          )}
          {error && (
            <div className="text-red-500 text-center text-sm">{error}</div>
          )}
        </div>

        {/* Input Area */}
        <div className="relative  bg-green-50 p-3 flex items-center gap-2 border-t border-green-200">
          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              recognition.lang = e.target.value; // Update speech recognition language
            }}
            className="p-2 rounded-full bg-white text-green-900 border border-green-200"
          >
            <option value="en-PK">English</option>
            <option value="ur-PK">Urdu</option>
            <option value="pa-PK">Punjabi</option>
            <option value="sd-PK">Sindhi</option>
            <option value="ps-PK">Pashto</option>
            <option value="bal-PK">Balochi</option>
          </select>

          {/* Voice Recording Button */}
          <button
            onClick={listening ? stopListening : startListening}
            className={`p-2 rounded-full transition ${
              listening
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
            aria-label={listening ? "Stop listening" : "Start listening"}
          >
            {listening ? "🛑" : "🎤"}
          </button>

          {/* Input Field */}
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-white focus:outline-none text-green-900 text-sm md:text-base border border-green-200"
            placeholder="Type your message..."
            aria-label="Type your message"
            disabled={loading}
          />

          {/* Send Button */}
          <button
            onClick={() => handleSubmit()}
            className={`p-2 rounded-full transition ${
              loading
                ? "bg-red-500 text-white cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
            disabled={loading}
            aria-label="Send message"
          >
            {loading ? "⏳" : "✉️"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveConsultancy;
