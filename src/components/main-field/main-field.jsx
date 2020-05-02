import React, { useState, useCallback, useEffect } from 'react';
import { fromEvent } from 'rxjs';

import { map, debounceTime } from 'rxjs/operators';
import { Sparrow } from '../sparrow/sparrow';
import { Oil } from '../icons/oil/oil';
import { GameResultsModal } from '../game-results-modal/game-results-modal';

import './main-field.less';

export const MainField = () => {
  const [currentPosition, setPosition] = useState({ x: 250, y: 250 });
  const [direction, setDirection] = useState('right');
  const [rotate, setRotate] = useState(0);
  const [isStart, setStart] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [speed, setSpeed] = useState(3000);
  const [count, setCount] = useState(50);
  const [timerSubscription, setTimerSubscription] = useState(null);
  const [timer, setTimer] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isStart) {
      setTimerSubscription(setInterval(() => {
        setTimer(state => state + 0.1);
      }, 100));
    } else {
      clearInterval(timerSubscription);
    }
  }, [isStart]);

  const handleClick = useCallback(({ clientX, clientY }) => {
    if (!isModalOpen) {
      const { x, y } = currentPosition;

      if (subscription) {
        subscription.unsubscribe();
      }

      setSpeed(Math.abs((x - clientX) + (y - clientY)) / 50 + speed - count);

      if (subscription) {
        subscription.unsubscribe();
      }

      setCount(state => state * 1.1);

      if (!isStart) {
        setStart(true);
      }

      if (clientX < document.body.clientWidth / 2 && clientX < x) {
        setDirection('left');
      } else {
        setDirection('right');
      }

      if (clientY > document.body.clientHeight / 2 && clientY > y) {
        setRotate(20);
      } else {
        setRotate(-20);
      }

      setPosition({ x: clientX, y: clientY });
    }
  }, [count, speed, currentPosition, isStart, isModalOpen]);

  useEffect(() => {
    setSubscription(fromEvent(document, 'click').pipe(
      debounceTime(speed),
      map(() => {
        setStart(false);
        setModalOpen(true);
      }),
    ).subscribe());
  }, [speed, isStart, isModalOpen]);

  const handleRestart = () => {
    window.location.reload();
  };

  const scale = direction === 'left' ? -1 : 1;

  const positionSettings = { transform: `translate(${currentPosition.x}px, ${currentPosition.y}px)` };

  return (
    <div className="main-field vw-100 vh-100 position-absolute" onClick={handleClick}>
      <div className="d-flex justify-content-center">
        <span>{timer.toFixed(1)}</span>
      </div>
      {isStart && <Oil currentPosition={positionSettings} />}
      <Sparrow currentPosition={positionSettings} rotate={rotate} scale={scale} isStart={isStart} speed={speed} />
      <GameResultsModal isOpen={isModalOpen} handleRestart={handleRestart} result={timer.toFixed(1)} />
    </div>
  );
};
