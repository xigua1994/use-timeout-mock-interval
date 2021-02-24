import {useEffect, useRef} from 'react';

type delayType = null | number;
type fnType = (...args: any[]) => void;

/**
 * use setTimeout mock setInterval
 *
 * @param fn - Function that will be called every `delay` ms.
 * @param delay - Number representing the delay in ms. Set to `null` to "pause" the interval.
 */

function useTimeoutMockInterval(fn: fnType, delay: delayType){
  const cbRef = useRef<fnType>(fn);
  let timerRef = useRef<ReturnType<typeof setTimeout>|null>(null);

  useEffect(() => {
    cbRef.current = fn;
  }, [fn]);

  useEffect((): any => {
    const tick = (...args: any[]) => cbRef.current!(...args);
    const timeout = () => {
      if(delay !== null){
        timerRef.current = setTimeout(() => {
          tick();
          timeout();
        }, delay)
      }
    }
    if(delay !== null){
      timeout();
    }
    if(delay !== null){
      return () => {
        if(timerRef.current){
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
      }
    }
  }, [delay])
}

export default useTimeoutMockInterval;