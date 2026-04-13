import CityPage from "./CityPage";
import LuoyangSection from "./sections/LuoyangSection";
import { IMGS } from "./imgs";

export default function LuoyangPage() {
  return (
    <CityPage>
      <LuoyangSection imgs={IMGS} />
    </CityPage>
  );
}
