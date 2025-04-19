import { Link, Outlet } from "react-router-dom";

function LayoutDefault() {
    return (
        <>
            <nav style={{ margin: 10 }}>
                <Link to="/" style={{ padding: 5 }}> Home </Link>
                <Link to="/posts" style={{ padding: 5 }}> Posts </Link>
                <Link to="/about" style={{ padding: 5 }}> About </Link>
            </nav>
            <Outlet/>
        </>
    );
}
export default LayoutDefault;