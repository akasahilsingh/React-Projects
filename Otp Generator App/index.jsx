const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [time, setTime] = useState(5);
  const [otp, setOtp] = useState(null);
  const [isDisplay, setDisplay] = useState(false);

  function generateOtp() {
    const arr = [];
    for (let i = 0; i < 6; i++) {
      const otp = Math.floor(1 + Math.random() * 9);
      arr.push(otp);
    }

    return arr.join("");
  }

  useEffect(() => {
    if (!isDisabled) return;
    const count = setInterval(() => {
      setTime((prev) => {
        if (prev === 1) {
          clearInterval(count);
          setIsDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(count);
  }, [isDisabled]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp === null ? `Click 'Generate OTP' to get a code` : otp}
      </h2>
      {isDisplay && (
        <p id="otp-timer">
          {time === 0
            ? `OTP expired. Click the button to generate a new OTP.`
            : `Expires in: ${time} seconds`}
        </p>
      )}
      <button
        onClick={() => {
          setIsDisabled(true);
          setTime(5);
          setOtp(generateOtp());
          setDisplay(true);
        }}
        style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
        id="generate-otp-button"
        disabled={isDisabled}
      >
        Generate OTP
      </button>
    </div>
  );
};
