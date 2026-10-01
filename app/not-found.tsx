import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 text-center">
      <div className="w-16 h-16 rounded-full bg-brandRed-600 text-white font-bold flex items-center justify-center text-2xl font-display mb-4 shadow-lg">
        VT
      </div>
      <h1 className="text-4xl font-extrabold font-display text-white mb-2">404 - पृष्ठ नहीं मिला</h1>
      <p className="text-slate-400 max-w-md mb-6 text-sm">
        आप जिस पृष्ठ की तलाश कर रहे हैं वह उपलब्ध नहीं है या हटा दिया गया है।
      </p>
      <Link
        href="/"
        className="bg-brandRed-600 hover:bg-brandRed-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
      >
        मुख्य पृष्ठ पर लौटें (Return Home)
      </Link>
    </div>
  );
}
