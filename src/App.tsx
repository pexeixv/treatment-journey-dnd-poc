import { Github } from "lucide-react";
import "./App.css";
import { KanbanBoard } from "./components/KanbanBoard";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

const FooterLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      variant="link"
      asChild
      className="font-semibold tracking-tight scroll-m-20"
    >
      {children}
    </Button>
  );
};

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex flex-col min-h-screen">
          <main className="flex flex-col gap-6 mx-4">
            <div className="p-4">
              <h1 className="text-2xl font-extrabold tracking-tight scroll-m-20">
                Drag and Drop Kanban Board
              </h1>
            </div>
            <KanbanBoard />
          </main>
          <footer className="mt-6">
            <ul className="flex items-center justify-center">
              <li>
                <FooterLink>
                  <a href="https://react.dev/">React</a>
                </FooterLink>
              </li>
              <li>
                <FooterLink>
                  <a href="https://dndkit.com">dndkit</a>
                </FooterLink>
              </li>
              <li>
                <FooterLink>
                  <a href="https://tailwindcss.com/">tailwind</a>
                </FooterLink>
              </li>
              <li>
                <FooterLink>
                  <a href="https://ui.shadcn.com/">shadcn/ui</a>
                </FooterLink>
              </li>
            </ul>
          </footer>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
