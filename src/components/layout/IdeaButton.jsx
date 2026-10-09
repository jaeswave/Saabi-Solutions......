import { Link } from "react-router-dom";
import { Lightbulb } from "lucide-react";

export default function IdeaButton() {
  return (
    <Link
      to="/contact?topic=Turn%20my%20idea%20into%20a%20product"
      className="fixed bottom-20 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-aqua px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-brand/30 transition hover:scale-105"
    >
      <Lightbulb size={18} /> Got an idea?
    </Link>
  );
}
