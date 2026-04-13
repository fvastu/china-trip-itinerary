import CityPage from "./CityPage";
import XianSection from "./sections/XianSection";
import { IMGS } from "./imgs";

export default function XianPage() {
  return (
    <CityPage>
      <XianSection imgs={IMGS} />
    </CityPage>
  );
}
