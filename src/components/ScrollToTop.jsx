import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    // Disable browser's default scroll restoration
    useLayoutEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    useLayoutEffect(() => {
        const scrollToTop = () => {
            // Target all possible scroll containers
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;

            const root = document.getElementById('root');
            if (root) root.scrollTop = 0;
        };

        // Immediate scroll
        scrollToTop();

        // Ensure scroll happens after any layout shifts
        requestAnimationFrame(() => {
            scrollToTop();
            // Double check slightly later for slower devices
            setTimeout(scrollToTop, 10);
        });
    }, [pathname]);

    return null;
}
