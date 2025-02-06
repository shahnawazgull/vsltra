"use client"
import { useState } from 'react';
import { toast } from 'react-toastify';
import uploadIcn from '/public/assets/images/upload-icn.svg';
import InputFile from '/components/global/Input/File';
import TimeInput from '/components/global/Input/TimeInput';
import BrowseFld from '/components/global/BrowseFld';
import Link from 'next/link'; // Using Next.js Link component

const AddBlock = ({
  loading,
  steps,
  currentStep,
  whiteArrow,
  organgeArrow,
}) => {
  const [blocks, setBlocks] = useState([{ id: 1 }]);

  const addCount = () => {
    let last_id = null;
    blocks.forEach(item => {
      last_id = item.id;
    });
    setBlocks([
      ...blocks,
      {
        id: last_id ? last_id + 1 : 1,
        file: null,
        startTime: '',
        endTime: '',
        backgroundPercent: 30
      }
    ]);
  };

  const updateBlock = (id, field, value) => {
    const updatedBlocks = blocks.map(block =>
      block.id === id ? { ...block, [field]: value } : block
    );
    setBlocks(updatedBlocks);
  };

  const deleteBlock = (id) => {
    if (blocks.length > 1) {
      const updatedBlocks = blocks.filter(block => block.id !== id);
      setBlocks(updatedBlocks);
    } else {
      toast.error('At least one block must remain');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Placeholder validation
    const validBlocks = blocks.filter(block => block.file);

    if (validBlocks.length === 0) {
      toast.error('Please select at least one MP3 file');
      return;
    }

    const backgroundData = validBlocks.map(block => ({
      file: block.file,
      start_time: block.startTime ? block.startTime : "00:00",
      end_time: block.endTime ? block.endTime : "00:00",
      background_percent: block.backgroundPercent ? block.backgroundPercent : 30,
    }));

    // Simulate file upload logic or pass the backgroundData to a parent component
    console.log('Uploading Background Data:', backgroundData);
    toast.success('Files ready for upload!');
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="bg-main-container">
        <div className="goback">
          <img src="/public/assets/images/back-icon.svg" alt="back" />
          <h1>select your background music</h1>
        </div>

        {blocks.map((block) => (
          <div key={block.id} id="repeatable-block" className="uploading">
            {blocks.length > 1 && (
              <button
                type="button"
                className="btns deletebtn position-absolute top-0 end-0"
                onClick={() => deleteBlock(block.id)}
              >
                Delete
              </button>
            )}
            <div style={{ height: 10 }}></div>
            <div className="box">
              <h3>upload MP3 {block.id}:</h3>
              <button>Delete</button>
            </div>
            <div className="up">
              <InputFile
                label={`Upload MP3 ${block.id}:`}
                buttonTitle="Choose file"
                icon={uploadIcn}
                name={`file_${block.id}`}
                acceptFile={['.mp3']}
                updateBlock={updateBlock}
                block={block}
              />
            </div>

            <div className="txt">
              <h2>what second should this MP3 play from?</h2> <span>in minutes</span>
            </div>
            <div className="sub">
              <div className="start">
                <p>start:</p>
                <div className="box2">
                  <TimeInput
                    id={block.id}
                    field="startTime"
                    updateBlock={updateBlock}
                  />
                </div>
              </div>
              <div className="start">
                <p>end:</p>
                <div className="box2">
                  <TimeInput
                    id={block.id}
                    field="endTime"
                    updateBlock={updateBlock}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="browse-field">
                <BrowseFld
                  needChange="background-music-percent"
                  fldLbl="MP3 Volume:"
                  category="range"
                  updateBlockBundle={[updateBlock, block.id, 'backgroundPercent']}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="left">
          <Link
            onClick={addCount}
            href="#"
            id="addMoreBtn"
            className="btns proceed-btn"
          >
            + upload more MP3
          </Link>
        </div>

        <div className="right">
          <button
            className="btns proceedbtn"
            disabled={currentStep === steps.length - 1 || loading}
          >
            Create New Video
            <img className="white" src={whiteArrow} alt="arrow" />
            <img
              className="orange"
              src={organgeArrow}
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBlock;
