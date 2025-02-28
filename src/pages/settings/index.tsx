import Text from "../../components/label/Text";
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
                    <Text as="span">Edit Profile</Text>
                </div>
                <div
                    onClick={() => {
                        navigate('/setting/preference');
                    }}
                >
                    <Text as="span">Preferences</Text>
                </div>
                <div
                    onClick={() => {
                        navigate('/setting/security');
                    }}
                >
                    <Text as="span">Security</Text>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default SettingIndexPage;