import Image from 'next/image';

function Logo() {
  return (
    <Image
      src="/images/logo.svg"
      alt="splitter logo"
      width={87}
      height={54}
      priority
    />
  );
}

export default Logo;
