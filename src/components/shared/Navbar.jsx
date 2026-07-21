import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
        <div className="navbar max-w-7xl mx-auto px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <HiOutlineBars3 className="text-2xl" />
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/tutors"}>Tutors</Link>
                </li>
                <li>
                  <Link href={"/add-tutor"}>Add Tutor</Link>
                </li>
                <li>
                  <Link href={"/my-tutors"}>My Tutors</Link>
                </li>
                <li>
                  <Link href={"/my-booked-sessions"}>My Booked Sessions</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <Image src={"/logo.png"} width={40} height={40} alt="logo" />
              <a className="btn btn-ghost text-xl">SMART TUTOR</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/tutors"}>Tutors</Link>
              </li>
              <li>
                <Link href={"/add-tutor"}>Add Tutor</Link>
              </li>
              <li>
                <Link href={"/my-tutors"}>My Tutors</Link>
              </li>
              <li>
                <Link href={"/my-booked-sessions"}>My Booked Sessions</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <ul className="flex gap-5 items-center">
              <li>
                <Link href={"/profile"}>Profile</Link>
              </li>
              {/* {user ? ( */}
              <>
                <li>
                  <Avatar>
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      // src={user?.image}
                      // alt={user?.name}
                    />
                    <Avatar.Fallback>user.name[0]</Avatar.Fallback>
                  </Avatar>
                </li>
                <li>
                  <Button
                    // onClick={handleLogout}
                    variant="danger"
                    className="rounded-none"
                  >
                    Logout
                  </Button>
                </li>
              </>
              {/* ) : ( */}
              <>
                <li>
                  <Link href={"/login"}>Login</Link>
                </li>
                <li>
                  <Link href={"/signup"}>Sign Up</Link>
                </li>
              </>
              {/* )} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;