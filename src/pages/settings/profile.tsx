import FillButton from "../../components/button/FillButton";
import IconCircle from "../../components/icon/IconCircle";
import TextField from "../../components/input/TextField";
import Heading from "../../components/label/Heading";

const ProfileTab = () => {
    return (
        <div className="flex flex-col gap-10">
                <div className="flex flex-col md:flex-row md:pl-7-5 pt-10 gap-14">
                    <div className="flex w-full md:w-fit justify-center items-center">
                        <IconCircle className="h-22 w-22 bg-amber-950"></IconCircle>
                    </div>
                    <div className="grid md:grid-cols-2 w-full gap-x-7 gap-y-5">
                        <TextField className="w-full" placeholder="Your Name"/>
                        <TextField className="w-full" placeholder="User Name"/>
                        <TextField className="w-full" placeholder="Email"/>
                        <TextField className="w-full" placeholder="Password"/>
                        <TextField className="w-full" placeholder="Date of Birth"/>
                        <TextField className="w-full" placeholder="Present Address"/>
                        <TextField className="w-full" placeholder="Permanent Address"/>
                        <TextField className="w-full" placeholder="City"/>
                        <TextField className="w-full" placeholder="Postal Code"/>
                        <TextField className="w-full" placeholder="Country"/>
                    </div>
                </div>
                <div className="flex w-full justify-end ">
                    <FillButton className="w-full md:w-48 h-12-5 bg-label-selected text-white">   
                        <Heading as="div" className="flex h-full justify-center items-center">Save</Heading>
                    </FillButton>
                </div>
            </div>
    );
}

export default ProfileTab;