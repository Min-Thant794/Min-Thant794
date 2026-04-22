import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { sendContactEmail } from "../../../lib/email";

const inputClassName =
  "w-full rounded-lg bg-surface-container p-4 text-on-surface placeholder:text-outline transition-all border-none border-b-2 border-transparent focus:border-primary focus:ring-0 outline-none";

const ContactForm = () => {

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error"> (null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
      });
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(isSending) return;

    setIsSending(true);
    setStatus(null);

    try {
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      
    }
  };


  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <label className="font-headline text-xs uppercase tracking-widest text-on-surface-variant">
            Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="John Doe"
            className={inputClassName}
          />
        </div>

        <div className="space-y-2">
          <label className="font-headline text-xs uppercase tracking-widest text-on-surface-variant">
            Email Address
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="john@example.com"
            className={inputClassName}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-headline text-xs uppercase tracking-widest text-on-surface-variant">
          Subject
        </label>
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          type="text"
          placeholder="Project Inquiry"
          className={inputClassName}
        />
      </div>

      <div className="space-y-2">
        <label className="font-headline text-xs uppercase tracking-widest text-on-surface-variant">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          placeholder="Tell me about your vision..."
          className={`${inputClassName} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="w-full rounded-xl bg-linear-to-r from-primary to-secondary px-12 py-4 font-bold text-on-primary-fixed shadow-lg transition-all active:scale-95 hover:shadow-primary/20 md:w-auto"
      >
        {isSending ? "Sending..." : "Transmit Message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600">Message sent successfully.</p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-500">Failed to send message.</p>
      )}
    </form>
  );
};

export default ContactForm;