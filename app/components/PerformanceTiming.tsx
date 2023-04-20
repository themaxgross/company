import React, { useEffect, useState } from "react";

const PerformanceTiming = () => {
  const [timing, setTiming] = useState(0);

  useEffect(() => {
    const timing = performance.timing;
    const t = timing.domContentLoadedEventEnd - timing.navigationStart;
    setTiming(t);
  }, []);

  return (
    <h2 className="text-xl md:text-2xl xl:text-3xl mb-6 md:mb-12">
      For example, this website loaded in {timing === 0 ? "just a few" : timing}{" "}
      milliseconds.
    </h2>
  );
};

export default PerformanceTiming;
