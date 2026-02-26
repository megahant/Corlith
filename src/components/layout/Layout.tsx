import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { renderCanvas } from "@/components/ui/canvas";
import corlithLogo from "@/assets/corlith-logo.png";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <canvas
        id="canvas"
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{ opacity: 0.4 }}
      />
      <Navbar />
      <main className="relative z-[2]">{children}</main>
      {/* Footer */}
      <footer className="relative z-[2] border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={corlithLogo} alt="Corlith" className="h-10" />
          <p className="text-muted-foreground text-sm">
            © 2026 Corlith. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
