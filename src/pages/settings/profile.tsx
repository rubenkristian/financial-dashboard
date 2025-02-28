import { useDispatch, useSelector } from "react-redux";
import FillButton from "../../components/button/FillButton";
import IconCircle from "../../components/icon/IconCircle";
import TextField from "../../components/input/TextField";
import Text from "../../components/label/Text";
import { useState } from "react";
import { RootState } from "../../stores";
import { setError, clearErrors } from "../../stores/reducers/formuser"; // Import Redux actions


const ProfileTab = () => {
    const dispatch = useDispatch();
    const errors = useSelector((state: RootState) => state.form.errors);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const validateForm = () => {
        const newErrors: { email?: string; password?: string } = {};

        // Email Validation
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email format";
        }

        // Password Validation
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (Object.keys(newErrors).length > 0) {
            dispatch(setError(newErrors));
            return false;
        }

        dispatch(clearErrors());
        return true;
    };

    const handleSave = () => {
        if (validateForm()) {
            console.log("Form submitted successfully!");
            // Proceed with form submission
        }
    };
    const handleChange = (field: "email" | "password", value: string) => {
        if (field === "email") {
            setEmail(value);
            if (errors.email) {
                dispatch(setError({ ...errors, email: undefined }));
            }
        } else if (field === "password") {
            setPassword(value);
            if (errors.password) {
                dispatch(setError({ ...errors, password: undefined }));
            }
        }
    };
    
    return (
        <div className="flex flex-col gap-10">
                <div className="flex flex-col content:flex-row content:pl-7-5 pt-10 gap-14">
                    <div className="flex w-full content:w-fit justify-center content:items-start items-center">
                        <IconCircle className="h-22 w-22 bg-amber-950">
                            <img src="/public/user.png"/>
                        </IconCircle>
                    </div>
                    <div className="grid content:grid-cols-2 w-full gap-x-7 gap-y-5">
                        <TextField
                            className="w-full" placeholder="Your Name"
                        />
                        <TextField
                            className="w-full" 
                            placeholder="User Name"
                        />
                        <TextField 
                            type="email" 
                            className="w-full" 
                            placeholder="Email"
                            OnChange={(text) => handleChange('email', text)}
                            value={email}
                            error={errors.email}
                        />
                        <TextField 
                            type="password" 
                            className="w-full" 
                            placeholder="Password"
                            OnChange={(text) => handleChange('password', text)}
                            value={password}
                            error={errors.password}
                        />
                        <TextField 
                            type="date" 
                            className="w-full" 
                            placeholder="Date of Birth"
                        />
                        <TextField 
                            className="w-full" 
                            placeholder="Present Address"
                        />
                        <TextField 
                            className="w-full" 
                            placeholder="Permanent Address"
                        />
                        <TextField 
                            className="w-full" 
                            placeholder="City"
                        />
                        <TextField 
                            className="w-full" 
                            placeholder="Postal Code"
                        />
                        <TextField 
                            className="w-full" 
                            placeholder="Country"
                        />
                    </div>
                </div>
                <div className="flex w-full justify-end ">
                    <FillButton OnClick={() => {
                        handleSave();
                    }} className="w-full content:w-48 h-12-5 bg-label-selected text-white">   
                        <Text as="div" className="flex h-full justify-center items-center">Save</Text>
                    </FillButton>
                </div>
            </div>
    );
}

export default ProfileTab;