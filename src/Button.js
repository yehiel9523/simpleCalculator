
export default function Button({ id, on }) {

    return (
        <button className="button digit" onClick={() => on(id)} >{id}</button>

    )
}
