"use client";
import { useContext, useState, useRef } from 'react';
import blackArrow from '/public/assets/images/arrow-black.svg';
import organgeArrow from '/public/assets/images/arrow-orange.svg';
import whiteArrow from '/public/assets/images/btn-arrow.svg';
import uploadIcn from '/public/assets/images/upload-icn.svg';
import BrowseFld from '/components/global/BrowseFld';
import HeaderAdmin from '/components/Header/HeaderAdmin';
import TutorialClip from '/components/VoiceAndSubtitle/TutorialClip';
import AddBlock from '/components/VoiceAndSubtitle/AddBlock';
import InputFile from '/components/global/Input/File';
import Download from '/components/VoiceAndSubtitle/Download';
import { ColorContext } from '/components/context/color-context';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

// Import your custom styles after Tailwind and Bootstrap
import "/public/assets/css/global.css";
import "/public/assets/css/style.css";
import "/public/assets/css/responsive.css";
import "/public/App.css";
import "/public/index.css";

const VoiceAndSubtitle = () => {
  const { backgroundColor, forgroundColor, fontSz, boxSize, boxHig } =
    useContext(ColorContext);
  const steps = ['Upload & Customise', 'Subtitle Design', 'Background Music', 'Download'];
  const [currentStep, setCurrentStep] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const formRef = useRef(null);

  const nextStep = (e) => {
    e.preventDefault();
    simulateLoading(() => {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    });
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.min(prev - 1, steps.length + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const simulateLoading = (callback) => {
    setIsUploading(true);
    setLoadingProgress(0);

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          callback();
          return 0;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    simulateLoading(() => {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    });
  };

  const handleMusicUpload = () => {
    simulateLoading(() => {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    });
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
                className={`step ${currentStep === index ? 'active' : ''} ${
                  currentStep > index ? 'completed' : ''
                }`}
              >
                <span>{step}</span>
              </li>
            ))}
          </ul>

          <div className='lead-container d-flex flex-column align-items-stretch justify-items-center'>
            {isUploading && (
              <div className='text-center d-flex flex-column justify-content-between'>
                <h5 className='lead-title d-flex align-items-end justify-content-center m-0 pb-4'>
                  Processing<span className='dots'>.</span>
                  {loadingProgress}%
                </h5>
                <div className='progress'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    style={{ width: `${loadingProgress}%` }}
                    aria-valuenow={loadingProgress}
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
            )}

            <div style={{ display: isUploading ? 'none' : 'block' }}>
              {currentStep === 0 && (
                <div>
                  <h5 className='text-center lead-title'>
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
                    />
                    <InputFile
                      label='Original Video Transcript:'
                      buttonTitle='Choose file'
                      icon={uploadIcn}
                      name='transcript'
                      acceptFile={['.txt']}
                      required
                    />
                    <InputFile
                      label='Translated Text File:'
                      buttonTitle='Choose file'
                      icon={uploadIcn}
                      name='translation'
                      acceptFile={['.txt']}
                      required
                    />
                    <button
                      className='btns proceedbtn'
                      type='submit'
                      disabled={currentStep === steps.length - 1}
                    >
                      Proceed To Subtitle Design
                      <img className='white' src={whiteArrow} alt='arrow' />
                      <img className='orange' src={organgeArrow} alt='arrow' />
                    </button>
                  </form>
                </div>
              )}

              {currentStep === 1 && (
                <div>
                  <h5 className='text-center lead-title'>
                    <button className='back-btn' onClick={prevStep}>
                      <img src={blackArrow} alt='icon' />
                    </button>{' '}
                    Subtitle Design
                  </h5>
                  <form className='lead-form' onSubmit={handleSubmit} ref={formRef} noValidate>
                    <div className='sub-design'>
                      <h5 className='lead-title'>Subtitle Design</h5>
                      <InputFile
                        label='Upload Font File:'
                        buttonTitle='Choose file'
                        icon={uploadIcn}
                        name='font'
                        acceptFile={['.otf', '.ttf', '.woff']}
                        required
                      />
                      <BrowseFld
                        needChange='box-size'
                        currFont={boxSize}
                        fldLbl='Subtitle Box Width:'
                        category='range'
                      />
                      <BrowseFld
                        needChange='box-height'
                        currFont={boxHig}
                        fldLbl='Subtitle Box Height:'
                        category='range'
                      />
                      <BrowseFld
                        needChange='font'
                        currFont={fontSz}
                        fldLbl='Font Size:'
                        category='range'
                      />
                      <BrowseFld
                        needChange='front'
                        currColor={forgroundColor}
                        fldLbl='Font Color:'
                        category='picker'
                        name='font_color'
                      />
                      <BrowseFld
                        needChange='back'
                        currColor={backgroundColor}
                        fldLbl='Subtitles Background Color:'
                        category='picker'
                        name='box_color'
                      />
                      <h5 className='lead-title'>Preview</h5>
                      <div className='design-preview d-flex align-items-end overflow-hidden'>
                        <div>
                          <h3 className='preview-title'>
                            Your Selected Video Scene Will Go Here
                          </h3>
                          <div
                            className='prev-subtitle'
                            style={{
                              background: backgroundColor,
                              width: `${boxSize}%`,
                              height: `${boxHig}px`,
                            }}
                          >
                            <h5
                              style={{
                                color: forgroundColor,
                                fontSize: `${fontSz}px`,
                              }}
                            >
                              This Is How Your Original Subtitle Text Will Be
                              Displayed
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className='btns proceedbtn'
                      type='submit'
                      disabled={currentStep === steps.length - 1}
                    >
                      Proceed To Background Music
                      <img className='white' src={whiteArrow} alt='arrow' />
                      <img className='orange' src={organgeArrow} alt='arrow' />
                    </button>
                  </form>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h5 className='text-center lead-title'>
                    <button className='back-btn' onClick={prevStep}>
                      <img src={blackArrow} alt='icon' />
                    </button>{' '}
                    Select your Background Music
                  </h5>
                  <figure className='download-preview'>
                    <video style={{ width: '100%' }} controls>
                      <source src={`/preview-video/preview-${videoId}/`} type='video/mp4' />
                      Your browser does not support the video tag.
                    </video>
                  </figure>
                  <AddBlock
                    onMusicUpload={handleMusicUpload}
                    loadingProgress={loadingProgress}
                    steps={steps}
                    currentStep={currentStep}
                    whiteArrow={whiteArrow}
                    organgeArrow={organgeArrow}
                  />
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h5 className='text-center lead-title'>
                    <button className='back-btn' onClick={prevStep}>
                      <img src={blackArrow} alt='icon' />
                    </button>
                    Your Video Has Been Generated Successfully
                  </h5>
                  <Download setCurrentStep={setCurrentStep} />
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