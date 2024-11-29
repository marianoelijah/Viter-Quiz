import { useField } from "formik";




export const InputTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label
          htmlFor={props.id || props.name}
          className={meta.touched && meta.error ? "custom error-show" : "custom"}
        >
          {label}
        </label>
        <textarea
          className={meta.touched && meta.error ? "error-show" : null}
          {...field}
          {...props}
          autoComplete="off"
        ></textarea>
        {meta.touched && meta.error ? (
          <span className="error-show">{meta.error}</span>
        ) : null}
      </>
    );
  };

  export const InputText = ({
    label,
    className = "",
    onChange = null,
    refVal = null,
    ...props
  }) => {
    const [field, meta] = useField(props);
  
    return (
        <>
          <label
            htmlFor={props.id || props.name}
            className={meta.touched && meta.error ? "custom error-show" : "custom"}
          >
            {label}
          </label>
          <input
            {...field}
            {...props}
            className={
              meta.touched && meta.error
                ? `error-show ${className}`
                : `${className}`
            }
            ref={refVal}
            autoComplete="off"
            onChange={(e) => {
              onChange !== null && onChange(e);
              field.onChange(e);
            }}
          />
          {meta.touched && meta.error ? (
            <span className="error-show">{meta.error}</span>
          ) : null}
        </>
      );
    };
    
    
    export const InputPhotoUpload = ({ label, ...props }) => {
      const [field, meta] = useField(props);
      return (
        <>
          <input {...field} {...props} />
          {meta.touched && meta.error ? (
            <span className="error-show">{meta.error}</span>
          ) : null}
        </>
      );
    };
    
    
    export const InputSelect = ({
    
  
        label,
        className = "",
        onChange = null,
        ...props
      }) => {
        const [field, meta] = useField(props);
      
      
        return (
          <>
            <label
              htmlFor={props.id || props.name}
              className={meta.touched && meta.error ? "custom error-show " : "custom"}
            >
              {label}
            </label>
      
      
            <select
              {...field}
              {...props}
              className={meta.touched && meta.error ? "error-show " : className}
              onChange={(e) => {
                onChange !== null && onChange(e);
                field.onChange(e);
              }}
            />
      
      
            {meta.touched && meta.error ? (
              <span className="error-show">{meta.error}</span>
            ) : null}
          </>
        );
      };
      
      
      
      
      
      