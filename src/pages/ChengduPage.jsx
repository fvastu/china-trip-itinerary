import CityPage from "./CityPage";
import ChengduSection from "./sections/ChengduSection";
import { IMGS } from "./imgs";

export default function ChengduPage() {
  return (
    <CityPage>
      <ChengduSection imgs={IMGS} />
    </CityPage>
  );
}
