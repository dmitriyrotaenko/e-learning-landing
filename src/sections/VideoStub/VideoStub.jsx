import './VideoStub.scss';
import Icon from '@/components/Icon';

const VideoStub = () => {
  return (
    <section className="video-stub container">
      <div className="video-stub__container">
        <button className="video-stub__play-btn button">
          <Icon
            name="play"
            hasFill={true}
          />
        </button>
      </div>
    </section>
  );
};

export default VideoStub;