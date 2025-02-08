'use client';
import { useState, useRef } from 'react';
import { Rnd } from 'react-rnd';
import '/public/tailwind.css';
import backIcon from '/public/assets/images/back-icon.svg'; // Import a back icon
import uploadIcon from '/public/assets/images/upload-icn.svg'; // Import upload icon
import Image from 'next/image'; // Import the Image component
import InputFile from '/components/global/Input/File';
import BrowseFld from '/components/global/BrowseFld';
import './subtitle.module.css';

const Button = ({ children, onClick, className }) => (
    <button
        className={`py-4 px-[19px] bg-[#ff6500] text-white rounded-lg hover:bg-[#e55a00] transition-all ${className}`}
        onClick={onClick}>
        {children}
    </button>
);

export default function SubtitleEditor({
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
    fontError,
    forgroundColor = "#ffffff",
    setForGroundColor,
    backgroundColor = "#000000",
    setBackGroundColor
}) {
    const videoContainerRef = useRef(null);

    // Handle font upload
    const handleFontUpload = (fontFile) => {
        const fontUrl = URL.createObjectURL(fontFile);
        const fontName = fontFile.name.split('.')[0];

        const newStyle = document.createElement('style');
        newStyle.appendChild(
            document.createTextNode(`
                @font-face {
                    font-family: '${fontName}';
                    src: url('${fontUrl}') format('truetype');
                }
            `)
        );
        document.head.appendChild(newStyle);
        setFontFamily(fontName);
        console.log(`Font '${fontName}' loaded from ${fontUrl}`);
    };

    return (
        <div className="">
            {/* Heading with Back Icon */}
            <div className="flex items-center justify-center mb-4">
                <button onClick={onBack} className="flex items-center mr-8">
                    <Image
                        src="/assets/images/go-back-icn.svg"
                        alt="Go back"
                        width={30}
                        height={30}
                    />
                </button>
                <h2 className="text-[24px] font-bold text-center">Subtitle Design</h2>
            </div>

            {/* Video Player with Preview Text */}
            {uploadedVideo && (
                <div
                    ref={videoContainerRef}
                    className="relative w-full max-w-[800px] h-auto rounded-lg overflow-hidden"
                >
                    {/* Preview Text */}
                    <div className="absolute top-0 left-0 w-full text-4xl font-bold text-[#111] p-2 bg-white z-10">
                        Preview
                    </div>
                    <video width="100%" height="100%" controls className="w-full">
                        <source src={uploadedVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Subtitle Box */}
                    <Rnd
                        bounds="parent"
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
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                            borderRadius: '20px',
                            overflow: 'hidden',
                        }}
                    >
                        <div
                            className="flex items-center justify-center text-center"
                            style={{
                                fontSize: `${fontSize}px`,
                                fontFamily: fontFamily,
                                width: '100%',
                                height: '100%',
                                color: forgroundColor,
                                backgroundColor: backgroundColor,
                                padding: '10px',
                                borderRadius: '20px',
                                overflow: 'hidden',
                            }}
                        >
                            This Is How Your Subtitle Text Will Be Displayed
                        </div>
                    </Rnd>
                </div>
            )}

            {/* Font Upload and Controls */}
            <div className="mt-4">
                <InputFile
                    label="Upload Font File:"
                    buttonTitle="Choose file"
                    icon={uploadIcon}
                    name="font"
                    acceptFile={[".otf", ".ttf", ".woff"]}
                    errormessage={fontError}
                    required
                    onChange={(e) => {
                        const fontFile = e.target.files[0];
                        if (fontFile) {
                            handleFontUpload(fontFile);
                        }
                    }}
                    className="custom-input"
                    labelStyle="text-[20px] font-bold text-[#000] mb-2"
                />

                {/* Slider for Font Size Control */}
                <div className="mt-6">
                    <label htmlFor="font-size-slider" className=" flex justify-between text-[16px]  mb-2">
                        Font Size: <div>{fontSize}</div>
                    </label>
                    <input
                        id="font-size-slider"
                        type="range"
                        min="12"
                        max="72"
                        step="1"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="w-full h-6 bg-[#FFA76D] rounded-lg appearance-none cursor-pointer"
                        style={{
                            background: `linear-gradient(to right, #FFA76D ${((fontSize - 12) / (72 - 12)) * 100}%, #CCCBCB 0%)`,
                        }}
                    />
                </div>

                {/* Custom Styles for Slider Thumb */}
                <style jsx>{`
                    input[type="range"]::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        background: #FFA76D; /* Same as the filled background */
                        cursor: pointer;
                        margin-top: 2px;
                        margin-left:-2px
                    }

                    input[type="range"]::-moz-range-thumb {
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        background: #FFA76D; /* Same as the filled background */
                        cursor: pointer;
                    }
                `}</style>

                {/* Color Pickers */}
                <div className="mt-4">
                    <BrowseFld
                        needChange="front"
                        currColor={forgroundColor}
                        fldLbl="Font Color:"
                        category="picker"
                        name="font_color"
                        defaultColor="#ffffff"
                        onChange={setForGroundColor}
                        labelStyle="text-[24px] font-semibold text-[#000000] mb-2 mt-2"
                    />
                    <BrowseFld
                        needChange="back"
                        currColor={backgroundColor}
                        fldLbl="Subtitles Background Color:"
                        category="picker"
                        name="box_color"
                        defaultColor="#000000"
                        onChange={setBackGroundColor}
                        labelStyle="text-[18px] font-semibold text-[#000000] mb-2 mt-2"
                    />
                </div>
            </div>

            {/* Proceed Button */}
            <div className="mt-4">
                <button
                    className="btns proceedbtn forbg flex items-center justify-center py-[9px] px-[16px] bg-[#ff6500] text-white rounded-lg hover:bg-[#e55a00] transition-all"
                    type="submit"
                    onClick={onNext}>
                    Proceed To Background Music
                    <Image
                        src="/assets/images/btn-arrow.svg"
                        alt="Go to Background Music"
                        width={24}
                        height={24}
                        className="ml-2"
                    />
                </button>
            </div>
        </div>
    );
}
