import React, { useState } from 'react';

const vocabList = [
  { hanzi: '你好', pinyin: 'nǐ hǎo', meaning: 'halo' },
  { hanzi: '老师', pinyin: 'lǎo shī', meaning: 'guru' },
  { hanzi: '同学', pinyin: 'tóng xué', meaning: 'teman sekelas' },
  { hanzi: '再见', pinyin: 'zài jiàn', meaning: 'selamat tinggal' },
  { hanzi: '这是', pinyin: 'zhè shì', meaning: 'ini adalah' },
  { hanzi: '那是', pinyin: 'nà shì', meaning: 'itu adalah' },
  { hanzi: '医生', pinyin: 'yī shēng', meaning: 'dokter' },
  { hanzi: '学生', pinyin: 'xué shēng', meaning: 'murid' },
  { hanzi: '工人', pinyin: 'gōng rén', meaning: 'pekerja' },
  { hanzi: '商人', pinyin: 'shāng rén', meaning: 'pedagang' },
  { hanzi: '你们', pinyin: 'nǐ men', meaning: 'kalian' },
  { hanzi: '对不起', pinyin: 'duì bù qǐ', meaning: 'maaf' },
  { hanzi: '没关系', pinyin: 'méi guān xi', meaning: 'tidak apa-apa' },
  { hanzi: '不客气', pinyin: 'bú kè qì', meaning: 'sama-sama' },
  { hanzi: '谢谢您', pinyin: 'xiè xiè nín', meaning: 'terima kasih (sopan)' },
  { hanzi: '高兴', pinyin: 'gāo xìng', meaning: 'senang' },
  { hanzi: '教室', pinyin: 'jiào shì', meaning: 'ruang kelas' },
  { hanzi: '哪儿', pinyin: 'nǎ er', meaning: 'di mana' },
  { hanzi: '名字', pinyin: 'míng zì', meaning: 'nama' },
  { hanzi: '什么', pinyin: 'shén me', meaning: 'apa' },
  { hanzi: '几岁', pinyin: 'jǐ suì', meaning: 'berapa umur' },
  { hanzi: '学校', pinyin: 'xué xiào', meaning: 'sekolah' },
  { hanzi: '早上', pinyin: 'zǎo shang', meaning: 'pagi' },
  { hanzi: '医院', pinyin: 'yī yuàn', meaning: 'rumah sakit' },
  { hanzi: '开学', pinyin: 'kāi xué', meaning: 'mulai sekolah' },
  { hanzi: '公园', pinyin: 'gōng yuán', meaning: 'taman' },
  { hanzi: '幼儿园', pinyin: 'yòu ér yuán', meaning: 'taman kanak-kanak' },
  { hanzi: '有', pinyin: 'yǒu', meaning: 'punya' },
  { hanzi: '去', pinyin: 'qù', meaning: 'pergi' },
  { hanzi: '姓', pinyin: 'xìng', meaning: 'nama keluarga' },
  { hanzi: '哪儿', pinyin: 'nǎ er', meaning: 'di mana' }
];

interface VocabItem {
  hanzi: string;
  pinyin: string;
  meaning: string;
}

