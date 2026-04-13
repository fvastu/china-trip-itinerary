import CityPage from "./CityPage";
import GuilinSection from "./sections/GuilinSection";
import { IMGS } from "./imgs";

export default function GuilinPage() {
  return (
    <CityPage>
      <GuilinSection imgs={IMGS} />
    </CityPage>
  );
}
