const CANVAS_W = 1400;
const CANVAS_H = 1000;

const LAYOUT = {
  thumbnail: { x: 31, y: 173, w: 256, h: 256 },
  name: { x: 333, y: 213, w: 500, h: 72 },
  userId: { x: 891, y: 213, w: 464, h: 72 },
  guild: { x: 333, y: 347, w: 500, h: 72 },
  voiceChat: { x: 891, y: 347, w: 464, h: 72 },
  playStyle: { x: 55, y: 478, w: 519, h: 86 },
  playTime: { x: 639, y: 478, w: 335, h: 86 },
  platform: { x: 1028, y: 478, w: 335, h: 86 },
  slot1Character: { x: 52, y: 638, w: 182, h: 177 },
  slot2Character: { x: 223, y: 638, w: 185, h: 177 },
  slot3Character: { x: 399, y: 638, w: 184, h: 177 },
  slot4Character: { x: 573, y: 638, w: 181, h: 177 },
  slot5Weapon: { x: 83, y: 825, w: 113, h: 112 },
  slot6Weapon: { x: 259, y: 825, w: 113, h: 112 },
  slot7Weapon: { x: 433, y: 825, w: 113, h: 112 },
  slot8Weapon: { x: 608, y: 825, w: 113, h: 112 },
  freeComment: { x: 822, y: 641, w: 525, h: 293 }
};

const ASSETS = {
  background: 'assets/backgrounds/nanaori_card.png',
  vc: {
    discord: 'assets/icons/vc_discord.png',
    line: 'assets/icons/vc_line.png',
    ng: 'assets/icons/vc_ng.png'
  },
  playTime: {
    morning: 'assets/icons/playtime_morning.png',
    noon: 'assets/icons/playtime_noon.png',
    evening: 'assets/icons/playtime_evening.png',
    night: 'assets/icons/playtime_night.png'
  },
  platform: {
    android: 'assets/icons/platform_android.png',
    apple: 'assets/icons/platform_apple.png',
    ps5: 'assets/icons/platform_ps5.png',
    steam: 'assets/icons/platform_steam.png'
  }
};

const CHARACTERS = [
  { id: 'elaine', name: 'エレイン', file: 'assets/characters/elaine.png' },
  { id: 'king', name: 'キング', file: 'assets/characters/king.png' },
  { id: 'gilthunder', name: 'ギルサンダー', file: 'assets/characters/gilthunder.png' },
  { id: 'guila', name: 'ギーラ', file: 'assets/characters/guila.png' },
  { id: 'griamore', name: 'グリアモール', file: 'assets/characters/griamore.png' },
  { id: 'jericho', name: 'ジェリコ', file: 'assets/characters/jericho.png' },
  { id: 'slader', name: 'スレイダー', file: 'assets/characters/slader.png' },
  { id: 'tioreh', name: 'ティオレー', file: 'assets/characters/tioreh.png' },
  { id: 'diane', name: 'ディアンヌ', file: 'assets/characters/diane.png' },
  { id: 'daisy', name: 'デイジー', file: 'assets/characters/daisy.png' },
  { id: 'tristan', name: 'トリスタン', file: 'assets/characters/tristan.png' },
  { id: 'drake', name: 'ドレイク', file: 'assets/characters/drake.png' },
  { id: 'doredrin', name: 'ドレドリン', file: 'assets/characters/doredrin.png' },
  { id: 'dreyfus', name: 'ドレファス', file: 'assets/characters/dreyfus.png' },
  { id: 'howzer', name: 'ハウザー', file: 'assets/characters/howzer.png' },
  { id: 'bug', name: 'バグ', file: 'assets/characters/bug.png' },
  { id: 'hendrickson', name: 'ヘンドリクセン', file: 'assets/characters/hendrickson.png' },
  { id: 'manny', name: 'マニー', file: 'assets/characters/manny.png' },
  { id: 'meliodas', name: 'メリオダス', file: 'assets/characters/meliodas.png' }
];

