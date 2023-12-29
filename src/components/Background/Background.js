import { generateRandomValues } from './generator';
import css from './Background.module.css';

export const BackgroundGuest = ({ children }) => {
  const snowflakes = Array.from({ length: 5 }, (_, index) => {
    const { left, animationDuration } = generateRandomValues();
    const snowflakeStyle = {
      left,
      animationDuration,
    };
    return (
      <div key={index} className={css.snowflake} style={snowflakeStyle}></div>
    );
  });
  return (
    <div className={css.winterBackground}>
      <div className={css.snowflakes}>{snowflakes}</div>
      {children}
    </div>
  );
};

export const BackgroundUser = ({ children }) => {
  return <div className={css.user}>{children}</div>;
};
