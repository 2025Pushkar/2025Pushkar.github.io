import React, { useState } from 'react';

const Certificate = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const certificates = [
        { id: 1, name: 'Certificate 1', image: 'certificate1.jpg' },
        { id: 2, name: 'Certificate 2', image: 'certificate2.jpg' },
        { id: 3, name: 'Certificate 3', image: 'certificate3.jpg' },
        // Add more certificates as needed
    ];

    const handleTabClick = (certificate) => {
        setSelectedCertificate(certificate);
    };

    return (
        <div className="certificate-container">
            <div className="certificate-tabs">
                {certificates.map((certificate) => (
                    <div
                        key={certificate.id}
                        className={`certificate-tab ${selectedCertificate === certificate ? 'active' : ''}`}
                        onClick={() => handleTabClick(certificate)}
                    >
                        {certificate.name}
                    </div>
                ))}
            </div>
            <div className="certificate-image">
                {selectedCertificate && <img src={selectedCertificate.image} alt={selectedCertificate.name} />}
            </div>
        </div>
    );
};

export default Certificate;