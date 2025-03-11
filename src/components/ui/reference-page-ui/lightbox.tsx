"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { Slide } from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";
import { Video } from "yet-another-react-lightbox/plugins";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

interface lightBoxProps {
  input: Slide[];
  active: number;
  toggler: boolean;
  // eslint-disable-next-line
  setToggler: (toggler:boolean)=>void
}

const LightBox = ({ input, active, toggler, setToggler }: lightBoxProps) => {
  return (
    <>
      <Lightbox
        key={active}
        open={toggler}
        close={() => setToggler(false)}
        slides={input}
        index={active}
        plugins={[Fullscreen, Captions, Video]}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: {
            backgroundColor: "rgb(30, 41, 59, 1)",
            padding: "20px",
          },
          captionsTitleContainer: {
            backgroundColor: "rgba(0, 0, 0, 0)",
            textAlign: "start",
          },
        }}
        render={{
          iconPrev: () => <IoIosArrowDropleftCircle className="h-8 w-8" />,
          iconNext: () => <IoIosArrowDroprightCircle className="h-8 w-8" />,
        }}
      />
    </>
  );
};

export default LightBox;