export default function ChineseQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<VocabItem | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [options, setOptions] = useState<VocabItem[]>([]);

  const currentWord = vocabList[current];

  React.useEffect(() => {
    const newOptions = [currentWord, ...vocabList.filter((_, i) => i !== current).sort(() => 0.5 - Math.random()).slice(0, 3)]
      .sort(() => 0.5 - Math.random());
    setOptions(newOptions);
  }, [current]);

  const handleSelect = (option: VocabItem) => {
    setSelected(option);
    setShowAnswer(true);
    if (option.hanzi === currentWord.hanzi) setScore(score + 1);
  };

  const nextQuestion = () => {
    if (current === vocabList.length - 1) {
      setIsQuizComplete(true);
    } else {
      setSelected(null);
      setShowAnswer(false);
      setCurrent((prev) => (prev + 1) % vocabList.length);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowAnswer(false);
    setIsQuizComplete(false);
  };

  if (isQuizComplete) {
    return (
      <div style={{ padding: '3rem', maxWidth: '832px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#2563eb' }}>Kuis Selesai!</h1>
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '1.5rem' }}>Hasil Akhir</h2>
          <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#059669' }}>
            {score} / {vocabList.length}
          </p>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            Persentase: {Math.round((score / vocabList.length) * 100)}%
          </p>
          {score === vocabList.length && (
            <p style={{ fontSize: '1.125rem', color: '#059669', fontWeight: '600', marginBottom: '1rem' }}>🎉 Sempurna! Semua jawaban benar!</p>
          )}
          {score >= vocabList.length * 0.8 && score < vocabList.length && (
            <p style={{ fontSize: '1.125rem', color: '#2563eb', fontWeight: '600', marginBottom: '1rem' }}>👏 Bagus! Kamu sudah sangat baik!</p>
          )}
          {score >= vocabList.length * 0.6 && score < vocabList.length * 0.8 && (
            <p style={{ fontSize: '1.125rem', color: '#ca8a04', fontWeight: '600', marginBottom: '1rem' }}>👍 Cukup baik! Terus berlatih ya!</p>
          )}
          {score < vocabList.length * 0.6 && (
            <p style={{ fontSize: '1.125rem', color: '#dc2626', fontWeight: '600', marginBottom: '1rem' }}>💪 Jangan menyerah! Coba lagi ya!</p>
          )}
        </div>
        <button
          onClick={restartQuiz}
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            fontSize: '1.25rem',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
        >
          Mulai Lagi
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '3rem', maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2563eb' }}>Kuis Bahasa Mandarin</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '1.5rem' }}>Soal {current + 1} dari {vocabList.length}</p>
          <p style={{ fontSize: '1.5rem', fontWeight: '600' }}>Skor: {score}</p>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '2rem', marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Pilih karakter yang benar berdasarkan pinyin:</p>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem', color: '#3b82f6' }}>{currentWord.pinyin}</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(opt)}
              disabled={showAnswer}
              style={{
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: showAnswer
                  ? opt.hanzi === currentWord.hanzi
                    ? '4px solid #059669'
                    : opt === selected
                    ? '4px solid #dc2626'
                    : '1px solid #d1d5db'
                  : '1px solid #d1d5db',
                fontSize: '2.5rem',
                transition: 'all 0.2s',
                minHeight: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: showAnswer
                  ? opt.hanzi === currentWord.hanzi
                    ? '#d1fae5'
                    : opt === selected
                    ? '#fee2e2'
                    : 'white'
                  : 'white',
                opacity: showAnswer && opt.hanzi !== currentWord.hanzi && opt !== selected ? 0.5 : 1,
                cursor: showAnswer ? 'not-allowed' : 'pointer'
              }}
              onMouseOver={(e) => {
                if (!showAnswer) {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.borderColor = '#3b82f6';
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
              {opt.hanzi}
            </button>
          ))}
        </div>

        {showAnswer && (
          <div style={{ marginBottom: '1.5rem', padding: '1.5rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem' }}>
            <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              <span style={{ color: selected?.hanzi === currentWord.hanzi ? '#059669' : '#dc2626' }}>
                {selected?.hanzi === currentWord.hanzi ? "✓ Benar!" : "✗ Salah"}
              </span>
            </p>
            <p style={{ fontSize: '1.25rem' }}>
              Jawaban benar: <span style={{ fontWeight: 'bold' }}>{currentWord.hanzi}</span> - {currentWord.meaning}
            </p>
          </div>
        )}

        {showAnswer && (
          <button
            onClick={nextQuestion}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              fontSize: '1.25rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
          >
            {current === vocabList.length - 1 ? 'Lihat Hasil' : 'Soal Berikutnya'}
          </button>
        )}
      </div>
    </div>
  );
}