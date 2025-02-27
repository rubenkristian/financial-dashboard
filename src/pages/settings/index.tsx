import Heading from "../../components/label/Heading";
import { Outlet, useNavigate } from "react-router";

const SettingIndexPage = () => {
    const navigate = useNavigate();
    
    return (
        <div className="bg-white rounded-chip px-5 py-11 md:p-7-5">
            <div className="flex w-full h-7-5 gap-10 md:gap-17">
                <div
                    onClick={() => {
                        navigate('/setting');
                    }}
                >
                    <Heading as="span">Edit Profile</Heading>
                </div>
                <div
                    onClick={() => {
                        navigate('/setting/preference');
                    }}
                >
                    <Heading as="span">Preferences</Heading>
                </div>
                <div
                    onClick={() => {
                        navigate('/setting/security');
                    }}
                >
                    <Heading as="span">Security</Heading>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default SettingIndexPage;