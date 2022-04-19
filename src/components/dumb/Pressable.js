

function Pressable(props) {
  return (
    <button
      className="expand"
      onClick={props.onPress}
    >
    {props.title}
    </button>
  );
}

export default Pressable;
