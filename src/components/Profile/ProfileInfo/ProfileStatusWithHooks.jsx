import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    // let stateWithSetState = useState(false);
    // let editMode = stateWithSetState[0]; // здесь сидит false (значение)
    // let setEditMode = stateWithSetState[1]; // fun, которая устанавливает значение

    let [editMode, setEditMode] = useState(false); //Local state
    let [status, setStatus] = useState(props.status); // инициализованное значение пришло в пропсах 

    useEffect(() => { // выполняется после 1 отрисовки
        setStatus(props.status);
    }, [props.status]); // arr, выступающий зависимостью, что когда приходит новый props, мы должны перерисоваться

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => { // method
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "--------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;