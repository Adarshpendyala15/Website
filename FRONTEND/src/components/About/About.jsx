import './About.css';
import { motion } from 'framer-motion';

export default function About() {
    const variants = {
        visible: { borderRadius :"1rem"},
    }
    return (<>
        <div className="about">
            <h1>About us</h1>
            <p>Welcome to our Data Science Club, the premier hub for data science enthusiasts at our college. Established with the vision of driving innovation and collaboration, our club serves as the central point for all data science-related activities on campus. We provide comprehensive guidance on projects, offer certifications for both students and faculty, and keep our members informed about the latest industry trends and real-world applications of data science.
            </p>
            <p>
Our club hosts a variety of events, including expert-led guest lectures, hands-on workshops, and collaborative projects, ensuring a dynamic and engaging learning environment. By fostering strong connections with industry leaders, we bridge the gap between academic knowledge and practical experience, preparing our members to excel in the ever-evolving field of data science. Join us in our mission to uphold the highest standards of academic and technical integrity, and be part of a community dedicated to shaping the future of data science.
            </p>

        <div className="vis-mis">
            <motion.div className="vision" variants={variants} initial={"hidden"} animate={"visible"}>
                <h2>Vision</h2>
            <p>
                To be the foremost hub for Data Science excellence, continually driving innovation and collaboration within our college community. We strive to create an environment where students and faculty can engage deeply with cutting-edge research and practical applications of Data Science. By fostering strong connections with industry leaders, we aim to bridge the gap between academic knowledge and real-world practice. Our vision includes being a leader in disseminating the latest trends and advancements in Data Science. Ultimately, we aspire to empower our members to be at the forefront of technological advancements and research in Data Science.
                </p>
            </motion.div>
            <div className="mission">
                <h2>Mission</h2>
                <p>
                    Our mission is to sustain and expand a thriving Data Science community by offering comprehensive guidance on various projects and providing certifications for students and faculty. We are dedicated to keeping our members abreast of industry trends and the practical implications of data in the real world through regular workshops, seminars, and guest lectures. By promoting active participation and collaboration, we aim to foster a culture of continuous learning and innovation. We ensure access to cutting-edge resources and tools that enable our members to excel in their data-driven endeavors. Our commitment is to uphold the highest standards of academic and technical integrity, preparing our members to lead and succeed in the dynamic field of Data Science.</p>
            </div>
        </div>
        </div>
        </>
        )
}