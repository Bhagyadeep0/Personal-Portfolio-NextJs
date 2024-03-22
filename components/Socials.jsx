import Link from "next/link";
import {
  RiBehanceLine,
  RiInstagramLine,
  RiTwitterLine,
  RiGithubLine,
  RiFacebookLine,
} from "react-icons/ri";

const socialLink = [
  { id: 1, name: "Behance", url: "", icon: <RiBehanceLine /> },
  { id: 2, name: "Instagram", url: "", icon: <RiInstagramLine /> },
  { id: 3, name: "Twitter", url: "", icon: <RiTwitterLine /> },
  { id: 4, name: "Github", url: "", icon: <RiGithubLine /> },
  { id: 5, name: "Facebook", url: "", icon: <RiFacebookLine /> },
];
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg mb-7">
      {socialLink.map((link) => {
        return (

          <Link
            href={link.url}
            key={link.id}
            className="hover:text-accent transition-all duration-200 ease-in-out relative group"
          >
            {/* tooltip */}
            <div className="absolute  pointer-events-none opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white  text-primary top-10 relative flex items-center p-2 rounded-sm ">
                <div className="text-sm leading-none font-semibold capitalize">
                  {link.name}
                </div>
              </div>
              {/* tooltip triangle */}
              <div className="-rotate-90 top-7 left-[6px] border-solid border-l-8  border-l-white border-y-transparent border-y-[6px] border-r-transparent border-r-8 absolute "></div>
            </div>
            {/* social icons */}
            <div className="text-3xl">{link.icon}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
