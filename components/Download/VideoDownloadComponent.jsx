import Image from 'next/image';
import Link from 'next/link';
import styles from '/public/assets/css/download.module.css'; 

const VideoDownloadComponent = ({ onDownload }) => {
  const handleDownload = () => {
    // Simulate video download
    const finalVideoUrl = "/path/to/final/video.mp4";
    const link = document.createElement('a');
    link.href = finalVideoUrl;
    link.download = 'translated_video.mp4';  // Name for the final download file
    link.click();
  };

  return (
    <div className={styles.downMainContainer}>
      <div className={styles.goback}>
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
        <button onClick={handleDownload}>
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
