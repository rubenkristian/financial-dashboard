import { useDispatch, useSelector } from "react-redux";
import FillButton from "../../components/button/FillButton";
import IconCircle from "../../components/icon/IconCircle";
import TextField from "../../components/input/TextField";
import Text from "../../components/label/Text";
import { useRef, useState } from "react";
import { RootState } from "../../stores";
import { setError, clearErrors } from "../../stores/reducers/formuser";
import { setImage } from "../../stores/reducers/image";

const ProfileTab = () => {
    const dispatch = useDispatch();
    const errors = useSelector((state: RootState) => state.form.errors);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const imageUrl = useSelector((state: RootState) => state.image.imageUrl);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                dispatch(setImage(reader.result as string));
            };

            reader.readAsDataURL(file); // Read file as a data URL
        }
    };
    
    const validateForm = () => {
        const newErrors: { email?: string; password?: string } = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email format";
        }

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
                    <div className="relative">
                        <IconCircle className="h-22 w-22 bg-amber-950">
                            <img src={imageUrl ?? ''} alt="user profile picture"/>
                        </IconCircle>
                        <IconCircle 
                            className="absolute right-0 top-15 h-7-5 w-7-5 bg-label-selected"
                            OnClick={() => {
                                if (fileInputRef) {
                                    fileInputRef.current?.click();
                                }
                            }}
                        >
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_14_1936)">
                                    <path d="M14.587 4.16321L13.2365 5.51379C13.0988 5.65149 12.8761 5.65149 12.7384 5.51379L9.48646 2.26184C9.34876 2.12415 9.34876 1.90149 9.48646 1.76379L10.837 0.413208C11.3849 -0.134644 12.2755 -0.134644 12.8263 0.413208L14.587 2.17395C15.1378 2.7218 15.1378 3.61243 14.587 4.16321ZM8.3263 2.92395L0.632942 10.6173L0.0118485 14.1769C-0.0731124 14.6573 0.345833 15.0734 0.826302 14.9913L4.38587 14.3673L12.0792 6.67395C12.2169 6.53626 12.2169 6.3136 12.0792 6.1759L8.82728 2.92395C8.68665 2.78626 8.464 2.78626 8.3263 2.92395ZM3.63587 9.95813C3.47474 9.797 3.47474 9.53918 3.63587 9.37805L8.14759 4.86633C8.30872 4.7052 8.56654 4.7052 8.72767 4.86633C8.8888 5.02747 8.8888 5.28528 8.72767 5.44641L4.21595 9.95813C4.05482 10.1193 3.797 10.1193 3.63587 9.95813ZM2.57825 12.422H3.9845V13.4855L2.09486 13.8165L1.18372 12.9054L1.51478 11.0157H2.57825V12.422Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_14_1936">
                                    <rect width="15" height="15" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </IconCircle>
                        <input 
                            ref={fileInputRef} 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </div>
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