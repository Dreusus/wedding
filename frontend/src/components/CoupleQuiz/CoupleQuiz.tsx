import { useState, useRef, useEffect } from 'react';
import { weddingConfig } from '../../config';
import { LoveAnimation } from '../common/LoveAnimation';
import './CoupleQuiz.scss';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const suggestedQuestions = [
  'Как вы познакомились?',
  'Где было первое свидание?',
  'Кто сделал первый шаг?',
  'Любимое совместное занятие?',
  'Куда планируете медовый месяц?',
];

export const CoupleQuiz = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: `Привет! 👋 Я знаю всё о ${weddingConfig.groom.name} и ${weddingConfig.bride.name}! Задавай вопросы о нашей паре — это пригодится на конкурсах! 🎉`,
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: messages.length,
      text: text.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call to backend
      // const response = await fetch('/api/quiz', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ question: text }),
      // });
      // const data = await response.json();

      // Заглушка - имитация ответа
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const mockResponses: Record<string, string> = {
        'как вы познакомились': `${weddingConfig.groom.name} и ${weddingConfig.bride.name} познакомились... (здесь будет ваша история! 💕)`,
        'где было первое свидание': 'Первое свидание было в... (добавьте вашу историю! 🌹)',
        'кто сделал первый шаг': 'Первый шаг сделал(а)... (ваш ответ! 😊)',
        'любимое совместное занятие': 'Мы любим вместе... (ваше занятие! 🎬)',
        'куда планируете медовый месяц': 'Медовый месяц планируем провести в... (ваши планы! ✈️)',
      };

      const lowerText = text.toLowerCase();
      let responseText = `Отличный вопрос! 🤔 К сожалению, я пока не знаю ответа. Попробуй спросить что-то другое или дождись, пока ${weddingConfig.groom.name} и ${weddingConfig.bride.name} заполнят информацию о себе!`;

      for (const [key, value] of Object.entries(mockResponses)) {
        if (lowerText.includes(key)) {
          responseText = value;
          break;
        }
      }

      const botMessage: Message = {
        id: messages.length + 1,
        text: responseText,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage: Message = {
        id: messages.length + 1,
        text: 'Упс! Что-то пошло не так. Попробуй ещё раз позже 😅',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestion = (question: string) => {
    sendMessage(question);
  };

  return (
    <section className="bg-light-dark py-4 position-relative overflow-hidden" id="couple-quiz" style={{ zIndex: 1 }}>
      <LoveAnimation position="top-right" delay={1500} />
      <LoveAnimation position="bottom-left" delay={3000} />
      <div className="container">
        <h2 className="font-esthetic text-center mb-2" style={{ fontSize: '2.25rem' }}>
          Узнай нас лучше
        </h2>

        <p className="text-center mb-4" style={{ fontSize: '0.95rem' }}>
          Задавай вопросы о паре — пригодится на конкурсах! 🎯
        </p>

        <div
          className="quiz-container mx-auto bg-theme-auto rounded-4 shadow overflow-hidden"
          style={{ maxWidth: '400px' }}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {/* Chat Header */}
          <div
            className="quiz-header d-flex align-items-center justify-content-between p-3 bg-primary text-white"
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ cursor: 'pointer' }}
          >
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-robot me-2"></i>
              <span style={{ fontSize: '0.95rem' }}>AI-помощник</span>
            </div>
            <i className={`fa-solid fa-chevron-${isExpanded ? 'down' : 'up'}`}></i>
          </div>

          {/* Chat Body */}
          <div className={`quiz-body ${isExpanded ? 'expanded' : ''}`}>
            {/* Messages */}
            <div className="quiz-messages p-3" style={{ height: '250px', overflowY: 'auto' }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`quiz-message mb-2 ${msg.isUser ? 'text-end' : ''}`}
                >
                  <div
                    className={`d-inline-block p-2 rounded-3 ${
                      msg.isUser ? 'bg-primary text-white' : 'bg-white-black'
                    }`}
                    style={{ maxWidth: '85%', fontSize: '0.85rem' }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="quiz-message mb-2">
                  <div
                    className="d-inline-block p-2 rounded-3 bg-white-black"
                    style={{ fontSize: '0.85rem' }}
                  >
                    <i className="fa-solid fa-ellipsis fa-beat"></i>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="quiz-suggestions px-3 pb-2">
                <small className="text-secondary d-block mb-2">Попробуй спросить:</small>
                <div className="d-flex flex-wrap gap-1">
                  {suggestedQuestions.slice(0, 3).map((q, i) => (
                    <button
                      key={i}
                      className="btn btn-outline-secondary btn-sm rounded-pill"
                      style={{ fontSize: '0.7rem' }}
                      onClick={() => handleSuggestion(q)}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="quiz-input p-3 border-top">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-control-sm rounded-pill rounded-end"
                  placeholder="Задай вопрос..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-sm rounded-pill rounded-start"
                  disabled={!input.trim() || isLoading}
                >
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
