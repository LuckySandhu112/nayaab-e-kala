import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/pages/HomePage";

export default function App() {
  return (
    <>
      <HomePage />
      <Toaster richColors position="top-right" />
    </>
  );
}
