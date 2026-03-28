import React from 'react';
import AnimatedList from './AnimatedList';

const faqs = [
  {
    q: 'Why is Apex the best for admissions advice?',
    a: (
      <>
        <p>
          Apex stands out because our guidance is built on recent, real-world admissions success and a student-centered approach. Our mentors have been recently admitted to top universities, so they understand today’s admissions landscape - not what worked a decade ago.
        </p>
        <p>
          Unlike traditional admissions consulting firms that focus only on applications at the end of the process, Apex supports students throughout their journey. We help them develop meaningful academic interests, impactful extracurricular projects, and a compelling personal narrative long before applications are submitted.
        </p>
        <p>
          We’re also intentionally affordable and flexible. Students receive personalized, one-on-one mentorship without long-term contracts or inflated fees, ensuring families get exactly the support they need no more, no less.
        </p>
        <p>
          At Apex, we don’t just help students apply to top colleges. We help them become the kind of students top colleges are looking for.
        </p>
      </>
    ),
  },
  {
    q: "What are Apex's prices?",
    a: (
      <>
        <p>
          Apex offers flexible pricing tailored to each student’s specific needs. On our Our Plans page, you can explore both custom options and their associated pricing. Our Standard Plan is all-inclusive and provides the most comprehensive level of support, offering the strongest opportunity for success by including every service we offer. For families seeking greater affordability, customized plans are also available.
        </p>
      </>
    ),
  },
  {
    q: 'How many students does Apex guide per year?',
    a: (
      <p>
        Apex guides between 25 and 35 students per year. We intentionally cap our annual enrollment to ensure that every student receives prioritized, high-touch individual attention throughout the admissions process.
      </p>
    ),
  },
  {
    q: 'Does Apex guide international students?',
    a: (
      <p>
        Yes, Apex works with international students. We are experienced in guiding students from abroad through the intricacies of the US university admissions system.
      </p>
    ),
  },
  {
    q: 'Does Apex coach essay writing?',
    a: (
      <p>
        Yes, essay writing is a fundamental part of the college admissions process at Apex. Our essay writing services are deeply rooted in admissions strategy, helping students craft compelling narratives that capture their unique voice and stand out to admissions officers.
      </p>
    ),
  },
  {
    q: 'Does Apex guide passion projects?',
    a: (
      <p>
        Yes, we provide comprehensive guidance on passion projects. Similar to our essay coaching, we help students identify their interests and execute strategic, impactful projects that demonstrate leadership and genuine intellectual curiosity.
      </p>
    ),
  },
  {
    q: 'Does Apex help students find internships?',
    a: (
      <p>
        Yes, Apex helps students find and secure internships. We guide students on where to look, assist in drafting professional outreach, and leverage our connections with various businesses to accelerate the placement process.
      </p>
    ),
  },
  {
    q: 'Does Apex help students find research opportunities?',
    a: (
      <p>
        Yes, we assist students in securing research positions. We help students identify relevant labs or professors and provide coaching on how to professionally reach out and secure meaningful research roles.
      </p>
    ),
  },
  {
    q: 'Why should I choose Apex?',
    a: (
      <p>
        You should choose Apex because we prioritize quality over quantity. By limiting our client base, we offer a level of personalized mentorship and strategic depth that volume-based firms cannot match. We don't just review applications; we help build the student's entire narrative from the ground up, turning good candidates into standout applicants.
      </p>
    ),
  },
  {
    q: "What is Apex's cancellation / refund policy?",
    a: (
      <p>
        We review refunds on a case-by-case basis. We strive for client satisfaction, so if a student decides early on that our services are not the right fit, there is a high likelihood of acquiring a refund.
      </p>
    ),
  },
  {
    q: 'Does Apex guarantee admissions to any universities?',
    a: (
      <p>
        No, and you should be wary of any firm that claims they can. No ethical college guidance firm can guarantee admission to a specific university. However, Apex guarantees that we will do everything in our power to maximize your chances of success.
      </p>
    ),
  },
  {
    q: 'Does Apex help students pick class schedules?',
    a: (
      <p>
        Yes, we help students plan their academic roadmap. We assist in selecting class schedules that are optimized for admissions, ensuring students demonstrate necessary academic rigor.
      </p>
    ),
  },
  {
    q: 'Will Apex guide students in obtaining letters of recommendation?',
    a: (
      <p>
        Yes, letters of recommendation are a vital part of the application. There are many nuances to securing great recommendations, and we guide students on who to ask, how to ask, and how to ensure their teachers can advocate for them effectively.
      </p>
    ),
  },
  {
    q: 'Does Apex guide students on choosing their career pathways?',
    a: (
      <p>
        Yes, this is typically done in the very first meetings. We help students clarify their career goals early on to ensure their college list and major choices align with their long-term aspirations.
      </p>
    ),
  },
  {
    q: 'Does Apex help students prepare for standardized testing?',
    a: (
      <p>
        Yes, we help students prepare for the SAT and ACT. We provide access to tutoring and strategic planning to ensure students acquire sufficiently high scores to support their applications.
      </p>
    ),
  },
  {
    q: 'Does Apex help students determine which universities to apply to?',
    a: (
      <p>
        Of course. Choosing the right mix of universities is essential to a successful outcome. We help students build a balanced school list that fits their academic profile and campus culture preferences.
      </p>
    ),
  },
  {
    q: 'Does Apex have any hidden fees?',
    a: (
      <p>
        No! All fees are transparent and discussed up-front. We believe in building trust with families, which starts with clear and honest pricing.
      </p>
    ),
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="features faq" style={{ paddingBottom: 48 }}>
      <h2 style={{ margin: '0 0 18px' }}>Frequently Asked Questions</h2>
      <AnimatedList items={faqs} />
    </section>
  );
};

export default FAQ;
