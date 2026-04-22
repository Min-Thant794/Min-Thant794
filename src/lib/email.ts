import emailjs from "@emailjs/browser";

type ContactFormData = {
    name: string;
    email: string;
    subject?: string;
    message: string;
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendContactEmail = async (params: ContactFormData) => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("Missing EmailJS environment variables");
    }

    const templateParams = {
        from_name: params.name,
        reply_to: params.email,
        subject: params.subject,
        message: params.message
    }

    try {
        const response = await emailjs.send (
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            {
                publicKey: PUBLIC_KEY
            }
        )

        return response;
    } catch (error) {
        console.error("EmailJS error: ", error);
        throw error;
    }
}