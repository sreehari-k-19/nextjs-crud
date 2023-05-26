
import { useReducer } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserDetails, updateUserDetails } from "../../controllers/helper";
import { changeForm } from "../../redux/reducers";
import style from "../../styles/Form.module.scss"
import { Status } from "../Fetchstatus";
import Loader from "../Loader";

export default function UpdateForm({ formId, formData, setFormData }) {
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const { isLoading, isError, data, error } = useQuery(['users', formId], () => getUser(formId))
    const updateMutation = useMutation((newData) => updateUserDetails(formId, newData),{
        onSuccess:async(data)=>{
            // queryClient.setQueryData('users',(old)=>[data])
           
            queryClient.prefetchQuery('users', getUserDetails)
            dispatch(changeForm(null))
        }
    })
    if (isLoading) return <Loader/>
    if (isError) return <Status  value={false}/>
    
    const { name, email, salary, status, date } = data
    console.log(name)
    const [firstname, lastname] = name ? name.split(' ') : formData

    const handleSubmit = async (e) => {
        e.preventDefault()
        let userName = `${formData.firstname ?? firstname} ${formData.lastname ?? lastname}`;
        let updated = Object.assign({}, data, formData, { name: userName })
        await updateMutation.mutate(updated)
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>

            <div >
                <input className={style.firstname} onChange={setFormData} defaultValue={firstname} type="text" placeholder="firstname" name="firstname"></input>
            </div>
            <div>
                <input className={style.lastname} onChange={setFormData} defaultValue={lastname} type="text" placeholder="lastname" name="lastname"></input>
            </div>
            <div>
                <input className={style.email} onChange={setFormData} defaultValue={email} type="email" placeholder="Email" name="email"></input>
            </div>
            <div>
                <input className={style.salary} onChange={setFormData} defaultValue={salary} type="text" placeholder="Salary" name="salary"></input>
            </div>
            <div>
                <input className={style.date} onChange={setFormData} defaultValue={date} type="text" placeholder="Date" name="date"></input>
            </div>
            <div className={style.status}>
                <div className="">
                    <input type="radio" onChange={setFormData} defaultChecked={status == "Active"} value="Active" id="radioDefault1" name="status" className="" />
                    <label htmlFor="radioDefault1" className="">
                        Active
                    </label>
                </div>
                <div className="">
                    <input type="radio" onChange={setFormData} defaultChecked={status !== "Active"} value="Inactive" id="radioDefault2" name="status" className="" />
                    <label htmlFor="radioDefault2" className="">
                        Inactive
                    </label>
                </div>

            </div>
            <button className={style.addbutton}><div>Update<AiOutlinePlus /></div> </button>
        </form >
    )
}