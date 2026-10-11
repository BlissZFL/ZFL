"use client";

import React, { useState } from "react";
import Image from "next/image";

interface HandsArtProps {
  customImageSrc?: string;
}

export default function HandsArt({ customImageSrc }: HandsArtProps) {
  const [imgError, setImgError] = useState(false);

  // If a valid image is provided and hasn't errored, display the image
  if (customImageSrc && !imgError) {
    return (
      <div className="relative w-full h-[290px] sm:h-[350px] md:h-[400px] flex items-center justify-center">
        <Image
          src={customImageSrc}
          alt="Your Idea, Our Two Cents Hands"
          fill
          className="object-contain"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // High-fidelity digital ASCII point-cloud representation matching the screenshot
  return (
    <div className="relative w-full min-h-[300px] sm:min-h-[370px] md:min-h-[415px] flex flex-col justify-between py-2 sm:py-3 select-none">
      {/* Visual Canvas Area with the Two Digital Character Hands */}
      <div className="relative w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-4 sm:px-8">
        {/* Left Hand: "Your idea" */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] font-mono text-[8.5px] sm:text-[9.5px] md:text-[10px] leading-[1.08] sm:leading-[1.1] tracking-[0.18em] text-neutral-800 whitespace-pre overflow-hidden flex flex-col items-center">
            {/* Hand ASCII Character Map */}
            <div className="text-neutral-400">
              {"                  0       "}
              <span className="text-black font-black">■</span>
              {" 0 0"}
            </div>
            <div className="text-neutral-500">
              {"          1 1 X "}
              <span className="text-blue-600 font-bold">$</span>
              {" "}
              <span className="text-black font-bold">■</span>
              {" X 0 1   > $ X  1 0 $ 1 0 $"}
            </div>
            <div className="text-neutral-600">
              {"      0 0 X "}
              <span className="text-black font-bold">■</span>
              {" X > 0 X $ "}
              <span className="text-blue-600 font-bold">■</span>
              {" $ 1 $ 0 0 0 X 1 0  "}
              <span className="text-black font-bold">■</span>
              {" 1  1"}
            </div>
            <div className="text-neutral-700">
              {"    > 1 1 1 $ 1 X X 0 X 1  1 $ 1 0 1  0 X $ "}
              <span className="text-black font-bold">■</span>
              {" X 0 X > 0 X $ >"}
            </div>
            <div className="text-neutral-800">
              {"   1 1   X 0 0 0 > > X > > "}
              <span className="text-blue-600 font-bold">$</span>
              {" 0 0 0   0 0 $ X > 1 0 0 X 0 1 0 $  1"}
            </div>
            <div className="text-neutral-800 font-medium">
              {" > X 1 > 0 X 0 0 1 0 0 $ "}
              <span className="text-black font-bold">■</span>
              {" 0   1  "}
              <span className="text-black font-bold">■</span>
              {" 0 0 0 > > 1 X $ "}
              <span className="text-black font-bold">■</span>
              {" $ 0 0   0 "}
              <span className="text-black font-bold">■</span>
              {" X"}
            </div>
            <div className="text-neutral-900">
              {"> 0  "}
              <span className="text-blue-600 font-bold">■</span>
              {" 0   X X X $ 1 0 0 $  1 > $ > 1  1 $ 1 > 0 0 > 0 0 X > 1 >   0"}
            </div>
            <div className="text-neutral-800">
              {"1 $ > 1 > > > $ 0   0 1 >  1 0 $ 0 X $ 1 0 > 1 > 1 X 1 X 1 > 0 > > 0 1"}
            </div>
            <div className="text-neutral-700">
              {"  > 0 1 1 > 0 0 0 1 0 0 "}
              <span className="text-black font-bold">■</span>
              {" X 0   "}
              <span className="text-blue-600 font-bold">■</span>
              {" 0  1 > 1 > 1 1 0   0 0 X 1  "}
              <span className="text-neutral-400">1 X 1</span>
            </div>
            <div className="text-neutral-600">
              {"1 X $ 1 1 0   0 0 0 X X 0 X 1 1 $ 0 1 1 0 1 0 0 1 1   $ 1 0 1 > > X 0"}
            </div>
            <div className="text-neutral-500">
              {" > X 0 > > $ 0 > 1 1 0 0         X 0 X  1 1 X 1 $ $ 1 X 1 0 0 X > 0 1"}
            </div>
            <div className="text-neutral-400">
              {" < > 0 1   1   1 1 0              > 1 1 1 0 $ 1 1 X 1 X 0 0 > 1"}
            </div>
            <div className="text-neutral-500">
              {"1 0 1 1 X   >   0                      1 0 1 0 0 X >   $ 1 0"}
            </div>
            <div className="text-neutral-400">
              {"1 0 > X X > 0 X                         "}
              <span className="text-black font-bold">■</span>
              {" > $ 1 0 X"}
            </div>
            <div className="text-neutral-400">
              {"  $   $ 1 0 0                           0 $ 1 > X $"}
            </div>
            <div className="text-neutral-300">
              {"$ 1 1 1 1 1 1                              $   $   1   X"}
            </div>
            <div className="text-neutral-400">
              {"$     0                                    X $     1"}
            </div>
            <div className="text-neutral-300">
              {"  0                                        1 $     > X"}
            </div>
          </div>

          {/* Left Pointer Pin & Label */}
          <div className="mt-8 flex flex-col items-center">
            {/* Pin head and line */}
            <div className="w-2.5 h-2.5 bg-black" />
            <div className="w-[1.5px] h-6 bg-neutral-400" />
            <span className="mt-2 text-xs sm:text-sm font-sans font-medium text-neutral-800 tracking-tight">
              Your idea
            </span>
          </div>
        </div>

        {/* Right Hand: "Our two cents" */}
        <div className="flex flex-col items-center justify-center mt-10 md:mt-0">
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-[1.15] tracking-[0.2em] text-neutral-800 whitespace-pre overflow-hidden flex flex-col items-center">
            {/* Hand ASCII Character Map */}
            <div className="text-neutral-400">
              {"              0 0 "}
              <span className="text-blue-600 font-bold">$</span>
              {" > "}
              <span className="text-black font-bold">■</span>
              {" X"}
            </div>
            <div className="text-neutral-500">
              {"            0 1  "}
              <span className="text-blue-600 font-bold">■</span>
              {" 0 0 1 0 1 > 1 0 $ 0 $ >  1 0 1 0 0 1 $ > 0 >  $ X"}
            </div>
            <div className="text-neutral-600">
              {"          "}
              <span className="text-blue-600 font-bold">$</span>
              {" 1 > "}
              <span className="text-black font-bold">■</span>
              {" 1 0 0 $ 0 X >  0 1 X 1 1 $   0 X   0 0   0 0 0 X $  X 1"}
            </div>
            <div className="text-neutral-700">
              {"8   0 1 0  $ 1 > 0 1 X 1 X > > X $ 1 1 $ $ $   $ 0 1 X $ 0 "}
              <span className="text-black font-bold">■</span>
              {" 1 > $ 1 1 1 $ $"}
            </div>
            <div className="text-neutral-800">
              {"       > 1 0 0 0 "}
              <span className="text-black font-bold">■</span>
              {" > $ 0 > $ 1 1 X > X $ 1   1 1 > 0 "}
              <span className="text-black font-bold">■</span>
              {" 0 1 1 0 "}
              <span className="text-blue-600 font-bold">■</span>
              {" $ 1 1"}
            </div>
            <div className="text-neutral-900 font-medium">
              {"    1 0 X 1  0 0 $ 0 > $ > "}
              <span className="text-black font-bold">■</span>
              {" X  "}
              <span className="text-blue-600 font-bold">■</span>
              {" 1 $ X 1 1 0 > 0 $ $ 1  > $ 1 1 1 0 1 $ $"}
            </div>
            <div className="text-neutral-800">
              {"        0  0 $ 0 0 $ > 1 1 X  1 > > 0 0 0 1 $ > $ 1 "}
              <span className="text-black font-bold">■</span>
              {" 1 1 1 > 0 X X 0"}
            </div>
            <div className="text-neutral-700">
              {"       > 0 0 0 > 1 "}
              <span className="text-black font-bold">■</span>
              {" 0 0 "}
              <span className="text-black font-bold">■</span>
              {" X 0 "}
              <span className="text-black font-bold">■</span>
              {" 0 0  "}
              <span className="text-blue-600 font-bold">$</span>
              {" "}
              <span className="text-black font-bold">■</span>
              {" 0 > > X   0 0 X X X 1"}
            </div>
            <div className="text-neutral-600">
              {"      $ 1 X   X X 0 $ 1 0 0 X 0 X 0 0 1 0 > 0 X >   1 > X $ X "}
              <span className="text-blue-600 font-bold">■</span>
              {" 1 "}
              <span className="text-black font-bold">■</span>
              {" "}
              <span className="text-black font-bold">■</span>
              {" 1"}
            </div>
            <div className="text-neutral-500">
              {"   0   1 1 $ X > 0 1 X 1 > 0 "}
              <span className="text-black font-bold">■</span>
              {" $ > 0 $ $ "}
              <span className="text-black font-bold">■</span>
              {" 0 0 1 "}
              <span className="text-blue-600 font-bold">■</span>
              {" 1   1 1 0 1   0 > > 0"}
            </div>
            <div className="text-neutral-500">
              {"  0 1 1   0   X 1 1 0 > $ "}
              <span className="text-blue-600 font-bold">■</span>
              {" 0 0   > 1 > > 1 $       0 1 0 0 "}
              <span className="text-black font-bold">■</span>
              {" 0   0 1"}
            </div>
            <div className="text-neutral-400">
              {" $ $ 0 1  X 1 0 1 5 0 X > $ 1 "}
              <span className="text-black font-bold">■</span>
              {" 0 1               0 "}
              <span className="text-black font-bold">■</span>
              {" X 1   1 1"}
            </div>
            <div className="text-neutral-400">
              {"1 $ 1 0 $ $ > X 0 $ 0 0 >   $   1                     1 1 "}
              <span className="text-blue-600 font-bold">■</span>
            </div>
            <div className="text-neutral-300">
              {"     > $ X   0 > 1 1 > X"}
            </div>
            <div className="text-neutral-300">
              {"   0   0 1 X 1 1 0 $   $"}
            </div>
            <div className="text-neutral-400">
              {"       $ X 1 X 0 "}
              <span className="text-blue-600 font-bold">■</span>
              {" 1"}
            </div>
            <div className="text-neutral-300">
              {"         1 1 "}
              <span className="text-blue-600 font-bold">■</span>
            </div>
          </div>

          {/* Right Pointer Pin & Label */}
          <div className="mt-8 flex flex-col items-center">
            {/* Pin head and line */}
            <div className="w-2.5 h-2.5 bg-blue-600" />
            <div className="w-[1.5px] h-6 bg-neutral-400" />
            <span className="mt-2 text-xs sm:text-sm font-sans font-medium text-neutral-800 tracking-tight">
              Our two cents
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
