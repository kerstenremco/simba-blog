export default function Code(props) {
    return (

        <div className="mockup-code mt-3 mb-5 -z-10 static">

            <pre data-prefix="$"><code className={`language-shell`}>{props.children.props.text}</code></pre>

        </div>
    )
}