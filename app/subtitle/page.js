'use client';
import { useState, useRef } from 'react';
import { Rnd } from 'react-rnd';
import '/public/tailwind.css';
import backIcon from '/public/assets/images/back-icon.svg'; // Import a back icon
import Image from 'next/image'; // Import the Image component

const Button = ({ children, onClick }) => (
  <button
    className="px-6 py-3 bg-[#ff6500] text-white rounded-lg shadow-md hover:bg-[#e55a00] transition-all"
    onClick={onClick}
  >
    {children}
  </button>
);

export default function SubtitleEditor({
  subtitleText,
  setSubtitleText,
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  subtitleBoxWidth,
  setSubtitleBoxWidth,
  subtitleBoxHeight,
  setSubtitleBoxHeight,
  uploadedVideo,
  onBack,
  onNext,
}) {
  const videoContainerRef = useRef(null); // Ref for the video container

  const handleFontUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fontUrl = URL.createObjectURL(file);
      const fontName = file.name.split('.')[0];
      const newStyle = document.createElement('style');
      newStyle.appendChild(
        document.createTextNode(`@font-face { font-family: '${fontName}'; src: url('${fontUrl}'); }`)
      );
      document.head.appendChild(newStyle);
      setFontFamily(fontName);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      {/* Heading with Back Icon */}
      <div className="flex items-center justify-start w-full mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-[#ff6500] hover:text-[#e55a00] transition-all"
        >
          <img src={backIcon} alt="Back" className="w-6 h-6 mr-2" />
          <h2 className="text-2xl font-bold">Subtitle Design</h2>
        </button>
      </div>

      {/* Video Player */}
      {uploadedVideo && (
        <div
          ref={videoContainerRef}
          className="relative w-full max-w-[800px] h-auto bg-gray-100 rounded-lg overflow-hidden shadow-md"
        >
          <video width="100%" height="100%" controls className="w-full">
            <source src={uploadedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Subtitle Box */}
          <Rnd
            bounds={videoContainerRef.current} // Restrict movement within the video container
            default={{
              x: 100,
              y: 200,
              width: subtitleBoxWidth,
              height: subtitleBoxHeight,
            }}
            enableResizing={{
              top: true,
              right: true,
              bottom: true,
              left: true,
              topLeft: true,
              topRight: true,
              bottomLeft: true,
              bottomRight: true,
            }}
            onResize={(e, direction, ref, delta, position) => {
              setSubtitleBoxWidth(ref.offsetWidth);
              setSubtitleBoxHeight(ref.offsetHeight);
            }}
            onDragStop={(e, data) => {
              // Update position if needed (optional)
            }}
            style={{
              position: 'absolute',
              zIndex: 1,
            }}
          >
            <div
              className="flex items-center justify-center bg-black text-white p-2 rounded"
              style={{
                fontSize: `${fontSize}px`,
                fontFamily: fontFamily,
                width: '100%',
                height: '100%',
              }}
            >
              {subtitleText}
            </div>
          </Rnd>
        </div>
      )}

      {/* Font Upload and Controls */}
      <div className="w-full max-w-[800px] mt-6">
        <div className="flex flex-col items-center space-y-4">
          <input
            type="file"
            onChange={handleFontUpload}
            className="file:px-4 file:py-2 file:bg-[#ff6500] file:text-white file:border-none file:rounded-lg file:hover:bg-[#e55a00] file:transition-all"
          />
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button onClick={() => setFontSize((prev) => prev + 2)}>Increase Font</Button>
            <Button onClick={() => setFontSize((prev) => prev - 2)}>Decrease Font</Button>
          </div>
        </div>
      </div>

      {/* Proceed to Background Music Button */}
      <div className="w-full max-w-[800px] mt-6">
        {/* <Button onClick={onNext} className="w-full">
          Proceed To Background Music
        </Button> */}
        <button
          className='btns proceedbtn btn clr'
          type='submit' onClick={onNext}
        >
          Proceed To Background Music
          <Image
            src="/assets/images/btn-arrow.svg"
            alt="Go back"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}