import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow(){
    return(
        <div className="social">
        <h3>Social Follow</h3>
        <a href="https://www.github.com/hacks-and-codes" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/quarjowusu" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/quarjowusu" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.facebook.com/quarjo.young" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        </div>
    );
}