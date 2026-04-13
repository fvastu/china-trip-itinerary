import CityPage from "./CityPage";
import BeijingSection from "./sections/BeijingSection";
import { IMGS } from "./imgs";

export default function PecinoPage() {
  return (
    <CityPage>
      <BeijingSection imgs={IMGS} />
    </CityPage>
  );
}
