"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Fourdiv from "./components/Fourdiv";
import Roaddiv from "./components/Roaddiv";

const Car = () => {
  const [scroll, setscroll] = useState(0);
  const [innerwidth, setinnerwidth] = useState(0);
  const [localposi, setlocalposi] = useState(null);

  const scrollgreayh = useRef();

  const car = useRef();
  const wel = useRef([]);

  function opacity(index) {
    const range = (innerwidth - 160) / 4;
    const startAt = range * (index - 1);
    const currentOpacity = (scroll - startAt) / range;

    return Math.max(0, Math.min(currentOpacity, 1));
  }

  useEffect(() => {
    if (!scrollgreayh.current || !car.current) return;

    setinnerwidth(window.innerWidth);

    const caroverword = () => {
      const Opacityel = wel.current.map((el) => {
        localStorage.setItem(
          "positoncar",
          car.current.getBoundingClientRect().left,
        );
        return gsap.quickTo(el, "opacity");
      });

      Opacityel.forEach((i, ind) => {
        const el = wel.current[ind];
        if (
          el.getBoundingClientRect().left >
          car.current.getBoundingClientRect().left
        ) {
          i(0); //if car is ahead
        } else {
          i(1); //if car is at back
        }
      });
    };

    const scrollcontrol = () => setscroll(scrollgreayh.current.scrollTop);
    const zoom = () => setinnerwidth(window.innerWidth); // re updating innerwidth for cross check

    const handleWheel = (e) => {
      scrollgreayh.current.scrollTop += e.deltaY; //manual scroll
      if (Math.min(scroll, innerwidth - 160) === innerwidth - 160) {
        scrollgreayh.current.scrollTop += e.deltaY - 2;
      }
    };

    scrollgreayh.current.addEventListener("scroll", caroverword);
    scrollgreayh.current.addEventListener("scroll", scrollcontrol);
    window.addEventListener("resize", zoom);
    window.addEventListener("wheel", handleWheel);

    return () => {
      scrollgreayh.current.removeEventListener("scroll", caroverword);
      scrollgreayh.current.removeEventListener("scroll", scrollcontrol);
      window.removeEventListener("resize", zoom);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const localposi = localStorage.getItem("positoncar");
    if (localposi !== null) {
      setlocalposi(Number(localposi));
      scrollgreayh.current.scrollTop = localposi;
    }
  }, []);

  return (
    <>
      <Fourdiv opacity={opacity} />

      {/* eslint-disable-next-line react-hooks/exhaustive-deps */}

      <Roaddiv
        scrollgreayh={scrollgreayh}
        innerwidth={innerwidth}
        car={car}
        scroll={scroll}
        wel={wel.current}
        localposi={localposi}
      />
    </>
  );
};

export default Car;
