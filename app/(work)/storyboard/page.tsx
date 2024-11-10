import CallCenter from "./callCenter/callCenter";
import EmotionalLogical from "./emotionalLogical/emotionalLogical";
import EmotionalLogicalConcept from "./emotionalLogical/emotionalLogicalConcept";
import School from "./school/school";
import SchoolConcept from "./school/schoolConcept";
import IntrovertClub from "./introvertClub/introvertClub";
import IntrovertClubConcept from "./introvertClub/introvertClubConcept";
import FightingScene from "./fightingScene/fightingScene";
import ChaseTheDragon from "./chaseTheDragon/chaseTheDragon";
import Train from "./train/train";
import SouthPark from "./southpark/Southpark";
import Office from "./office/Office";
import VolleyBall from "./volleyball/Volleyball";

const Storyboard = () => {
  return (
    <div className="min-h-screen bg-black lg:pt-20">
      {/* Two Column Sections */}
      <div className="space-y-4 md:space-y-8 px-8 md:px-16">
        {/* Call Center Section - Only left column */}
        <div className="flex flex-col items-center lg:flex-row justify-center max-w-7xl mx-auto gap-8 lg:py-16 lg:px-4">
          <div className="w-[70%] py-4 md:py-8 mt-28 lg:w-1/2 lg:py-0 mt:0">
            <CallCenter />
          </div>
          <div className="hidden lg:block lg:w-1/2 ">
            <div className="relative h-full">{/* Intentionally empty */}</div>
          </div>
        </div>

        {/* Emotional Logical Section */}
        <div className="flex flex-col items-center lg:flex-row justify-center max-w-7xl mx-auto gap-8 lg:py-16 lg:px-4">
          <div className="w-[70%] py-4 md:py-8  lg:w-1/2 lg:py-0">
            <EmotionalLogical />
          </div>
          <div className="w-[70%] py-4 md:py-8  lg:w-1/2 lg:py-0">
            <EmotionalLogicalConcept />
          </div>
        </div>

        {/* School Section */}
        <div className="flex flex-col items-center lg:flex-row justify-center max-w-7xl mx-auto gap-8 lg:py-16 lg:px-4">
          <div className="w-[70%] py-4 md:py-8  lg:w-1/2 lg:py-0">
            <School />
          </div>
          <div className="w-[70%] py-4 md:py-8  lg:w-1/2 lg:py-0">
            <SchoolConcept />
          </div>
        </div>

        {/* Introvert Club Section */}
        <div className="flex flex-col items-center lg:flex-row justify-center max-w-7xl mx-auto gap-8 lg:py-16 lg:px-4">
          <div className="w-[70%] py-4 md:py-8  lg:w-1/2 lg:py-0">
            <IntrovertClub />
          </div>
          <div className="w-[70%] py-4 md:py-8  lg:w-1/2 lg:py-0">
            <IntrovertClubConcept />
          </div>
        </div>

        {/* Three Column Action Scenes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-8 lg:py-16 lg:px-4 place-items-center">
          <div className="w-[50%]  lg:w-full lg:py-0">
            <FightingScene />
          </div>
          <div className="w-[50%]  lg:w-full lg:py-0">
            <ChaseTheDragon />
          </div>
          <div className="w-[50%]   lg:w-full lg:py-0">
            <Train />
          </div>
        </div>

        {/* Three Column Misc Scenes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-8 py-8 lg:py-16 lg:px-4 place-items-center">
          <div className="w-[50%]   lg:w-full lg:py-0">
            <SouthPark />
          </div>
          <div className="w-[50%]   lg:w-full lg:py-0">
            <Office />
          </div>
          <div className="w-[50%]  lg:w-full lg:py-0">
            <VolleyBall />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storyboard;
