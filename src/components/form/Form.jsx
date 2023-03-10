import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React from "react";
import style from "./form.module.css"
import axios from "axios";

export default function Form(props) {

    const navigate = useNavigate();
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit = (data) => {
        axios.post("https://63e53e18c04baebbcdb6b161.mockapi.io/form", data)
        alert("Заявка отправлена")
        props.deleteAllItems()
        navigate("/", { replace: true })
    }

    window.scrollTo(0, 0)

    return(
        <div className={style.form}>
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Заполните заявку на обратный звонок</h1>
                <div>
                    <div className="input-group mb-3">
                        <input {...register("lastName", {required: true, maxLength: 50, pattern: /^[А-Яа-я]+$/i })} 
                            type="text" className="form-control" placeholder="Фамилия" />
                    </div>

                    {errors?.lastName?.type === "required" && (<p>Поле Фамилия обязательно для заполнения</p>)}
                    {errors?.lastName?.type === "maxLength" && (<p>Фамилия не может содержать более 50 символов</p>)}
                    {errors?.lastName?.type === "pattern" && (<p>Поле заполнено некорректно</p>)}
                    
                    <div className="input-group mb-3">
                        <input {...register("firstName", {required: true, maxLength: 50, pattern: /^[А-Яа-я]+$/i })} 
                            type="text" className="form-control" placeholder="Имя" />
                    </div>

                    {errors?.firstName?.type === "required" && (<p>Поле Имя обязательно для заполнения</p>)}
                    {errors?.firstName?.type === "maxLength" && (<p>Имя не может содержать более 50 символов</p>)}
                    {errors?.firstName?.type === "pattern" && (<p>Поле заполнено некорректно</p>)}

                    <div className="input-group mb-3">
                        <input {...register("middleName", {maxLength: 50, pattern: /^[А-Яа-я]+$/i })} 
                            type="text" className="form-control" placeholder="Отчество" />
                    </div>

                    {errors?.middleName?.type === "maxLength" && (<p>Отчество не может содержать более 50 символов</p>)}
                    {errors?.middleName?.type === "pattern" && (<p>Поле заполнено некорректно</p>)}
                    
                    <div className="input-group mb-3">
                        <input {...register("email", {
                            maxLength: 50,
                            required: true, 
                            pattern: {value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                            } 
                        })} 
                            type="text" className="form-control" placeholder="Email" />
                    </div>

                    {errors?.email?.type === "required" && (<p>Поле Email обязательно для заполнения</p>)}
                    {errors?.email?.type === "maxLength" && (<p>Email не может содержать более 50 символов</p>)}
                    {errors?.email?.type === "pattern" && (<p>Поле заполнено некорректно</p>)}
                </div>

                <div>
                    <input className="btn btn-outline-primary" type="submit"/>
                </div>
            </form>
        </div>
    )
}