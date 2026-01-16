import { useState, useEffect } from 'react';

interface CountdownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export const useCountdown = (targetDate: string): CountdownTime => {
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const pad = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

    const updateCountdown = () => {
      const now = Date.now();
      const distance = Math.abs(target - now);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
};
