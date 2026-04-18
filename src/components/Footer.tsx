import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-400 font-bold text-lg">L252</span>
              <span className="text-white font-semibold">Media Production</span>
            </div>
            <p className="text-sm text-slate-400">
              Expert AV Solutions with IT Support You Can Trust — serving churches and businesses.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/av-installation" className="hover:text-white transition-colors">AV Installation</Link></li>
              <li><Link href="/services/event-production" className="hover:text-white transition-colors">Event Production</Link></li>
              <li><Link href="/services/it-network" className="hover:text-white transition-colors">IT & Network</Link></li>
              <li><Link href="/services/training" className="hover:text-white transition-colors">Training</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-700 text-sm text-slate-500">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="text-center">
            © {new Date().getFullYear()} L252 Media Production. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
