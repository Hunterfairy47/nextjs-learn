import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface InputFieldProps {
    name?: any;
    label?: string;
    type?: string;
    disabled?: boolean;
    placeholder?: string;
    accept?: string;
    inputProps?: {};
    multiline?: boolean;
    defaultValue?: string | number;
    hidden?: boolean;
    className?: string;
    required?: boolean;
    size?:string;
}

export function InputField(props: InputFieldProps) {
    const { control } = useFormContext();
    const { name, label, type, disabled, placeholder, inputProps, defaultValue, multiline,size, hidden, className, required } = props;

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue || null}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    label={label}
                    value={value || ''}
                    className={className}
                    onChange={(value) => onChange(value)}
                    fullWidth
                    sx={{ mb: 2, color: '#111' }}
                    multiline={multiline}
                    error={!!error}
                    helperText={error?.message}
                    type={type}
                    variant="standard"
                    disabled={disabled}
                    placeholder={placeholder}
                    InputProps={inputProps}
                    required={required}
                />
            )}
        />
    );
}