const HeaderText = ({ text }) => {
  return (
    <div>
      {" "}
      <h3
        className="text-purple-800 text-xl uppercase font-semibold mb-5  text-center md:text-left"
        style={{ letterSpacing: "2px" }}
      >
        {text}
      </h3>
    </div>
  );
};

export default HeaderText;
