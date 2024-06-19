// OpenToWorkBadge.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OpenToWorkBadge = () => {
    return (
        <div className="badge badge-success" style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            padding: '10px',
            fontSize: '1rem'
        }}>
            Open to Work
        </div>
    );
};

export default OpenToWorkBadge;
