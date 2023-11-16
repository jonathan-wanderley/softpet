import { HTMLAttributes } from "react";
import "./styles.scss";

interface DotsLoaderProps extends HTMLAttributes<HTMLDivElement> {}

const DotsLoader = ({ ...rest }: DotsLoaderProps) => {
  return (
      <div className="bouncingLoader" {...rest}>
        <div></div>
        <div></div>
        <div></div>
      </div>
  );
};

export default DotsLoader;
