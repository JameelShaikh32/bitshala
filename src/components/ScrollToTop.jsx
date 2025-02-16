import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        width: '40px',
                        height: '40px',
                        fontSize: '16px',
                        backgroundColor: '#9443FF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: 'pointer'
                    }}
                >
                    <span className="fa fa-arrow-up"></span>
                </button>
            )}
        </>
    );
}

export default ScrollToTop;