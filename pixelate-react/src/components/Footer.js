import React from 'react';
import brickmmoLogo from '../brickmmo.png';

export default function Footer() {
    return (
       <footer id="footer">
            <h2 id="powerBy">
               Powered by <a href="https://brickmmo.com/" target="_blank"><img src={brickmmoLogo}alt="Brick MMO" class="brickmmo-logo" /></a>
            </h2>
            <nav>
                <ul id="socmedia" className="socmedia">
                    <li className="socmedia-item"><a href="https://www.tiktok.com/@brickmmo" target="_blank">Tiktok</a></li>
                    <li className="socmedia-item"><a href="https://twitter.com/brickmmo" target="_blank">Twitter</a></li>
                    <li className="socmedia-item"><a href="https://www.instagram.com/brickmmo/" target="_blank">Insta</a></li>
                </ul>
            </nav>
       </footer>
    );   
   }