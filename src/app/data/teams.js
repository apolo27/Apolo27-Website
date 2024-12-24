const awards = [
  {
    title: "Overall Winner #1",
    description:
      "Awarded to the top overall team. Design reviews, educational STEM engagement, safety, and a successful excursion will all factor into the Overall Winner. ",
  },
  {
    title: "Overall Winner #2",
    description:
      "Awarded to the top overall team. Design reviews, educational STEM engagement, safety, and a successful excursion will all factor into the Overall Winner. ",
  },
  {
    title: "Overall Winner #3",
    description:
      "Awarded to the top overall team. Design reviews, educational STEM engagement, safety, and a successful excursion will all factor into the Overall Winner. ",
  },
  {
    title: "STEM Engagement Award",
    description:
      "Awarded to the team that is determined to have best inspired the study of STEM-related topics in their community to include collaboration with middle school students for the Task Challenge. This team not only presented a high number of activities to a large number of people, but also delivered quality activities to a wide range of audiences.",
  },
  {
    title: "Project Review",
    description:
      "Awarded to the team that is deemed to have the best combination of written reviews and formal presentations.",
  },
  {
    title: "Phoenix",
    description:
      "Awarded to the team that demonstrates the greatest improvement between Design Review and Operational Readiness Review.",
  },
  {
    title: "Social Media",
    description:
      "Awarded to the team that has the most active and creative social media presence throughout the project year.",
  },
  {
    title: "Task Challenge",
    description:
      "Awarded to the team that best demonstrates a multi-tool design for the liquid sample retrieval tasks.",
  },
  {
    title: "Featherweight",
    description:
      "Awarded to the team that best addressed the ongoing space exploration challenge of weight management, delivering an innovative approach to safe minimization of rover weight. (Only awarded to one team overall.)",
  },
  {
    title: "Ingenuity",
    description:
      "Awarded to the team that approaches any complex project or engineering problem in unique and creative ways.",
  },
  {
    title: "Pit Crew",
    description:
      "Awarded to the team as judged by the pit crew that best demonstrates resourcefulness, motivation, good sportsmanship, and team spirit in repairing or working on their rover while the teams are in the pit area.",
  },
  {
    title: "System Safety Award",
    description:
      "Awarded to the team that best demonstrates a comprehensive approach to system safety as it relates to their vehicle, personnel, and operations. ",
  },
  {
    title: "Team Spirit Award",
    description:
      "Awarded to the team that is judged by their peers that display the “Best Team Spirit” during the on-site events.",
  },
  {
    title: "Crash and Burn",
    description:
      "Awarded to the team that embraces failure as a learning lesson for future success. (Only awarded to one team overall). ",
  },
  {
    title: "Rookie of the Year",
    description:
      "Awarded to the top overall newcomer team. (Same judging criteria as overall award. If rookie team is awarded an overall award, the 2nd place standing rookie team will receive the award, and so forth. Only awarded to one team overall) ",
  },
  {
    title: "Pay It Forward Award",
    description:
      "This Artemis Student Challenge (ASC) award is given to the team that best conducts impactful educational engagement events in their community or further. Educational engagement includes instructional, hands-on activities where participants engage in learning a STEM-related concept by actively participating in an activity. Each challenge activity lead will choose the top teams from each challenge for consideration of fnal awardees. ",
  },
  {
    title: "Innovation Award",
    description:
      "This Artemis Student Challenge (ASC) award is given to teams that best create new, innovative ideas and/or solutions within the scope of their respective challenge. Ingenuity, creativity, and inventiveness in either technology or non-technology focused ideas are awarded for their original ideas, creating effciency, effective results, and/or solving a problem. Each challenge activity lead will choose the top teams from each challenge for consideration of fnal awardees. ",
  },
  {
    title: "Artemis Educator Award",
    description:
      "This Artemis Student Challenge (ASC) award is given to educators/faculty/mentors in each challenge as nominated by student team members. Student team members will recognize their faculty/mentor(s) who inspire learners and motivate them to work hard, achieving more than the team members thought possible. The award acknowledges the time and dedication educators/ faculty/mentors take to be exceptional teachers. Educators/faculty/mentors are noted for their commitment to learning and their valuable efforts for motivating and inspiring others.",
  },
  {
    title: "Other Awards",
    description:
      "Other awards will be given based on components of the competition, such as discussions within Design Review and Operational Readiness Review reports or the in-person competition.",
  },
  {
    title: "Most Improved",
    description:
      "Awarded to the team that demonstrates the greatest improvement between the two days of the competition.",
  },
];

const teams = [
  {
    year: 2019,
    title: "THE ORIGIN",
    description: `Our journey began in 2019 with a groundbreaking achievement: becoming the first university division team from our country to compete in the NASA Rover Challenge.`,
    image: "/images/timeline/2019.webp",
    teamAwards: [],
  },
  {
    year: 2020,
    title: "PERSEVERANCE IN ADVERSITY",
    description: `Despite the challenges of the global pandemic, our resilience shone through. Lessons learned paved the way for our historic "System Safety Award" victory.`,
    image: "/images/timeline/2019.webp",
    teamAwards: [awards[11]],
  },
  {
    year: 2021,
    title: "REVAMP AND REINVENTION",
    description: `With a revamped rover, our team reached new levels of expertise and ignited a passion for STEM in our community through innovative efforts.`,
    image: "/images/timeline/2019.webp",
    teamAwards: [],
  },
  {
    year: 2022,
    title: "EXPANDING OUR IMPACT",
    description: `2022 marked a turning point with the launch of our interactive "STEM Tour," culminating in winning the prestigious "Engagement Award."`,
    image: "/images/timeline/2019.webp",
    teamAwards: [awards[3]],
  },
  {
    year: 2023,
    title: "A HISTORIC YEAR",
    description: `A year of Dominican dominance! Major improvements earned us the "Most Improved" and "Team Spirit" awards, cementing our place in history.`,
    image: "/images/timeline/2019.webp",
    teamAwards: [awards[19], awards[12]],
  },
  {
    year: 2024,
    title: "SETTING THE STANDARD",
    description: `Rising from 2023's successes, we reached new heights in 2024. Our hard work earned us the coveted "Overall Award (2nd place)" and the "Spirit Award", showcasing excellence and unity.`,
    image: "/images/timeline/2019.webp",
    teamAwards: [awards[1], awards[12]],
    badges: ["/images/badges/lunar-navigation.webp"],
  },
  {
    year: 2025,
    title: "NEW FRONTIERS",
    description: `The dawn of the Apolo Division marks a new chapter in 2025. With our sights set high, we're pushing the boundaries of innovation and teamwork.`,
    image: "/images/timeline/2019.webp",
    teamAwards: [],
    badges: [
      "/images/badges/innovation.webp",
      "/images/badges/stem-engagement.webp",
    ],
    
  },
];

export default teams;
