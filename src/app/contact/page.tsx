export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-lg mb-8">
        We'd love to hear from you! Whether you have questions about our services, need expert advice, or want to explore partnership opportunities, the Strivon team is ready to assist.
      </p>
      <form action="#" method="POST" className="space-y-8">
        <div>
          <label htmlFor="full-name" className="block text-gray-700">Full Name</label>
          <input type="text" id="full-name" name="full-name" className="w-full mt-2 p-3 rounded-lg border border-gray-300" placeholder="Your Full Name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">Email Address</label>
          <input type="email" id="email" name="email" className="w-full mt-2 p-3 rounded-lg border border-gray-300" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea id="message" name="message" className="w-full mt-2 p-3 rounded-lg border border-gray-300" placeholder="Your message..." rows="6"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 flex items-center justify-center">
          Send Message
        </button>
      </form>
    </div>
  );
}

