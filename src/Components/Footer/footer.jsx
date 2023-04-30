import React from 'react';

const footer = () => {
    return (
        <>
            <footer className="footer py-2 bg-secondary bg-opacity-10">
            <hr className="m-0"/>
                <div className="container-fluid">
                    <small className="mt-3 d-block fs-6 text-center">{new Date().getFullYear()} Copyright: MirkhakimAzizov</small>
                </div>
            </footer>
        </>
    );
};

export default footer;