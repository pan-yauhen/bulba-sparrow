import React from 'react';
import classNames from 'classnames';
import { IconSpeech } from '../icons/speech/speech';

import './sparrow.less';

export const Sparrow = ({
  currentPosition, scale, rotate, isStart, speed,
}) => {
  const transformSettings = {
    transform: `rotate(${38 * scale + rotate * scale}deg) scale(${scale}, 1)`,
  };
  return (
    <div className="sparrow" style={{ ...currentPosition, transition: `${speed}ms` }}>
      <div
        style={{ height: 80, width: 80, transition: '.3s' }}
        className={classNames('speech-container d-flex align-items-center justify-content-center position-absolute', {
          'show-speech': isStart,
        })}
      >
        <IconSpeech />
        <span className="text-uppercase text-white position-relative text-center">чык-чырык</span>
      </div>
      <div className="right-wing position-absolute w-100 h-100" style={transformSettings} />
      <div className="left-wing position-absolute w-100 h-100" style={transformSettings} />
      <div
        className="w-100 h-100 sparrow-body d-flex align-items-center justify-content-center position-absolute"
        style={transformSettings}
      >
        <div className="face d-flex flex-column align-items-center justify-content-center position-relative">
          <div className="w-100 d-flex justify-content-between mt-n5">
            <div className="rounded-circle eye" />
            <div className="rounded-circle eye" />
          </div>
        </div>
      </div>
      <div className="legs position-absolute h-100 w-100" style={transformSettings} />
    </div>
  );
};
