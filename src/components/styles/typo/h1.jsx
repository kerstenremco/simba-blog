export default function Heading1(props) {
    const { extraClasses } = props;
    const classes = "mb-7 text-4xl";
    const classNames = extraClasses ? classes + " " + extraClasses : classes;
    return <h1 className={classNames}>{props.children}</h1>;
  }