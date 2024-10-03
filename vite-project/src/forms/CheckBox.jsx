export function CheckBox({checked, onChange, label}) {
    return <>
    <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)}>
    </input>
    <label>{label}</label>
    </>
}