export default function Image(props) {
    return <img className="my-4" src={props.url} alt={props.caption} />;
}