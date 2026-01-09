import React from 'react'
const ValidPassword =()=> <h1> Valid Password</h1>
const InvalidPassword=()=> <h1> InValid Password</h1>
const Password = (props) => {
    if(props.isValid){
        return <div>
            <ValidPassword/>
        </div>
    }
    else{
        <InvalidPassword/>
    }
}

export default Password