import React from 'react'

const Supabase = () => {
  return (
    <>
    <h1>SUPABASE</h1>
    <div style={{minHeight:"100vh",display:"flex", alignItems:"center",justifyContent:"center" , background:"black"}} className='main'>
        <form action="">
            <input style={{padding:"4px", width:"12rem"}} type="text" name='title' placeholder='enter the Title' /> <br />
            <textarea rows={10} cols={40} name="desc" id="">
                Write the description
            </textarea> <br />  
            <button style={{padding:"0.5rem"}}>Submit Data</button>
        </form>
    </div>
    </>
  )
}

export default Supabase