const WEAPONS = [
  { id: 'dual_blades', name: '双剣', file: 'assets/weapons/dual_blades.png' },
  { id: 'long_sword', name: '長剣', file: 'assets/weapons/long_sword.png' },
  { id: 'great_sword', name: '大剣', file: 'assets/weapons/great_sword.png' },
  { id: 'sword_shield', name: '剣盾', file: 'assets/weapons/sword_shield.png' },
  { id: 'axe', name: '斧', file: 'assets/weapons/axe.png' },
  { id: 'lance', name: 'ランス', file: 'assets/weapons/lance.png' },
  { id: 'rapier', name: 'レイピア', file: 'assets/weapons/rapier.png' },
  { id: 'three_section_staff', name: '三節棍', file: 'assets/weapons/three_section_staff.png' },
  { id: 'book', name: 'ブック', file: 'assets/weapons/book.png' },
  { id: 'staff', name: 'スタッフ', file: 'assets/weapons/staff.png' },
  { id: 'wand', name: 'ワンド', file: 'assets/weapons/wand.png' },
  { id: 'gauntlet', name: 'ガントレット', file: 'assets/weapons/gauntlet.png' }
];

const VC_OPTIONS = [
  { id: 'discord', label: 'Discord', icon: ASSETS.vc.discord },
  { id: 'line', label: 'LINE', icon: ASSETS.vc.line },
  { id: 'ng', label: 'NG', icon: ASSETS.vc.ng }
];

const PLAY_STYLE_OPTIONS = [
  { id: 'hardcore', label: 'ガチ勢' },
  { id: 'enjoy', label: 'エンジョイ' },
  { id: 'boss', label: 'ボス戦' },
  { id: 'explore', label: '探索' },
  { id: 'craft', label: 'クラフト' }
];

const PLAY_TIME_OPTIONS = [
  { id: 'morning', label: '朝', icon: ASSETS.playTime.morning },
  { id: 'noon', label: '昼', icon: ASSETS.playTime.noon },
  { id: 'evening', label: '夕方', icon: ASSETS.playTime.evening },
  { id: 'night', label: '夜', icon: ASSETS.playTime.night }
];

const PLATFORM_OPTIONS = [
  { id: 'android', label: 'Android', icon: ASSETS.platform.android },
  { id: 'apple', label: 'Apple', icon: ASSETS.platform.apple },
  { id: 'ps5', label: 'PS5', icon: ASSETS.platform.ps5 },
  { id: 'steam', label: 'Steam', icon: ASSETS.platform.steam }
];

const state = {
  thumbDataUrl: null,
  imageCache: new Map()
};

const canvas = document.getElementById('cardCanvas');
const ctx = canvas.getContext('2d');
const thumbUpload = document.getElementById('thumbUpload');
const nameInput = document.getElementById('nameInput');
const userIdInput = document.getElementById('userIdInput');
const guildInput = document.getElementById('guildInput');
const commentInput = document.getElementById('commentInput');
const vcGroup = document.getElementById('vcGroup');
const playStyleGroup = document.getElementById('playStyleGroup');
const playTimeGroup = document.getElementById('playTimeGroup');
const platformGroup = document.getElementById('platformGroup');
const partyGrid = document.getElementById('partyGrid');
const renderBtn = document.getElementById('renderBtn');
const downloadBtn = document.getElementById('downloadBtn');
const shareBtn = document.getElementById('shareBtn');

function buildSingleChoice(group, name, options) {
  group.innerHTML = options.map(opt => `
    <label class="choice-chip icon">
      <input type="radio" name="${name}" value="${opt.id}" ${opt.id === options[0].id ? 'checked' : ''}>
      <span>
        <img src="${opt.icon}" alt="${opt.label}">
        <small>${opt.label}</small>
      </span>
    </label>
  `).join('');
}

