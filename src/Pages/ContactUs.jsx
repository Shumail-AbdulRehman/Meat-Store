
export default function ContactUs() {
  return (
    <div className="bg-gradient-to-tr from-red-200 via-red-100 to-white min-h-screen text-gray-900 px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Get in touch</h1>
        <p className="text-gray-600 text-lg mb-12">
          Questions about orders, products, or delivery? Reach us via phone, WhatsApp, or email.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 border border-red-100 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-red-600">Customer Support</h2>
            <div className="space-y-6 text-lg">
              <p>
                <span className="block font-semibold text-gray-700">Phone</span>
                <a href="tel:+966555123456" className="text-red-600 hover:underline">
                  +966 555 123 456
                </a>
              </p>
              <p>
                <span className="block font-semibold text-gray-700">WhatsApp</span>
                <a href="https://wa.me/966555123456" className="text-red-600 hover:underline">
                  +966 555 123 456
                </a>
              </p>
              <p>
                <span className="block font-semibold text-gray-700">Email</span>
                <a href="mailto:support@reddunes.sa" className="text-red-600 hover:underline">
                  support@reddunes.sa
                </a>
              </p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-red-600">Head Office</h2>
            <p className="mb-3 text-lg text-gray-700">Red Dunes Meats</p>
            <p className="mb-3 text-lg text-gray-700">King Fahd Rd, Al Olaya</p>
            <p className="mb-6 text-lg text-gray-700">Riyadh, Saudi Arabia</p>

            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Delivery</span>: Temperature-controlled, same/next day in major cities
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-red-50 border border-red-100 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-red-600">Order Support</h3>
            <p className="text-gray-700 text-base">
              Questions about your order or delivery status.
            </p>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-red-600">Product Inquiries</h3>
            <p className="text-gray-700 text-base">
              Details on cuts, halal certification, or availability.
            </p>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-red-600">Business & Wholesale</h3>
            <p className="text-gray-700 text-base">
              Partnerships and bulk pricing for restaurants and hotels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

