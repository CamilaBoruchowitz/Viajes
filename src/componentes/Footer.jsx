import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <ul className="flex left-0 right-0 justify-center fixed bottom-0">
        <li>
          <LinkedInIcon />
        </li>
        <li>
          <InstagramIcon />
        </li>
        <li>
          <FacebookIcon />
        </li>
        <li>
          <YouTubeIcon />
        </li>
        <li>
          <Link to="/contactar">
            <EmailIcon />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Footer;
