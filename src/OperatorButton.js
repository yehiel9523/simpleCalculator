export default function plus({ id, on, scr }) {

    return (
        <button className="button operator" onClick={() => {
            // if (scr.lastIndexOf(id) < scr.length - 1)
            if (typeof scr[scr.length - 1] === 'number')
                on(id)
        }
        } >{id}</button>
    )
}