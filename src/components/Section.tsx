import { useMQ } from '@/context/MQ';
import { rem, Space } from '@/css';

interface Props {
  children?: any;
  row?: boolean;
  gap?: Space;
}

export const Section: React.FC<Props> = props => {
  const mq = useMQ();

  return (
    <section
      style={{
        marginBlock: !mq.sm ? rem(96) : rem(64),
        display: 'flex',
        flexDirection: !props.row ? 'column' : 'row',
        gap: props.gap ? rem(props.gap) : undefined,
      }}>
      {props.children}
    </section>
  );
};
