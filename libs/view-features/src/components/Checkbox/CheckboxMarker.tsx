import { ComponentPropsWithoutRef, FC } from 'react';

interface Props extends ComponentPropsWithoutRef<'svg'> {}

const CheckboxMarker: FC<Props> = (props: Props) => {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
    </svg>
  );
};

export default CheckboxMarker;
