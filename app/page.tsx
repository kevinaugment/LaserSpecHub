import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Compare Laser Equipment Specifications
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Find the perfect laser cutting machine for your manufacturing
              needs. Compare technical specifications, calculate power
              requirements, and make informed decisions.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/comparison" className="btn-primary text-lg px-8 py-3">
                Compare Equipment
              </Link>
              <Link
                href="/equipment"
                className="btn-secondary text-lg px-8 py-3"
              >
                Browse Database
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional Tools for Equipment Selection
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">
                Equipment Comparison
              </h3>
              <p className="text-gray-600">
                Compare up to 5 laser machines side-by-side. View detailed
                specifications and identify key differences.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Power Calculator</h3>
              <p className="text-gray-600">
                Calculate required laser power based on material type,
                thickness, and cutting requirements.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Selection Wizard</h3>
              <p className="text-gray-600">
                Get personalized recommendations for laser type (CO2, Fiber, or
                Solid) based on your application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Laser Equipment?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Access our comprehensive database of 50+ laser cutting machines
          </p>
          <Link href="/equipment" className="btn-primary text-lg px-8 py-3">
            Start Exploring
          </Link>
        </div>
      </section>
    </main>
  );
}





