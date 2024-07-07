"use client";

import * as RadixSlider from "@radix-ui/react-slider";

const MusicSlider = ({ value = 1, onChange, max = 1, step = 0.1 }) => {
    const handleChange = (newValue) => {
        onChange?.(newValue[0]);
    };

    return (
        <RadixSlider.Root
            className="
        relative 
        flex 
        items-center 
        select-none 
        touch-none 
        w-full 
        h-12
      "
            value={[value]}
            onValueChange={handleChange}
            max={max}
            step={step}
            aria-label="Music Slider"
        >
            <RadixSlider.Track
                className="
          bg-neutral-600 
          relative 
          grow 
          rounded-full 
          h-[6px]
        "
            >
                <RadixSlider.Range
                    className="
            absolute 
            bg-white 
            rounded-full 
            h-full
          "
                />
            </RadixSlider.Track>
            <RadixSlider.Thumb
                className="
          block 
          w-4 
          h-4 
          bg-white 
          rounded-full 
          shadow 
          cursor-pointer
        "
            />
        </RadixSlider.Root>
    );
};

export default MusicSlider;
