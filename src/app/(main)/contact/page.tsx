'use client';

import { useEffect, useState } from 'react';

type ContactInfo = {
  email: string;
  phone: string;
  address: string;
};

type ContactPageContent = {
  title: string;
  contactInfo: ContactInfo;
};

const ContactPage = () => {
  const [content, setContent] = useState<ContactPageContent | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formResponse, setFormResponse] = useState('');

  useEffect(() => {
    fetch('/api/contact')
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    });
    const data = await res.json();
    setFormResponse(data.message);
    if (res.ok) {
      setFormState({ name: '', email: '', message: '' });
    }
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">{content.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p><strong>Email:</strong> {content.contactInfo.email}</p>
          <p><strong>Phone:</strong> {content.contactInfo.phone}</p>
          <p><strong>Address:</strong> {content.contactInfo.address}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" name="message" value={formState.message} onChange={handleChange} className="w-full p-2 border rounded" rows={4}></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
          </form>
          {formResponse && <p className="mt-4">{formResponse}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;