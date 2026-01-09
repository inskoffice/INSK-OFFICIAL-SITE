import React from 'react';
import './StandOut.css';

const StandOut = () => {
    const features = [
        {
            id: '01',
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 17L12 22M16 17L20 22M16 17V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 28C8 28 10 24 16 24C22 24 24 28 24 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Our Mission',
            description: 'To support clients in strengthening their online visibility, engagement, and brand value through effective and strategic media marketing solutions.'
        },
        {
            id: '02',
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4L6 10V20C6 24.418 10.477 28 16 28C21.523 28 26 24.418 26 20V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M12 16L15 19L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: 'Our Vision',
            description: 'To be a trusted digital partner shaping the future of businesses through creativity, technology, and strategic guidance.'
        }
    ];

    return (
        <section className="standout-section">
            <div className="standout-container">
                {/* Header */}
                <div className="standout-header">
                    {/* <div className="standout-badge">
                        <span className="badge-icon">✨</span>
                        <span className="badge-text">Have Questions ?</span>
                    </div> */}
                    <h2 className="standout-title">What Makes Us Stand Out</h2>
                </div>

                {/* Content Grid */}
                <div className="standout-grid">
                    {/* Left Side - Image */}
                    <div className="standout-image-wrapper">
                        <div className="decorative-circle"></div>
                        <div className="image-card">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=700&fit=crop"
                                alt="Marketing Team"
                                className="standout-image"
                            />
                            <div className="floating-badge">
                                <div className="badge-icon-box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19 10L14 5L9 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M5 14L5 19L19 19L19 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="badge-content">
                                    <div className="badge-subtitle">Your Best</div>
                                    <div className="badge-title">Marketing Partner</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Features */}
                    <div className="standout-features">
                        {features.map((feature) => (
                            <div key={feature.id} className="feature-card">

                                <div className="featureBOX">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h3 className="feature-title">{feature.title}</h3>
                                </div>



                                <p className="feature-description">{feature.description}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StandOut;