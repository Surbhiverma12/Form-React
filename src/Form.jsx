import { useState } from "react"

export default function Form() {

    let [formData, setFormData] = useState({
        fullname: "",
        username: "",
        password: ""
    })

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value}
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullname: "",
            username: "",
            password: ""
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name : </label>
            <input type="text" 
            placeholder="Your full name"
            value={formData.fullname} 
            onChange={handleInputChange} 
            id="fullname"
            name="fullname"
            />
            <br />
            <label htmlFor="username">Username : </label>
            <input type="text"
             placeholder="Your username" 
             value={formData.username} 
             onChange={handleInputChange} 
             id="username"
             name="username"
             />
             <br />
             <label htmlFor="password">Password : </label>
            <input type="password"
             placeholder="Your password" 
             value={formData.password} 
             onChange={handleInputChange} 
             id="password"
             name="password"
             />
             <br />
            <button>Submit</button>
        </form>
    )
}