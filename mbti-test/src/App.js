import React, { useState } from 'react';
import './App.css';

function Question({ question, choices, onSelect }) {
  return (
    <div className="question">
      <h2>{question}</h2>
      <div className="choices">
        {choices.map((choice, index) => (
          <button key={index} onClick={() => onSelect(index + 1)}>
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}

function Result({ result }) {
  const personalityTraits = {
    "ISTJ - The Inspector": "ISTJs are responsible and practical individuals who value order and tradition. They are known for their attention to detail, reliability, and commitment to their work. ISTJs prefer to work in a structured environment and excel in roles that require organization and thoroughness.",
    "ISFJ - The Protector": "ISFJs are compassionate and dependable individuals who are dedicated to helping others. They are known for their warmth, loyalty, and nurturing nature. ISFJs thrive in supportive roles where they can contribute to the well-being of their loved ones and community.",
    "INFJ - The Advocate": "INFJs are insightful and empathetic individuals who are driven by their ideals and values. They are known for their deep understanding of human nature, creativity, and vision for a better future. INFJs excel in roles that allow them to make a meaningful difference and inspire others.",
    "INTJ - The Architect": "INTJs are strategic and analytical individuals who are focused on achieving their goals and visions. They are known for their intelligence, independence, and ability to see the big picture. INTJs thrive in roles that require innovative thinking and strategic planning.",
    "ISTP - The Craftsman": "ISTPs are adventurous and pragmatic individuals who enjoy exploring how things work. They are known for their curiosity, adaptability, and hands-on approach to problem-solving. ISTPs excel in roles that allow them to use their technical skills and creativity to find practical solutions.",
    "ISFP - The Composer": "ISFPs are sensitive and free-spirited individuals who are deeply attuned to their inner emotions and values. They are known for their creativity, empathy, and appreciation for beauty. ISFPs thrive in roles that allow them to express themselves artistically and connect with others on a personal level.",
    "INFP - The Healer": "INFPs are idealistic and compassionate individuals who are dedicated to making the world a better place. They are known for their creativity, empathy, and deep sense of integrity. INFPs excel in roles that allow them to use their imagination and values to inspire positive change.",
    "INTP - The Thinker": "INTPs are logical and inventive individuals who are fascinated by ideas and possibilities. They are known for their intellect, curiosity, and love of learning. INTPs thrive in roles that allow them to explore complex concepts and problem-solving.",
    "ESTP - The Dynamo": "ESTPs are energetic and resourceful individuals who thrive in fast-paced environments. They are known for their spontaneity, adaptability, and ability to think on their feet. ESTPs excel in roles that require quick decision-making and hands-on problem-solving.",
    "ESFP - The Performer": "ESFPs are outgoing and enthusiastic individuals who enjoy living in the moment and connecting with others. They are known for their spontaneity, optimism, and love of fun. ESFPs thrive in roles that allow them to express themselves creatively and engage with people.",
    "ENFP - The Champion": "ENFPs are charismatic and imaginative individuals who are driven by their passion and curiosity. They are known for their enthusiasm, creativity, and ability to inspire others. ENFPs excel in roles that allow them to explore their interests and make a positive impact.",
    "ENTP - The Visionary": "ENTPs are innovative and independent thinkers who are constantly seeking new possibilities and ideas. They are known for their intellect, creativity, and love of debate. ENTPs thrive in roles that challenge them intellectually and allow them to explore their interests.",
    "ESTJ - The Supervisor": "ESTJs are practical and dependable individuals who value order and tradition. They are known for their strong work ethic, organization, and leadership skills. ESTJs excel in roles that require structure and efficiency, where they can lead by example and get things done.",
    "ESFJ - The Provider": "ESFJs are caring and sociable individuals who are dedicated to supporting and nurturing others. They are known for their warmth, empathy, and reliability. ESFJs thrive in roles that allow them to connect with people and make a positive impact on their lives.",
    "ENFJ - The Teacher": "ENFJs are charismatic and empathetic individuals who are natural leaders and mentors. They are known for their warmth, enthusiasm, and ability to inspire others. ENFJs excel in roles that allow them to support and guide people towards their goals and aspirations.",
    "ENTJ - The Commander": "ENTJs are strategic and assertive individuals who are focused on achieving their goals and leading others towards success. They are known for their confidence, decisiveness, and vision for the future. ENTJs thrive in roles that require leadership and strategic planning, where they can drive innovation and change."
};

  return (
    <div className="result">
      <h2>Your MBTI Personality Type</h2>
      <p>{result}</p>
      <p>{personalityTraits[result]}</p>
    </div>
  );
}

function App() {
  const questions = [
    {
      question: "You prefer to spend time alone or with a small group of close friends rather than large social gatherings.",
      choices: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]
  },
  {
      question: "You enjoy exploring new ideas and possibilities.",
      choices: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]
  },
  {
      question: "You prefer following a plan rather than being spontaneous.",
      choices: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]
  },
  {
      question: "You find it easy to empathize with others.",
      choices: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]
  },
  {
      question: "You value logic over emotions when making decisions.",
      choices: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]
  },
  {
      question: "You prefer to focus on the present rather than thinking about the future.",
      choices: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]
  },
  {
      question: "You enjoy being the center of attention.",
      choices: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]
  },
  {
      question: "You often rely on others to make decisions for you.",
      choices: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]
  }
  ];

  const mbtiTypes = [
    "ISTJ - The Inspector",
    "ISFJ - The Protector",
    "INFJ - The Advocate",
    "INTJ - The Architect",
    "ISTP - The Craftsman",
    "ISFP - The Composer",
    "INFP - The Healer",
    "INTP - The Thinker",
    "ESTP - The Dynamo",
    "ESFP - The Performer",
    "ENFP - The Champion",
    "ENTP - The Visionary",
    "ESTJ - The Supervisor",
    "ESFJ - The Provider",
    "ENFJ - The Teacher",
    "ENTJ - The Commander"
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState("");

  const handleAnswerSelect = (choice) => {
    setAnswers([...answers, choice]);
    if (currentQuestion === questions.length - 1) {
      let resultIndex = Math.floor(Math.random() * mbtiTypes.length);
      setResult(mbtiTypes[resultIndex]);
      setCurrentQuestion(0);
      setAnswers([]);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li><a href="index2.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        <h1>MBTI Personality Test</h1>
      </header>
      <main>
        {result ? (
          <Result result={result} />
        ) : (
          <Question
            question={questions[currentQuestion].question}
            choices={questions[currentQuestion].choices}
            onSelect={handleAnswerSelect}
          />
        )}
      </main>
      <footer>
        <p>22BCE3732</p>
      </footer>
    </div>
  );
}

export default App;
