import { useSpring, animated } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';

export const Example = () => {
  const [style, api] = useSpring(() => ({
    scale: 1,
    rotate: 0,
  }));

  const bind = useGesture({
    onPinch: ({ offset: [s, a] }) => {
      api.start({ scale: s, rotate: a });
    },
  });

  return (
    <animated.div
      {...bind()}
      style={{
        ...style,
        width: '500px',
        height: '500px',
        backgroundImage: 'url("./download.png")',
        backgroundSize: 'cover',
      }}
    />
  );
};
