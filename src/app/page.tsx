import Experience from "./components/experience/experience";
import Header from "./components/header/header";
import { EmailIcon } from "./components/icons/email-icon";
import Info from "./components/information/information";
import SocialButtons from "./components/social-btns/social-btns";

import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <div className="social"></div>
        <SocialButtons/>
        <a className="btn-primary" href="mailto:thalissonsousa33@gmail.com">
          Contact me
          <EmailIcon />
        </a>
      </div>
    </main>
  );
}
