
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="glassmorphism p-8 rounded-lg max-w-2xl mx-auto">
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-cosmos-star mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-cosmos-space border border-cosmos-stardust rounded-md py-3 px-4 text-cosmos-star focus:outline-none focus:ring-2 focus:ring-cosmos-purple"
          placeholder="Your name"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-cosmos-star mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-cosmos-space border border-cosmos-stardust rounded-md py-3 px-4 text-cosmos-star focus:outline-none focus:ring-2 focus:ring-cosmos-purple"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-cosmos-star mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full bg-cosmos-space border border-cosmos-stardust rounded-md py-3 px-4 text-cosmos-star focus:outline-none focus:ring-2 focus:ring-cosmos-purple"
          placeholder="Project inquiry"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-cosmos-star mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-cosmos-space border border-cosmos-stardust rounded-md py-3 px-4 text-cosmos-star focus:outline-none focus:ring-2 focus:ring-cosmos-purple"
          placeholder="Your message here..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={18} />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
