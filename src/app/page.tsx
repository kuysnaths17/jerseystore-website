// import Image from "next/image";
import Navigation from "./navigation";
import { NavProvider } from "./navcontex";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <NavProvider>
        <Navigation />
      </NavProvider>
    </div>
  );
}
