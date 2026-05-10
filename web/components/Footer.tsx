import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30 mt-auto">
      <div className="max-w-container-max mx-auto px-margin-mobile py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-on-surface mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><Link href="/services" className="hover:text-primary transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Software Engineering</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Data Engineering</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Analytics</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-on-surface mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><Link href="/insights" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/work" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Documentation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-on-surface mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="https://github.com/datamore" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-on-surface mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a href="https://linkedin.com/company/datamore" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="https://twitter.com/datamore" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a></li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  contact@datamore.io
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-outline-variant/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-on-surface-variant">
            © {new Date().getFullYear()} Datamore. All rights reserved.
          </p>
          <div className="flex gap-6 text-on-surface-variant">
            <Link href="/privacy" className="text-sm hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="text-sm hover:text-primary transition-colors">Terms</Link>
            <span className="text-sm">🌐 English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
