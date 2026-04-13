import CityPage from "./CityPage";
import ZhangjiajieSection from "./sections/ZhangjiajieSection";
import { IMGS } from "./imgs";

export default function ZhangjiajePage() {
  return (
    <CityPage>
      <ZhangjiajieSection imgs={IMGS} />
    </CityPage>
  );
}
