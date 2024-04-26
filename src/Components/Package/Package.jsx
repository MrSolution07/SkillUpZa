// the card slides for the memberships 
import { useEffect, useState } from "react";
import PackageCard from "../Cards/PackageCard";

function Package() {
  const [carusole, setCarusole] = useState({
    next: 3,
    current: 2,
    prev: 1,
  });

  useEffect(() => {
    const currentSlide = carusole.current === 4 ? 1 : carusole.current + 1;
    const nextSlide = carusole.next === 4 ? 1 : carusole.next + 1;
    const prevSlide = carusole.prev === 4 ? 1 : carusole.prev + 1;
    setTimeout(() => {
      setCarusole({
        next: nextSlide,
        current: currentSlide,
        prev: prevSlide,
      });
    }, 5000);
  }, [carusole]);

  return (
    <section
      className="package-section"
      style={{ backgroundImage: "url(assets/images/home/package-bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title">
              <span>Online Recuitment</span> Offers 3 Types of Membership Packages for companies
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div id="card-slider" className="pack-slid">
              <PackageCard
                packageInfo={{
                  img: "assets/images/home/p1.jpg",
                  statusImg: "assets/images/home/gold.png",
                  price: "750",
                  offerPrice: "450",
                  memberShipStatus: "Gold Membership",
                  lessons: "12",
                  classes: "3",
                  link: "/single-course",
                  description:
                    "This premium membership offers everything in Silver, plus additional features designed for high-volume recruitment teams and specialized talent acquisition needs.",
                }}
                id={1}
                status={carusole}
              />
              <PackageCard
                packageInfo={{
                  img: "assets/images/home/p2.jpg",
                  statusImg: "assets/images/home/silver.png",
                  price: "750",
                  offerPrice: "450",
                  memberShipStatus: "Silver Membership",
                  lessons: "12",
                  classes: "3",
                  link: "/single-course",
                  description:
                    "This membership builds on the Bronze tier, offering powerful features to gain deeper insights, personalize your outreach, and build a competitive talent pipeline.",
                }}
                id={2}
                status={carusole}
              />
              <PackageCard
                packageInfo={{
                  img: "assets/images/home/p3.jpg",
                  statusImg: "assets/images/home/bronze.png",
                  price: "750",
                  offerPrice: "450",
                  memberShipStatus: "Bronze Membership",
                  lessons: "12",
                  classes: "3",
                  link: "/single-course",
                  description:
                    "Designed for small-scale recruiters, this membership offers essential features to streamline your talent search and optimize your hiring process.",
                }}
                id={3}
                status={carusole}
              />
              <PackageCard
                packageInfo={{
                  img: "assets/images/home/p2.jpg",
                  statusImg: "assets/images/home/silver.png",
                  price: "750",
                  offerPrice: "450",
                  memberShipStatus: "Silver Membership",
                  lessons: "12",
                  classes: "3",
                  link: "/single-course",
                  description:
                    "This membership builds on the Bronze tier, offering powerful features to gain deeper insights, personalize your outreach, and build a competitive talent pipeline.",
                }}
                id={4}
                status={carusole}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Package;

// style={{opacity: "0",zIndex: "0", transform: "matrix(0.9, 0, 0, 0.9, 0, -120)"}}
// style={{opacity: "0.75",zIndex: "0",  transform: "matrix(0.9, 0, 0, 0.9, 0, 0)"}}
// style={{opacity: "1", zIndex: "1",  "transform: matrix(1, 0, 0, 1, 0, 125)" }}
// style={{opacity: "0.75",zIndex: "0",  transform: "matrix(0.9, 0, 0, 0.9, 0, 250)"}}
