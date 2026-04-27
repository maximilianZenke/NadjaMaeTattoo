import React from "react";
import "./Booking.css";

const GmailIcon = () => (
    <svg viewBox="0 0 48 48" className="booking-icon" xmlns="http://www.w3.org/2000/svg">
        <path fill="#EA4335" d="M6 10h36v28H6z" opacity="0" />
        <path fill="#4CAF50" d="M6 14v20l10-10z" />
        <path fill="#1E88E5" d="M42 14v20L32 24z" />
        <path fill="#E53935" d="M42 14H6l18 13z" />
        <path fill="#1565C0" d="M6 34h36v4H6z" />
        <path fill="#E53935" d="M6 10h36v4L24 27 6 14z" />
        <path fill="#1E88E5" d="M6 14v20h4V21z" />
        <path fill="#4CAF50" d="M42 14v20h-4V21z" />
        <path fill="#FFF" d="M6 10h36v4L24 27 6 14V10z" opacity="0" />
        <path fill="#EA4335" d="M6 10l18 17L42 10H6z" />
        <path fill="#1565C0" d="M6 34v4h36v-4H6z" />
        <path fill="#1E88E5" d="M38 10H42v24h-4z" />
        <path fill="#4CAF50" d="M6 10H10v24H6z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg viewBox="0 0 48 48" className="booking-icon" xmlns="http://www.w3.org/2000/svg">
        <path fill="#25D366" d="M24 4C13 4 4 13 4 24c0 3.6 1 6.9 2.7 9.8L4 44l10.5-2.7C17.3 43 20.6 44 24 44c11 0 20-9 20-20S35 4 24 4z" />
        <path fill="#FFF" d="M35.2 30.5c-.5 1.3-2.4 2.4-3.4 2.5-.9.1-2 .5-6.5-1.4-5.4-2.2-8.8-7.7-9.1-8-.3-.4-2.3-3-2.3-5.8 0-2.7 1.4-4.1 2-4.7.5-.5 1.2-.8 1.7-.8h1.2c.4 0 .8.2 1.1 1l1.6 4c.2.4.1.8-.1 1.1l-.9 1.1c-.2.2-.3.5-.1.8.7 1.2 1.6 2.3 2.7 3.2 1.1.9 2.3 1.6 3.6 2 .3.1.6.1.8-.2l.9-1.1c.3-.4.7-.5 1.1-.3l3.8 1.8c.5.2.8.5.8.9l-.1 1z" />
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 48 48" className="booking-icon" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="ig1" cx="19%" cy="99%" r="108%">
                <stop offset="0%" stopColor="#FFD676" />
                <stop offset="25%" stopColor="#F2A454" />
                <stop offset="50%" stopColor="#F05C3C" />
                <stop offset="75%" stopColor="#C22F86" />
                <stop offset="100%" stopColor="#6A1BB2" />
            </radialGradient>
            <radialGradient id="ig2" cx="12%" cy="0%" r="60%">
                <stop offset="0%" stopColor="#4BCCF0" />
                <stop offset="100%" stopColor="#4BCCF0" stopOpacity="0" />
            </radialGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#ig1)" />
        <rect width="48" height="48" rx="12" fill="url(#ig2)" />
        <rect x="13" y="13" width="22" height="22" rx="6" fill="none" stroke="#FFF" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="5.5" fill="none" stroke="#FFF" strokeWidth="2.5" />
        <circle cx="33" cy="15" r="1.5" fill="#FFF" />
    </svg>
);

export default function Booking() {
    return (
        <>
            <div id="kontakt" />
            <div id="booking" />
            <div className="booking-wrapper">
                <div className="booking-container">
                    <div className="booking-content">
                        <p className="booking-title">Termin buchen</p>
                        <p className="booking-sub">
                            Wenn ihr Lust auf ein Tattoo habt, oder Euch beraten lassen wollt,
                            meldet Euch gerne bei mir!
                        </p>

                        <div className="booking-list">
                            <a href="mailto:nadjatattoos@gmail.com" className="booking-row">
                                <GmailIcon />
                                <div>
                                    <span className="booking-row-label">E-Mail</span>
                                    <span className="booking-row-value">nadjatattoos@gmail.com</span>
                                </div>
                            </a>

                            <a href="https://wa.me/4901701135026" className="booking-row">
                                <WhatsAppIcon />
                                <div>
                                    <span className="booking-row-label">WhatsApp</span>
                                    <span className="booking-row-value">0170 1135026</span>
                                </div>
                            </a>

                            <a href="https://www.instagram.com/nadja_mae_tattoo/" target="_blank" rel="noreferrer" className="booking-row">
                                <InstagramIcon />
                                <div>
                                    <span className="booking-row-label">Instagram</span>
                                    <span className="booking-row-value">@nadja_mae_tattoo</span>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}