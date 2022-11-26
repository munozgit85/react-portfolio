import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          Hello, my name is Racquel Munoz, and I am a student in a coding
          bootcamp. At the time of this website's creation, the class assignment
          for this week is to create a portfolio using React. It is now week 20
          out of 24 weeks into the coding bootcamp. Thus far the front end
          technologies have been reviewed, and the program is now focussed on
          backend technologies. As I approach the end of this program, I reflect
          on my initial goal for delving into coding or, rather, software
          development. I have spent the last 14 years working in the nursing
          field, and there has been various types of technological advances in
          healthcare that I have taken interest in. For one, there has been a
          growth in the electronic medical recording systems such as EPIC,
          Cerner, and Meditech. Additionally, I have come accross many start-up
          companies who are instituting artificial intelligence into the
          clinical management of patients such as artificial intelligence
          assisted surgeries and clinical judgement and diagnosis. While working
          for not only as a bedside nurse, but also as a nurse practitioner, I
          have come up with my own concerns in healthcare that includes the
          cumbersone and time-consuming process of charting. The technological
          advances in healthcare recording is surely a leap forward in
          healthcare, but it can also distract and , most importantly, take away
          the time spent with patients. It is for this reason, that I wanted to
          learn software development to be able to assist in the changes in
          healthcare technology to improve the care of patients.
        </p>
      </div>
    </section>
  );
}

export default About;
