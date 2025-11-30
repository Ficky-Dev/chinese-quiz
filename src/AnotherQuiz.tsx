import React, { useState } from 'react';

const quizData = [
  {
    "id": 1,
    "question": "Kalimat Han zi yang benar dari 厕所 – 去 – 小强",
    "options": [
      "a. 厕所去小强",
      "b. 所强去小厕",
      "c. 小强去厕所",
      "d. 去小强厕所"
    ],
    "answer": "c. 小强去厕所"
  },
  {
    "id": 2,
    "question": "Menyusun kata menjadi kalimat yang benar: 叫 – 名字 – 你 – 什么",
    "options": [
      "a. 什么名字你叫",
      "b. 你叫什么名字",
      "c. 名字什么你叫",
      "d. 叫什么你名字"
    ],
    "answer": "b. 你叫什么名字"
  },
  {
    "id": 3,
    "question": "Kalimat Han zi yang benar dari 我的 – 家 – 爱 – 我",
    "options": [
      "a. 我的家爱我",
      "b. 家我爱我的",
      "c. 我爱我的家",
      "d. 我家爱我的"
    ],
    "answer": "c. 我爱我的家"
  },
  {
    "id": 4,
    "question": "Terjemahkan ke dalam mandarin yang benar dari kalimat: Saya dan kakak laki-laki pergi ke sekolah.",
    "options": [
      "a. 我和哥哥去学校",
      "b. 我和姐姐去学校",
      "c. 我和弟弟去学校",
      "d. 我和妹妹去学校"
    ],
    "answer": "a. 我和哥哥去学校"
  },
  {
    "id": 5,
    "question": "Kalimat Han zi yang benar dari 的家 – 小鱼 – 是 – 大海",
    "options": [
      "a. 小鱼的家是大海",
      "b. 的家是小鱼大海",
      "c. 是大海小鱼的家",
      "d. 大海是小鱼的家"
    ],
    "answer": "a. 小鱼的家是大海"
  },
  {
    "id": 6,
    "question": "Kalimat Han zi yang benar dari 的家 – 小花 – 是 – 大地",
    "options": [
      "a. 小花的家是大地",
      "b. 大地是小花的家",
      "c. 的家是小花大地",
      "d. 是大地小花的家"
    ],
    "answer": "a. 小花的家是大地"
  },
  {
    "id": 7,
    "question": "Arti Indonesia dalam kalimat Han zi: 我爸爸不是老师，他是商人。",
    "options": [
      "a. Ayah saya bukan guru, dia adalah pedagang.",
      "b. Ayah saya guru, dia bukan pedagang.",
      "c. Ayah saya bukan dokter, dia adalah guru.",
      "d. Ayah saya adalah pedagang dan guru."
    ],
    "answer": "a. Ayah saya bukan guru, dia adalah pedagang."
  },
  {
    "id": 8,
    "question": "Terjemahkan ke dalam mandarin yang benar dari kalimat: Mulai masuk sekolah, sungguh senang.",
    "options": [
      "a. 开学了，不高兴。",
      "b. 开学了，很高兴。",
      "c. 开学了，真高兴。",
      "d. 开学了，没高兴。"
    ],
    "answer": "c. 开学了，真高兴."
  },
  {
    "id": 9,
    "question": "Tulisan Han zi yang benar dari \"TAMAN KANAK-KANAK\"",
    "options": [
      "a. 电影院",
      "b. 图书馆",
      "c. 幼儿园",
      "d. 警察局"
    ],
    "answer": "c. 幼儿园"
  },
  {
    "id": 10,
    "question": "Terjemahkan ke dalam mandarin: Ibu adalah dokter, pagi hari dia pergi ke rumah sakit.",
    "options": [
      "a. 妈妈是医生，早上她去医院。",
      "b. 妈妈是医生，早上他去医院。",
      "c. 妈妈是医生，早上它去医院。",
      "d. 妈妈是医生，早上祂去医院。"
    ],
    "answer": "a. 妈妈是医生，早上她去医院。"
  },
  {
    "id": 11,
    "question": "Kalimat Han zi yang benar dari 人 – 五口 – 有 – 我家",
    "options": [
      "a. 家我有五口人。",
      "b. 我家有五口人。",
      "c. 五口人有我家。",
      "d. 有五口人我家。"
    ],
    "answer": "b. 我家有五口人。"
  },
  {
    "id": 12,
    "question": "Tulisan Han zi yang benar dari \"SEKOLAH\"",
    "options": [
      "a. 教室",
      "b. 学校",
      "c. 公园",
      "d. 医院"
    ],
    "answer": "b. 学校"
  },
  {
    "id": 13,
    "question": "Tulisan Han zi yang benar dari \"TAMAN\"",
    "options": [
      "a. 公园",
      "b. 医院",
      "c. 学校",
      "d. 教室"
    ],
    "answer": "a. 公园"
  },
  {
    "id": 14,
    "question": "Terjemahkan dalam bahasa Indonesia yang benar dari kalimat Han zi: 见到老师说；老师早。",
    "options": [
      "a. bertemu guru berkata; selamat pagi guru.",
      "b. bertemu guru berkata; selamat siang guru.",
      "c. bertemu guru berkata; selamat sore guru.",
      "d. bertemu guru berkata; selamat malam guru."
    ],
    "answer": "a. bertemu guru berkata; selamat pagi guru."
  },
  {
    "id": 15,
    "question": "Tulisan Han zi yang benar dari \"RUMAH SAKIT\"",
    "options": [
      "a. 学校",
      "b. 医院",
      "c. 操场",
      "d. 教室"
    ],
    "answer": "b. 医院"
  },
  {
    "id": 16,
    "question": "Tulisan Han zi yang benar dari \"KELAS\"",
    "options": [
      "a. 公园",
      "b. 厕所",
      "c. 学校",
      "d. 教室"
    ],
    "answer": "d. 教室"
  },
  {
    "id": 17,
    "question": "Terjemahkan dalam bahasa Indonesia yang benar dari kalimat: 陈老师去教室。",
    "options": [
      "a. Guru Zhang pergi ke kelas.",
      "b. Guru Huang pergi ke kelas.",
      "c. Guru Chen pergi ke kelas.",
      "d. Guru Wang pergi ke kelas."
    ],
    "answer": "c. Guru Chen pergi ke kelas."
  },
  {
    "id": 18,
    "question": "Kalimat bahasa Indonesia yang benar dari: 早上好，中午好，下午好，晚上好。",
    "options": [
      "a. selamat pagi, selamat sore, selamat siang, selamat malam.",
      "b. selamat pagi, selamat siang, selamat sore, selamat malam.",
      "c. selamat malam, selamat sore, selamat siang, selamat pagi.",
      "d. selamat sore, selamat malam, selamat siang, selamat pagi."
    ],
    "answer": "b. selamat pagi, selamat siang, selamat sore, selamat malam."
  },
  {
    "id": 19,
    "question": "Arti dalam bahasa Indonesia yang benar dari kalimat: 弟弟妹妹去幼儿园。",
    "options": [
      "a. adik laki, adik perempuan pergi ke taman angsa.",
      "b. adik laki, adik perempuan pergi ke taman kanak-kanak.",
      "c. adik laki, adik perempuan pergi ke taman remaja.",
      "d. adik laki, adik perempuan pergi ke taman bermain."
    ],
    "answer": "b. adik laki, adik perempuan pergi ke taman kanak-kanak."
  },
  {
    "id": 20,
    "question": "Menulis arti Indonesia dalam kalimat Han zi: 见到老师说；老师早。",
    "options": [
      "a. Bertemu guru berkata, selamat pagi guru.",
      "b. Bertemu teman berkata, selamat pagi teman.",
      "c. Bertemu guru berkata, selamat siang guru.",
      "d. Bertemu ayah berkata, selamat pagi ayah."
    ],
    "answer": "a. Bertemu guru berkata, selamat pagi guru."
  },
  {
    "id": 21,
    "question": "Kalimat bahasa Indonesia yang benar dari: 我妈妈不是老师，她是医生。",
    "options": [
      "a. Mama saya bukan Dokter, dia adalah Guru.",
      "b. Mama saya bukan Guru, dia adalah Dokter.",
      "c. Mama saya bukan Suster, dia adalah Dokter.",
      "d. Mama saya bukan Polisi, dia adalah Guru."
    ],
    "answer": "b. Mama saya bukan Guru, dia adalah Dokter."
  },
  {
    "id": 22,
    "question": "Kalimat bahasa Indonesia yang benar dari: 我爸爸不是老师，他是商人。",
    "options": [
      "a. Ayah saya bukan Dokter, dia adalah Polisi.",
      "b. Ayah saya bukan Guru, dia adalah Pedagang.",
      "c. Ayah saya bukan Polisi, dia adalah Pedagang.",
      "d. Ayah saya bukan Dokter, dia adalah Guru."
    ],
    "answer": "b. Ayah saya bukan Guru, dia adalah Pedagang."
  },
  {
    "id": 23,
    "question": "Kalimat bahasa Indonesia yang benar dari: 做个有礼貌的好孩子。",
    "options": [
      "a. jadilah murid yang baik punya sopan santun.",
      "b. jadilah adik yang baik punya sopan santun.",
      "c. jadilah anak yang baik punya sopan santun.",
      "d. jadilah teman yang baik punya sopan santun."
    ],
    "answer": "c. jadilah anak yang baik punya sopan santun."
  },
  {
    "id": 24,
    "question": "Lengkapi kalimat: 对不起 ...",
    "options": [
      "a. 没关系",
      "b. 不客气",
      "c. 谢谢",
      "d. 再见"
    ],
    "answer": "a. 没关系"
  },
  {
    "id": 25,
    "question": "Lengkapi kalimat: 做个有礼貌的 ...",
    "options": [
      "a. 坏孩子",
      "b. 好孩子",
      "c. 小学生",
      "d. 老师"
    ],
    "answer": "b. 好孩子"
  },
  {
    "id": 26,
    "question": "Lengkapi kalimat: 我去学校，弟弟妹去 ...",
    "options": [
      "a. 家",
      "b. 幼儿园",
      "c. 医院",
      "d. 市场"
    ],
    "answer": "b. 幼儿园"
  },
  {
    "id": 27,
    "question": "Lengkapi kalimat: 谢谢您 ！ ...",
    "options": [
      "a. 没关系",
      "b. 不客气",
      "c. 对不起",
      "d. 你好"
    ],
    "answer": "b. 不客气"
  },
  {
    "id": 28,
    "question": "Lengkapi kalimat: 爷爷教我 ...",
    "options": [
      "a. 数星星",
      "b. 画画",
      "c. 唱歌",
      "d. 跳舞"
    ],
    "answer": "a. 数星星"
  },
  {
    "id": 29,
    "question": "Lengkapi kalimat: 见到老师说 ...",
    "options": [
      "a. 老师好",
      "b. 老师早",
      "c. 老师再见",
      "d. 谢谢老师"
    ],
    "answer": "b. 老师早"
  },
  {
    "id": 30,
    "question": "Lengkapi kalimat: 我爱我的 ...",
    "options": [
      "a. 学校",
      "b. 家",
      "c. 朋友",
      "d. 老师"
    ],
    "answer": "b. 家"
  }
];

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface Option {
  label: string;
  text: string;
  isCorrect: boolean;
}

