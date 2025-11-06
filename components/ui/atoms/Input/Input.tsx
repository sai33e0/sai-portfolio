import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
  id?: string;
  name?: string;
  className?: string;
  autoComplete?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  required = false,
  error,
  label,
  id,
  name,
  className = '',
  autoComplete,
}) => {
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;

  const baseClasses = 'w-full px-4 py-3 border rounded-lg transition-colors duration-200 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50';

  const stateClasses = error
    ? 'border-red-500 focus:border-red-500'
    : 'border-secondary/20 focus:border-accent';

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed bg-muted' : '';

  const classes = `
    ${baseClasses}
    ${stateClasses}
    ${disabledClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-primary mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        required={required}
        name={name}
        autoComplete={autoComplete}
        className={classes}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
      />
      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-2 text-sm text-red-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;