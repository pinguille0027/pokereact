interface IProps {
  children?: JSX.Element | JSX.Element[];
}

const Layeout: React.FC<IProps> = ({children}) => {
  return (
    <div>
      <h1>uwu</h1>
    <div>{children}</div>
    </div>
    
  );
};

export default Layeout;