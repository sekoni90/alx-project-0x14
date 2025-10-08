import React from 'react';

const Loading: React.FC<{ size?: number; text?: string }> = ({ size = 32, text }) => {
  const s = size;
  return (
    <div className="flex items-center gap-3">
      <div
        className={`animate-spin border-4 border-t-transparent rounded-full border-gray-300 w-[${s}px] h-[${s}px]`}
        aria-hidden
      />
      {text && <span>{text}</span>}
    </div>
  );
};

export default Loading;