function buildMultiChoice(group, name, options, iconMode = false) {
  group.innerHTML = options.map(opt => `
    <label class="choice-chip ${iconMode ? 'icon' : ''}">
      <input type="checkbox" name="${name}" value="${opt.id}">
      <span>
        ${iconMode ? `<img src="${opt.icon}" alt="${opt.label}"><small>${opt.label}</small>` : opt.label}
      </span>
    </label>
  `).join('');
}

function buildPartyGrid() {
  let html = '';
  for (let i = 1; i <= 4; i += 1) {
    html += `
      <div class="party-row" data-slot="${i}">
        <strong>${i}キャラ目</strong>
        <select class="character-select" data-slot="${i}">
          <option value="">キャラを選択</option>
        </select>
        <select class="weapon-select" data-slot="${i}">
          <option value="">武器を選択</option>
          ${WEAPONS.map(weapon => `<option value="${weapon.id}">${weapon.name}</option>`).join('')}
        </select>
      </div>
    `;
  }
  partyGrid.innerHTML = html;
  refreshCharacterOptions();
}

function getSelectedCharacterIds() {
  return Array.from(document.querySelectorAll('.character-select'))
    .map(select => select.value)
    .filter(Boolean);
}

function refreshCharacterOptions() {
  const selects = Array.from(document.querySelectorAll('.character-select'));
  const selected = getSelectedCharacterIds();

  selects.forEach(select => {
    const current = select.value;
    const usedByOthers = new Set(selected.filter(id => id && id !== current));
    const optionsHtml = ['<option value="">キャラを選択</option>']
      .concat(
        CHARACTERS
          .filter(character => !usedByOthers.has(character.id) || character.id === current)
          .map(character => `<option value="${character.id}" ${character.id === current ? 'selected' : ''}>${character.name}</option>`)
      )
      .join('');
    select.innerHTML = optionsHtml;
  });
}

function selectedRadioValue(name) {
  const checked = document.querySelector(`input[name="${name}"]:checked`);
  return checked ? checked.value : '';
}

function selectedCheckboxValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(input => input.value);
}

function enforceSelectionLimit(name, limit) {
  const inputs = Array.from(document.querySelectorAll(`input[name="${name}"]`));
  inputs.forEach(input => {
    input.addEventListener('change', () => {
      const checked = inputs.filter(item => item.checked);
      if (checked.length > limit) {
        input.checked = false;
      }
      renderCard();
    });
  });
}

function attachLiveRender() {
  [nameInput, userIdInput, guildInput, commentInput].forEach(element => {
    element.addEventListener('input', renderCard);
  });

  document.querySelectorAll('input[name="vc"]').forEach(input => input.addEventListener('change', renderCard));
  document.querySelectorAll('.weapon-select').forEach(select => select.addEventListener('change', renderCard));
  document.querySelectorAll('.character-select').forEach(select => {
    select.addEventListener('change', () => {
      refreshCharacterOptions();
      renderCard();
    });
  });
}

thumbUpload.addEventListener('change', async event => {
  const file = event.target.files?.[0];
  if (!file) {
    state.thumbDataUrl = null;
    renderCard();
    return;
  }
  state.thumbDataUrl = await fileToDataUrl(file);
  renderCard();
});

renderBtn.addEventListener('click', renderCard);
downloadBtn.addEventListener('click', () => {
  renderCard().then(() => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'nanaori_profile_card.png';
    link.click();
  });
});
shareBtn.addEventListener('click', () => {
  const text = '七つの大罪 Origin の自己紹介カードを作成しました。\n#ナナオリ自己紹介カード';
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});

async function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadImage(src) {
  if (!src) return Promise.resolve(null);
  if (state.imageCache.has(src)) return state.imageCache.get(src);

  const promise = new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
  state.imageCache.set(src, promise);
  return promise;
}

