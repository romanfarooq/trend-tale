export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex h-screen scroll-mt-20 items-center justify-center bg-[url('/images/background.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 z-10 bg-black opacity-70"></div>
      <div className="relative z-20 max-w-2xl px-4 text-center">
        <h1 className="mb-5 bg-linear-to-r from-[#ff00cc] via-[#7130c3] to-[#410093] bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
          Welcome to TrendTale
        </h1>
        <p className="mb-3 text-sm leading-tight text-white sm:text-lg sm:leading-tight">
          Discover trending topics and let AI transform them into captivating
          stories and videos, seamlessly uploaded to YouTube with ease.
        </p>
        <p className="text-sm leading-tight text-white sm:text-lg sm:leading-tight">
          Welcome to TrendTale, where creativity meets innovation.
        </p>
      </div>
    </section>
  );
}
