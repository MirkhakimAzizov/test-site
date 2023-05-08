import React from 'react';

const header = () => {
    return (
        <>
            <header className="header">
                <nav className="header-nav pt-3 bg-secondary bg-opacity-10 shadow shadow-sm">
                    <div className="container-fluid d-flex align-items-center justify-content-between">
                        <a className="bold" href="#">
                            <strong>FrontEdu.uz</strong>
                        </a>
                        <button className="login-btn btn btn-primary">
                            Kirish
                        </button>
                    </div>
                    <hr className="mb-0"/>
                </nav>
            </header>
        </>
    );
};

export default header;
