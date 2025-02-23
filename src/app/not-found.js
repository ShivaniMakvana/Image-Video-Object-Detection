export default function NotFound() {
    return (
      <main className="h-screen flex flex-col justify-center items-center bg-indigo-500 text-white">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-2">Oops! The page you're looking for doesn't exist.</p>
        <a href="/Image-Video-Object-Detection" className="mt-4 px-5 py-2 bg-white text-indigo-500 rounded-lg hover:bg-gray-200 transition">
          Go Home
        </a>
      </main>
    );
  }
  