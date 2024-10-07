import { Github } from "lucide-react";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">
          Welcome to front-end boilerplate
        </h1>
        <p className="mb-8 text-xl text-gray-700">
          Start building your awesome project!
        </p>
        <a
          href="https://github.com/GustavoOly/Front-end-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-lg bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800"
        >
          <Github className="mr-2" size={20} />
          View on GitHub
        </a>
      </div>
    </ThemeProvider>
  );
}
