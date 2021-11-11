import { Fragment } from "react";
import { Hero } from "../sections";
import { Main } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const mainProps = {
  backgroundImg: { src: "/img/background.png", alt: "background", width: 500, height: 250},
  image: { src: "/img/video.png", alt: "video.png", width: 250, height: 400},
  title: "Managed agency selection",
  description: "Stengthen your onboarding process",
  card: [
    { image: { src: "/img/document.png", alt: "document", width: 30, height: 30}, title: "Brief", desc: <Fragment>Complete <b>brief writing or simple guidance</b> on what to include, we've got you covered.</Fragment> },
    { image: { src: "/img/search.png", alt: "search", width: 30, height: 30}, title: "Search", desc: <Fragment>In-depth agency search covering; <b>criteria matching</b>, door knocking and due-dilligence vetting.</Fragment> },
    { image: { src: "/img/project.png", alt: "project", width: 30, height: 30}, title: "Pitch", desc: <Fragment>Comprehensive <b>pitch management</b>, including comms, diary management and pitch hosting.</Fragment> },
  ]
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
      
        <Hero {...heroProps} />
        <Main {...mainProps} />
        {/** Other sections */}
      </div>
    </>
  );
}
