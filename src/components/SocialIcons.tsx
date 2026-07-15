import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes, TbDownload } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const SocialIcons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    if (!social) return;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        if (link) {
          link.style.setProperty("--siLeft", `${currentX}px`);
          link.style.setProperty("--siTop", `${currentY}px`);
        }

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <>
      <div className="icons-section">
        <div className="social-icons" data-cursor="icons" id="social">
          <span>
            <a href={config.contact.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </span>
          <span>
            <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
        <a
          className="resume-button"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
          data-cursor="disable"
        >
          <HoverLinks text="RESUME" />
          <span>
            <TbNotes />
          </span>
        </a>
      </div>

      {isModalOpen && (
        <div className="resume-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <h3>{config.developer.fullName} - Resume</h3>
              <div className="resume-modal-actions">
                <a
                  href="/resume/vinod-akula-resume.pdf"
                  download="vinod-akula-resume.pdf"
                  className="resume-action-btn download-btn"
                  title="Download Resume"
                  data-cursor="disable"
                >
                  <TbDownload />
                </a>
                <button
                  className="resume-action-btn close-btn"
                  onClick={() => setIsModalOpen(false)}
                  title="Close Window"
                  data-cursor="disable"
                >
                  <MdClose />
                </button>
              </div>
            </div>
            <div className="resume-modal-body">
              <iframe
                src="/resume/vinod-akula-resume.pdf#toolbar=0"
                title="Vinod Kumar Akula - Resume"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialIcons;
