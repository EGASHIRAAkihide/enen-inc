import React, { useEffect, useState } from "react";

import anime from 'animejs/lib/anime.min.js';

export default function Intro() {
  const [columns, setColumns] = useState(0)
  const [rows, setRows] = useState(0)
  const [total, setTotal] = useState(50)

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`
  }

  const handleStagger = (index) => {
    anime({
      targets: ".grid-item",
      backgroundColor: randomColor(),
      delay: anime.stagger(50, { grid: [columns, rows], from: index.target.id })
    })
  }

  const getGridSize = () => {
    setColumns(Math.floor(document.body.clientWidth / 50))
    setRows(Math.floor(document.body.clientHeight / 50))
    setTotal(rows * columns)
    anime({
      targets: ".grid-item",
      backgroundColor: "#fff",
      duration: 0,
      easing: "linear"
    });
  }

  useEffect(() => {
    getGridSize();
    window.addEventListener("resize", getGridSize);
  }, [window])

  return (
    <section id="grid" className="w-full h-full grid">
      {[...Array(total)].map((x, i) => (
        <div
          key={i}
          className="grid-item w-10 h-10"
          id={x}
          onClick={(i) => handleStagger(i)}
        />
      ))}
    </section>
  )
}

// export default function Intro() {
//   return (
//     <section className="bg-[url('/assets/backgroundImage.png')] flex-col md:flex-row flex h-[calc(100vh-116px)] items-center justify-center md:justify-between bg-red-100">
//       <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
//         {COMPANY_NAME}
//       </h1>
//       <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
//         enen-inc
//       </h4>
//       <div></div>
//     </section>
//   );
// }
