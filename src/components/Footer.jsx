function Footer() {
  return (
    <footer className="game-footer">
      <div className="footer-content">
        <small>
          &copy; {new Date().getFullYear()} All rights reserved  ||  Made by Madne 🪐
          {' '}|{' '}
          <a 
            href="https://www.linkedin.com/in/vedantmadne/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#0a66c2', textDecoration: 'none', marginRight: '10px' }}
          >
            LinkedIn 
          </a>
          <a 
            href="https://www.instagram.com/vedant_valid/?next=%2F" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#0a66c2', textDecoration: 'none' }}
          >
            Instagram
          </a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