function fitTextToSingleLine(text, box, weight = 700, family = '"Noto Sans JP", sans-serif') {
  const value = text || '';
  let fontSize = Math.max(12, Math.floor(box.h * 0.8));
  while (fontSize > 10) {
    ctx.font = `${weight} ${fontSize}px ${family}`;
    if (ctx.measureText(value).width <= box.w) break;
    fontSize -= 1;
  }
  return fontSize;
}

function drawSingleLineText(text, box, options = {}) {
  const value = text || '';
  const color = options.color || '#ffffff';
  const family = options.family || '"Noto Sans JP", sans-serif';
  const weight = options.weight || 700;
  const fontSize = fitTextToSingleLine(value, box, weight, family);
  ctx.save();
  ctx.font = `${weight} ${fontSize}px ${family}`;
  ctx.fillStyle = color;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(value, box.x, box.y + (box.h / 2));
  ctx.restore();
}

function splitLinesByWidth(text, maxWidth, font) {
  const paragraphs = String(text || '').replace(/\r\n/g, '\n').split('\n');
  const lines = [];
  ctx.font = font;

  paragraphs.forEach(paragraph => {
    if (!paragraph) {
      lines.push('');
      return;
    }

    let current = '';
    for (const char of paragraph) {
      const candidate = current + char;
      if (ctx.measureText(candidate).width <= maxWidth || current === '') {
        current = candidate;
      } else {
        lines.push(current);
        current = char;
      }
    }
    if (current) lines.push(current);
  });

  return lines;
}

function findCommentFontSize(text, box) {
  let fontSize = 38;
  while (fontSize >= 12) {
    const font = `700 ${fontSize}px "Noto Sans JP", sans-serif`;
    const lines = splitLinesByWidth(text, box.w, font);
    const lineHeight = Math.ceil(fontSize * 1.28);
    if (lines.length * lineHeight <= box.h) {
      return { fontSize, lines, lineHeight };
    }
    fontSize -= 1;
  }

  const fallbackSize = 12;
  const fallbackFont = `700 ${fallbackSize}px "Noto Sans JP", sans-serif`;
  return {
    fontSize: fallbackSize,
    lines: splitLinesByWidth(text, box.w, fallbackFont),
    lineHeight: Math.ceil(fallbackSize * 1.28)
  };
}

function drawCommentText(text, box) {
  const { fontSize, lines, lineHeight } = findCommentFontSize(text, box);
  ctx.save();
  ctx.font = `700 ${fontSize}px "Noto Sans JP", sans-serif`;
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';

  lines.forEach((line, index) => {
    const y = box.y + index * lineHeight;
    if (y + lineHeight <= box.y + box.h + 1) {
      ctx.fillText(line, box.x, y);
    }
  });
  ctx.restore();
}

function drawContainImage(img, box) {
  if (!img) return;
  const scale = Math.min(box.w / img.width, box.h / img.height);
  const drawW = img.width * scale;
  const drawH = img.height * scale;
  const dx = box.x + (box.w - drawW) / 2;
  const dy = box.y + (box.h - drawH) / 2;
  ctx.drawImage(img, dx, dy, drawW, drawH);
}

function drawCoverImage(img, box) {
  if (!img) return;
  const scale = Math.max(box.w / img.width, box.h / img.height);
  const drawW = img.width * scale;
  const drawH = img.height * scale;
  const dx = box.x + (box.w - drawW) / 2;
  const dy = box.y + (box.h - drawH) / 2;
  ctx.drawImage(img, dx, dy, drawW, drawH);
}

function layoutHorizontalItems(box, count, itemSize) {
  if (count <= 0) return [];
  const gap = count === 1 ? 0 : Math.floor((box.w - itemSize * count) / (count - 1));
  const y = box.y + Math.floor((box.h - itemSize) / 2);
  return Array.from({ length: count }, (_, index) => ({
    x: box.x + index * (itemSize + gap),
    y,
    w: itemSize,
    h: itemSize
  }));
}

