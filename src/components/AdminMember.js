import React, { useState } from 'react'
import AddMember from './AddMember';
import AddPts from './AddPts';
import AdminNav from './AdminNav'
import EditRegNo from './EditRegNo';
import GetMDetails from './GetMDetails';

function AdminMember() {
    const [statefunction, setStatefunction] = useState("");
    return (
        <div className='bg-sky-900 h-screen flex justify-start gap-10'>
            <AdminNav />
            <div className='border-2 border-blue-200 rounded-xl m-10 p-10 flex flex-col gap-8  w-3/4 h-[90%]'>
                <div className='flex gap-8'>
                    <button className="w-fit h-fit  p-2 bg-slate-500 rounded-xl  border-2 border-blue-200 active:bg-slate-400 transition-all ease-in-out hover:scale-105" onClick={() => setStatefunction("add")}>Add Member</button>
                    <button className="w-fit h-fit p-2 bg-slate-500 rounded-xl  border-2 border-blue-200 active:bg-slate-400 transition-all ease-in-out hover:scale-105" onClick={() => setStatefunction("edit")}>Edit Register No</button>
                    <button className="w-fit h-fit p-2 bg-slate-500 rounded-xl  border-2 border-blue-200 active:bg-slate-400 transition-all ease-in-out hover:scale-105">Terminate Member</button>
                    <button className="w-fit h-fit p-2 bg-slate-500 rounded-xl  border-2 border-blue-200 active:bg-slate-400 transition-all ease-in-out hover:scale-105" onClick={() => setStatefunction("addpoints")}>Add Points</button>
                    <button className="w-fit h-fit p-2 bg-slate-500 rounded-xl  border-2 border-blue-200 active:bg-slate-400 transition-all ease-in-out hover:scale-105">Deduct Points</button>
                    <button className="w-fit h-fit p-2 bg-slate-500 rounded-xl  border-2 border-blue-200 active:bg-slate-400 transition-all ease-in-out hover:scale-105" onClick={() => setStatefunction("getdetails")}>Get Details</button>
                </div>

                <div className='renderfunctions m-auto transition-all ease-in-out'>
                    {statefunction === "add" ? <AddMember /> : statefunction === "edit" ? <EditRegNo /> : statefunction === "getdetails" ? <GetMDetails /> : statefunction === "addpoints" ? <AddPts /> : ""}

                </div>
            </div>
        </div>
    )
}

export default AdminMember