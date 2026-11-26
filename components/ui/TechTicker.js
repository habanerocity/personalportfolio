import classes from './TechTicker.module.scss';

// A "stock ticker" strip that scrolls a list of technologies forever.
// The list is rendered twice, back to back. The track slides left by exactly
// one copy's width, then jumps back to the start, which looks like a seamless loop.
const TechTicker = ({
  label = 'Built with',
  items = [],
  duration = 50, // seconds for one full loop: higher = slower
  className = '',
}) => {
  if (items.length === 0) return null;

  // Each copy shows the items twice, so a copy is always wider than the strip.
  // (With a short list, one pass can be narrower than a wide desktop screen,
  // which would leave an empty gap at the end of each loop.)
  const loopItems = [...items, ...items];

  const renderItems = (isDuplicate) => (
    <ul
      className={`list-unstyled d-flex align-items-center mb-0 ${classes.ticker__list}`}
      // The second copy is only there for the loop, so screen readers skip it
      aria-hidden={isDuplicate ? 'true' : undefined}
    >
      {loopItems.map((item, index) => (
        <li
          key={index}
          className={classes.ticker__item}
          // Screen readers read each item once, not the repeated pass
          aria-hidden={index >= items.length ? 'true' : undefined}
        >
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`d-flex align-items-stretch w-100 ${classes.ticker} ${className}`}>
      <p className={`d-flex align-items-center mb-0 ${classes.ticker__label}`}>{label}</p>

      <div className={classes.ticker__window}>
        <div
          className={`d-flex ${classes.ticker__track}`}
          style={{ animationDuration: `${duration}s` }}
        >
          {renderItems(false)}
          {renderItems(true)}
        </div>
      </div>
    </div>
  );
};

export default TechTicker;
