// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className=" absolute bottom-0 right-0 hidden xl:flex xl:max-w-none pointer-events-none">
      <Image
        src= {'/avatar.png'}
        width={737}
        height={678}
        alt="avatar.png"
        className=" z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
