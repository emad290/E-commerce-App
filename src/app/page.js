import Image from "next/image";
import HeroSlider from "./_Component/HeroSlider";
import GetAllProduct from "./_Component/GetAllProduct";
import Featuchre from "./_Component/Featuchre";
import Slider from "./_Component/Slider";
import ShowCatg from "./_Component/ShowCatg";

export default function Home() {
  return (
<>
    <main>
    <HeroSlider/>
      <GetAllProduct/>
      <Featuchre/>
      <Slider/>
      <ShowCatg/>
    </main>


</>
  );
}
