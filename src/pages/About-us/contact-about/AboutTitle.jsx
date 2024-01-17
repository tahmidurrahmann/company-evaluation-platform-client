const AboutTitle = ({
  firstText,
  secText,
  thirdText,
  forthText,
  colr,
  lineHeight,
}) => {
  const colorClass = colr || "text-white";

  return (
    <h1
      className={`text-5xl font-bold ${colorClass}`}
      style={{ lineHeight: lineHeight }}
    >
      {firstText}
      <br /> <span className="text-amber-700">{secText}</span>
      {thirdText}
      <br />
      {forthText}
    </h1>
  );
};

export default AboutTitle;
