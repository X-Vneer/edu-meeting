import React from "react";
import { Stack, Box } from "@mui/system";
import { useState } from "react";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((formData) => {
      return {
        ...formData,
        [name]: value.trim(),
      };
    });
  }
  return (
    <Box py={13} className="contact-us-sec" id="contact-us">
      <Stack direction="row" className="container" gap={3}>
        <form action="">
          <h1>let's get in touch</h1>
          <Stack
            gap={2}
            flexWrap="wrap"
            mb={4}
            sx={{ flexDirection: { sm: "row" } }}
          >
            <div className="field">
              <input
                name="name"
                type="text"
                value={formData.name}
                placeholder="Your Name...*"
                required
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <input
                name="email"
                onChange={handleChange}
                placeholder="Your Email...*"
                type="email"
                required
                value={formData.email}
              />
            </div>
            <div className="field">
              <input
                name="subject"
                onChange={handleChange}
                placeholder="Subject...*"
                type="text"
                required
                value={formData.subject}
              />
            </div>
          </Stack>
          <textarea
            name="message"
            onChange={handleChange}
            placeholder="Your Message..."
            required
            value={formData.message}
          />
          <button className="main-button">Send message now</button>
        </form>
        <Stack
          sx={{
            color: "white",
            borderRadius: 5,
            p: 4,
            justifyContent: "space-between",
          }}
          className="right"
        >
          <Box sx={{ borderBottom: "1px solid #f7f7f7", mb: 2, py: 3 }}>
            <h4>phone number</h4>
            <span>+972598654780</span>
          </Box>{" "}
          <Box sx={{ borderBottom: "1px solid #f7f7f7", mb: 2, py: 3 }}>
            <h4>email address</h4>
            <a href="mailto:xv.neer.business@gmail.com">
              xv.neer.business@gmail
            </a>
          </Box>{" "}
          <Box sx={{ borderBottom: "1px solid #f7f7f7", mb: 2, py: 3 }}>
            <h4>Street address</h4>
            <address>some street address</address>
          </Box>{" "}
          <Box sx={{ borderBottom: "1px solid #f7f7f7", mb: 2, py: 3 }}>
            <h4>website url</h4>
            <span>www.meeting.edu</span>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ContactUs;
