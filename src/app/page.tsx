import Header from '../components/Header';
export default function Home() {
  return (
    <>
      <Header />
      <main className="p-4">
        {/* Title */}
        <h1 className="text-center text-2xl font-bold text-gray-800 bg-slate-100">Hello Nike App</h1>
        <div className="relative bg-white">

      {/* Banner Section */}
      <div className="container mx-auto text-center">

        {/* Subtitle */}
        <p className="text-gray-700 text-lg mb-4 bg-slate-100">
          Download the app to access everything Nike.{' '}
          <a 
            href="/download" 
            className="text-blue-500 hover:underline font-semibold"
          >
            Get Your Great
          </a>
        </p>
      </div>
    </div>
  </main>
    </>
  );
}
