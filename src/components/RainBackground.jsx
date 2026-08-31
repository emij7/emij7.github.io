const drops = Array.from({ length: 42 }, (_, index) => ({
  left: `${(index * 37 + 11) % 104}%`,
  delay: `${-((index * 0.43) % 4.8)}s`,
  duration: `${1.15 + (index % 8) * 0.16}s`,
  opacity: 0.2 + (index % 5) * 0.08,
  length: `${18 + (index % 6) * 5}px`,
}));

const RainBackground = () => {
  return (
    <div className="rain-background" aria-hidden="true">
      {drops.map((drop, index) => (
        <span
          className="rain-drop"
          key={index}
          style={{
            "--rain-left": drop.left,
            "--rain-delay": drop.delay,
            "--rain-duration": drop.duration,
            "--rain-opacity": drop.opacity,
            "--rain-length": drop.length,
          }}
        />
      ))}
    </div>
  );
};

export default RainBackground;
