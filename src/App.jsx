import { MotionConfig } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import FeatureCards from './components/FeatureCards';
import CinematicCTA from './components/CinematicCTA';
import PointerLight from './components/PointerLight';
import ReducedMotionToggle from './components/ReducedMotionToggle';
import MotionModeToast from './components/MotionModeToast';

const REDUCED_MOTION_KEY = 'firstweb-reduced-motion';

function App() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef(0);

  const showToast = useCallback((message) => {
    setToastMessage(message);
    setToastVisible(true);

    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = window.setTimeout(() => {
      setToastVisible(false);
    }, 1100);
  }, []);

  useEffect(() => {
    const savedPreference = window.localStorage.getItem(REDUCED_MOTION_KEY);
    if (savedPreference === 'true' || savedPreference === 'false') {
      setReducedMotion(savedPreference === 'true');
      return;
    }

    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const handleToggleReducedMotion = useCallback(() => {
    setReducedMotion((previousValue) => {
      const nextValue = !previousValue;
      window.localStorage.setItem(REDUCED_MOTION_KEY, String(nextValue));
      showToast(`Motion set to ${nextValue ? 'Reduced' : 'Full'}`);
      return nextValue;
    });
  }, [showToast]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() !== 'm' || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      const target = event.target;
      const isEditableTarget =
        target instanceof HTMLElement &&
        (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));

      if (isEditableTarget) {
        return;
      }

      event.preventDefault();
      handleToggleReducedMotion();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleToggleReducedMotion]);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="app-shell" data-reduced-motion={reducedMotion ? 'true' : 'false'}>
      <div className="ambient-layer" aria-hidden="true">
        <span className="ambient-orb ambient-orb-a" />
        <span className="ambient-orb ambient-orb-b" />
        <span className="ambient-grid" />
      </div>
      <div className="film-layer" aria-hidden="true">
        <span className="film-gradient" />
        <span className="film-noise" />
      </div>
      <PointerLight enabled={!reducedMotion} />
      <ReducedMotionToggle reducedMotion={reducedMotion} onToggle={handleToggleReducedMotion} />
      <MotionModeToast message={toastMessage} visible={toastVisible} />
      <MotionConfig reducedMotion={reducedMotion ? 'always' : 'never'}>
        <div className="app-content">
          <Hero reducedMotion={reducedMotion} />
          <div className="section-divider" aria-hidden="true" />
          <StorySection reducedMotion={reducedMotion} />
          <div className="section-divider" aria-hidden="true" />
          <FeatureCards />
          <div className="section-divider" aria-hidden="true" />
          <CinematicCTA />
        </div>
      </MotionConfig>
    </div>
  );
}

export default App;

