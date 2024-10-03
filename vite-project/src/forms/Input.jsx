
export function Input({placeHolder, value, onChange}) {
    return <>
    <input type="text" 
        placeholder={placeHolder} 
        value={value} 
        onChange={onChange}
    >

    </input>
    </>
    
}