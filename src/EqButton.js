export default function ({ id, on, eq, toggle, scr }) {
    return (
        <button className="button calculate" onClick={() => {
            if (scr.length >= 3) {
                // on(id);
                eq(toggle);
            }


        }}  >{id}</button>
    )
}
