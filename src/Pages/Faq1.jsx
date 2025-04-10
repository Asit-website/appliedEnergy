import React, { useState } from "react";
import "./faq1.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing icons

const faqs = [
    { id: 1, question: "What is Applied Energy Technologies?", answer: "Applied Energy Technologies is a leading Distributed Energy Management company providing innovative power solutions for telecom, banking, energy storage, and electric mobility sectors." },
    { id: 2, question: "What are Applied Energy’s key solutions?", answer: "Applied Energy provides Telecom-in-a-Box (TiB) for telecom sites, Uninterruptible Power Supply (UPS) for critical power backup, and EV Chargers for electric mobility." },
    { id: 3, question: "How does Applied Energy help reduce energy costs?", answer: "Applied Energy’s AI-driven energy management platform optimizes power usage, reduces fuel dependency, and ensures maximum uptime, leading to lower operational costs." },
    { id: 4, question: "What industries does Applied Energy serve?", answer: "Applied Energy serves telecom infrastructure, banking, data centers & electric vehicle charging industries." },
    { id: 5, question: "What makes Applied Energy’s technology unique?", answer: "Applied Energy’s patented AI/ML-powered 5-Layer Energy Management Platform enables real-time remote monitoring, predictive maintenance, and optimized energy distribution." },
    { id: 6, question: "Does Applied Energy operate outside India?", answer: "Applied Energy is actively expanding into Southeast Asia, the Middle East, Africa, and Latin America, seeking global partnerships and customers." },
    { id: 7, question: "How does TiB (Telecom-in-a-Box) work?", answer: "TiB is an AI-integrated, cloud-connected power management system that ensures reliable and cost-efficient energy supply for telecom towers." },
    { id: 8, question: "How can businesses collaborate with Applied Energy?", answer: "Applied Energy is open to technology licensing, joint ventures, distribution partnerships, and pilot projects. Interested businesses can contact us for collaboration opportunities." },
    { id: 9, question: "What types of EV charging solutions does Applied Energy provide?", answer: "Applied Energy offers scalable EV charging solutions designed for commercial and industrial applications, with smart analytics and remote monitoring capabilities." },
    { id: 10, question: "How can I request a demo or consultation?", answer: "You can schedule a free consultation by filling out our contact form or emailing us at [Your Email]." }
];

const FaqSection = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleAnswer = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className="faq1">
            <div className="conttainer">
                <div className="logo">
                    {/* <h2>APPLIED ENERGY</h2> */}
                </div>
                <div className="belowh">
                    <h2>APPLIED ENERGY FAQs</h2>
                </div>
                {faqs.map((faq) => (
                    <div key={faq.id} className="faq-item">
                        <div className="faq-header" onClick={() => toggleAnswer(faq.id)}>
                            <span className="question">{faq.id}. {faq.question}</span>
                            {openFaq === faq.id ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
                        </div>
                        {openFaq === faq.id && <p className="answer">{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqSection;
