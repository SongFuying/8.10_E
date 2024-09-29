import { ModeToggle } from "@/components/ModeToggle";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import React from "react";

export default function HomePage() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <div>Content</div>

      <footer>footer</footer>
    </>
  );
}
