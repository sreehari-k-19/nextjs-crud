import { useReducer } from "react";
import UpdateForm from "./UpdateForm";
import AddUser from "./AddUser";
import { useSelector } from "react-redux";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function Form() {
    const [formData, setFormData] = useReducer(formReducer, {})
    const formId = useSelector((state) => state.app.client.formId)
    const flag = true;
    return (
        <>
            {formId ?UpdateForm({formId,formData,setFormData}) : AddUser({formData,setFormData})}
        </>
    )
}