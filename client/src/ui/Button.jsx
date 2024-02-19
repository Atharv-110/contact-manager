const Button = (props) => {
    // eslint-disable-next-line react/prop-types
    const { variant, text } = props;
    switch (variant) {
        case "normal":
            return <button className="btn btn-accent">{text}</button>;
        case "danger":
            return <button className="btn btn-error">{text}</button>;
    
        default:
            break;
    }
  
};

export default Button;
