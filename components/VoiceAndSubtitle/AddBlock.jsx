import { useState } from 'react';
import { toast } from 'react-toastify';
import uploadIcn from '/public/assets/images/upload-icn2.svg';
import Image from 'next/image';
import styles from './addblock.module.css';
import InputFile from '/components/global/Input/File';
import TimeInput from '/components/global/Input/TimeInput';

const Button = ({ children, onClick, className = '' }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 bg-[#ff6500] text-white rounded shadow-md hover:bg-[#e55a00] transition-all ${className}`}
    >
        {children}
    </button>
);

const AddBlock = ({ loading, steps, currentStep, onBack, onNext }) => {
    const [blocks, setBlocks] = useState([{ id: 1 }]);

    const addBlock = () => {
        const lastId = blocks.length ? blocks[blocks.length - 1].id : 0;
        setBlocks([...blocks, { id: lastId + 1, file: null, startTime: '', endTime: '' }]);
    };

    const updateBlock = (id, field, value) => {
        setBlocks(blocks.map(block => (block.id === id ? { ...block, [field]: value } : block)));
    };

    const deleteBlock = (id) => {
        if (blocks.length > 1) {
            setBlocks(blocks.filter(block => block.id !== id));
        } else {
            toast.error('At least one block must remain');
        }
    };

    const handleBack = (e) => {
        e.preventDefault();
        onBack(); // Call prevStep to navigate to the previous step
    };

    const handleNext = () => {
        // Validate MP3 upload before proceeding
        const isValid = blocks.every(block => block.file !== null);
        if (!isValid) {
            toast.error('Please upload all MP3 files');
            return;
        }
        onNext(); // Proceed to the next step if everything is valid
    };

    return (
        <form className={styles.musicForm}>
            {/* Back Button Section */}
            <div className="flex items-center justify-center w-full mb-6">
                <button
                    onClick={handleBack}
                    className="flex items-center text-[#ff6500] hover:text-[#e55a00] transition-all mr-10"
                >
                    <Image
                        src="/assets/images/go-back-icn.svg"
                        alt="Go back"
                        width={30}
                        height={30}
                    />
                </button>
                    <h2 className="text-4xl font-bold">Select Your Background Music</h2>
            </div>

            <div className={styles.videoPreview}>
                <Image
                    className={styles.white}
                    src='/assets/images/bgm-vid.svg'
                    width={600}
                    height={300}
                    alt="Background Music Video Preview"
                />
            </div>

            {blocks.map((block) => (
                <div key={block.id} className={styles.mp3Block}>
                    <div className={styles.mp3Header}>
                        <span>Upload MP3 {block.id}:</span>
                        {blocks.length > 1 && (
                            <button
                                type='button'
                                className={styles.deleteBtn}
                                onClick={() => deleteBlock(block.id)}
                            >
                                Delete
                            </button>
                        )}
                    </div>
                    <InputFile
                        buttonTitle='Choose File'
                        icon={uploadIcn}
                        name={`file_${block.id}`}
                        acceptFile={['.mp3']}
                        updateBlock={updateBlock}
                        block={block}
                        className={styles.formusic}
                        hideNoFileText={true}
                    />
                    <div className={styles.timeSelection}>
                        <label className='flex'>What Second Should This MP3 Play From? <span>(in minutes)</span></label>
                        <div className={styles.timeInputs}>
                            <div className={styles.start}>
                                <label>Start:</label>
                                <TimeInput
                                    id={block.id}
                                    field='startTime'
                                    updateBlock={updateBlock}
                                    className={styles.box2}
                                />
                            </div>
                            <div className={styles.start}>
                                <label className={styles.forfont}>End:</label>
                                <TimeInput
                                    id={block.id}
                                    field='endTime'
                                    updateBlock={updateBlock}
                                    className={styles.box2}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <button
                type='button'
                className={styles.leftbtnn}
                onClick={addBlock}
            >
                <Image
                    src="/assets/images/plus.svg"
                    alt="Plus"
                    width={24}
                    height={24}
                />Upload more MP3
            </button>

            <div className={styles.createVideo}>
                <button
                    className={styles.rightbtnn}
                    onClick={handleNext}
                    disabled={loading}

                >
                    Create New Video <Image
                        src="/assets/images/btn-arrow.svg"
                        alt="Go back"
                        width={24}
                        height={24}
                    />
                </button>
            </div>
        </form>
    );
};

export default AddBlock;
