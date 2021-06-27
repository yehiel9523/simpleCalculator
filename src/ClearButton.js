export default function ClearButton({ id, on }) {
    return (
        <button className="button clear" onClick={
            () => on()
        }
        >{id}</button>);

}