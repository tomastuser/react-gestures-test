import { useSpring, animated } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';

import styles from './styles.module.css';

export const Example = () => {
  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
  }));

  const bind = useGesture({
    // onDrag: ({ down, movement: [mx, my] }) => {
    //   api.start({ x: down ? mx : 0, y: down ? my : 0 });
    // },
    onPinch: ({ offset: [s, a] }) => {
      api.start({ scale: s, rotate: a });
    },
  });

  return (
    <animated.div
      {...bind()}
      style={{
        ...style,
        width: '80vw',
        height: '80vw',
        backgroundImage: 'url("./download.png")',
        backgroundSize: 'cover',
      }}
      className={styles.drag}
    />
  );
};
