import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'ภูริณัฐ พุ่มทรา', nickname: 'มิ้ว',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['เธอ', 'จระเข้'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่

 
  { id: 2, name: 'สมชาย ใจร้าย', nickname: 'เมฆ',
    major: 'วิทยาการคอมพิวเตอร์', favorites: ['กัญชา', 'หมา'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
  { id: 3, name: 'สมศักดิ์ ใจป๋า', nickname: 'ต้นไม้',
    major: 'วิทยาการข้อมูล', favorites: ['กาแฟ', 'กระทิง'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];
function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;