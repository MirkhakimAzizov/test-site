import React from 'react';

const index = () => {
    return (
        <>
            <section className="home" >
                <div className="container my-0 py-0">
                    <form className="home-form d-flex flex-column col-md-5 gap-4 pt-5">
                        <h2 className="fs-4">Kirish uchun login va parolni kiriting:</h2>
                        <input type="text" className="login-input form-control py-2" placeholder="Login"/>
                        <input type="password" className="password-input form-control py-2" placeholder="Password"/>
                        <button type="button" className="login-btn btn btn-primary w-50">Kirish</button>
                        <div className="d-flex flex-column">
                        <span className="d-block mb-1 fs-6">Profilingiz yo'qmi:</span>
                        <button type="button" className="signup-btn btn btn-danger w-50">Ro'yhatdan o'tish</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default index;