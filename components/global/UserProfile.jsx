'use client'; // Mark this component as a client-side component

import { useContext, useState } from "react";
import Link from "next/link"; // Use Next.js Link
import userIcn from "/public/assets/images/admin-user-icn.svg"; // Ensure the path is correct
import { UserContext } from "../context/UserContext"; // Ensure the path is correct

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"; // Ensure the path is correct

const UserProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assume user is logged out initially
  const { userInfo, setUserInfo } = useContext(UserContext); // Access user context

  // Fake user data for frontend purposes (you can mock the data)
  const fakeUserData = {
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    total_credits: 100,
    used_credits: 50,
    unused_credits: 50,
  };

  // Simulate login state and set the user data
  const simulateLogin = () => {
    setUserInfo(fakeUserData);
    setIsLoggedIn(true);
  };

  // Simulate logout action (just clearing the user data)
  const handleLogout = () => {
    setUserInfo(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-full inline text-white">
      {/* {!isLoggedIn && (
        <Link href="/login" className="text-white">
          Login
        </Link>
      )} */}
      {isLoggedIn && userInfo && (
        <div className="flex justify-end items-center min-h-full gap-2">
          <span className="flex items-end">
            <span className="text-white text-s">{"Credits Remaining: "}</span>
            <span className="text-white text-s">&nbsp;{(userInfo.total_credits - userInfo.used_credits) || 0}</span>
          </span>
          <div className="w-[1px] min-h-[20px] bg-white"></div>
          <DropdownMenu className="gap-4 h-full">
            <DropdownMenuTrigger>
              <img
                src={userIcn}
                alt="user"
                className="w-[40px] h-[40px] bg-zinc-300 rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-4 bg-white">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <strong className="text-2xl text-zinc-500">
                    {userInfo.first_name + " " + userInfo.last_name}
                  </strong>
                  <span className="text-2xl text-zinc-500">{userInfo.email}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-2xl">
                <Link href="/billing">View profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div>
                  <span>Credits Remaining:&nbsp;</span>
                  <span>{userInfo.unused_credits || 0}</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-2xl">Affiliate</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>
                <button onClick={handleLogout} className="text-red-500">
                  Log out
                </button>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
      {/* Simulate Login Button for Testing */}
      {/* <button onClick={simulateLogin} className="text-white mt-4">
        Simulate Login (for testing)
      </button> */}
    </div>
  );
};

export default UserProfile;
