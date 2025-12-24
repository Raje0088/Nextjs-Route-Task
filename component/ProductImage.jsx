import Image from "next/image";

const Photo = ({ src, alt }) => {
  return <Image src={src} width={300} height={300} />;
};

export default Photo;
