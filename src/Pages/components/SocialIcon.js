import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../CSS/SocialIcons.css' // add gradient border animation here

const icons = [
  {
    name: 'Facebook',
    icon: <FaFacebookF />,
    color: '#1877f2',
    link: 'https://www.facebook.com/mosiur1580',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter />,
    color: '#1da1f2',
    link: 'https://x.com/Rmosiur324Md',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn />,
    color: '#0077b5',
    link: 'https://www.linkedin.com/in/moshiur-rahman12/',
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    color: '#24292e',
    link: 'https://github.com/moshiur25524',
  },
]

const SocialIcons = () => {
  return (
    <div
      className=" ms-2 position-fixed top-50 start-0 translate-middle-y"
      style={{ zIndex: 9999 }}
    >
      <div className=" d-flex flex-column gap-2 p-2">
        {icons.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            className="d-flex align-items-center text-white text-decoration-none"
            target="_blank"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50px',
              background: item.color,
              overflow: 'hidden',
              position: 'relative',
              paddingLeft: '15px',
            }}
            whileHover={{
              width: 180,
              borderRadius: 30,
              transition: { type: 'spring', stiffness: 200, damping: 18 },
            }}
          >
            {/* Icon */}
            <motion.span
              style={{
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '20px',
                zIndex: 2,
              }}
              whileHover={{ scale: 1.2 }}
            >
              {item.icon}
            </motion.span>

            {/* Text */}
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileHover="visible"
              transition={{ duration: 0.3 }}
              style={{
                marginLeft: '10px',
                fontSize: '16px',
                whiteSpace: 'nowrap',
                position: 'absolute',
                left: '50px',
              }}
            >
              {item.name}
            </motion.span>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default SocialIcons
