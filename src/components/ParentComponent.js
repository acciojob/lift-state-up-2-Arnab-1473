import React, {useState} from "react";

const ParentComponent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return(
        <div>
            <h1>Parent Component</h1>
            <p>{inputValue}</p>
            <ChildComponent inputValue={inputValue} 
            onInputChange={handleInputChange}/>
            
        </div>
    );
};

const ChildComponent = ({inputValue, onInputChange}) => {
    return(
        <div className="child">
            <h2>Child Component</h2>
            <input type="text" value={inputValue} 
            onChange={onInputChange}/>
        </div>
    )
}
export default ParentComponent;