// Helper function to properly shuffle an array using Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper function to shuffle options but track correct answer
const shuffleOptions = (question: QuizQuestion): Option[] => {
  const options = question.options.map((opt, index) => ({
    label: opt.charAt(0),
    text: opt.substring(2),
    isCorrect: opt === question.answer
  }));

  return shuffleArray(options);
};

export default function AnotherQuiz() {
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<Option | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);

  // Initialize and shuffle questions when component mounts
  React.useEffect(() => {
    const shuffled = shuffleArray(quizData);
    setShuffledQuestions(shuffled);
  }, []);

  const currentQuestion = shuffledQuestions[current];

  React.useEffect(() => {
    if (currentQuestion) {
      const newOptions = shuffleOptions(currentQuestion);
      setOptions(newOptions);
    }
  }, [current, currentQuestion]);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option.isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (current === shuffledQuestions.length - 1) {
      setIsQuizComplete(true);
    } else {
      setSelected(null);
      setShowAnswer(false);
      setCurrent((prev) => (prev + 1) % shuffledQuestions.length);
    }
  };

  const restartQuiz = () => {
    // Reshuffle the questions
    const shuffled = shuffleArray(quizData);
    setShuffledQuestions(shuffled);

    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowAnswer(false);
    setIsQuizComplete(false);
  };

  // Loading state
  if (!currentQuestion || shuffledQuestions.length === 0) {
    return (
      <div style={{
        padding: 'clamp(1rem, 5vw, 3rem)',
        maxWidth: '1024px',
        margin: '0 auto',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: 'bold', color: '#059669' }}>Memuat kuis...</h1>
      </div>
    );
  }

  if (isQuizComplete) {
    return (
      <div style={{
        padding: 'clamp(1rem, 5vw, 3rem)',
        maxWidth: 'clamp(320px, 90vw, 832px)',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: 'bold', marginBottom: 'clamp(1rem, 4vw, 2rem)', color: '#059669' }}>Kuis Selesai!</h1>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: 'clamp(1rem, 4vw, 2rem)',
          marginBottom: 'clamp(1rem, 4vw, 2rem)'
        }}>
          <h2 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.875rem)', fontWeight: '600', marginBottom: 'clamp(0.75rem, 3vw, 1.5rem)' }}>Hasil Akhir</h2>
          <p style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 'bold', marginBottom: 'clamp(0.5rem, 2vw, 1rem)', color: '#059669' }}>
            {score} / {shuffledQuestions.length}
          </p>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', marginBottom: 'clamp(1rem, 3vw, 1.5rem)' }}>
            Persentase: {Math.round((score / shuffledQuestions.length) * 100)}%
          </p>
          {score === shuffledQuestions.length && (
            <p style={{ fontSize: 'clamp(0.875rem, 3vw, 1.125rem)', color: '#059669', fontWeight: '600', marginBottom: 'clamp(0.5rem, 2vw, 1rem)' }}>🎉 Sempurna! Semua jawaban benar!</p>
          )}
          {score >= shuffledQuestions.length * 0.8 && score < shuffledQuestions.length && (
            <p style={{ fontSize: 'clamp(0.875rem, 3vw, 1.125rem)', color: '#059669', fontWeight: '600', marginBottom: 'clamp(0.5rem, 2vw, 1rem)' }}>👏 Bagus! Kamu sudah sangat baik!</p>
          )}
          {score >= shuffledQuestions.length * 0.6 && score < shuffledQuestions.length * 0.8 && (
            <p style={{ fontSize: 'clamp(0.875rem, 3vw, 1.125rem)', color: '#ca8a04', fontWeight: '600', marginBottom: 'clamp(0.5rem, 2vw, 1rem)' }}>👍 Cukup baik! Terus berlatih ya!</p>
          )}
          {score < shuffledQuestions.length * 0.6 && (
            <p style={{ fontSize: 'clamp(0.875rem, 3vw, 1.125rem)', color: '#dc2626', fontWeight: '600', marginBottom: 'clamp(0.5rem, 2vw, 1rem)' }}>💪 Jangan menyerah! Coba lagi ya!</p>
          )}
        </div>
        <button
          onClick={restartQuiz}
          style={{
            padding: 'clamp(0.75rem, 3vw, 1rem) clamp(1.5rem, 5vw, 2rem)',
            backgroundColor: '#059669',
            color: 'white',
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            width: '100%',
            maxWidth: '300px'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#047857'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#059669'}
        >
          Mulai Lagi
        </button>
      </div>
    );
  }

  return (
    <div style={{
      padding: 'clamp(1rem, 5vw, 3rem)',
      maxWidth: '1024px',
      margin: '0 auto',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      <div style={{ marginBottom: 'clamp(1rem, 4vw, 2rem)' }}>
        <h1 style={{
          fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
          fontWeight: 'bold',
          marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
          color: '#059669'
        }}>Kuis Bahasa Mandarin</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'clamp(1rem, 4vw, 1.5rem)',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>Soal {current + 1} dari {shuffledQuestions.length}</p>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', fontWeight: '600' }}>Skor: {score}</p>
        </div>
      </div>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        padding: 'clamp(1rem, 4vw, 2rem)',
        marginBottom: 'clamp(1rem, 4vw, 2rem)'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.25rem, 4vw, 1.875rem)',
          fontWeight: 'bold',
          marginBottom: 'clamp(1.5rem, 5vw, 2.5rem)',
          color: '#059669',
          lineHeight: 1.4
        }}>{currentQuestion.question}</h2>

        <div style={{
          display: 'grid',
          gap: 'clamp(0.75rem, 3vw, 1.5rem)',
          marginBottom: 'clamp(1rem, 4vw, 2rem)'
        }}>
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(opt)}
              disabled={showAnswer}
              style={{
                padding: 'clamp(1rem, 3vw, 1.5rem)',
                borderRadius: '0.5rem',
                border: showAnswer
                  ? opt.isCorrect
                    ? '4px solid #059669'
                    : opt === selected
                    ? '4px solid #dc2626'
                    : '1px solid #d1d5db'
                  : '1px solid #d1d5db',
                fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                transition: 'all 0.2s',
                textAlign: 'left',
                backgroundColor: showAnswer
                  ? opt.isCorrect
                    ? '#d1fae5'
                    : opt === selected
                    ? '#fee2e2'
                    : 'white'
                  : 'white',
                opacity: showAnswer && !opt.isCorrect && opt !== selected ? 0.5 : 1,
                cursor: showAnswer ? 'not-allowed' : 'pointer',
                width: '100%'
              }}
              onMouseOver={(e) => {
                if (!showAnswer) {
                  e.currentTarget.style.backgroundColor = '#f0fdf4';
                  e.currentTarget.style.borderColor = '#059669';
                  e.currentTarget.style.borderWidth = '2px';
                }
              }}
              onMouseOut={(e) => {
                if (!showAnswer) {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.borderColor = '#d1d5db';
                  e.currentTarget.style.borderWidth = '1px';
                }
              }}
            >
              <span style={{
                fontWeight: 'bold',
                color: '#059669',
                marginRight: '0.5rem'
              }}>
                {opt.label}.
              </span>
              {opt.text}
            </button>
          ))}
        </div>

        {showAnswer && (
          <div style={{
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
            padding: 'clamp(1rem, 3vw, 1.5rem)',
            backgroundColor: '#f0fdf4',
            borderRadius: '0.5rem'
          }}>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', marginBottom: '0.5rem' }}>
              <span style={{ color: selected?.isCorrect ? '#059669' : '#dc2626' }}>
                {selected?.isCorrect ? "✓ Benar!" : "✗ Salah"}
              </span>
            </p>
            <p style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)' }}>
              Jawaban benar: <span style={{ fontWeight: 'bold' }}>{currentQuestion.answer}</span>
            </p>
          </div>
        )}

        {showAnswer && (
          <button
            onClick={nextQuestion}
            style={{
              padding: 'clamp(0.75rem, 3vw, 1rem) clamp(1.5rem, 5vw, 2rem)',
              backgroundColor: '#059669',
              color: 'white',
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              width: '100%',
              maxWidth: '300px'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#047857'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#059669'}
          >
            {current === shuffledQuestions.length - 1 ? 'Lihat Hasil' : 'Soal Berikutnya'}
          </button>
        )}
      </div>
    </div>
  );
}