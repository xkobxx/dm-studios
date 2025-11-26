import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const Social = ({ containerStyles, iconStyles }) => {
  const socials = [
    {
      icon: <FaGithub />,
      path: process.env.NEXT_PUBLIC_SOCIAL_GITHUB || "",
      name: "GitHub"
    },
    {
      icon: <FaLinkedinIn />,
      path: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "",
      name: "LinkedIn"
    },
    {
      icon: <FaYoutube />,
      path: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "",
      name: "YouTube"
    },
    {
      icon: <FaTwitter />,
      path: process.env.NEXT_PUBLIC_SOCIAL_TWITTER || "",
      name: "Twitter"
    },
  ];

  // Filter out social links that don't have a URL configured
  const activeSocials = socials.filter(item => item.path && item.path.trim() !== "");

  return (
    <div className={containerStyles}>
      {activeSocials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
