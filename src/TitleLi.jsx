export default function TitleLi (props) {
    return (
        <li onMouseEnter={function(){ if (props.onMouseEnter) props.onMouseEnter();} }
            <b>{props.title}</b>: {!props.isHidden && props.children}>
        </li>
    )
}