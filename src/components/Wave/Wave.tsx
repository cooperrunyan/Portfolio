import Svg from 'public/svg/wave.svg';
import { pallette } from 'src/config';

export function Wave({ up }: { up?: boolean }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        bottom: up ? '-1px' : 'unset',
        top: !up ? '-1px' : 'unset',
        aspectRatio: '1440 / 200',
        color: pallette.deepBlue,
        stroke: 'currentColor',
        fill: 'currentColor',
        transform: `${up ? 'rotate(180deg)' : ''} translate(1px)`,
      }}
      aria-hidden='true'>
      <Svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <Svg
        style={{
          position: 'relative',
          opacity: 0,
        }}
      />
    </div>
  );
}
