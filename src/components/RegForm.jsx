import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../common/Input";
import { Data } from "../Data/data";
const Form = ({ setdata }) => {
  const [data, setData] = useState(Data);
  const [d,sd] = useState()
  const onchange = (value, item) => {
    // type 1 : direct ga item vastundhi value vastundhi so item lo value ni direct ga change cheseyachu
    item.value = value;
    //type 2 : main data lo unna name ki item lo unna name ni match ayina index vastadhi so aa index lo unna value ni update chestham
    // let index = data.findIndex((x)=>x.name == item.name )
    // let updateddata = data
    // updateddata[index].value = value
    // setData(updateddata)
  };
  const navigate = useNavigate();
  const getValue = (name) => {
    let index = data.findIndex((x) => x.name == name);
    return data[index].value;
  };
  const submithandler = (e) => {
    e.preventDefault();
    const emailreg = /^\S+@\S+\.\S+$/;
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9@$&*]{8,}$/;
    let isValid = true;
    let password = "";
    const updateddata = [...data];
    // updateddata.forEach((item) => {
    //   switch (item.name) {
    //     case "Firstname":
    //     case "Lastname":
    //       if (item.value == "") {
    //         item.error = true;
    //         item.errorMessage = `${item.name} should not be empty`;
    //         isValid = false;
    //       }
    //       else {
    //         item.error = false;
    //         item.errorMessage = ``;
    //       }
    //       break;
    //       case "Email":
    //       if (item.value === "" || !emailreg.test(item.value)) {
    //         item.error = true;
    //         item.errorMessage = `Please provide a valid ${item.name} `;
    //         isValid = false;
    //       } else {
    //         item.error = false;
    //         item.errorMessage = ``;
    //       }
    //       break;
    //     case "Password":
    //       if (item.value === "" || !passwordReg.test(item.value)) {
    //         item.error = true;
    //         item.errorMessage = `${item.name} Should be atleast of 8 characthers`;
    //         isValid = false;
    //       } else {
    //         item.error = false;
    //         password = item.value;
    //         item.errorMessage = ``;
    //       }
    //       break;
    //     case "ConfirmPassword":
    //       if (item.value !== password) {
    //         item.error = true;
    //         item.errorMessage = "Password Doesn't match";
    //         isValid = false;
    //       } else {
    //         item.error = false;
    //         item.errorMessage = "";
    //       }

    //     default:
    //       if (item.value === "") {
    //         item.error = true;
    //         item.errorMessage = `${item.name} is not valid`;
    //         isValid = false;
    //       } else {
    //         item.error = false;
    //         item.errorMessage = ``;
    //       }
    //   }
    // });
    // setData(updateddata)
    // if(isValid){
    //     let obj = {
    //         firstname:getValue("Firstname"),
    //         lastname : getValue("Lastname"),
    //         email : getValue("Email"),
    //     }
    //     setdata((prev) => [...prev,obj]),
    //     navigate("/Userstable")

    //   }
    let obj = {
      firstname: getValue("Firstname"),
      lastname: getValue("Lastname"),
      email: getValue("Email"),
    };
    setdata((prev) => [...prev, obj]), 
    navigate("/Userstable");
  };
  return (
    <>
      <div className="signup_container w-100 d-flex justify-content-center ">
        <div className="signup_form mt-5 w-50 ">
          <h3>REGISTRATION FORM</h3>
          <div className="form mt-3 mycontainer ">
            <form className="border p-3" onSubmit={submithandler}>
              {Data.map((item, index) => {
                return <Input key={index} item={item} onchange={onchange} />;
              })}
              <div className="mt-3">
                <button className="btn btn-danger w-50" type="submit">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
