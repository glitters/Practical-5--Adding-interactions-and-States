import Hello from "./Hello.js";
import Hobby from "./Hobby.js";
import TitleLi from "./TitleLi.js";
import Age from "./Age.js";
var hobbies = [{
  emoji: "🏊",
  title: "Swim"
}, {
  emoji: "🏃",
  title: "Game"
}, {
  emoji: "🎮",
  title: "Read"
}, {
  title: "Jog"
}, {
  title: "Jump"
}];
export default function App(props) {
  var name = 'Ron Lim';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hello, null, "name=", name), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement(TitleLi, {
    title: "Name"
  }, name), /*#__PURE__*/React.createElement(Age, {
    value: 18
  }), /*#__PURE__*/React.createElement(TitleLi, {
    title: "Hobbies"
  }), /*#__PURE__*/React.createElement("ol", null, hobbies.map(function (hobby, index) {
    if (!hobby.emoji) {
      return null;
    }
    return /*#__PURE__*/React.createElement(Hobby, {
      title: hobby.title,
      emoji: hobby.emoji,
      key: index
    });
  })))));
}