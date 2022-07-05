import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
};

export default Header;


// const title = "Blog Post";
// const body = "This is my blog post";
// const comments = [
//   { id: 1, text: "Comment one" },
//   { id: 2, text: "Comment two" },
//   { id: 3, text: "Comment three" },
// ];

// const loading = false;
// const showComments = false;

// if (loading) return <h1>Loading...</h1>;

// const commentsBlock = (
//   <div className="comments">
//     <h3>Comments ({comments.length})</h3>
//     <ul>
//       {comments.map((comment, index) => (
//         <li key={index}>{comment.text}</li>
//       ))}
//     </ul>
//   </div>
// );