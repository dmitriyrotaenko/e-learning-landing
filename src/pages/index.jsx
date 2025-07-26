import WelcomeBanner from '@/sections/WelcomeBanner/WelcomeBanner';
import Partners from '@/sections/Partners';
import VideoStub from '@/sections/VideoStub';
import Benefits from '@/sections/Benefits';

export const metadata = {
  title: 'Home'
};

// eslint-disable-next-line
export default function() {
  return (
    <>
      <WelcomeBanner />
      <Partners />
      <VideoStub />
      <Benefits/>
    </>
  );
}
