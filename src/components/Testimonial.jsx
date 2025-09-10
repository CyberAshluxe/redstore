import React from "react";
import { Quote, Star } from "lucide-react";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";
import user3 from "../assets/user-3.png";

const testimonials = [
  {
    name: "Sean Parker",
    role: "Customer",
    image: user1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 4,
  },
  {
    name: "Mike Smith",
    role: "Customer",
    image: user2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 4,
  },
  {
    name: "Mabel Joe",
    role: "Customer",
    image: user3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">What Our Customers Say</h2>

        <div className="row g-4">
          {testimonials.map((t, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="card h-100 shadow border-0 p-4">
                <div className="text-danger mb-3">
                  <Quote size={40} />
                </div>

                <p className="text-muted small mb-3">{t.text}</p>

                <div className="mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={i < t.rating ? "#FF4C29" : "none"}
                      stroke={i < t.rating ? "#FF4C29" : "#ccc"}
                      className="me-1"
                    />
                  ))}
                </div>

                <div className="d-flex flex-column align-items-center mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="rounded-circle mb-3"
                    style={{ width: "70px", height: "70px", objectFit: "cover" }}
                  />
                  <h5 className="fw-semibold">{t.name}</h5>
                  <small className="text-muted">{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
