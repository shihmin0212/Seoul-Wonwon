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
    });
  }
}

// --- Itinerary Data (Translated & Integrated) ---
const itinerary = [
  {
    day: 1,
    date: '2026.04.30',
    title: '抵達首爾：大師序章',
    events: [
      {
        time: '12:55',
        title: 'TPE 桃園出發',
        location: '台灣桃園國際機場',
        description: '啟程前往首爾，準備開啟美食與時尚的巔峰對決。',
        type: 'flight'
      },
      {
        time: '16:30',
        title: '抵達 ICN 仁川機場',
        location: '仁川國際機場',
        description: '辦理入境手續後，搭乘機場鐵路或巴士前往市區。',
        type: 'arrival'
      },
      {
        time: '18:30',
        title: '廣藏市場 (光之對決)',
        location: '서울특별시 종로구 예지동 2-1',
        description: '廣藏市場 (광장시장) - 體驗最道地的市場小吃競爭。',
        type: 'food'
      },
      {
        time: '20:30',
        title: '樂天超市 Zettaplex',
        location: '서울특별시 중구 봉래동2가 122-11',
        description: '樂天超市 Zettaplex 首爾站店 (롯데마트 제타플렉스 서울역점) - 重裝掃貨首選。',
        type: 'shopping'
      }
    ]
  },
  {
    day: 2,
    date: '2026.05.01',
    title: '弘大/合井：潮流與料理的激戰',
    events: [
      {
        time: '10:30',
        title: 'Rudebekia 早午餐',
        location: '서울특별시 종로구 세종로 100 1樓 別館',
        description: 'Rudebekia Brunch (루드베키아브런치) - 在光化門開啟優雅早晨。',
        type: 'food'
      },
      {
        time: '13:00',
        title: '弘大潮流購物巡禮',
        location: '서울특별시 마포구 동교동 162-5',
        description: 'Musinsa Standard 弘大店 (무신사 스탠다드 홍대점)、AK PLAZA 弘大。',
        type: 'shopping'
      },
      {
        time: '14:30',
        title: '二次元與玩具探索',
        location: '서울특별시 마포구 서교동 330-13',
        description: 'Ducky World (더키월드)、JS Store (제이에스스토어)、POCA SPOT (POCA SPOT Hongdae)。',
        type: 'tour'
      },
      {
        time: '16:00',
        title: 'Osteria Sam Kim (白匙名廚)',
        location: '서울특별시 마포구 합정동 386-37 A棟 2樓',
        description: 'Osteria Sam Kim (오스테리아샘킴) - 《黑白大廚》白匙名廚 Sam Kim 的經典西餐。',
        type: 'food'
      },
      {
        time: '19:00',
        title: 'Dinner Showdown: 宏大烤肉',
        location: '서울특별시 마포구 서교동 355-25 2樓',
        description: 'Woohwa 弘大總店 (우화 홍대본점) 或 Gitdeul 弘大總店 (깃뜰 홍대본점) 的頂級烤肉體驗。',
        image: 'bbq.png',
        type: 'food'
      }
    ]
  },
  {
    day: 3,
    date: '2026.05.02',
    title: '聖水洞：設計感與溫度的融合',
    events: [
      {
        time: '11:00',
        title: '無垢屋 人蔘雞湯',
        location: '서울특별시 성동구 성수동2가 277-50 103號',
        description: 'Muguok 聖水店 (무구옥 성수점) - 溫補雞肉料理，大廚推薦。',
        type: 'food'
      },
      {
        time: '13:30',
        title: '聖水大林倉庫 (時尚地標)',
        location: '서울특별시 성동구 성수동2가 322-13',
        description: 'Musinsa Store 聖水大林倉庫 (무신사 스토어 성수 대림창고)。',
        type: 'shopping'
      },
      {
        time: '15:30',
        title: 'Maman Gelato 甜點',
        location: '서울특별시 성동구 성수동2가 315-18 1樓',
        description: 'Maman Gelato 聖水店 (마망젤라또 성수점) - 極致口感的對決。',
        image: 'icecream.png',
        type: 'food'
      },
      {
        time: '18:30',
        title: '鮮彩 聖水 (韓式美學)',
        location: '서울특별시 성동구 성수동1가 656-881 B1',
        description: 'Seonchae Seongsu (선채 성수) - 高質感的精緻韓食。',
        type: 'food'
      }
    ]
  },
  {
    day: 4,
    date: '2026.05.03',
    title: '延南/西橋：隱藏版與香氛',
    events: [
      {
        time: '11:00',
        title: 'Youssoful 香氛巡禮',
        location: '서울특별시 마포구 동교동 113-29',
        description: 'Youssoful 延南店 (유쏘풀 연남점) - 大受好評的 4min 香水。',
        type: 'tour'
      },
      {
        time: '14:00',
        title: '文具與家飾質感行',
        location: '서울특별시 마포구 서교동 333-1',
        description: 'Kit Better 旗艦店 (키트베러)、Archive 家飾 (악하입으)。',
        type: 'shopping'
      },
      {
        time: '16:00',
        title: 'CIH SHOP K-Books',
        location: '서울특별시 마포구 동교동 159-5 케이스퀘어 B1',
        description: 'CIH SHOP K-Books (케이북스) - 韓流、動漫與書籍。',
        type: 'tour'
      }
    ]
  },
  {
    day: 5,
    date: '2026.05.04',
    title: '歸途：餘味無窮',
    events: [
      {
        time: '10:00',
        title: '最後採買',
        location: '首爾站/樂天超市',
        description: '補齊所有大廚等級的伴手禮。',
        type: 'shopping'
      },
      {
        time: '13:50',
        title: 'ICN 機場出發',
        location: '仁川國際機場',
        description: '帶著滿滿的黑白對決回憶返抵台北。',
        type: 'flight'
      },
      {
        time: '15:30',
        title: '抵達 TPE 桃園',
        location: '桃園國際機場',
        description: '旅程終章，期待下次對戰。',
        type: 'arrival'
      }
    ]
  }
];

