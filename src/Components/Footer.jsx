import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-10'>
      <div className='container mx-auto text-center'>
        <h2 className='text-2xl md:text-3xl font-bold mb-4 text-green-400'>
          Yash Prajapati
        </h2>
        <p className='text-lg md:text-xl mb-6'>
          MERN-Stack Developer with a passion for building web applications and a knack for solving problems.
        </p>
        
        <div className='flex justify-center space-x-6 mb-6'>
          <a href='https://github.com/Yash-oza-24' target='_blank' rel='noopener noreferrer' className='text-white hover:text-green-400'>
            <FaGithub size={30} />
          </a>
          <a href='https://twitter.com/ytmp2407' target='_blank' rel='noopener noreferrer' className='text-white hover:text-green-400'>
            <FaTwitter size={30} />
          </a>
        </div>

        <div className='mb-6'>
          <p className='mb-2'>Contact: yashoza2408@gmail.com</p>
          <p>Location: Surat,Gujarat,India</p>
        </div>

        <p>&copy; {new Date().getFullYear()} Yash Prajapati. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
