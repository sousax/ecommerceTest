function Header() {
  return (
    <header className="header">
        <div className="logo">
            <a href="/">
                <img src="/logo.png" alt="Logo" />
            </a>
        </div>
        <div className="search-bar">
            <input type="text" placeholder="Search" />
        </div>
        <nav className="main-nav">
            <ul>
                <li><a href="/about">Home</a></li>
                <li><a href="/products">About</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/github">GitHub</a></li>
            </ul>
        </nav>
        <div className="user-actions">
            <button className="favorite-btn">Favorites</button>
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
        </div>

        <nav className="categories-nav">
            <ul>
                <li><a href="/categories/phones">Phones</a></li>
                <li><a href="/categories/computers">Computers</a></li>
                <li><a href="/categories/smart-watches">Smart Watches</a></li>
                <li><a href="/categories/cameras">Cameras</a></li>
                <li><a href="/categories/headphones">Headphones</a></li>
                <li><a href="/categories/gaming">Gaming</a></li>
            </ul>
        </nav>

    </header>
     )
  }

  export default Header;