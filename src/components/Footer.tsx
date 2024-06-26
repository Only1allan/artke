export default function Footer() {
    return (
      <footer className="bg-neutral p-10 text-neutral-content">
        <div className="footer m-auto max-w-7xl">
          <div>
            <span className="footer-title">Art Types</span>
            <a className="link-hover link">Mural Art </a>
            <a className="link-hover link">Software Development</a>
            <a className="link-hover link">Photography</a>
            <a className="link-hover link">WoodWork</a>
            <a className="link-hover link">Painting</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link-hover link">About us</a>
            <a className="link-hover link">Contact</a>
            <a className="link-hover link">Shop</a>
            <a className="link-hover link">Forum</a>

          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link-hover link">Terms of use</a>
            <a className="link-hover link">Privacy policy</a>
            <a className="link-hover link">Cookie policy</a>
          </div>
        </div>
      </footer>
    );
  }