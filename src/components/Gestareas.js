import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { variables } from '../variables';

const Gestareas = () => {

    const[cliente, setCliente]=useState();
    const[tTarea, settTarea]=useState();
    const[inicia, setInicia]=useState();
    const[fin, setFin]=useState();
    const[precio, setPrecio]=useState();
    const[comentario, setComentario]=useState();
    const[cliendataG, setCliendataG]=useState();
    
    const navigate = useNavigate;

    const handleSubmit=(e)=>{
        e.preventDefault();
        const cliendataP={cliente, tTarea,inicia,fin,precio,comentario}
        axios.post(variables.API_URL+"tarea/",{
            tarea: cliendataP
        }).then((res)=>{
            toast.success('Success');
        }).catch((err)=>{
            toast.error(err.message);
        })
    }

    useEffect(() => {
      axios.get(variables.API_URL+"cliente/").then((res)=>{
        setCliendataG(res.data);
      }).catch((err)=>{
        toast.error(err.message);
      })
     
    }, [])
    


  return (
    <div>
        <div>
        <div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handleSubmit}>

                <div className="card" style={{"textAlign":"left"}}>
                    <div className="card-title">
                        <h2>Gestion Tareas</h2>
                    </div>
                    <div className="card-body">

                        <div className="row">

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>ID</label>
                                    <input value={id} disabled="disabled" className="form-control"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>setName(e.target.value)} className="form-control"></input>
                                {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>setLastName(e.target.value)} className="form-control"></input>
                                {lastName.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={email} onChange={e=>setEmail(e.target.value)} className="form-control"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input value={phone} onChange={e=>setPhone(e.target.value)} className="form-control"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-check">
                                <input checked={gender} onChange={e=>setGender(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                    <label  className="form-check-label">Male</label>
                                    <label  className="form-check-label">Famale</label>
                                    
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                   <button className="btn btn-success" type="submit">Save</button>
                                   <Link to="/" className="btn btn-danger">Back</Link>
                                </div>
                            </div>

                                </div>  

                            </div>

                        </div>

                    </form>

                </div>
            </div>  
        </div>
    </div>
  )
}

export default Gestareas