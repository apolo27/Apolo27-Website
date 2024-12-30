const awards = [
  {
    title: "timeline.awards.overallWinner1.title",
    description: "timeline.awards.overallWinner1.description",
  },
  {
    title: "timeline.awards.overallWinner2.title",
    description: "timeline.awards.overallWinner2.description",
  },
  {
    title: "timeline.awards.overallWinner3.title",
    description: "timeline.awards.overallWinner3.description",
  },
  {
    title: "timeline.awards.stemEngagement.title",
    description: "timeline.awards.stemEngagement.description",
  },
  {
    title: "timeline.awards.projectReview.title",
    description: "timeline.awards.projectReview.description",
  },
  {
    title: "timeline.awards.phoenix.title",
    description: "timeline.awards.phoenix.description",
  },
  {
    title: "timeline.awards.socialMedia.title",
    description: "timeline.awards.socialMedia.description",
  },
  {
    title: "timeline.awards.taskChallenge.title",
    description: "timeline.awards.taskChallenge.description",
  },
  {
    title: "timeline.awards.featherweight.title",
    description: "timeline.awards.featherweight.description",
  },
  {
    title: "timeline.awards.ingenuity.title",
    description: "timeline.awards.ingenuity.description",
  },
  {
    title: "timeline.awards.pitCrew.title",
    description: "timeline.awards.pitCrew.description",
  },
  {
    title: "timeline.awards.systemSafety.title",
    description: "timeline.awards.systemSafety.description",
  },
  {
    title: "timeline.awards.teamSpirit.title",
    description: "timeline.awards.teamSpirit.description",
  },
  {
    title: "timeline.awards.crashAndBurn.title",
    description: "timeline.awards.crashAndBurn.description",
  },
  {
    title: "timeline.awards.rookieOfTheYear.title",
    description: "timeline.awards.rookieOfTheYear.description",
  },
  {
    title: "timeline.awards.payItForward.title",
    description: "timeline.awards.payItForward.description",
  },
  {
    title: "timeline.awards.innovation.title",
    description: "timeline.awards.innovation.description",
  },
  {
    title: "timeline.awards.artemisEducator.title",
    description: "timeline.awards.artemisEducator.description",
  },
  {
    title: "timeline.awards.otherAwards.title",
    description: "timeline.awards.otherAwards.description",
  },
  {
    title: "timeline.awards.mostImproved.title",
    description: "timeline.awards.mostImproved.description",
  },
];

const teamsByYear = [
  {
    year: 2019,
    teams: [
      {
        division: "timeline.teams.2019.division",
        title: "timeline.teams.2019.title",
        description: "timeline.teams.2019.description",
        image: "/images/timeline/2019.webp",
        teamAwards: [],
      },
    ],
  },
  {
    year: 2020,
    teams: [
      {
        division: "timeline.teams.2020.division",
        title: "timeline.teams.2020.title",
        description: "timeline.teams.2020.description",
        image: "/images/timeline/2020.webp",
        teamAwards: ["timeline.awards.systemSafety.title"], // System Safety Award
      },
    ],
  },
  {
    year: 2021,
    teams: [
      {
        division: "timeline.teams.2021.division",
        title: "timeline.teams.2021.title",
        description: "timeline.teams.2021.description",
        image: "/images/timeline/2021.webp",
        teamAwards: [],
      },
    ],
  },
  {
    year: 2022,
    teams: [
      {
        division: "timeline.teams.2022.division",
        title: "timeline.teams.2022.title",
        description: "timeline.teams.2022.description",
        image: "/images/timeline/2022.webp",
        teamAwards: ["timeline.awards.stemEngagement.title"], // STEM Engagement Award
      },
    ],
  },
  {
    year: 2023,
    teams: [
      {
        division: "timeline.teams.2023.division",
        title: "timeline.teams.2023.title",
        description: "timeline.teams.2023.description",
        image: "/images/timeline/2023.webp",
        teamAwards: [
          "timeline.awards.mostImproved.title",
          "timeline.awards.teamSpirit.title",
        ], // Most Improved & Team Spirit
      },
    ],
  },
  {
    year: 2024,
    teams: [
      {
        division: "timeline.teams.2024.division",
        title: "timeline.teams.2024.title",
        description: "timeline.teams.2024.description",
        image: "/images/timeline/2024.webp",
        teamAwards: [
          "timeline.awards.overallWinner2.title",
          "timeline.awards.teamSpirit.title",
        ], // Overall Winner #2 & Team Spirit
        badges: ["/images/badges/lunar-navigation.webp"],
      },
    ],
  },
  {
    year: 2025,
    teams: [
      {
        division: "timeline.teams.2025.division",
        title: "timeline.teams.2025.title",
        description: "timeline.teams.2025.description",
        image: "/images/timeline/2024.webp",
        teamAwards: [],
        badges: [
          "/images/badges/innovation.webp",
          "/images/badges/stem-engagement.webp",
        ],
      },
      {
        division: "timeline.teams.2025.rcDivision",
        title: "timeline.teams.2025.rcTitle",
        description: "timeline.teams.2025.rcDescription",
        image: "/images/timeline/2024.webp",
        teamAwards: [],
      },
    ],
  },
];

export default teamsByYear;