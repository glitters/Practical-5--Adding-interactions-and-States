export default function TitleLi(props) {
  return /*#__PURE__*/React.createElement("li", null, " onMouseEnter=", function () {
    if (props.onMouseEnter) props.onMouseEnter();
  }, /*#__PURE__*/React.createElement("b", null, props.title), ": ", !props.isHidden && props.children);
}