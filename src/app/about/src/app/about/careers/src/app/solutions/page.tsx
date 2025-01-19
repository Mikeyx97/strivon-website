export default function Solutions() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Solutions</h1>
      <p className="text-lg mb-8">
        At Strivon, we provide a range of innovative and tailored solutions to help manage risk and ensure your business thrives in an ever-evolving environment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Risk Management</h2>
          <p className="text-lg">Strivon’s Risk Management solutions help businesses identify, assess, and mitigate risks effectively, ensuring long-term sustainability.</p>
          <Link href="/solutions/risk-management" className="text-blue-600">Learn More</Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Insurance Programs</h2>
          <p className="text-lg">Our tailored insurance programs provide comprehensive coverage that ensures your organization is protected against unforeseen events.</p>
          <Link href="/solutions/insurance" className="text-blue-600">Learn More</Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Digital Solutions</h2>
          <p className="text-lg">We offer cutting-edge digital solutions that leverage AI and data analytics to enhance your risk management strategies.</p>
          <Link href="/solutions/digital" className="text-blue-600">Learn More</Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Analytics</h2>
          <p className="text-lg">Our advanced analytics tools provide valuable insights that allow businesses to make data-driven decisions and improve risk mitigation.</p>
          <Link href="/solutions/analytics" className="text-blue-600">Learn More</Link>
        </div>
      </div>
    </div>
  );
}

