import { Link, NavLink, Outlet } from 'react-router-dom';

const Header = (() => {
    return (
        <>
            <div className="header">My Kitchen - React Hooks (Search, Sort, Filter)</div>
            <nav>
                {/* Link is for standard navigation */}
                <Link to="/">Home</Link> 

                {/* NavLink automatically gets an "active" class when the path matches */}
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/body">Body</NavLink>
                <NavLink className="nav-link" to="/grid">Grid</NavLink>
            </nav>
            <main style={{ padding: '20px' }}>
                {/* <Outlet> acts as a placeholder for the current child route component */}
                <Outlet />
            </main>
        </>
    );
});

export default Header;