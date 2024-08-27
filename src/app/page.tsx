import Header from "./Header/header";
import Hero from "./Main/Hero/hero";
export default function Home() {
  return (
    <section className="flex flex-col justify-center p-2 gap-1">
    <Header></Header>
    <Hero></Hero>
    </section>
  );
}
