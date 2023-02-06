import React from 'react';
import moshiurProfile from '../Images/moshiurProfile.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-vh-100 bg-secondary">
                <div className="d-flex align-items-center justify-content-center">
                    <div>
                        <h1 className="text-5xl fw-bold">Moshiur Rahman</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <img src={moshiurProfile} className="w-25 img-fluid" alt='moshiur' />
                </div>
            </div>
        </div>
    );
};

export default Banner;