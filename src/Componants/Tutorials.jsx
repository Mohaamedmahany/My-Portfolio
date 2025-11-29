import { Button } from "react-bootstrap";
import { Element } from "react-scroll";
import img1 from "../assests/image1221.png";
import img2 from "../assests/toodoo.png";
import img3 from "../assests/hero_banner.png";
import img4 from "../assests/ikea.webp";

const Tutorials = () => {
  const Projects = [
    {
      name: "E-Commerce",
      img: img3,
      p: "React.js ",
      h2: "Bootstrap",
      Link: "https://mohaamedmahany.github.io/E-Commerce/#/",
    },
    {
      name: "Turbo-Drive",
      img: img1,
      p: "Next.js ",
      h2: "Tailwind Css",
      Link: "https://turbo-drive-nine.vercel.app/",
    },
    {
      name: "Todo List",
      img: img2,
      p: "React.js",
      h2: "Bootstrap",
      Link: "https://mohaamedmahany.github.io/Todo-list/",
    },
    {
      name: "Ikea Store",
      img: img4,
      p: "Bootstrp",
      h2: "Css",
      Link: "https://mohaamedmahany.github.io/Ikea-Store/",
    },
  ];

  return (
    <Element name="Tutorials">
      <div className="bg-dark text-white">
        <div className=" text-center pt-5">
          <h2>MY PROJECT</h2>
          <p className=" pt-4 pb-3">
            Here are some of my recent projects. Each project showcases
            different skills and technologies I've worked with.
          </p>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {Projects.map((Project, index) => (
              <div key={index} className="col-12 col-sm-6 text-center">
                <div
                  style={{ height: "400px" }}
                  className="bg-black text-black rounded p-3 d-flex flex-column align-items-center justify-content-center mb-5"
                >
                  <img
                    src={Project.img}
                    alt={Project.name}
                    width="100%"
                    height="60%"
                  />
                  <h3 className="mt-2 text-white"> {Project.name} </h3>
                  <div className=" d-flex">
                    <p
                      style={{
                        width: "90px",
                        height: "30px",
                        backgroundColor: "rgba(0, 255, 229, 1)",
                      }}
                      className=" text-black  rounded-5 fs-5 me-4 fw-bold"
                    >
                      {" "}
                      {Project.p}{" "}
                    </p>
                    <p
                      style={{
                        width: "125px",
                        height: "30px",
                        backgroundColor: "rgba(0, 255, 229, 1)",
                      }}
                      className=" text-black  rounded-5 fs-5 fw-bold"
                    >
                      {" "}
                      {Project.h2}{" "}
                    </p>
                  </div>
                  <Button
                    className=" fs-5 fw-bold"
                    style={{
                      backgroundColor: "rgba(0, 255, 229, 1)",
                      color: "black",
                    }}
                    href={Project.Link}
                    target="blank"
                  >
                    <i className="bi bi-arrow-up-right-square"></i> Visite
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Tutorials;