function calcItemSize(box, count) {
  if (count <= 0) return 0;
  const maxByHeight = box.h;
  const maxByWidth = Math.floor(box.w / count);
  return Math.max(24, Math.min(maxByHeight, maxByWidth));
}

async function drawIconRow(ids, optionList, box) {
  if (!ids.length) return;
  const options = optionList.filter(option => ids.includes(option.id));
  const itemSize = calcItemSize(box, options.length);
  const slots = layoutHorizontalItems(box, options.length, itemSize);
  const images = await Promise.all(options.map(option => loadImage(option.icon)));
  images.forEach((img, index) => drawContainImage(img, slots[index]));
}

async function drawVcIcon(id, box) {
  const option = VC_OPTIONS.find(item => item.id === id);
  if (!option) return;
  const size = Math.min(box.h, box.w);
  const iconBox = { x: box.x, y: box.y + (box.h - size) / 2, w: size, h: size };
  drawContainImage(await loadImage(option.icon), iconBox);
}

function getPartySelections() {
  return Array.from(document.querySelectorAll('.party-row')).map((row, index) => ({
    slot: index + 1,
    characterId: row.querySelector('.character-select').value,
    weaponId: row.querySelector('.weapon-select').value
  }));
}

async function renderCard() {
  ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

  if (state.thumbDataUrl) {
    drawCoverImage(await loadImage(state.thumbDataUrl), LAYOUT.thumbnail);
  }

  const background = await loadImage(ASSETS.background);
  if (background) ctx.drawImage(background, 0, 0, CANVAS_W, CANVAS_H);

  drawSingleLineText(nameInput.value.trim(), LAYOUT.name, { weight: 900 });
  drawSingleLineText(userIdInput.value.trim(), LAYOUT.userId, { weight: 700 });
  drawSingleLineText(guildInput.value.trim(), LAYOUT.guild, { weight: 700 });

  const playStyles = selectedCheckboxValues('playStyle').map(id => PLAY_STYLE_OPTIONS.find(item => item.id === id)?.label).filter(Boolean);
  drawSingleLineText(playStyles.join(' / '), LAYOUT.playStyle, { weight: 700 });

  await drawVcIcon(selectedRadioValue('vc'), LAYOUT.voiceChat);
  await drawIconRow(selectedCheckboxValues('playTime'), PLAY_TIME_OPTIONS, LAYOUT.playTime);
  await drawIconRow(selectedCheckboxValues('platform'), PLATFORM_OPTIONS, LAYOUT.platform);

  const party = getPartySelections();
  const characterBoxes = [LAYOUT.slot1Character, LAYOUT.slot2Character, LAYOUT.slot3Character, LAYOUT.slot4Character];
  const weaponBoxes = [LAYOUT.slot5Weapon, LAYOUT.slot6Weapon, LAYOUT.slot7Weapon, LAYOUT.slot8Weapon];

  for (let i = 0; i < party.length; i += 1) {
    const entry = party[i];
    const character = CHARACTERS.find(item => item.id === entry.characterId);
    const weapon = WEAPONS.find(item => item.id === entry.weaponId);
    if (character) {
      drawContainImage(await loadImage(character.file), characterBoxes[i]);
    }
    if (weapon) {
      drawContainImage(await loadImage(weapon.file), weaponBoxes[i]);
    }
  }

  drawCommentText(commentInput.value, LAYOUT.freeComment);
}

buildSingleChoice(vcGroup, 'vc', VC_OPTIONS);
buildMultiChoice(playStyleGroup, 'playStyle', PLAY_STYLE_OPTIONS, false);
buildMultiChoice(playTimeGroup, 'playTime', PLAY_TIME_OPTIONS, true);
buildMultiChoice(platformGroup, 'platform', PLATFORM_OPTIONS, true);
buildPartyGrid();
enforceSelectionLimit('playStyle', 2);
enforceSelectionLimit('playTime', 4);
enforceSelectionLimit('platform', 4);
attachLiveRender();
renderCard();
