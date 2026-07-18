// ── DATA ──
const playlists = [
  { id: 1, name: "Liked Songs", meta: "Playlist • 0 songs", emoji: "💜", bg: "#5038a0", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "Chill Vibes", meta: "Playlist • Ashmit", emoji: "🌊", bg: "#1e3a5f", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "Gaming Hits", meta: "Playlist • Ashmit", emoji: "🎮", bg: "#1a4731", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80" },
  { id: 4, name: "Late Night Drive", meta: "Playlist • Ashmit", emoji: "🌃", bg: "#2d1b4e", image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=600&q=80" },
  { id: 5, name: "Workout Mode", meta: "Playlist • Ashmit", emoji: "⚡", bg: "#4a1f1f", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80" },
  { id: 6, name: "Daily Mix 1", meta: "Spotify • Made for you", emoji: "🎵", bg: "#1a3a4a", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80" },
  { id: 7, name: "Discover Weekly", meta: "Spotify • Made for you", emoji: "🔮", bg: "#2d4a1f", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80" },
];

const quickPicks = [
  { name: "Liked Songs", emoji: "💜", bg: "#5038a0", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80" },
  { name: "Daily Mix 1", emoji: "🎵", bg: "#1e3a5f", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80" },
  { name: "Chill Vibes", emoji: "🌊", bg: "#1a4731", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80" },
  { name: "Gaming Hits", emoji: "🎮", bg: "#1f2a4a", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80" },
  { name: "Late Night Drive", emoji: "🌃", bg: "#2d1b4e", image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=600&q=80" },
  { name: "Discover Weekly", emoji: "🔮", bg: "#4a1f1f", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80" },
];

const recentlyPlayed = [
  { name: "Blinding Lights", artist: "The Weeknd", emoji: "🌆", bg: "#8b1a1a", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80" },
  { name: "Starboy", artist: "The Weeknd", emoji: "⭐", bg: "#1a1a4a", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" },
  { name: "As It Was", artist: "Harry Styles", emoji: "🌸", bg: "#4a1a3a", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80" },
  { name: "Flowers", artist: "Miley Cyrus", emoji: "🌻", bg: "#3a4a1a", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80" },
  { name: "Anti-Hero", artist: "Taylor Swift", emoji: "🦸", bg: "#1a3a4a", image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=600&q=80" },
];

const madeForYou = [
  { name: "Daily Mix 1", artist: "Post Malone, Drake, Travis Scott", emoji: "🎯", bg: "#3a1a4a", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80" },
  { name: "Daily Mix 2", artist: "The Weeknd, Doja Cat, SZA", emoji: "🎭", bg: "#1a4a3a", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80" },
  { name: "Discover Weekly", artist: "Your weekly mixtape", emoji: "🔮", bg: "#4a3a1a", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80" },
  { name: "Release Radar", artist: "Catch all the latest music", emoji: "📡", bg: "#1a1a4a", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80" },
  { name: "Time Capsule", artist: "We dug up some songs for you", emoji: "⏰", bg: "#4a1a1a", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80" },
];

const trending = [
  { name: "Espresso", artist: "Sabrina Carpenter", emoji: "☕", bg: "#5a3a1a", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80" },
  { name: "Not Like Us", artist: "Kendrick Lamar", emoji: "👑", bg: "#1a5a3a", image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=600&q=80" },
  { name: "Die With A Smile", artist: "Lady Gaga & Bruno Mars", emoji: "💫", bg: "#3a1a5a", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80" },
  { name: "APT.", artist: "ROSE & Bruno Mars", emoji: "🌹", bg: "#5a1a3a", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80" },
  { name: "luther", artist: "Kendrick Lamar & SZA", emoji: "🎤", bg: "#1a3a5a", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80" },
];

const genres = [
  { name: "Pop", emoji: "🎤", bg: "#e61e32" },
  { name: "Hip-Hop", emoji: "🎧", bg: "#8d67ab" },
  { name: "Electronic", emoji: "⚡", bg: "#0d73ec" },
  { name: "R&B", emoji: "🌙", bg: "#e8115b" },
  { name: "Rock", emoji: "🎸", bg: "#e91429" },
  { name: "Gaming", emoji: "🎮", bg: "#148a08" },
  { name: "Chill", emoji: "🌊", bg: "#1e3264" },
  { name: "Workout", emoji: "💪", bg: "#e91429" },
  { name: "Anime", emoji: "✨", bg: "#503750" },
  { name: "Lo-Fi", emoji: "☕", bg: "#477d95" },
  { name: "Jazz", emoji: "🎷", bg: "#ba5d07" },
  { name: "K-Pop", emoji: "🌸", bg: "#e8115b" },
];

const tracks = [
  { name: "Blinding Lights", artist: "The Weeknd", emoji: "🌆", bg: "#8b1a1a", duration: 200, image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { name: "Starboy", artist: "The Weeknd", emoji: "⭐", bg: "#1a1a4a", duration: 231, image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { name: "As It Was", artist: "Harry Styles", emoji: "🌸", bg: "#4a1a3a", duration: 167, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { name: "Flowers", artist: "Miley Cyrus", emoji: "🌻", bg: "#3a4a1a", duration: 200, image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { name: "Anti-Hero", artist: "Taylor Swift", emoji: "🦸", bg: "#1a3a4a", duration: 200, image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { name: "Espresso", artist: "Sabrina Carpenter", emoji: "☕", bg: "#5a3a1a", duration: 175, image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { name: "Not Like Us", artist: "Kendrick Lamar", emoji: "👑", bg: "#1a5a3a", duration: 274, image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
];

const STORAGE_KEY = 'spotify-liked-tracks';

// ── STATE ──
let currentTrack = null;
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let progressTimer = null;
let elapsed = 0;
let volume = 0.7;
let isMuted = false;
let isDraggingVolume = false;
let likedTracks = [];

try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  likedTracks = Array.isArray(saved) ? saved : [];
} catch {
  likedTracks = [];
}

// ── DOM REFS ──
const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const progressFill = document.getElementById('progressFill');
const progressThumb = document.getElementById('progressThumb');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');
const playerSong = document.getElementById('playerSong');
const playerArtist = document.getElementById('playerArtist');
const playerArt = document.getElementById('playerArt');
const heartBtn = document.getElementById('heartBtn');
const npToggle = document.getElementById('npToggle');
const nowPlayingBar = document.getElementById('nowPlayingBar');
const closeNp = document.getElementById('closeNp');
const npSong = document.getElementById('npSong');
const npArtist = document.getElementById('npArtist');
const npArt = document.getElementById('npArt');
const volBar = document.getElementById('volBar');
const volFill = document.getElementById('volFill');
const volThumb = document.getElementById('volThumb');
const muteBtn = document.getElementById('muteBtn');
const searchInput = document.getElementById('searchPageInput');
const searchResults = document.getElementById('searchResults');
const npLike = document.getElementById('npLike');

function artStyle(item) {
  if (item?.image) {
    return `background-image:url('${item.image}'); background-color:${item.bg || '#121212'}; background-size:cover; background-position:center;`;
  }
  return `background:${item?.bg || '#121212'};`;
}

function getTrackIndexByName(name, artist) {
  return tracks.findIndex(track => track.name === name && track.artist === artist);
}

function isTrackLiked(track) {
  if (!track) return false;
  return likedTracks.some(saved => saved.name === track.name && saved.artist === track.artist);
}

function saveLikedTracks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(likedTracks));
}

function updateLikeButtons() {
  const liked = isTrackLiked(currentTrack);
  heartBtn.classList.toggle('liked', liked);
  heartBtn.textContent = liked ? '♥' : '♡';
  npLike.classList.toggle('liked', liked);
}

function toggleLike(track) {
  if (!track) return;
  const exists = likedTracks.some(saved => saved.name === track.name && saved.artist === track.artist);
  if (exists) {
    likedTracks = likedTracks.filter(saved => saved.name !== track.name || saved.artist !== track.artist);
  } else {
    likedTracks.push({ ...track });
  }
  saveLikedTracks();
  updateLikeButtons();
  renderPlaylists();
  renderLibrary();
}

// ── RENDER SIDEBAR PLAYLISTS ──
function renderPlaylists() {
  const list = document.getElementById('playlistList');
  const likedMeta = likedTracks.length ? `${likedTracks.length} song${likedTracks.length === 1 ? '' : 's'}` : '0 songs';
  const items = playlists.map(p => p.name === 'Liked Songs' ? { ...p, meta: `Playlist • ${likedMeta}` } : p);

  list.innerHTML = items.map(p => `
    <div class="playlist-item" onclick="playTrack(${getTrackIndexByName(p.name, p.artist || '') >= 0 ? getTrackIndexByName(p.name, p.artist || '') : 0})">
      <div class="playlist-art" style="${artStyle(p)}">${p.image ? '' : p.emoji}</div>
      <div class="playlist-info">
        <p class="playlist-name">${p.name}</p>
        <p class="playlist-meta">${p.meta}</p>
      </div>
    </div>
  `).join('');
}

// ── RENDER HOME ──
function renderHome() {
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  document.getElementById('greeting').textContent = greet;

  const qp = document.getElementById('quickPicks');
  qp.innerHTML = quickPicks.map((q, i) => `
    <div class="quick-card" onclick="playTrack(${i % tracks.length})">
      <div class="quick-art" style="${artStyle(q)}">${q.image ? '' : q.emoji}</div>
      <span class="quick-name">${q.name}</span>
      <span class="quick-play">▶</span>
    </div>
  `).join('');

  renderCards('recentlyPlayed', recentlyPlayed);
  renderCards('madeForYou', madeForYou);
  renderCards('trending', trending);
}

function renderCards(id, data) {
  const el = document.getElementById(id);
  el.innerHTML = data.map((item, i) => {
    const targetIndex = getTrackIndexByName(item.name, item.artist);
    return `
      <div class="music-card" onclick="playTrack(${targetIndex >= 0 ? targetIndex : i % tracks.length})">
        <div class="card-art" style="${artStyle(item)}">${item.image ? '' : item.emoji}<span class="card-play">▶</span></div>
        <p class="card-name">${item.name}</p>
        <p class="card-desc">${item.artist}</p>
      </div>
    `;
  }).join('');
}

// ── RENDER SEARCH ──
function renderSearch() {
  const query = searchInput.value.trim().toLowerCase();
  const grid = document.getElementById('genreGrid');
  const subtitle = document.querySelector('.section-subtitle');

  if (query) {
    const results = tracks.filter(track => `${track.name} ${track.artist}`.toLowerCase().includes(query));
    searchResults.innerHTML = results.length
      ? results.map((track, idx) => `
          <div class="music-card" onclick="playTrack(${tracks.findIndex(t => t.name === track.name && t.artist === track.artist)})">
            <div class="card-art" style="${artStyle(track)}"><span class="card-play">▶</span></div>
            <p class="card-name">${track.name}</p>
            <p class="card-desc">${track.artist}</p>
          </div>
        `).join('')
      : '<div class="search-empty">No tracks matched your search.</div>';
    grid.classList.add('hidden');
    searchResults.classList.remove('hidden');
    subtitle.textContent = 'Search results';
  } else {
    grid.innerHTML = genres.map(g => `
      <div class="genre-card" style="background:${g.bg}">
        <span class="genre-name">${g.name}</span>
        <span class="genre-emoji">${g.emoji}</span>
      </div>
    `).join('');
    grid.classList.remove('hidden');
    searchResults.classList.add('hidden');
    searchResults.innerHTML = '';
    subtitle.textContent = 'Browse all';
  }
}

// ── RENDER LIBRARY ──
function renderLibrary() {
  const list = document.getElementById('libraryList');
  const items = likedTracks.length ? likedTracks : playlists;

  list.innerHTML = items.map((item, i) => {
    const targetIndex = getTrackIndexByName(item.name, item.artist);
    return `
      <div class="library-item" onclick="playTrack(${targetIndex >= 0 ? targetIndex : i % tracks.length})">
        <div class="lib-art" style="${artStyle(item)}">${item.image ? '' : item.emoji || '🎵'}</div>
        <div class="lib-info">
          <p class="lib-name">${item.name}</p>
          <p class="lib-meta">${item.artist ? item.artist : item.meta}</p>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.lib-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lib-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// ── PAGE NAVIGATION ──
const pages = {
  home: document.getElementById('homePage'),
  search: document.getElementById('searchPage'),
  library: document.getElementById('libraryPage'),
};

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const page = item.dataset.page;
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    Object.values(pages).forEach(p => p.classList.add('hidden'));
    pages[page].classList.remove('hidden');

    const gradients = {
      home: '#1a1a2e',
      search: '#1a2e1a',
      library: '#2e1a1a',
    };
    document.querySelector('.content-wrap').style.background =
      `linear-gradient(180deg, ${gradients[page]} 0%, #121212 40%)`;
  });
});

// ── TRACK PLAYER ──
function updateTrackUI() {
  if (!currentTrack) return;
  playerSong.textContent = currentTrack.name;
  playerArtist.textContent = currentTrack.artist;
  playerArt.style.cssText = `background:${currentTrack.bg}; ${currentTrack.image ? `background-image:url('${currentTrack.image}'); background-size:cover; background-position:center;` : ''}`;
  npSong.textContent = currentTrack.name;
  npArtist.textContent = currentTrack.artist;
  npArt.style.cssText = `background:${currentTrack.bg}; ${currentTrack.image ? `background-image:url('${currentTrack.image}'); background-size:cover; background-position:center;` : ''}`;

  const duration = currentTrack.duration || audio.duration || 0;
  totalTimeEl.textContent = fmtTime(Math.floor(duration));
  updateLikeButtons();
}

function playTrack(index) {
  currentTrackIndex = index;
  currentTrack = tracks[index] || tracks[0];
  elapsed = 0;
  audio.src = currentTrack.audio;
  audio.currentTime = 0;
  audio.load();
  updateTrackUI();
  if (isPlaying) {
    audio.play().catch(() => {});
  } else {
    audio.pause();
  }
}

function setPlaying(state) {
  isPlaying = state;
  if (state) {
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    startProgress();
  } else {
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    stopProgress();
  }
}

// ── PROGRESS ──
function startProgress() {
  stopProgress();
  progressTimer = setInterval(() => {
    if (!audio || !currentTrack) return;
    elapsed = Math.floor(audio.currentTime);
    updateProgress();
    if (audio.ended) {
      if (isRepeat) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else {
        nextTrack();
      }
    }
  }, 250);
}

function stopProgress() {
  if (progressTimer) {
    clearInterval(progressTimer);
    progressTimer = null;
  }
}

function updateProgress() {
  if (!currentTrack) return;
  const total = audio.duration || currentTrack.duration || 0;
  if (!total) return;
  const pct = (elapsed / total) * 100;
  progressFill.style.width = `${pct}%`;
  progressThumb.style.left = `${pct}%`;
  currentTimeEl.textContent = fmtTime(elapsed);
}

function fmtTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

progressBar.addEventListener('click', (e) => {
  if (!currentTrack) return;
  const rect = progressBar.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  const total = audio.duration || currentTrack.duration || 0;
  audio.currentTime = Math.max(0, Math.min(total, pct * total));
  elapsed = Math.floor(audio.currentTime);
  updateProgress();
});

// ── CONTROLS ──
playBtn.addEventListener('click', () => {
  if (!currentTrack) {
    playTrack(0);
    setPlaying(true);
    audio.play().catch(() => {});
    return;
  }

  if (audio.paused) {
    audio.play().then(() => setPlaying(true)).catch(() => {});
  } else {
    audio.pause();
    setPlaying(false);
  }
});

prevBtn.addEventListener('click', () => prevTrack());
nextBtn.addEventListener('click', () => nextTrack());

function prevTrack() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    elapsed = 0;
    updateProgress();
    return;
  }
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  playTrack(currentTrackIndex);
  audio.play().catch(() => {});
  setPlaying(true);
}

function nextTrack() {
  if (isShuffle) {
    currentTrackIndex = Math.floor(Math.random() * tracks.length);
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  }
  playTrack(currentTrackIndex);
  audio.play().catch(() => {});
  setPlaying(true);
}

shuffleBtn.addEventListener('click', () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle('active', isShuffle);
});

repeatBtn.addEventListener('click', () => {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle('active', isRepeat);
});

heartBtn.addEventListener('click', () => {
  if (currentTrack) toggleLike(currentTrack);
});

npLike.addEventListener('click', () => {
  if (currentTrack) toggleLike(currentTrack);
});

// ── VOLUME ──
audio.volume = volume;

function setVolumeFromClientX(clientX) {
  const rect = volBar.getBoundingClientRect();
  const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
  volume = pct / 100;
  isMuted = false;
  audio.muted = false;
  audio.volume = volume;
  updateVolUI();
}

function updateVolUI() {
  const pct = isMuted ? 0 : volume * 100;
  volFill.style.width = `${pct}%`;
  volThumb.style.left = `${pct}%`;
  volBar.style.setProperty('--vol-pct', `${pct}%`);
  volBar.setAttribute('aria-valuenow', Math.round(pct));
  audio.volume = isMuted ? 0 : volume;
  muteBtn.title = isMuted ? 'Unmute' : 'Mute';
}

volBar.addEventListener('pointerdown', (e) => {
  isDraggingVolume = true;
  volBar.classList.add('dragging');
  volBar.setPointerCapture(e.pointerId);
  setVolumeFromClientX(e.clientX);
});

volBar.addEventListener('pointermove', (e) => {
  if (!isDraggingVolume) return;
  setVolumeFromClientX(e.clientX);
});

volBar.addEventListener('pointerup', () => {
  isDraggingVolume = false;
  volBar.classList.remove('dragging');
});

volBar.addEventListener('pointercancel', () => {
  isDraggingVolume = false;
  volBar.classList.remove('dragging');
});

volBar.addEventListener('click', (e) => {
  if (isDraggingVolume) return;
  setVolumeFromClientX(e.clientX);
});

muteBtn.addEventListener('click', () => {
  isMuted = !isMuted;
  audio.muted = isMuted;
  if (!isMuted && volume === 0) {
    volume = 0.7;
  }
  updateVolUI();
});

// ── NOW PLAYING SIDEBAR ──
npToggle.addEventListener('click', () => {
  nowPlayingBar.classList.toggle('hidden');
  const app = document.querySelector('.app');
  if (!nowPlayingBar.classList.contains('hidden')) {
    app.style.gridTemplateColumns = `var(--sidebar-w) 1fr var(--np-w)`;
  } else {
    app.style.gridTemplateColumns = `var(--sidebar-w) 1fr`;
  }
});

closeNp.addEventListener('click', () => {
  nowPlayingBar.classList.add('hidden');
  document.querySelector('.app').style.gridTemplateColumns = `var(--sidebar-w) 1fr`;
});

audio.addEventListener('loadedmetadata', () => {
  if (!currentTrack) return;
  currentTrack.duration = Math.floor(audio.duration);
  totalTimeEl.textContent = fmtTime(currentTrack.duration);
  updateProgress();
});

audio.addEventListener('play', () => setPlaying(true));
audio.addEventListener('pause', () => setPlaying(false));

audio.addEventListener('ended', () => {
  if (isRepeat) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } else {
    nextTrack();
  }
});

searchInput.addEventListener('input', renderSearch);

// ── KEYBOARD SHORTCUTS ──
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  if (e.code === 'Space') { e.preventDefault(); playBtn.click(); }
  if (e.code === 'ArrowRight') nextTrack();
  if (e.code === 'ArrowLeft') prevTrack();
  if (e.code === 'KeyS') shuffleBtn.click();
  if (e.code === 'KeyR') repeatBtn.click();
});

// ── INIT ──
renderPlaylists();
renderHome();
renderSearch();
renderLibrary();
updateVolUI();
updateLikeButtons();
