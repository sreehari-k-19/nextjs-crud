import { AiOutlinePlus } from "react-icons/ai";
import { useMutation, useQueryClient } from "react-query";
import { addUserDetails, getUserDetails } from "../../controllers/helper";
import style from "../../styles/Form.module.scss"
import {Status } from "../Fetchstatus";
import Loader from "../Loader";



export default function AddUser({formData,setFormData}) {
    const queryclient = useQueryClient()

    const addmutation = useMutation(addUserDetails, {
        onSuccess: () => {
            console.log("data inserted")
            queryclient.prefetchQuery('users', getUserDetails)

        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        if (Object.keys(formData).length == 0) return console.log("No form data")
        let { firstname, lastname, email, salary, date, status } = formData
        const models = {
            name: `${firstname} ${lastname}`,
            email, salary, date, status: status ?? "Active"
        }
        addmutation.mutate(models)

    }
let success;
    if (addmutation.isLoading) return <Loader/>
    if (addmutation.isError) return <Status value={false}/
    >
    if (addmutation.isSuccess) return <Status value={true}/>

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div >
                <input className={style.firstname} onChange={setFormData} type="text" placeholder="firstname" name="firstname"></input>
            </div>
            <div>
                <input className={style.lastname} onChange={setFormData} type="text" placeholder="lastname" name="lastname"></input>
            </div>
            <div>
                <input className={style.email} onChange={setFormData} type="email" placeholder="Email" name="email"></input>
            </div>
            <div>
                <input className={style.salary} onChange={setFormData} type="text" placeholder="Salary" name="salary"></input>
            </div>
            <div>
                <input className={style.date} onChange={setFormData} type="date" placeholder="Date" name="date"></input>
            </div>
            <div className={style.status}>
                <div className="">
                    <input type="radio" onChange={setFormData} value="Active" id="radioDefault1" name="status" className="" />
                    <label htmlFor="radioDefault1" className="">
                        Active
                    </label>
                </div>
                <div className="">
                    <input type="radio" onChange={setFormData} value="Inactive" id="radioDefault2" name="status" className="" />
                    <label htmlFor="radioDefault2" className="">
                        Inactive
                    </label>
                </div>

            </div>
            <button className={style.addbutton}><div>ADD<AiOutlinePlus /></div> </button>
        </form >
    )
}