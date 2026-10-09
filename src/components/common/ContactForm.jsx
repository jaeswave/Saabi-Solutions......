import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Send } from "lucide-react";
import { site } from "../../config/site.js";
import { services, solutions } from "../../data/services.js";
import { useTone } from "../ui/ToneContext.js";
import Button from "../ui/Button.jsx";

const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // paste your own Formspree link here

const budgets = [
  "Not sure yet",
  "Under ₦500k",
  "₦500k – ₦2m",
  "₦2m – ₦5m",
  "₦5m+",
];
const topics = [...services, ...solutions]
  .map((s) => s.title)
  .concat([
    "Turn my idea into a product",
    "Saabi Academy (public class)",
    "Saabi Academy (private training)",
    "Corporate training",
    "Something else",
  ]);

// Sends the enquiry straight to your inbox through Formspree.
export default function ContactForm() {
  const t = useTone();
  const [params] = useSearchParams();
  const initial = {
    name: "",
    email: "",
    service: topics.includes(params.get("topic"))
      ? params.get("topic")
      : topics[0],
    budget: budgets[0],
    message: "",
  };
  const [f, setF] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const field = `w-full rounded-lg border px-4 py-3 outline-none transition ${t.input}`;
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(f),
      });
      if (res.ok) {
        setStatus("sent");
        setF(initial);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        className={field}
        required
        placeholder="Your name"
        value={f.name}
        onChange={set("name")}
      />
      <input
        className={field}
        required
        type="email"
        placeholder="Email address"
        value={f.email}
        onChange={set("email")}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <select className={field} value={f.service} onChange={set("service")}>
          {topics.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <select className={field} value={f.budget} onChange={set("budget")}>
          {budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
      <textarea
        className={field}
        required
        rows={5}
        placeholder="Tell us about your project or the class you want"
        value={f.message}
        onChange={set("message")}
      />
      <Button className="w-full" type="submit" disabled={status === "sending"}>
        <Send size={16} />{" "}
        {status === "sending" ? "Sending..." : "Send enquiry"}
      </Button>
      {status === "sent" && (
        <p className={`text-sm ${t.accent}`}>
          Thank you! We have received your message and will reply within one
          business day.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please WhatsApp us or email {site.email}.
        </p>
      )}
    </form>
  );
}
