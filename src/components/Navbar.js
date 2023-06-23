import './Components.css';

const Navbar = () => {
    return (
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                <a className="p-2 link-secondary" href="/">Home</a>
                <a className="p-2 link-secondary" href="/categorias">Categorias</a>
            </nav>
        </div>
    );
};
export default Navbar;