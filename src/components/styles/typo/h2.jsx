export default function Heading2(props) {
    const { extraClasses } = props;
    const classes = "mb-5 text-3xl";
    const classNames = extraClasses ? classes + " " + extraClasses : classes;
    return <h2 className={classNames}>{props.children}</h2>;
  }