'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          reason: '',
          message: '',
        });
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-[#f5f5f5] pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 text-center">
            Write to me
          </h2>
          <p className="text-base text-gray-600 mb-8 text-center">
            Your questions, ideas, or opportunities. I make sure I respond to every mail.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Row */}
            <div>
              <label className="block text-base font-medium text-[#1a1a1a] mb-2">
                Full Name <span className="text-[#E63A46]">*</span>
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5b3a8f] focus:border-transparent outline-none transition-all text-gray-900"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5b3a8f] focus:border-transparent outline-none transition-all text-gray-900"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-base font-medium text-[#1a1a1a] mb-2">
                E-mail <span className="text-[#E63A46]">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5b3a8f] focus:border-transparent outline-none transition-all text-gray-900"
                placeholder=""
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-base font-medium text-[#1a1a1a] mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5b3a8f] focus:border-transparent outline-none transition-all text-gray-900"
                placeholder="(000) 000-0000"
              />
            </div>

            {/* Reason for contact */}
            <div>
              <label className="block text-base font-medium text-[#1a1a1a] mb-2">
                Reason for contact <span className="text-[#E63A46]">*</span>
              </label>
              <select
                required
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full px-3 py-2 bg-white border-2 border-[#5b3a8f] rounded-lg focus:ring-2 focus:ring-[#5b3a8f] focus:border-transparent outline-none transition-all text-gray-900 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235b3a8f'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '1.5em 1.5em',
                }}
              >
                <option value="">Please Select</option>
                <option value="project">New Project</option>
                <option value="consultation">Consultation</option>
                <option value="collaboration">Collaboration</option>
                <option value="speaking">Speaking Engagement</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-base font-medium text-[#1a1a1a] mb-2">
                Message <span className="text-[#E63A46]">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5b3a8f] focus:border-transparent outline-none transition-all resize-none text-gray-900"
                placeholder=""
              />
            </div>

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 font-medium">
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 font-medium">
                  Something went wrong. Please try again or email me directly at shaikmurad.design@gmail.com
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#E63A46] text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-[#d12835] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
