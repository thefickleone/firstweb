import { useEffect, useRef, useState } from 'react';

function PointerLight({ enabled }) {
  const lightRef = useRef(null);
  const frameRef = useRef(0);
  const currentRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setIsSupported(false);
      return undefined;
    }

    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches;
    setIsSupported(supportsFinePointer);
    return undefined;
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !isSupported || !lightRef.current) {
      return undefined;
    }

    const lightNode = lightRef.current;

    const animate = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      current.x += (target.x - current.x) * 0.14;
      current.y += (target.y - current.y) * 0.14;
      lightNode.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;

      if (Math.abs(target.x - current.x) > 0.1 || Math.abs(target.y - current.y) > 0.1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        frameRef.current = 0;
      }
    };

    const onPointerMove = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      lightNode.style.opacity = '0.8';

      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    const onPointerLeave = () => {
      lightNode.style.opacity = '0';
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled, isSupported]);

  if (!enabled || !isSupported) {
    return null;
  }

  return <div className="pointer-light" ref={lightRef} aria-hidden="true" />;
}

export default PointerLight;

