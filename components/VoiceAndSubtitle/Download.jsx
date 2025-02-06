import { useRouter } from 'next/router';  // Import router if needed for navigation
import Image from 'next/image';
import styles from '/public/assets/css/download.module.css'; // This will be for our styles

const VideoDownloadComponent = ({ onBack }) => {
  return (
    <div className={styles.downMainContainer}>
      <div className={styles.goback} onClick={onBack}>
        <Image
          src="/assets/images/go-back-icn.svg"
          alt="Go back"
          width={30}
          height={30}
        />
        <h3>Your video has been translated successfully</h3>
      </div>

      <div className={styles.videoPlaceholder}>
        <Image
          src="/assets/images/download.svg"
          alt="Video download"
          width={500}
          height={281} // Adjust these values based on your image size
        />
      </div>

      <div className={styles.right}>
        <button>
          Download
          <Image
            src="/assets/images/arrow-down.svg"
            alt="Arrow down"
            width={20}
            height={20}
          />
        </button>
      </div>

      <div className={styles.bottomText}>
        <p>
          The watermark will be removed after the video is downloaded
          <Image
            src="/assets/images/download-icn.svg"
            alt="Download icon"
            width={16}
            height={16}
          />
        </p>
      </div>
    </div>
  );
};

export default VideoDownloadComponent;
