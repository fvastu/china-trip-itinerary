import CityPage from "./CityPage";
import ShanghaiSection from "./sections/ShanghaiSection";
import { IMGS } from "./imgs";

export default function ShanghaiPage() {
  return (
    <CityPage>
      <ShanghaiSection imgs={IMGS} />
    </CityPage>
  );
}
