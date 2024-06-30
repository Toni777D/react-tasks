import { css } from "./Form.module.css";
export default function Form({onAdd}){
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            id: Date.now(),
            text: e.target.elements.text.value,
        });
        e.target.reset();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input type="text" className={css.field}  name="text"/>
            <button type="submit">Add Task</button>
        </form>
    )
}