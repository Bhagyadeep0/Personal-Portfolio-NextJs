// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  { name: 'testimonials', path: '/testimonials',icon: <HiChatBubbleBottomCenterText />,},
  { name: 'contact', path: '/contact', icon: <HiEnvelope />,},
];

// next link
import Link from 'next/link';
//next router
import { useRouter } from 'next/router';


const Nav = () => {

  const router  = useRouter();
  const pathname = router.pathname;
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed bottom-0 mt-auto xl:right-[2%] z-50 w-full h-20 xl:w-16 xl:max-w-md xl:h-screen '>
      
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-20  xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
        {navData.map((data)=>{
          return <Link className={`${data.path === pathname && 'text-accent bg-white/75 rounded-sm p-1 text-center'} relative flex items-center group hover:text-accent transition-all duration-300`} href={data.path} key={data}>

            {/* tooltip */}
            <div className='absolute pr-14 right-0 pointer-events-none opacity-0 xl:group-hover:opacity-100 transition-all duration-300'>
              <div className='bg-white text-primary relative flex items-center p-2 rounded-sm'>
                <div className='text-xl leading-none font-semibold capitalize'>{data.name}</div>
              </div>
              {/* tooltip triangle */}
              <div className='border-solid border-l-8  border-l-white border-y-transparent border-y-[6px] border-r-transparent border-r-8 absolute right-[42px] top-3 '></div>
            </div>

            {/* nav icons */}
          <div>{data.icon}</div>
          
          
          </Link>
        })}
      </div>
    </nav>
  );
};

export default Nav;
