import React, {useState} from "react";
import FormField from "../Form/FormField";
import Form from "../Form/Form";
import FormAction from "../Form/FormAction";
import FormChecked from "../Form/FormChecked";
import AlternativeOpcion from "../Form/AlternativeOpcion";
import {StyleSheet } from "react-native";
// import "./Login.css";

function Login() {
    const [formData , setFormData] = useState({
        username:"",
        password:""
    });;
    
    const myOnChange = function (e) {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]:value, [name+"Error"]:console.error});
        console.log(formData);
    }
    return(
        <Form titulo="Ingresar" style={styles.centrar} >
            <FormField 
            caption="Usuario"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={myOnChange}>
                
            </FormField>
            <FormField 
            caption="Contraseña"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={myOnChange}>
                
            </FormField>
            <FormChecked
                type="checkbox" 
                id="cbox1" 
                value="first_checkbox"
                description="Recordar los datos"
            >
            </FormChecked> 
            <FormAction 
            caption="Iniciar"
            onClick={
                (modal)=>{
                    modal.preventDefault();
                    modal.stopPropagation();
                    const { username, password } = formData;
                    
                    if (password){
                        (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/).test(password) ? alert(`!Bievenido ${username}!`) :alert("Contraseña Inválida");
                        
                    }

                }
            }
            >
            </FormAction>
            <AlternativeOpcion
                opcion ="Inicia Seción"
            >
            </AlternativeOpcion>
  
        </Form>
    )
  
}
const styles = StyleSheet.create({
    centrar: {
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "#red"

    }
});
export default Login;