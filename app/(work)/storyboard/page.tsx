"use client";
import React, { Suspense, lazy } from "react";

// Lazy load all components
const CallCenter = lazy(() => import("./callCenter/callCenter"));
const EmotionalLogical = lazy(
  () => import("./emotionalLogical/emotionalLogical")
);
const EmotionalLogicalConcept = lazy(
  () => import("./emotionalLogical/emotionalLogicalConcept")
);
const School = lazy(() => import("./school/school"));
const SchoolConcept = lazy(() => import("./school/schoolConcept"));
const IntrovertClub = lazy(() => import("./introvertClub/introvertClub"));
const IntrovertClubConcept = lazy(
  () => import("./introvertClub/introvertClubConcept")
);
const FightingScene = lazy(() => import("./fightingScene/fightingScene"));
const ChaseTheDragon = lazy(() => import("./chaseTheDragon/chaseTheDragon"));
const Train = lazy(() => import("./train/train"));
const SouthPark = lazy(() => import("./southpark/Southpark"));
const Office = lazy(() => import("./office/Office"));
const VolleyBall = lazy(() => import("./volleyball/Volleyball"));

// Loading component with skeleton animation
const LoadingComponent = () => (
  <div className="animate-pulse">
    <div className="h-[150px] md:h-[400px] bg-gray-700 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-700 w-2/3 rounded"></div>
  </div>
);

const Storyboard = () => {
  return (
    <div className="min-h-screen bg-black lg:pt-20">
      {/* Two Column Sections */}
      <div className="space-y-4 md:space-y-8 px-8 md:px-16">
        {/* Call Center Section - Only left column */}
        <div className="flex flex-col items-center lg:flex-row justify-center max-w-7xl mx-auto gap-8 lg:py-16 lg:px-4">
          <div className="w-[70%] py-4 md:py-8 mt-28 lg:w-1/2 lg:py-0 lg:mt-0">
            <Suspense fallback={<LoadingComponent />}>
              <CallCenter />
            </Suspense>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative h-full"></div>
          </div>
        </div>

        {/* Emotional Logical Section */}
        <div className="flex flex-col items-center lg:flex-row justify-center max-w-7xl mx-auto gap-8 lg:py-16 lg:px-4">
          <div className="w-[70%] py-4 md:py-8 lg:w-1/2 lg:py-0">
            <Suspense fallback={<LoadingComponent />}>
              <EmotionalLogical />
            </Suspense>
          </div>
          <div className="w-[70%] py-4 md:py-8 lg:w-1/2 lg:py-0">
            <Suspense fallback={<LoadingComponent />}>
              <EmotionalLogicalConcept />
            </Suspense>
          </div>
        </div>

        {/* School Section */}
        <div className="flex flex-col items-center lg:flex-row justify-center max-w-7xl mx-auto gap-8 lg:py-16 lg:px-4">
          <div className="w-[70%] py-4 md:py-8 lg:w-1/2 lg:py-0">
            <Suspense fallback={<LoadingComponent />}>
              <School />
            </Suspense>
          </div>
          <div className="w-[70%] py-4 md:py-8 lg:w-1/2 lg:py-0">
            <Suspense fallback={<LoadingComponent />}>
              <SchoolConcept />
            </Suspense>
          </div>
        </div>

        {/* Introvert Club Section */}
        <div className="flex flex-col items-center lg:flex-row justify-center max-w-7xl mx-auto gap-8 lg:py-16 lg:px-4">
          <div className="w-[70%] py-4 md:py-8 lg:w-1/2 lg:py-0">
            <Suspense fallback={<LoadingComponent />}>
              <IntrovertClub />
            </Suspense>
          </div>
          <div className="w-[70%] py-4 md:py-8 lg:w-1/2 lg:py-0">
            <Suspense fallback={<LoadingComponent />}>
              <IntrovertClubConcept />
            </Suspense>
          </div>
        </div>

        {/* Three Column Action Scenes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-8 lg:py-16 lg:px-4 place-items-center">
          <div className="w-[50%] lg:w-full lg:py-0">
            <Suspense fallback={<LoadingComponent />}>
              <FightingScene />
            </Suspense>
          </div>
          <div className="w-[50%] lg:w-full lg:py-0">
            <Suspense fallback={<LoadingComponent />}>
              <ChaseTheDragon />
            </Suspense>
          </div>
          <div className="w-[50%] lg:w-full lg:py-0">
            <Suspense fallback={<LoadingComponent />}>
              <Train />
            </Suspense>
          </div>
        </div>

        {/* Three Column Misc Scenes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-8 py-8 lg:py-16 lg:px-4 place-items-center">
          <div className="w-[50%] lg:w-full lg:py-0">
            <Suspense fallback={<LoadingComponent />}>
              <SouthPark />
            </Suspense>
          </div>
          <div className="w-[50%] lg:w-full lg:py-0">
            <Suspense fallback={<LoadingComponent />}>
              <Office />
            </Suspense>
          </div>
          <div className="w-[50%] lg:w-full lg:py-0">
            <Suspense fallback={<LoadingComponent />}>
              <VolleyBall />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storyboard;
