import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets the scroll position whenever the visitor changes page,
 * so every route starts at the top instead of inheriting the previous offset.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
