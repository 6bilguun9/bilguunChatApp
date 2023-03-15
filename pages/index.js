import Image from "next/image";
import bg from "../public/bg.jpeg";
import React, { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";

export default function Home() {
  const { username, secret, setUsername, setSecret } = useContext(Context);
  const router = useRouter();
  function onSubmit(e) {
    e.preventDefault();

    if (username === 0 || secret === 0) return;
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "d8bd755a-f4b6-4700-871d-c32df8797184" } }
      )
      .then((r) => router.push("/chats"));
  }
  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          className="brightness-50 "
          src={bg}
          layout="fill"
          alt="forest on mountain"
          placeholder="blur"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center pt-52 ">
        <form
          className="rounded-2xl h-96 w-96 bg-maindd flex justify-center flex-col items-center gap-1 "
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="flex flex-row items-center w-80 justify-center space-x-3">
            <div className=" h-px w-16 bg-main "></div>
            <h1 className="flex justify-center items-center text-main text-lg">
              Bilguun
            </h1>
            <div className=" h-px w-16 bg-main "></div>
          </div>
          <div>
            <h1 className=" text-mainl py-2">Username</h1>
            <input
              type="text"
              placeholder="Bilguun"
              className="rounded-lg h-9 w-80 px-3 placeholder-maindd bg-maind"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="py-7">
            <h1 className=" text-mainl py-2">Password</h1>
            <input
              type="password"
              placeholder="password"
              className=" bg-maind rounded-lg h-9 w-80 px-3 placeholder-maindd"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className=" rounded-xl h-9 w-28 bg-main text-orange-900 text-mainl"
          >
            join
          </button>
        </form>
      </div>
    </>
  );
}
