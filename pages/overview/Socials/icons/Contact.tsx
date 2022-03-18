import { pallette } from '~/config';

export function Contact() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 0H2C1 0 0 1 0 2V24.5003C0 25.5003 1 26.5003 2 26.5003H12V28.5003C12 29.8891 10.1984 30.5003 8 30.5003V32H24V30.4997C21.8011 30.4997 20 29.8885 20 28.4997V26.4997H30C31 26.4997 32 25.4997 32 24.4997V2C32 1 31 0 30 0ZM30.9333 24.5003C30.9333 24.9104 30.4096 25.4336 30 25.4336H2C1.58987 25.4336 1.06667 24.9104 1.06667 24.5003V22.5003H30.9333V24.5003Z"
        fill={pallette.white}
      />
    </svg>
  );
}

export { default } from 'X';
