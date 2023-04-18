import React from 'react'
// import { Accordion } from "react-faq-acordion";
import Faq from "react-faq-component";
function Faqs() {
    const data = {
        rows:[
          {
            title: "Our mission is not Simple but lorem ipsum dolor incident ut labore?",
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, unde perspiciatis! Vel est blanditiis eveniet fugiat accusantium provident beatae? Quasi est consequatur distinctio accusamus praesentium delectus ut voluptate quia nisi.`,
          },
          {
            title: "Our mission is not Simple but ut labore? ",
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, unde perspiciatis! Vel est blanditiis eveniet fugiat accusantium provident beatae? Quasi est consequatur distinctio accusamus praesentium delectus ut voluptate quia nisi.`,
          },
          {
            title: "Our mission is not Simple but lorem ut labore? ",
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, unde perspiciatis! Vel est blanditiis eveniet fugiat accusantium provident beatae? Quasi est consequatur distinctio accusamus praesentium delectus ut voluptate quia nisi.`,
          },
          {
            title: "Our mission is not Simple but lorem ipsum dolor inc?",
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, unde perspiciatis! Vel est blanditiis eveniet fugiat accusantium provident beatae? Quasi est consequatur distinctio accusamus praesentium delectus ut voluptate quia nisi.`,
          },
          {
            title: "Our mission is not Simple but ut labore? ",
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, unde perspiciatis! Vel est blanditiis eveniet fugiat accusantium provident beatae? Quasi est consequatur distinctio accusamus praesentium delectus ut voluptate quia nisi.`,
          },
 
        ],
      };

      const styles = {
        titleTextColor: "blue",
        rowTitleColor: "blue",
      };
  return (
    <>
        {/* ==========================faq================== */}
        <div className="faqs-section">
          <div className="container">
            <div className="faq-wrapper">
              <div className="left-faq">
                 <h4>Got Questions?  <span><img src="./images/hand-2.svg" alt="" /></span>We have answers</h4>
                <img src="assets/img/faq/1.png" className="faq-image" alt="" />
              </div>

              <div className="content">
                <Faq data={data} styles={styles} />
              </div>
            </div>
          </div>
        </div>
        {/* ==========================faq end================== */}
    </>
  )
}

export default Faqs;