// --- Rendering Logic ---
const mainContent = document.getElementById('main-content');
const navItems = document.querySelectorAll('.nav-item');

function getNaverUrl(query) {
  return `https://m.map.naver.com/search2/search.naver?query=${encodeURIComponent(query)}`;
}

function renderItinerary() {
  let html = `
    <div class="hero-section">
      <img src="hero.png" class="hero-image" alt="Seoul">
      <div class="hero-overlay">
        <h2 style="font-family: 'Outfit'; letter-spacing: 2px;">SEOUL WONWON 2026</h2>
      </div>
    </div>
    <div class="itinerary-container">
  `;

  itinerary.forEach(day => {
    html += `
      <div class="day-section" style="margin-bottom: 3rem;">
        <div class="day-header">
          <div class="day-number">D0${day.day}</div>
          <div class="day-info">
            <h2>${day.title}</h2>
            <p style="font-size: 0.75rem; opacity: 0.6;">${day.date}</p>
          </div>
        </div>
        <div class="events-grid">
          ${day.events.map(event => `
            <div class="event-card">
              <span class="event-time">${event.time}</span>
              <span class="tag" style="font-size:0.6rem; border: 1px solid var(--text); padding: 2px 6px; margin-left: 10px; border-radius: 4px; opacity: 0.7;">${event.type}</span>
              <h3 class="event-title" style="margin-top: 0.5rem;">${event.title}</h3>
              <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.75rem;">${event.location}</p>
              ${event.image ? `<img src="${event.image}" class="event-image">` : ''}
              <p style="font-size: 0.85rem; line-height: 1.6; opacity: 0.9;">${event.description}</p>
              <div style="margin-top: 1.25rem;">
                <a href="${getNaverUrl(event.location)}" target="_blank" class="btn-naver">打開 NAVER MAP</a>
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
  mainContent.innerHTML = `
    <div class="itinerary-container">
      <div class="flight-card">
        <h3 style="text-transform: uppercase; margin-bottom: 1rem;">白匙般的舒適去程</h3>
        <p style="font-size: 0.7rem; opacity: 0.6;">2026.04.30 (星期四)</p>
        <div class="flight-row" style="margin-top: 1rem;">
          <div class="airport"><strong>TPE</strong><div style="font-size: 1.25rem; font-weight: 800;">12:55</div></div>
          <div style="opacity: 0.3;">✈️</div>
          <div class="airport"><strong>ICN</strong><div style="font-size: 1.25rem; font-weight: 800;">16:30</div></div>
        </div>
      </div>
      <div class="flight-card">
        <h3 style="text-transform: uppercase; margin-bottom: 1rem;">黑匙般的精準回程</h3>
        <p style="font-size: 0.7rem; opacity: 0.6;">2026.05.04 (星期一)</p>
        <div class="flight-row" style="margin-top: 1rem;">
          <div class="airport"><strong>ICN</strong><div style="font-size: 1.25rem; font-weight: 800;">13:50</div></div>
          <div style="opacity: 0.3;">✈️</div>
          <div class="airport"><strong>TPE</strong><div style="font-size: 1.25rem; font-weight: 800;">15:30</div></div>
        </div>
      </div>
    </div>
  `;
}

function renderInfo() {
  mainContent.innerHTML = `
    <div class="itinerary-container">
      <div class="event-card">
        <h2 style="margin-bottom: 1rem;">主題餐飲對決</h2>
        <div style="margin-bottom: 1.5rem;">
          <strong style="color: #60a5fa;">Osteria Sam Kim</strong>
          <p style="font-size: 0.85rem; opacity: 0.8; margin-top: 0.25rem;">《黑白大廚》白匙名廚 Sam Kim 經營。結合義式經典與韓式現代感的多層次對決。</p>
        </div>
        <div style="margin-bottom: 1.5rem;">
          <strong style="color: #f87171;">無垢屋 Muguok</strong>
          <p style="font-size: 0.85rem; opacity: 0.8; margin-top: 0.25rem;">聖水洞必訪，傳說如大廚般對人蔘雞湯的極致堅持。</p>
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
