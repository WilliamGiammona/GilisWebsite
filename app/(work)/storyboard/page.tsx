"use client";
import React, { Suspense, lazy } from "react";

// Lazy imports remain the same...
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

const LoadingComponent = () => (
  <div className="animate-pulse">
    <div className="h-32 sm:h-48 md:h-64 lg:h-[400px] bg-gray-700 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-700 w-2/3 rounded"></div>
  </div>
);

const Storyboard = () => {
  return (
    <div className="min-h-screen bg-black pt-28 sm:pt-32 md:pt-32 lg:pt-32 pb-8 sm:pb-12 md:pb-16">
      <div className="space-y-8 px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Call Center Section */}
        <div className="flex flex-col items-center lg:flex-row justify-center max-w-7xl mx-auto gap-4 lg:gap-8">
          <div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2">
            <Suspense fallback={<LoadingComponent />}>
              <CallCenter />
            </Suspense>
          </div>
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative h-full"></div>
          </div>
        </div>

        {/* Two Column Sections */}
        {[
          [EmotionalLogical, EmotionalLogicalConcept],
          [School, SchoolConcept],
          [IntrovertClub, IntrovertClubConcept],
        ].map(([LeftComponent, RightComponent], index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:flex-row justify-center max-w-7xl mx-auto gap-4 lg:gap-8"
          >
            <div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2">
              <Suspense fallback={<LoadingComponent />}>
                <LeftComponent />
              </Suspense>
            </div>
            <div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2">
              <Suspense fallback={<LoadingComponent />}>
                <RightComponent />
              </Suspense>
            </div>
          </div>
        ))}

        {/* Three Column Sections */}
        {[
          [FightingScene, ChaseTheDragon, Train],
          [SouthPark, Office, VolleyBall],
        ].map((components, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-4 lg:gap-8 place-items-center"
          >
            {components.map((Component, compIndex) => (
              <div
                key={compIndex}
                className="w-4/5 sm:w-11/12 md:w-5/6 lg:w-full"
              >
                <Suspense fallback={<LoadingComponent />}>
                  <Component />
                </Suspense>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Storyboard;
