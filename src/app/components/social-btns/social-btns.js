import { GithubIcon } from "../icons/github-icon";
import { InstagramIcon } from "../icons/instagram-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"

export default function SocialButtons() {
    return (
        <div className="social">
            <a href="https://www.instagram.com/thalisson_sousa_/"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/thalisson-sousa-8398b0152/"><LinkedinIcon/></a>
            <a href="https://github.com/thalisson-sousa"><GithubIcon/></a>
            <a href=""><TwitterIcon/></a>
        </div>
    )
}