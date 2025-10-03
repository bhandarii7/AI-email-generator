import { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:8000";


function App() {
  const [heading, setHeading] = useState("");
  const [output, setOutput] = useState("");

  const api = axios.create({
    baseURL: BACKEND_URL,
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await api.get("/generate", { params: { heading } });
      setOutput(response.data.email);
    } catch (error) {
      console.error("Error generating email:", error);
      setOutput("Failed to generate email. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-violet-600 p-4 shadow-lg">
        <h1 className="text-2xl font-bold text-white text-center">
          Email Generator
        </h1>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <form className="flex flex-col gap-4 mb-8" onSubmit={handleSubmit}>
          <input
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            placeholder="Enter your email subject..."
          />
          <button
            className="bg-violet-600 text-white py-3 
            px-6 rounded-lg hover:bg-violet-700 transition duration-300 ease-in-out shadow-md cursor-pointer"
            type="submit"
          >
            Generate Email
          </button>
        </form>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Generated Email
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            {output ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {output}
              </ReactMarkdown>
            ) : (
              <p className="text-gray-500 italic">
                Your generated email will appear here...
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
