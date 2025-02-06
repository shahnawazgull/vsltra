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
    subtitleText = "Your subtitle here", // Default subtitle text
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
    fontError,
    forgroundColor = "#ffffff", // Default font color set to white
    setForGroundColor,
    backgroundColor = "#000000", // Default subtitle background color set to black
    setBackGroundColor
}) {
    const videoContainerRef = useRef(null); // Ref for the video container

    // Handle font upload using InputFile
    const handleFontUpload = (fontFile) => {
        // Create a URL for the uploaded font file
        const fontUrl = URL.createObjectURL(fontFile);

        // Extract the font name from the file name (without extension)
        const fontName = fontFile.name.split('.')[0]; // Use the font file name as the font name

        // Create a new @font-face rule
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

        // Update the font family state
        setFontFamily(fontName);

        // Log to verify the font is being added
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
                    className="relative w-full max-w-[800px] h-auto bg-gray-100 rounded-lg overflow-hidden"
                >
                    {/* Preview Text on Top */}
                    <div className="absolute top-0 left-0 w-full text-4xl font-bold text-[#111] p-2 bg-white z-10">
                        Preview
                    </div>
                    <video width="100%" height="100%" controls className="w-full">
                        <source src={uploadedVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Subtitle Box */}
                    <Rnd
                        bounds="parent" // Restrict movement within the parent (video container)
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
                            className="flex items-center justify-center"
                            style={{
                                fontSize: `${fontSize}px`,
                                fontFamily: fontFamily, // Apply the font family here
                                width: '100%',
                                height: '100%',
                                color: forgroundColor, // Font color
                                backgroundColor: backgroundColor, // Subtitle background color
                                padding: '10px',
                                borderRadius: '8px',
                            }}
                        >
                            {subtitleText}
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
                        const fontFile = e.target.files[0]; // Get the uploaded font file
                        if (fontFile) {
                            handleFontUpload(fontFile); // Handle the uploaded font
                        }
                    }} // Handling font upload
                    className="custom-input"
                    labelStyle="text-[20px] font-bold text-[#000] mb-2" // Styling for label
                />

                <div className="grid grid-cols-2 gap-6 w-full mt-4">
                    <button onClick={() => setFontSize((prev) => prev - 2)} className="btn proceedbtn flex text-[16px] items-center justify-center py-[9px] px-[16px] bg-[#ff6500] text-white rounded-lg hover:bg-[#e55a00] transition-all">
                        Decrease Font
                    </button>
                    <button onClick={() => setFontSize((prev) => prev + 2)} className="btn proceedbtn text-[16px] flex items-center justify-center py-[9px] px-[16px] bg-[#ff6500] text-white rounded-lg hover:bg-[#e55a00] transition-all">
                        Increase Font
                    </button>

                </div>

                {/* Color Pickers for Font and Background Color */}
                <div className="mt-4">
                    <BrowseFld
                        needChange="front"
                        currColor={forgroundColor}
                        fldLbl="Font Color:"
                        category="picker"
                        name="font_color"
                        defaultColor="#ffffff" // Default font color: white
                        onChange={setForGroundColor} // Handler for font color change
                        labelStyle="text-[24px] font-semibold text-[#000000] mb-2 mt-2" // Styling for label with margin-top 2px
                    />
                    <BrowseFld
                        needChange="back"
                        currColor={backgroundColor}
                        fldLbl="Subtitles Background Color:"
                        category="picker"
                        name="box_color"
                        defaultColor="#000000" // Default background color: black
                        onChange={setBackGroundColor} // Handler for background color change
                        labelStyle="text-[18px] font-semibold text-[#000000] mb-2 mt-2" // Styling for label with margin-top 2px
                    />
                </div>
            </div>

            {/* Proceed to Background Music Button */}
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
                        className="ml-2" // Adds a margin-left for space between text and arrow
                    />
                </button>
            </div>
        </div>
    );
}
