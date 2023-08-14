export default function TitleLi(props) {
  return /*#__PURE__*/React.createElement("li", {
    onMouseEnter: function onMouseEnter() {
      if (props.onMouseEnter) props.onMouseEnter();
    },
    onMouseLeave: function onMouseLeave() {
      if (props.onMouseLeave) props.onMouseLeave();
    }
  }, /*#__PURE__*/React.createElement("b", null, props.title), ": ", !props.isHidden && props.children);
}