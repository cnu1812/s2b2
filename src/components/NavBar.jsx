import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <NavLink className="mr-6 flex items-center space-x-2" to="/">
                    <span className="inline-block font-bold">
                        S² + B²
                    </span>
                </NavLink>
            </div>
        </header>
    );
}

export default NavBar;