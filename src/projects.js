import capstoneMockup from './assets/google-cloud/capstone-mockup.png';
import ithacaSoapMockup from './assets/ithaca-soap/ithaca-soap-mockup.png';
import iNameMockup from './assets/iname/iName.png';
import routes from './assets/routes-to-roots/routes.png';
import ecocart from './assets/ecocart/ecoCart.png';
import rShiny from './assets/r-shiny/rShiny.png';

import dialogflow from './assets/tools/Dialogflow CX.png';
import gemini from './assets/tools/Google_Gemini_logo.svg.png';
import openai from './assets/tools/OpenAI-black-monoblossom.png';
import slack from './assets/tools/Slack.svg';
import vertex from './assets/tools/Vertex AI.png';
import colab from './assets/tools/colab.svg';
import figmaTool from './assets/tools/figma.png';
import gcloud from './assets/tools/google-cloud-1.svg';
import notion from './assets/tools/notion-logo-no-background.png';
import pythonLogo from './assets/tools/python-logo-only.png';
import miroLogo from './assets/tools/Miro-Icon.png';
import rLogo from './assets/tools/RStudio.png';
import docsLogo from './assets/tools/google-docs.png';
import photoshopLogo from './assets/tools/Adobe Photoshop.png';
import vueLogo from './assets/tools/Vue.js.png';
import vuetifyLogo from './assets/tools/Veutify.png';
import githubLogo from './assets/tools/GitHub.png';
import copilotLogo from './assets/tools/copilot-color.png';
import canvaLogo from './assets/tools/Canva.png';

export const projects = [
  {
    id: 1,
    title: "Cornell x Google Cloud Capstone Project",
    description: "Designed a linear onboarding flow that reimagines how cloud platforms can guide non-technical users.",
    image: capstoneMockup,
    imageType: "laptop",
    caseStudyUrl: "/google-cloud-case-study",
    toolLogos: [figmaTool, slack, notion, gcloud, colab, gemini, pythonLogo, dialogflow, vertex],
    tags: ['UX Research', 'Product Design', 'UX Strategy', 'Google Cloud']
  },
  {
    id: 2,
    title: "Ithaca Soap Redesign",
    description: "Designed and developed a sustainable-first mobile app using Vue.js for a small business called Ithaca Soap.",
    image: ithacaSoapMockup,
    imageType: "mobile",
    caseStudyUrl: "/ithaca-soap-case-study",
    toolLogos: [vueLogo, vuetifyLogo, githubLogo, copilotLogo, figmaTool, canvaLogo, openai],
    tags: ['Mobile App Design', 'AI Workflows', 'Development', 'UX Research', 'Vue.js']
  },
  {
    id: 3,
    title: "Routes to Roots App",
    description: "Developed a kiosk-based system that helps students reconnect with cultural hobbies promoting belonging in campus life.",
    image: routes,
    imageType: "mobile",
    caseStudyUrl: "/routes-to-roots-case-study",
    toolLogos: [figmaTool, miroLogo, canvaLogo, rLogo, openai, docsLogo, photoshopLogo],
    tags: ['UX Research', 'Interaction Design', 'Cultural Probes', 'Auto Ethnography'],
    award: "Awarded best project for social impact and uniqueness amongst 75+ others in class"
  },
  {
    id: 4,
    title: "iName App",
    description: "Built a mobile app and wearable environment that helps people pronounce and remember names correctly, fostering identity and inclusion.",
    image: iNameMockup,
    imageType: "mobile",
    caseStudyUrl: "/iname-case-study",
    tags: ['Mobile App Design', 'Wearable Technology', 'UX Research', 'Inclusivity Design']
  },
  {
    id: 5,
    title: "EcoCart App",
    description: "Designed a mobile app that makes sustainable grocery shopping simple and actionable by turning confusing eco-labels into clear choices.",
    image: ecocart,
    imageType: "laptop",
    caseStudyUrl: "/ecocart-case-study",
    tags: ['Product Design', 'Sustainability', 'UX Research', 'Mobile App Design']
  },
  {
    id: 6,
    title: "Immunization Data Analysis Dashboard",
    description: "Developed an interactive dashboard that transforms messy vaccination data into clear insights for educators and policymakers.",
    image: rShiny,
    imageType: "mobile",
    caseStudyUrl: "/rshiny-case-study",
    tags: ['Data Visualization', 'Interactive Design', 'R Shiny', 'Data Analysis']
  }
];
