import { COMPANY_NAME } from "../../lib/constants";

export default function Intro() {
  return (
    <section className="bg-[url('/assets/backgroundImage.png')] flex-col md:flex-row flex h-[calc(100vh-116px)] items-center justify-center md:justify-between bg-red-100">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {COMPANY_NAME}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        enen-inc
      </h4>
      <div></div>
    </section>
  );
}
