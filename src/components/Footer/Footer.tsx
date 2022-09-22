import React from "react";
import "./Footer.scss";

export function Footer() {
    return (
        <div className="footer">
            <div className="footer__text">
                <div className="footer-logo">
                    <img src="img/logo.svg" alt="Logo" className="logo-img"/>
                    <div className="footer-author text">Built by <span style={{color: "#0070A0", fontSize: "13px"}}>Nikolai Bain</span>.
                        Powered by <span style={{color: "#0070A0", fontSize: "13px"}}>Webflow</span>.
                    </div>
                </div>
                <div className="footer-list links">Info
                    <ul className="footer-links text">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Support</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-list links">Admin
                    <ul className="footer-links text">
                        <li>Style Guide</li>
                        <li>Licenses</li>
                        <li>Instructions</li>
                        <li>Changelog</li>
                        <li>Password</li>
                        <li>404</li>
                    </ul>
                </div>
                <div className="footer-newsletter">
                    <div className="newsletter-title links">
                        Newsletter
                    </div>
                    <div className="newsletter-text typography-3">
                        Sign up for the latest <br/> news, company insights,<br/> and Whirl updates.
                    </div>
                    <div className="newsletter-email">
                        <form>
                            <input type="email" name="email" placeholder="Your email"
                                   className="email-field"/>
                            <button type="submit" className="email-button">
                                &gt;
                            </button>
                        </form>

                    </div>
                </div>
            </div>
            <div className="footer__rights">
                <div className="footer-text typography-4">
                    © 2022 Whirl. All Rights Reserved. Illustrations by <span
                    style={{color: "#0070A0"}}>Streamline</span>.
                </div>
                <div className="footer-social">
                    <img src="img/twitter.svg" alt="Twitter" className="social-img"/>
                    <img src="img/in.svg" alt="LinkIn" className="social-img"/>
                    <img src="img/facebook.svg" alt="Facebook" className="social-img"/>
                </div>
            </div>
        </div>
    );
}