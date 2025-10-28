// Modal.jsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import axios from "axios";

const Modal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        education: "",
        passingYear: "",
        gap: "",
        workExperience: "",
        message: "",
    });

    // 🧠 Handle Input Change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    // 🧠 Handle Form Submit
    const handleForm = (e) => {
        e.preventDefault();
        console.log("✅ Form Submitted Successfully!");
        console.log("Form Data:", formData);
        //window.open("/CCC.pdf", "_blank");
        const res = axios.post("/enroll", formData);
        console.log(res);
        onClose();
    };

    // 🧠 Disable background scroll + ESC close
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = originalOverflow;
            document.removeEventListener("keydown", onKey);
        };
    }, [onClose]);

    return createPortal(
        <div
            className="__app-modal-overlay"
            onMouseDown={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="__app-modal-content"
                onMouseDown={(e) => e.stopPropagation()}
            >
                <button
                    className="__app-modal-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ✕
                </button>

                <h2>Enroll in Complete Communication</h2>
                <form className="contact-form" onSubmit={handleForm}>
                    <label htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="contact">Contact Number</label>
                    <input
                        id="contact"
                        type="tel"
                        placeholder="Enter your contact number"
                        required
                        value={formData.contact}
                        onChange={handleChange}
                    />

                    <label htmlFor="education">Education</label>
                    <input
                        id="education"
                        type="text"
                        placeholder="e.g. B.Tech, M.Tech"
                        required
                        value={formData.education}
                        onChange={handleChange}
                    />

                    <label htmlFor="passingYear">Passing Year</label>
                    <input
                        id="passingYear"
                        type="text"
                        placeholder="Enter year of passing"
                        required
                        value={formData.passingYear}
                        onChange={handleChange}
                    />

                    <label htmlFor="gap">Any Gap (Yes/No)</label>
                    <input
                        id="gap"
                        type="text"
                        placeholder="Enter gap (if any)"
                        value={formData.gap}
                        onChange={handleChange}
                    />

                    <label htmlFor="workExperience">Work Experience</label>
                    <input
                        id="workExperience"
                        type="text"
                        placeholder="in months/years"
                        value={formData.workExperience}
                        onChange={handleChange}
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        placeholder="Write your message..."
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                    />

                    <div className="form-actions">
                        <button type="submit" className="btn highlighted-btn">
                            Submit
                        </button>
                        <button type="button" className="btn primary-btn" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
