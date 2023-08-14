import TitleLi from "./TitleLi.js";
export default function Age(props) {
  return /*#__PURE__*/React.createElement(TitleLi, {
    title: "Age",
    isHidden: true
  }, props.value < 18 ? "🔞" : "", props.value);
}