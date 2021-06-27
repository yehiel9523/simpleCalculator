
export default function Screen({ scrArr }) {
    let screen = scrArr.join('');
    if (screen.length > 20)
        screen = 'too long';
    return (

        <div className="screen">{screen
            // .map((item) => item)
        }</div>

    )

}