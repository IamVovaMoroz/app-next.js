
import Image from 'next/image';
import pageimage from "../public/page.png";

export default function Home() {
  return (
    <>
      <h1>Home page. Welcome to Next.js</h1>
      <div style={{ maxWidth: '90vw' }}>
        <Image src={pageimage} alt='Img' layout="responsive" width={1800} height={950} />
      </div>
    </>
  );
}

