'use client';
import { useContext, useState, useRef, useEffect } from 'react';
import blackArrow from '/public/assets/images/arrow-black.svg';
import whiteArrow from '/public/assets/images/btn-arrow.svg';
import organgeArrow from '/public/assets/images/arrow-orange.svg';
import uploadIcn from '/public/assets/images/upload-icn.svg';
import Image from 'next/image'; // Import the Image component

import BrowseFld from '/components/global/BrowseFld';
import HeaderAdmin from '/components/Header/HeaderAdmin';
import TutorialClip from '/components/VoiceAndSubtitle/TutorialClip';
import AddBlock from '/components/VoiceAndSubtitle/AddBlock';
import InputFile from '/components/global/Input/File';
import Download from '/components/VoiceAndSubtitle/Download';
import { ColorContext } from '/components/context/color-context';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import "/public/assets/css/global.css";
import "/public/assets/css/style.css";
import "/public/assets/css/responsive.css";
import "/public/App.css";
import "/public/index.css";
import SubtitleEditor from '/components/VoiceAndSubtitle/SubtitleEditor';
import { Link } from 'lucide-react';

const VoiceAndSubtitle = () => {
  const { backgroundColor, forgroundColor, fontSz, boxSize, boxHig } = useContext(ColorContext);
  const steps = ['Upload & Customise', 'Subtitle Design', 'Background Music', 'Download'];
  const [loadingText, setLoadingText] = useState('Loading');

  const [currentStep, setCurrentStep] = useState(0);
  const [videoId, setVideoId] = useState('');
  const [newVideoId, setNewVideoId] = useState('');
  const [videoError, setVideoError] = useState('');
  const [textError, setTextError] = useState('');
  const [translatedTextError, setTranslatedTextError] = useState('');
  const [apiKeyError, setApiKeyError] = useState('');
  const [voiceIdError, setVoiceIdError] = useState('');
  const [fontError, setFontError] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [subtitleText, setSubtitleText] = useState('Your Subtitle Here');
  const [subtitleBoxWidth, setSubtitleBoxWidth] = useState(200);
  const [subtitleBoxHeight, setSubtitleBoxHeight] = useState(50);
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [uploadedVideo, setUploadedVideo] = useState(null); // Store the uploaded video file
  const [musicFile, setMusicFile] = useState(null); // Store the uploaded music file
  const [musicError, setMusicError] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    return () => {
      // Cleanup video URL to avoid memory leak
      if (uploadedVideo) {
        URL.revokeObjectURL(uploadedVideo);
      }
    };
  }, [uploadedVideo]);

  // Handle animated dots for loading state
  useEffect(() => {
    let dotCount = 0;
    const interval = setInterval(() => {
      dotCount = (dotCount + 1) % 4;  // Loop between 0, 1, 2, 3 dots
      setLoadingText(`Loading${'.'.repeat(dotCount)}`);
    }, 500); // Update every 500ms (0.5 seconds)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const nextStep = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsUploading(true);
    setLoadingProgress(0);

    console.log('Current Step before next:', currentStep); // Debugging

    // Simulate upload process or complete background task
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);

          // Ensure the transition between steps is handled correctly
          setCurrentStep((prevStep) => {
            console.log('Current Step inside setCurrentStep:', prevStep); // Debugging

            // Transition logic: specific step handling
            if (prevStep === 1) {
              console.log('Moving to Background Music step'); // Debugging
              return 2; // Go to "Background Music" (Step 2)
            } else if (prevStep === 2) {
              console.log('Moving to Download step'); // Debugging
              return 3; // Go to "Download" (Step 3)
            }
            return Math.min(prevStep + 1, steps.length - 1);
          });

          window.scrollTo({ top: 0, behavior: 'smooth' });
          return 0;
        }
        return prev + 10;
      });
    }, 500);
  };

  const prevStep = () => {
    setIsUploading(true);
    setLoadingProgress(0);

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          if (currentStep === 2) {
            setCurrentStep(1); // Navigate directly to Subtitle Design if on Background Music step
          } else {
            setCurrentStep((prev) => Math.max(prev - 1, 0));
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return 0;
        }
        return prev + 10;
      });
    }, 500);
  };

  const validateForm = (formElements) => {
    let hasEmptyField = false;
    const requiredFields = {
      file: ['Please Upload A Video', setVideoError],
      transcript: ['Please Upload Original Video Text', setTextError],
      translation: ['Please Upload Translated Video Text File', setTranslatedTextError],
      eleven_labs: ['Please Enter ElevenLabs API Key', setApiKeyError],
      voice_id: ['Please Enter Voice ID', setVoiceIdError],
    };

    for (const [fieldName, [errorMessage, updateErrorMessage]] of Object.entries(requiredFields)) {
      const element = formElements[fieldName];
      if (updateErrorMessage) {
        updateErrorMessage('');
      }
      if (!element || !element.value) {
        hasEmptyField = true;
        if (updateErrorMessage) {
          updateErrorMessage(errorMessage);
        }
      }
    }
    return !hasEmptyField;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;

    if (!validateForm(formElements)) {
      return;
    }

    // Simulate upload process
    setIsUploading(true);
    setLoadingProgress(0);

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);

          // Set the uploaded video file
          const videoFile = formElements.file.files[0];
          if (videoFile) {
            setUploadedVideo(URL.createObjectURL(videoFile));
          }

          // Move to the Subtitle Design step (step 1)
          setCurrentStep(1);
          return 0;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleApiKeyChange = (e) => setApiKeyError('');
  const handleVoiceIdChange = (e) => setVoiceIdError('');

  const handleMusicUpload = (e) => {
    const music = e.target.files[0];
    if (music) {
      setMusicFile(music);
      setMusicError('');
      setLoadingProgress(0);
      setIsUploading(true);

      // Simulate music upload progress
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);

            // Only proceed to step 2 (background music) after music is uploaded
            setCurrentStep(2); // Move to the background music step
            return 0;
          }
          return prev + 10;
        });
      }, 500);
    }
  };

  const handleDownload = () => {
    // Simulate the download
    const finalVideoUrl = "/path/to/final/video.mp4";
    const link = document.createElement('a');
    link.href = finalVideoUrl;
    link.download = 'final_video.mp4';
    link.click();
  };

  const handleNextFromMusic = () => {
    setLoadingProgress(0);
    setIsUploading(true);
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setCurrentStep(3); // Proceed to download step
          return 0;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <>
      <HeaderAdmin />
      <section className='login-sec voice-subtitle'>
        <div className='container'>
          <ul className='status-bar'>
            {steps.map((step, index) => (
              <li
                key={index}
                className={`step ${currentStep === index ? 'active' : ''} ${currentStep > index ? 'completed' : ''}`}
              >
                <span style={{ fontSize: '16px' }}>{step}</span>
              </li>
            ))}
          </ul>

          <div className='lead-container d-flex flex-column align-items-stretch justify-items-center'>
            {isUploading && (
              <div
                className="text-center d-flex flex-column justify-content-center"
                style={{
                  width: '550px',
                  height: '109px',
                  padding: '40px 24px 40px 48px',
                  color: '#000000',
                  fontSize: '24px',
                  fontWeight: '700',
                  lineHeight: '28px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <h5 className="m-0">{loadingText}</h5>
              </div>
            )}

            <div style={{ display: isUploading ? 'none' : 'block' }}>
              {currentStep === 0 && (
                <div>
                  <h5 className='text-center lead-title forfont forpadd'>
                    Translate Your VSL With Ease:
                    <br className='d-none d-md-block' />
                    Upload, Customize, and Download!
                  </h5>
                  <form className='lead-form' onSubmit={handleSubmit} ref={formRef} noValidate>
                    <TutorialClip type='banner' />
                    <InputFile
                      label='Upload Your Original Video:'
                      buttonTitle='Choose file'
                      icon={uploadIcn}
                      name='file'
                      acceptFile={['.mp4']}
                      required
                      errormessage={videoError}
                    />
                    <InputFile
                      label='Original Video Transcript:'
                      buttonTitle='Choose file'
                      icon={uploadIcn}
                      name='transcript'
                      acceptFile={['.txt']}
                      errormessage={textError}
                      required
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <label style={{ fontWeight: '600', color: '#111111', fontSize: '18px' }}>Translated Text File:</label>
                      <a
                        href="/path-to-template.txt"
                        download
                        style={{ color: '#3663FF', textDecoration: 'underline', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
                        Download Empty Template
                      </a>
                    </div>

                    <InputFile
                      buttonTitle='Choose file'
                      icon={uploadIcn}
                      name='translation'
                      acceptFile={['.txt']}
                      errormessage={translatedTextError}
                      required
                    />

                    <BrowseFld
                      fldLbl='ElevenLabs API Key:'
                      fileName='ElevenLabs API Key'
                      category='field'
                      name='eleven_labs'
                      onChange={handleApiKeyChange}
                      errormessage={apiKeyError}
                      required
                    />
                    <BrowseFld
                      fldLbl='ElevenLabs Voice ID:'
                      fileName='Voice ID'
                      category='field'
                      name='voice_id'
                      onChange={handleVoiceIdChange}
                      errormessage={voiceIdError}
                      required
                    />
                    <button
                      className='btns proceedbtn btn clr'
                      type='submit'
                    >
                      Proceed To Subtitle Design
                      <Image
                        src="/assets/images/btn-arrow.svg"
                        alt="Go back"
                        width={24}
                        height={24}
                      />
                    </button>
                  </form>
                </div>
              )}

              {currentStep === 1 && uploadedVideo && (
                <div className='subtitle-editor'>
                  <SubtitleEditor
                    subtitleText={subtitleText}
                    setSubtitleText={setSubtitleText}
                    fontFamily={fontFamily}
                    setFontFamily={setFontFamily}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                    subtitleBoxWidth={subtitleBoxWidth}
                    setSubtitleBoxWidth={setSubtitleBoxWidth}
                    subtitleBoxHeight={subtitleBoxHeight}
                    setSubtitleBoxHeight={setSubtitleBoxHeight}
                    uploadedVideo={uploadedVideo}
                    onBack={prevStep}
                    onNext={nextStep} // Ensure this is correctly passed
                  />
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <AddBlock
                    loading={isUploading}
                    steps={steps}
                    currentStep={currentStep}
                    whiteArrow={whiteArrow}
                    onBack={prevStep}  // Pass the prevStep function as a prop
                    onNext={nextStep}
                  />
                </div>
              )}

              {currentStep === 4 && (
                <div className='downMainContainer'>
                  <Download onDownload={handleDownload} onBack={prevStep} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VoiceAndSubtitle;
