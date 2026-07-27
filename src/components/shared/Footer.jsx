// import Image from "next/image";
// import Link from "next/link";
// import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
// import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

// const Footer = () => {
//   return (
//     <footer className="bg-slate-950 text-gray-300 mt-20">
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Logo */}
//           <div>
//             <div className="flex items-center gap-3">
//               <Image src="/logo.png" alt="logo" width={45} height={45} />

//               <h2 className="text-2xl font-bold text-white">SMART TUTOR</h2>
//             </div>

//             <p className="mt-5 leading-7 text-gray-400">
//               Connect with experienced tutors, improve your skills, and achieve
//               your learning goals through quality education.
//             </p>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-xl font-semibold text-white mb-5">
//               Learning Services
//             </h3>

//             <ul className="space-y-3">
//               <li>
//                 <Link href="/tutors" className="hover:text-sky-400 transition">
//                   Find Tutors
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/add-tutor"
//                   className="hover:text-sky-400 transition"
//                 >
//                   Become a Tutor
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/my-booked-sessions"
//                   className="hover:text-sky-400 transition"
//                 >
//                   Book Sessions
//                 </Link>
//               </li>

//               <li>
//                 <Link href="/" className="hover:text-sky-400 transition">
//                   Online Learning
//                 </Link>
//               </li>

//               <li>
//                 <Link href="/" className="hover:text-sky-400 transition">
//                   Student Support
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-xl font-semibold text-white mb-5">
//               Contact Us
//             </h3>

//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <FiMapPin className="text-sky-400 mt-1" />
//                 <span>Dhaka, Bangladesh</span>
//               </li>

//               <li className="flex items-center gap-3">
//                 <FiPhone className="text-sky-400" />
//                 <span>+880 1234-567890</span>
//               </li>

//               <li className="flex items-center gap-3">
//                 <FiMail className="text-sky-400" />
//                 <span>support@smarttutor.com</span>
//               </li>
//             </ul>
//           </div>

//           {/* Social */}
//           <div>
//             <h3 className="text-xl font-semibold text-white mb-5">Follow Us</h3>

//             <p className="text-gray-400 mb-5">
//               Stay connected and get the latest updates.
//             </p>

//             <div className="flex gap-4">
//               <a
//                 href="#"
//                 className="h-11 w-11 rounded-full bg-slate-800 hover:bg-sky-500 transition flex items-center justify-center"
//               >
//                 <FaFacebookF />
//               </a>

//               <a
//                 href="#"
//                 className="h-11 w-11 rounded-full bg-slate-800 hover:bg-sky-500 transition flex items-center justify-center"
//               >
//                 <FaLinkedinIn />
//               </a>

//               <a
//                 href="#"
//                 className="h-11 w-11 rounded-full bg-slate-800 hover:bg-sky-500 transition flex items-center justify-center"
//               >
//                 <FaGithub />
//               </a>

//               <a
//                 href="#"
//                 className="h-11 w-11 rounded-full bg-slate-800 hover:bg-sky-500 transition flex items-center justify-center"
//               >
//                 <FaTwitter />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-slate-800 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-gray-400 text-center md:text-left">
//             © {new Date().getFullYear()} Smart Tutor. All Rights Reserved.
//           </p>

//           <div className="flex gap-6 text-sm">
//             <Link href="/" className="hover:text-sky-400 transition">
//               Privacy Policy
//             </Link>

//             <Link href="/" className="hover:text-sky-400 transition">
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}

          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Smart Tutor" width={45} height={45} />

              <div>
                <h2 className="text-xl font-bold">SMART TUTOR</h2>

                <p className="text-sm text-muted-foreground">
                  Learn • Grow • Succeed
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Connect with experienced tutors and book learning sessions
              anytime. A smarter way to learn and teach online.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition hover:text-primary"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/tutors"
                  className="text-muted-foreground transition hover:text-primary"
                >
                  Tutors
                </Link>
              </li>

              <li>
                <Link
                  href="/add-tutor"
                  className="text-muted-foreground transition hover:text-primary"
                >
                  Add Tutor
                </Link>
              </li>

              <li>
                <Link
                  href="/my-booked-sessions"
                  className="text-muted-foreground transition hover:text-primary"
                >
                  Booked Sessions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">Contact</h3>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Dhaka, Bangladesh</p>

              <p>support@smarttutor.com</p>

              <p>+880 1700-000000</p>
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">Follow Us</h3>

            <div className="flex gap-3">
              <a
                href="#"
                className="rounded-xl border p-3 transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-xl border p-3 transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="rounded-xl border p-3 transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:support@smarttutor.com"
                className="rounded-xl border p-3 transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-12 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground md:flex-row">
            <p>
              © {new Date().getFullYear()} Smart Tutor. All rights reserved.
            </p>

            <p>Built with using Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;