import './style.css'

// --- Theme Management ---
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'black';
  document.body.setAttribute('data-theme', savedTheme);
  
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'black' ? 'white' : 'black';
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Feedback animation
      themeBtn.style.transform = `scale(0.9) rotate(${newTheme === 'white' ? '180deg' : '0deg'})`;
      setTimeout(() => {
        themeBtn.style.transform = `rotate(${newTheme === 'white' ? '180deg' : '0deg'})`;
      }, 500);
    });
  }
}

// --- Itinerary Data ---
const itinerary = [
  {
    day: 1,
    date: '2026.04.30',
    title: '啟程：黑白對決序幕',
    events: [
      {
        time: '12:55',
        title: 'TPE 桃園出發',
        location: '台灣桃園國際機場',
        description: '帶著對美食的朝聖之心，前往首爾。',
        type: 'flight'
      },
      {
        time: '16:30',
        title: '抵達 ICN',
        location: '仁川國際機場',
        description: '辦理入境，直奔首爾市區。',
        type: 'arrival'
      },
      {
        time: '20:00',
        title: '晚餐：傳統滋味（鰻魚）',
        location: '首爾精選鰻魚店',
        description: 'Day1 晚上 鰻魚 - 體驗如《黑白大廚》般的選材堅持。',
        image: '/eel.png',
        type: 'food'
      }
    ]
  },
  {
    day: 2,
    date: '2026.05.01',
    title: '挑戰：市場與街頭的洗禮',
    events: [
      {
        time: '11:00',
        title: '廣藏市場',
        location: '廣藏市場',
        description: '體驗最地道的市場競爭力。',
        type: 'food'
      },
      {
        time: '14:00',
        title: '明洞商圈巡禮',
        location: '明洞',
        description: '首爾流行的震央。',
        type: 'tour'
      },
      {
        time: '18:00',
        title: '晚餐：晚孝男',
        location: '首爾選品店',
        description: '品味如孫鍾元大師推薦般的驚艷料理。',
        type: 'food'
      },
      {
        time: '20:30',
        title: '首爾站：樂天超市',
        location: '樂天超市',
        description: '採購如大廚備餐般的頂級素材。',
        type: 'shopping'
      }
    ]
  },
  {
    day: 3,
    date: '2026.05.02',
    title: '巔峰：孫鍾元大師的聖水風情',
    events: [
      {
        time: '14:00',
        title: '聖水洞散策',
        location: '聖水洞',
        description: '探索新舊交織的建築藝術。',
        type: 'tour'
      },
      {
        time: '15:30',
        title: '聖水洞精緻冰淇淋',
        location: '聖水洞',
        description: '必吃的口感與美感對決。',
        image: '/icecream.png',
        type: 'food'
      },
      {
        time: '19:00',
        title: '弘大終極烤肉對決',
        location: '弘大烤肉店',
        description: '挑選最符合您大廚味蕾的 BBQ。',
        image: '/bbq.png',
        type: 'food'
      }
    ]
  },
  {
    day: 4,
    date: '2026.05.03',
    title: '留白：隱藏版美食清單',
    events: [
      {
        time: 'All Day',
        title: '尋訪孫鍾元名店',
        location: '首爾',
        description: '根據大師推薦，探索首爾各地的驚喜。',
        type: 'tour'
      }
    ]
  },
  {
    day: 5,
    date: '2026.05.04',
    title: '謝幕：歸國後的餘味',
    events: [
      {
        time: '13:50',
        title: 'ICN 出發',
        location: '仁川國際機場',
        description: '帶著首爾的美味記憶返航。',
        type: 'flight'
      },
      {
        time: '15:30',
        title: '抵達 TPE',
        location: '桃園國際機場',
        description: '旅程圓滿落幕。',
        type: 'arrival'
      }
    ]
  }
];

const flights = [
  {
    id: 1,
    title: '去程：白匙水準的服務',
    from: 'TPE',
    to: 'ICN',
    depTime: '12:55',
    arrTime: '16:30',
    date: '2026.04.30'
  },
  {
    id: 2,
    title: '回程：黑匙堅持的分秒',
    from: 'ICN',
    to: 'TPE',
    depTime: '13:50',
    arrTime: '15:30',
    date: '2026.05.04'
  }
];

// --- Rendering Logic ---
const mainContent = document.getElementById('main-content');
const navItems = document.querySelectorAll('.nav-item');

function getNaverUrl(query) {
  return `https://m.map.naver.com/search2/search.naver?query=${encodeURIComponent(query)}`;
}

function renderItinerary() {
  let html = `<div class="itinerary-container">`;

  itinerary.forEach(day => {
    html += `
      <div class="day-section">
        <div class="day-header">
          <div class="day-number">0${day.day}</div>
          <div class="day-info">
            <h2>${day.title}</h2>
            <p style="font-size: 0.75rem; opacity: 0.7;">${day.date}</p>
          </div>
        </div>
        <div class="events-grid">
          ${day.events.map(event => `
            <div class="event-card">
              <span class="event-time">${event.time} | ${event.type}</span>
              <h3 class="event-title">${event.title}</h3>
              <div class="event-location">📍 ${event.location}</div>
              ${event.image ? `<img src="${event.image}" class="event-image">` : ''}
              <p style="font-size: 0.85rem; line-height: 1.6; opacity: 0.8;">${event.description}</p>
              <div style="margin-top: 1.5rem;">
                <a href="${getNaverUrl(event.location)}" target="_blank" class="btn-naver">GO TO NAVER MAP</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  html += '</div>';
  mainContent.innerHTML = html;
}

function renderFlights() {
  let html = `<div class="itinerary-container">`;
  flights.forEach(f => {
    html += `
      <div class="flight-card">
        <h3 style="margin-bottom: 1.5rem; text-transform: uppercase;">${f.title}</h3>
        <p style="font-size: 0.75rem; margin-bottom: 1rem; opacity: 0.6;">${f.date}</p>
        <div class="flight-row">
          <div class="airport">
            <div class="airport-code">${f.from}</div>
            <div style="font-weight: 700;">${f.depTime}</div>
          </div>
          <div style="font-size: 1.5rem; opacity: 0.3;">✈️</div>
          <div class="airport">
            <div class="airport-code">${f.to}</div>
            <div style="font-weight: 700;">${f.arrTime}</div>
          </div>
        </div>
      </div>
    `;
  });
  html += '</div>';
  mainContent.innerHTML = html;
}

function renderInfo() {
  mainContent.innerHTML = `
    <div class="itinerary-container">
      <div class="event-card">
        <h2 style="margin-bottom: 1rem;">孫鍾元大師推薦 (Grand Master Won)</h2>
        <p style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 1.5rem;">
          向《黑白大廚》孫鍾元主廚致敬。本次旅程的部分靈魂源於他對料理極致的追求。
        </p>
        <div style="display: grid; gap: 1rem;">
          <a href="https://www.instagram.com/sung_joon_won/" target="_blank" class="btn-naver">FOLLOW MASTER WON</a>
        </div>
      </div>
    </div>
  `;
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderItinerary();
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const view = item.getAttribute('data-view');
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
      
      if (view === 'itinerary') renderItinerary();
      if (view === 'flights') renderFlights();
      if (view === 'info') renderInfo();
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});
