"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Heading, CommitmentCard, CtaCommitmentCard } from "../ui";
import { commitmentSection } from "@/data/siteData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/swiper.css";

const CommitmentsSection = () => {
  const { title, subtitle, description, commitments, cta } = commitmentSection;

  return (
    <section className="py-20" id="commitments">
      <div className="container">
        <Heading
          title={title}
          subtitle={subtitle}
          description={description}
          className="text-center"
        />
        <div className="my-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1440: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation]}
            className="relative w-full"
            aria-label="Commitments carousel"
          >
            {commitments.map((commitment, index) => (
              <SwiperSlide key={index}>
                <motion.ul
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="py-12"
                >
                  <CommitmentCard {...commitment} />
                </motion.ul>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ul
          className="flex flex-col lg:flex-row justify-evenly items-center gap-4"
          role="list"
        >
          {cta.map((element, index) => (
            <CtaCommitmentCard key={index} {...element} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CommitmentsSection;
