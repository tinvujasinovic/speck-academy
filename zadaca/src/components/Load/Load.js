import {CenteredLoader} from "./LoadStyle";

const Load = () => {
    return (
        <CenteredLoader
          type="TailSpin"
          color="#CFA00F"
          height={100}
          width={100}
          timeout={2000}
        />
      );
}

export default Load;