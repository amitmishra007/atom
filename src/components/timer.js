import { useCallback, useEffect, useRef, useState } from "react";
const Timer = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const secondTimer = useRef(null);
  const getTimeDifference = (countDownDate) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownDate - currentTime;
    const days = Math.floor(timeDiffrence / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDiffrence % (60 * 1000)) / 1000);
    if (timeDiffrence < 0) {
      if (secondTimer.current) {
        secondTimer.current.className = "relative top-5";
      }
      setCountDownTIme({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval();
    } else {
      if (secondTimer.current) {
        secondTimer.current.className = "";
        secondTimer.current.className = "animate-timer";
      }
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    // const countDownDate = new Date(
    //   customDate.getFullYear(),
    //   customDate.getMonth(),
    //   customDate.getDate() + 14,
    //   customDate.getHours() + 18,
    //   customDate.getMinutes() + 25,
    //   customDate.getSeconds() + 8
    // );
    const countDownDate = new Date(2025, 0, 8, 12, 0, 0, 0);

    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div className="h-2/3  w-screen flex items-center justify-center ">
      <div className="flex gap-3 sm:gap-1   flex-row bg-[#4A3563] h-36 rounded-lg overflow-hidden pt-2 pr-3 sm:pt-0 sm:pr-0">
        <div className="flex flex-col bg-[#4A3563] sm:w-32 w-16">
          <div className="h-16 sm:h-20 bg-[#4A3563]">
            <div className="h-[60px] flex justify-center bg-[#4A3563] sm:text-3xl text-xl !text-[#A6ADBB]">
              <div
                className={
                  countDownTime?.days >= 0 &&
                  countDownTime?.hours == 23 &&
                  countDownTime?.minutes == 59 &&
                  countDownTime?.seconds == 59
                    ? "animate-timer"
                    : "relative top-5"
                }
              >
                {countDownTime?.days}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
              {countDownTime?.Days == 1 ? "Day" : "Days"}
            </span>
          </div>
        </div>
        <div className="flex flex-col bg-[#4A3563] sm:w-32 w-16">
          <div className="h-16 sm:h-20 bg-[#4A3563]">
            <div className="h-[60px] flex justify-center bg-[#4A3563] sm:text-3xl text-xl !text-[#A6ADBB]">
              <div
                className={
                  countDownTime?.hours >= 0 &&
                  countDownTime?.minutes == 59 &&
                  countDownTime?.seconds == 59
                    ? "animate-timer"
                    : "relative top-5"
                }
              >
                {countDownTime?.hours}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
              {countDownTime?.hours == 1 ? "Hour" : "Hours"}
            </span>
          </div>
        </div>
        <div className="flex flex-col bg-[#4A3563] sm:w-32 w-16">
          <div className="h-16 sm:h-20 bg-[#4A3563]">
            <div className="h-[60px] flex justify-center bg-[#4A3563] sm:text-3xl text-xl !text-[#A6ADBB]">
              <div
                className={
                  countDownTime?.minutes >= 0 && countDownTime?.seconds == 59
                    ? "animate-timer"
                    : "relative top-5"
                }
              >
                {countDownTime?.minutes}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
              {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
            </span>
          </div>
        </div>
        <div className="flex flex-col bg-[#4A3563] sm:w-32 w-16">
          <div className="h-16 sm:h-20 bg-[#4A3563]">
            <div className="h-[60px] flex justify-center  bg-[#4A3563] overflow-hidden sm:text-3xl text-xl text-[#A6ADBB]">
              <div ref={secondTimer}>{countDownTime?.seconds}</div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
              {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timer;
