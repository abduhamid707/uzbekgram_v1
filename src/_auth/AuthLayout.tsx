import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const AuthLayout = () => {
    const isAuthenticated = false;
// ss
    return (
        <>
            {
                isAuthenticated ? (
                    <Navigate to='/' />) : (
                    <>
                        <section className="flex flex-1 justify-center items-center flex-col py-10">
                            <Outlet />
                        </section>
                    </>
                )
            }
        </>
    );
};

export default AuthLayout;