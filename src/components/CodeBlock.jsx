export default function CodeBlock(props) {
    const lines = props.value.split("\n");
    const prefix = 2 == 1 ? "$" : undefined;
    return (

        <div className="mockup-code mb-5">
            {lines.map((line, index) => {
                return (
                    <pre key={index} data-prefix={prefix}><code className={`language-${props.lang}`}>{line}</code></pre>
                )
            })}
        </div>
    )
}