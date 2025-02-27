interface PasswordFieldProps {
    className: string;
    OnChange: (text: string) => void;
    OnToggle: (show: boolean) => void;
    name: string;
    value: string;
    show: boolean;
}

const PasswordField = ({className, OnChange, name, value, show = false}: PasswordFieldProps) => {
    return (
        <div className={`flex ${className}`}>
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    OnChange(e.target.value);
                }}
                type={show ? 'text' : 'password'}
                name={name}
                value={value}
            />
        </div>
    );
}

export default PasswordField;