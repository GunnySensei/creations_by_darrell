import React, { useState } from "react";
import BtnSlider from "../utils/BtnSlider";
const ProjectList = ({ project }) => {
  const [projects] = useState([
    {
      name: "rockingchair1",
      description: "This is a project",
    },
    {
      name: "rockingchair2",
      description: "This is a project",
    },
    {
      name: "dark_rocking_chair",
      description: "This is a project",
    },
    {
      name: "dark_rocking_chair_2",
      description: "This is a project",
    },
    {
      name: "dining_chair",
      description: "This is a project",
    },
    {
      name: "dining_chair_2",
      description: "This is a project",
    },
    {
      name: "floating_tables",
      description: "This is a project",
    },
    {
      name: "glass_entry_table",
      description: "This is a project",
    },
    {
      name: "jewelery_box",
      description: "This is a project",
    },
    {
      name: "jewelery_box_2",
      description: "This is a project",
    },
    {
      name: "jewelery_box_standing",
      description: "This is a project",
    },
    {
      name: "jewelery_box_standing_2",
      description: "This is a project",
    },
    {
      name: "jewelery_cabinet",
      description: "This is a project",
    },
    {
      name: "jewelery_cabinet_2",
      description: "This is a project",
    },
    {
      name: "maple_runner_table",
      description: "This is a project",
    },
    {
      name: "maple_runner_table_2",
      description: "This is a project",
    },
    {
      name: "medicine_cabinet",
      description: "This is a project",
    },
    {
      name: "medicine_cabinet_2",
      description: "This is a project",
    },
    {
      name: "oak_side_table",
      description: "This is a project",
    },
    {
      name: "oak_side_table_2",
      description: "This is a project",
    },
    {
      name: "oak_side_table_3",
      description: "This is a project",
    },
    {
      name: "round_oak_leif_table",
      description: "This is a project",
    },
    {
      name: "round_oak_leif_table_2",
      description: "This is a project",
    },
    {
      name: "wall_cabinet",
      description: "This is a project",
    },
    {
      name: "wall_cabinet_2",
      description: "This is a project",
    },
  ]);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const toggleModal = (image, i) => {
  //   // setCurrentProject({ ...image, index: i });
  //   setIsModalOpen(!isModalOpen);
  // };

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== projects.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === projects.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(projects.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="projects-container-sizer">
      <div className="container-slider">
        {projects.map((image, i) => {
          return (
            <div
              key={i}
              className={slideIndex === i + 1 ? "slide active-anim" : "slide"}
            >
              <img
                src={require(`../assets/images/2022-04-03/${image.name}.jpg`)}
                alt={image.description}
                className="project-image mx-1 col-6"
                // onClick={() => toggleModal(image, i)}
                key={image.name}
              />
            </div>
          );
        })}
        <BtnSlider moveSlide={prevSlide} direction="prev" />

        <BtnSlider moveSlide={nextSlide} direction="next" />

        <div className="container-dots">
          {Array.from({ length: projects.length }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            >
              {" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
