import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/assets/images";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black">
      <div className="flex flex-row max-md:flex-col justify-between gap-4 px-8 py-16 max-sm:py-8">
        <div>
          <Image src={Logo} alt="logo" className="w-[210px] h-[180px]" />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-merriweather text-red text-xl mb-2">
              Our Services
            </h3>
            <table className="text-sm text-white">
              <tbody>
                <tr>
                  <td colSpan="2" className="font-bold">
                    Shiva Caterers,
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="font-bold">
                    we provide exceptional culinary
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="font-bold">
                    experiences around the clock
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="font-bold">
                    and warmly welcome special
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="font-bold">
                    requests to tailor each event
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="font-bold">
                    to your unique needs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-merriweather text-red text-xl mb-2">
              We are Social
            </h3>
            <div className="flex flex-row gap-2">
              <Link href="https://www.facebook.com/shivacaterer/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-8 h-8"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  />
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  />
                </svg>
              </Link>
              <Link href="https://wa.me/qr/GPQX2A2QFJAML1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-8 h-8"
                >
                  <path
                    fill="#25D366"
                    d="M16.001 2.977c-7.192 0-13.02 5.827-13.02 13.02 0 2.303 0.625 4.497 1.812 6.426l-1.196 4.358 4.479-1.174c1.85 1.145 3.975 1.753 6.187 1.753 7.193 0 13.02-5.828 13.02-13.021s-5.827-13.02-13.02-13.02zm7.448 18.593c-0.307 0.863-1.52 1.579-2.084 1.682-0.559 0.101-1.278 0.145-2.068-0.129-0.479-0.157-1.096-0.358-1.88-0.69-3.329-1.457-5.504-4.69-5.674-4.911-0.166-0.223-1.353-1.807-1.353-3.446 0-1.639 0.853-2.451 1.158-2.774 0.304-0.319 0.669-0.398 0.893-0.398s0.447 0.002 0.643 0.012c0.208 0.01 0.48-0.078 0.75 0.573 0.297 0.711 1.009 2.46 1.097 2.641 0.088 0.18 0.145 0.388 0.03 0.613-0.112 0.223-0.168 0.38-0.334 0.585s-0.363 0.429-0.547 0.642c-0.178 0.209-0.362 0.437-0.156 0.811 0.206 0.373 0.92 1.523 1.975 2.471 1.356 1.201 2.502 1.578 2.878 1.757 0.37 0.176 0.585 0.148 0.798-0.089 0.207-0.232 0.924-1.073 1.168-1.438 0.242-0.364 0.483-0.307 0.813-0.184 0.328 0.124 2.074 0.978 2.43 1.154 0.36 0.176 0.604 0.269 0.69 0.42 0.083 0.146 0.083 0.839-0.224 1.703z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-md:mt-4">
          <div className="flex flex-col gap-2 max-w-sm">
            <h3 className="font-merriweather text-red text-xl mb-2">
              Contact Us
            </h3>
            <div className="text-sm text-white font-bold font-montserrat flex flex-col gap-2">
              <span className="break-words">
                No: 3 Suggatta Road, Hunsamaranahalli, yehlanka Bengaluru Urban,Karnataka.
                PIN CODE : 562157
              </span>
              <span className="text-blue-600  font-bold">
                <a href="mailto:Shivacaterers06@gmail.com">
                  Shivacaterers06@gmail.com
                </a>
              </span>
              <span>Need our Service? Call Today!</span>
              <span className="text-blue-600 font-bold font-merriweather text-lg">
                <a href="tel:+917996661169">+91 7996661169</a>
              </span>
              <span className="text-blue-600  font-bold font-merriweather text-lg">
                <a href="tel:+919110859728">+91 9110859728</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red text-black font-bold w-full px-8 py-6 max-sm:py-5">
        <span>Copyright © 2024 Shiva Caterers. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
