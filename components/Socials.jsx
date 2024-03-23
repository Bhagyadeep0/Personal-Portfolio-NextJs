import Link from "next/link";
import {
  RiBehanceLine,
  RiInstagramLine,
  RiTwitterLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

const socialLink = [
  { id: 1, name: "Behance", url: "https://www.behance.net/bhagyadeep_ghosh", icon: <RiBehanceLine /> },
  { id: 2, name: "Instagram", url: "https://www.instagram.com/r.a.i.d.e.n.77/", icon: <RiInstagramLine /> },
  { id: 3, name: "Twitter", url: "https://twitter.com/bhagyadeepghosh", icon: <RiTwitterLine /> },
  { id: 4, name: "Github", url: "https://github.com/Bhagyadeep0", icon: <RiGithubLine /> },
  { id: 5, name: "LinkedIn", url: "https://linkedin.com/in/bhagyadeep-ghosh-03705924b/", icon: <RiLinkedinLine /> },
];
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg mb-7">
      {socialLink.map((link) => {
        return (

          <Link
            href={link.url}
            target="_blank"
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
