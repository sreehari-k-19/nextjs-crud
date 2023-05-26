import { FiEdit } from "react-icons/Fi";
import { AiOutlineDelete } from "react-icons/ai";
import style from '../styles/Table.module.scss'
import data from '../Database/Data.json'
import { useQuery } from "react-query";
import { getUserDetails } from "../controllers/helper";
import { useDispatch, useSelector } from "react-redux";
import { changeForm, deleteAction, updateAction } from "../redux/reducers";
import Loader from "./Loader";
import { Status } from "./Fetchstatus";
export default function Table() {

    const { isLoading, isError, data, error } = useQuery('users', getUserDetails)
    if (isLoading) return <Loader/>
    if (isError) return <Status  value={false}/>
    return (

        <div className={style.table}>
            <div className={style.title}>
                <h4>Name</h4>
                <h4>Email</h4>
                <h4>Salary</h4>
                <h4>Birthday</h4>
                <h4>Status</h4>
                <h4>Actions</h4>
            </div>
            {
                data.map((value, i) => <TableRow {...value} key={i} />)
            }

        </div>
    )
}

function TableRow({ _id, name, avatar, email, salary, date, status }) {
    const visible = useSelector((state) => state.app.client.toggleForm)
    const dispatch = useDispatch()
    const onUpdate = () => {
        dispatch(changeForm(_id))
        if (visible) {
            dispatch(updateAction(_id))
        }
    }
    const onDelete=()=>{
        if(!visible){
            dispatch(deleteAction(_id))
        }
    }
    return (
        <div className={style.details}>
            <h4>{name || ""}</h4>
            <h4>{email || ""}</h4>
            <h4>{salary || ""}</h4>
            <h4>{date || ""}</h4>
            <h4>{status || ""}</h4>
            <div><div onClick={onUpdate}><FiEdit size={21} color={"green"} /></div><div onClick={onDelete}><AiOutlineDelete size={21} color={"red"} /></div></div>
        </div>
    )
}