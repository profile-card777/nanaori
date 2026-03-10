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

const THUMBNAIL_FALLBACKS = [
  'assets/characters/elaine.png',
  'assets/characters/king.png',
  'assets/characters/gilthunder.png',
  'assets/characters/guila.png',
  'assets/characters/griamore.png',
  'assets/characters/jericho.png',
  'assets/characters/slader.png',
  'assets/characters/tioreh.png',
  'assets/characters/diane.png',
  'assets/characters/daisy.png',
  'assets/characters/tristan.png',
  'assets/characters/drake.png',
  'assets/characters/doredrin.png',
  'assets/characters/dreyfus.png',
  'assets/characters/howzer.png',
  'assets/characters/bug.png',
  'assets/characters/hendrickson.png',
  'assets/characters/manny.png',
  'assets/characters/meliodas.png',
  'assets/characters/red-demon.png',
  'assets/characters/gray-demon.png'
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

const ALLOWED_WEAPONS_BY_CHARACTER = {
  elaine: ['wand', 'staff', 'book'],
  king: ['staff', 'book', 'wand'],
  gilthunder: ['long_sword', 'sword_shield', 'lance'],
  guila: ['lance', 'sword_shield', 'rapier'],
  griamore: ['sword_shield', 'three_section_staff', 'gauntlet'],
  jericho: ['dual_blades', 'lance', 'rapier'],
  slader: ['great_sword', 'axe', 'three_section_staff'],
  tioreh: ['wand', 'staff', 'book'],
  diane: ['axe', 'gauntlet', 'three_section_staff'],
  daisy: ['sword_shield', 'book', 'wand'],
  drake: ['great_sword', 'staff', 'long_sword'],
  doredrin: ['sword_shield', 'axe', 'rapier'],
  dreyfus: ['rapier', 'long_sword', 'lance'],
  tristan: ['dual_blades', 'great_sword', 'long_sword'],
  howzer: ['lance', 'gauntlet', 'three_section_staff'],
  bug: ['axe', 'dual_blades', 'book'],
  hendrickson: ['long_sword', 'dual_blades', 'lance'],
  manny: ['staff', 'long_sword', 'dual_blades'],
  meliodas: ['long_sword', 'axe', 'dual_blades']
};

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

const FONT_OPTIONS = [
  { id: 'cool', label: 'かっこいい系', family: '"Orbitron", "Noto Sans JP", sans-serif', weight: 800 },
  { id: 'cute', label: 'かわいい系', family: '"M PLUS Rounded 1c", "Noto Sans JP", sans-serif', weight: 800 },
  { id: 'game', label: 'ゲーム系', family: '"Kaisei Decol", "Noto Sans JP", serif', weight: 700 },
  { id: 'stylish', label: 'おしゃれ系', family: '"Kosugi Maru", "Noto Sans JP", sans-serif', weight: 700 }
];

const TEXT_COLOR_OPTIONS = [
  { id: 'black', label: 'ブラック', color: '#111111' },
  { id: 'blue', label: 'ブルー', color: '#1d54d8' },
  { id: 'red', label: 'レッド', color: '#cf2d2d' },
  { id: 'pink', label: 'ピンク', color: '#ff4da6' },
  { id: 'white', label: 'ホワイト', color: '#ffffff' }
];

const state = {
  thumbDataUrl: null,
  thumbOriginalDataUrl: null,
  thumbCropBox: null,
  thumbCropNatural: null,
  thumbCropDragging: false,
  thumbCropResizing: false,
  thumbCropPointer: null,
  thumbCropStart: null,
  fallbackThumbFile: null,
  imageCache: new Map()
};

const canvas = document.getElementById('cardCanvas');
const ctx = canvas.getContext('2d');

const designSelect = document.getElementById('designSelect');
const thumbUpload = document.getElementById('thumbUpload');
const thumbCropPanel = document.getElementById('thumbCropPanel');
const thumbCropImage = document.getElementById('thumbCropImage');
const thumbCropBox = document.getElementById('thumbCropBox');
const thumbCropApplyBtn = document.getElementById('thumbCropApplyBtn');
const thumbCropCancelBtn = document.getElementById('thumbCropCancelBtn');
const nameInput = document.getElementById('nameInput');
const userIdInput = document.getElementById('userIdInput');
const guildInput = document.getElementById('guildInput');
const commentInput = document.getElementById('commentInput');
const vcGroup = document.getElementById('vcGroup');
const playStyleGroup = document.getElementById('playStyleGroup');
const playTimeGroup = document.getElementById('playTimeGroup');
const platformGroup = document.getElementById('platformGroup');
const fontGroup = document.getElementById('fontGroup');
const textColorGroup = document.getElementById('textColorGroup');
const partyGrid = document.getElementById('partyGrid');
const renderBtn = document.getElementById('renderBtn');
const downloadBtn = document.getElementById('downloadBtn');
const shareBtn = document.getElementById('shareBtn');
const iosNote = document.getElementById('iosNote');

function buildVcChoice(group, options) {
  group.innerHTML = options.map(opt => `
    <label class="choice-chip icon">
      <input type="checkbox" name="vc" value="${opt.id}">
      <span>
        <img src="${opt.icon}" alt="${opt.label}">
        <small>${opt.label}</small>
      </span>
    </label>
  `).join('');
}

function buildMultiChoice(group, name, options, iconMode = false) {
  group.innerHTML = options.map(opt => `
    <label class="choice-chip ${iconMode ? 'icon' : 'text'}">
      <input type="checkbox" name="${name}" value="${opt.id}">
      <span>
        ${iconMode ? `<img src="${opt.icon}" alt="${opt.label}"><small>${opt.label}</small>` : opt.label}
      </span>
    </label>
  `).join('');
}

function buildRadioChoice(group, name, options, mode = 'text') {
  group.innerHTML = options.map((opt, index) => `
    <label class="choice-chip ${mode}">
      <input type="radio" name="${name}" value="${opt.id}" ${index === 0 ? 'checked' : ''}>
      <span>${opt.label}</span>
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
        <select class="weapon-select" data-slot="${i}" disabled>
          <option value="">武器を選択</option>
        </select>
      </div>
    `;
  }

  partyGrid.innerHTML = html;
  refreshCharacterOptions();
  refreshAllWeaponOptions();
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

function refreshWeaponOptionsForRow(row) {
  const characterSelect = row.querySelector('.character-select');
  const weaponSelect = row.querySelector('.weapon-select');
  const characterId = characterSelect.value;
  const currentWeapon = weaponSelect.value;

  if (!characterId) {
    weaponSelect.innerHTML = '<option value="">武器を選択</option>';
    weaponSelect.disabled = true;
    return;
  }

  const allowedIds = ALLOWED_WEAPONS_BY_CHARACTER[characterId] || [];
  const optionsHtml = ['<option value="">武器を選択</option>']
    .concat(
      WEAPONS
        .filter(weapon => allowedIds.includes(weapon.id))
        .map(weapon => `<option value="${weapon.id}" ${weapon.id === currentWeapon ? 'selected' : ''}>${weapon.name}</option>`)
    )
    .join('');

  weaponSelect.innerHTML = optionsHtml;
  weaponSelect.disabled = false;

  if (currentWeapon && !allowedIds.includes(currentWeapon)) {
    weaponSelect.value = '';
  }
}

function refreshAllWeaponOptions() {
  document.querySelectorAll('.party-row').forEach(refreshWeaponOptionsForRow);
}

function selectedCheckboxValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(input => input.value);
}

function selectedRadioValue(name) {
  const checked = document.querySelector(`input[name="${name}"]:checked`);
  return checked ? checked.value : '';
}

function getFontOption() {
  const fontId = selectedRadioValue('fontStyle') || FONT_OPTIONS[0].id;
  return FONT_OPTIONS.find(item => item.id === fontId) || FONT_OPTIONS[0];
}

function getTextColorOption() {
  const colorId = selectedRadioValue('textColor') || TEXT_COLOR_OPTIONS[0].id;
  return TEXT_COLOR_OPTIONS.find(item => item.id === colorId) || TEXT_COLOR_OPTIONS[0];
}

function enforcePlayStyleLimit() {
  const inputs = Array.from(document.querySelectorAll('input[name="playStyle"]'));
  inputs.forEach(input => {
    input.addEventListener('change', () => {
      const checked = inputs.filter(item => item.checked);
      if (checked.length > 2) {
        input.checked = false;
      }
      renderCard();
    });
  });
}

function bindVcBehavior() {
  const inputs = Array.from(document.querySelectorAll('input[name="vc"]'));

  inputs.forEach(input => {
    input.addEventListener('change', event => {
      const target = event.currentTarget;

      if (target.value === 'ng' && target.checked) {
        inputs.forEach(item => {
          if (item.value !== 'ng') item.checked = false;
        });
      }

      if (target.value !== 'ng' && target.checked) {
        const ngInput = inputs.find(item => item.value === 'ng');
        if (ngInput) ngInput.checked = false;
      }

      const nonNgChecked = selectedCheckboxValues('vc').filter(value => value !== 'ng');
      if (nonNgChecked.length > 2) {
        target.checked = false;
      }

      renderCard();
    });
  });
}

function bindGeneralInputEvents() {
  [designSelect, nameInput, userIdInput, guildInput, commentInput].forEach(element => {
    element.addEventListener('input', renderCard);
    element.addEventListener('change', renderCard);
  });

  document.querySelectorAll('input[name="playTime"], input[name="platform"], input[name="fontStyle"], input[name="textColor"]')
    .forEach(input => input.addEventListener('change', renderCard));

  document.querySelectorAll('.weapon-select')
    .forEach(select => select.addEventListener('change', renderCard));

  document.querySelectorAll('.character-select')
    .forEach(select => {
      select.addEventListener('change', event => {
        const row = event.currentTarget.closest('.party-row');
        refreshCharacterOptions();
        refreshAllWeaponOptions();
        if (row) refreshWeaponOptionsForRow(row);
        renderCard();
      });
    });
}

function isIOS() {
  const ua = window.navigator.userAgent || '';
  const platform = window.navigator.platform || '';
  return /iPad|iPhone|iPod/.test(ua)
    || (platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
}

function updateIOSNotice() {
  iosNote.style.display = isIOS() ? 'block' : 'none';
}

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

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function ensureCropHandle() {
  if (!thumbCropBox.querySelector('.thumb-crop-handle')) {
    const handle = document.createElement('div');
    handle.className = 'thumb-crop-handle';
    handle.style.position = 'absolute';
    handle.style.right = '-10px';
    handle.style.bottom = '-10px';
    handle.style.width = '20px';
    handle.style.height = '20px';
    handle.style.borderRadius = '50%';
    handle.style.background = '#84d8a5';
    handle.style.border = '2px solid #ffffff';
    handle.style.cursor = 'nwse-resize';
    handle.dataset.role = 'resize';
    thumbCropBox.appendChild(handle);
  }
}

function setupCropBox(imageElement) {
  const displayW = imageElement.clientWidth;
  const displayH = imageElement.clientHeight;
  const size = Math.max(80, Math.min(displayW, displayH) * 0.7);
  const x = (displayW - size) / 2;
  const y = (displayH - size) / 2;

  state.thumbCropBox = { x, y, size };
  state.thumbCropNatural = {
    displayW,
    displayH,
    naturalW: imageElement.naturalWidth,
    naturalH: imageElement.naturalHeight
  };

  applyCropBoxStyle();
}

function applyCropBoxStyle() {
  if (!state.thumbCropBox) return;
  thumbCropBox.style.left = `${state.thumbCropBox.x}px`;
  thumbCropBox.style.top = `${state.thumbCropBox.y}px`;
  thumbCropBox.style.width = `${state.thumbCropBox.size}px`;
  thumbCropBox.style.height = `${state.thumbCropBox.size}px`;
}

function openThumbCropper(dataUrl) {
  state.thumbOriginalDataUrl = dataUrl;
  thumbCropImage.onload = () => {
    thumbCropPanel.hidden = false;
    ensureCropHandle();
    setupCropBox(thumbCropImage);
  };
  thumbCropImage.src = dataUrl;
}

function closeThumbCropper() {
  thumbCropPanel.hidden = true;
  state.thumbCropDragging = false;
  state.thumbCropResizing = false;
  state.thumbCropPointer = null;
  state.thumbCropStart = null;
}

async function applyThumbCrop() {
  if (!state.thumbOriginalDataUrl || !state.thumbCropBox || !state.thumbCropNatural) return;

  const image = await loadImage(state.thumbOriginalDataUrl);
  if (!image) return;

  const ratioX = state.thumbCropNatural.naturalW / state.thumbCropNatural.displayW;
  const ratioY = state.thumbCropNatural.naturalH / state.thumbCropNatural.displayH;
  const cropX = Math.round(state.thumbCropBox.x * ratioX);
  const cropY = Math.round(state.thumbCropBox.y * ratioY);
  const cropSizeW = Math.round(state.thumbCropBox.size * ratioX);
  const cropSizeH = Math.round(state.thumbCropBox.size * ratioY);

  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = 1024;
  tempCanvas.height = 1024;
  const tempCtx = tempCanvas.getContext('2d');

  tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
  tempCtx.drawImage(
    image,
    cropX,
    cropY,
    cropSizeW,
    cropSizeH,
    0,
    0,
    tempCanvas.width,
    tempCanvas.height
  );

  state.thumbDataUrl = tempCanvas.toDataURL('image/png');
  closeThumbCropper();
  renderCard();
}

function pointerPositionOnCropStage(event) {
  const rect = thumbCropImage.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function beginCropPointer(event) {
  if (!state.thumbCropBox) return;

  const target = event.target;
  const pos = pointerPositionOnCropStage(event);

  state.thumbCropPointer = event.pointerId;
  state.thumbCropStart = {
    pointerX: pos.x,
    pointerY: pos.y,
    boxX: state.thumbCropBox.x,
    boxY: state.thumbCropBox.y,
    size: state.thumbCropBox.size
  };

  if (target.dataset.role === 'resize') {
    state.thumbCropResizing = true;
  } else {
    state.thumbCropDragging = true;
  }

  thumbCropBox.setPointerCapture(event.pointerId);
}

function moveCropPointer(event) {
  if ((!state.thumbCropDragging && !state.thumbCropResizing) || !state.thumbCropStart) return;

  const pos = pointerPositionOnCropStage(event);
  const dx = pos.x - state.thumbCropStart.pointerX;
  const dy = pos.y - state.thumbCropStart.pointerY;
  const displayW = thumbCropImage.clientWidth;
  const displayH = thumbCropImage.clientHeight;

  if (state.thumbCropDragging) {
    state.thumbCropBox.x = clamp(
      state.thumbCropStart.boxX + dx,
      0,
      displayW - state.thumbCropBox.size
    );
    state.thumbCropBox.y = clamp(
      state.thumbCropStart.boxY + dy,
      0,
      displayH - state.thumbCropBox.size
    );
  }

  if (state.thumbCropResizing) {
    const nextSize = clamp(
      state.thumbCropStart.size + Math.max(dx, dy),
      80,
      Math.min(displayW - state.thumbCropStart.boxX, displayH - state.thumbCropStart.boxY)
    );
    state.thumbCropBox.size = nextSize;
  }

  applyCropBoxStyle();
}

function endCropPointer(event) {
  if (state.thumbCropPointer !== event.pointerId) return;
  state.thumbCropDragging = false;
  state.thumbCropResizing = false;
  state.thumbCropPointer = null;
  state.thumbCropStart = null;
}

function bindThumbnailCropper() {
  thumbUpload.addEventListener('change', async event => {
    const file = event.target.files?.[0];
    if (!file) {
      state.thumbOriginalDataUrl = null;
      state.thumbDataUrl = null;
      closeThumbCropper();
      renderCard();
      return;
    }

    const dataUrl = await fileToDataUrl(file);
    openThumbCropper(dataUrl);
  });

  thumbCropApplyBtn.addEventListener('click', applyThumbCrop);

  thumbCropCancelBtn.addEventListener('click', () => {
    closeThumbCropper();
    thumbUpload.value = '';
    state.thumbOriginalDataUrl = null;
    state.thumbDataUrl = null;
    renderCard();
  });

  thumbCropBox.addEventListener('pointerdown', beginCropPointer);
  thumbCropBox.addEventListener('pointermove', moveCropPointer);
  thumbCropBox.addEventListener('pointerup', endCropPointer);
  thumbCropBox.addEventListener('pointercancel', endCropPointer);

  window.addEventListener('resize', () => {
    if (!thumbCropPanel.hidden && thumbCropImage.complete && state.thumbOriginalDataUrl) {
      setupCropBox(thumbCropImage);
    }
  });
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

function fitTextToSingleLine(text, box, weight, family) {
  const value = text || '';
  let fontSize = Math.max(10, Math.floor(box.h * 0.8));

  while (fontSize > 10) {
    ctx.font = `${weight} ${fontSize}px ${family}`;
    if (ctx.measureText(value).width <= box.w) break;
    fontSize -= 1;
  }

  return fontSize;
}

function drawSingleLineText(text, box, options = {}) {
  const value = text || '';
  const fontOption = getFontOption();
  const colorOption = getTextColorOption();
  const family = options.family || fontOption.family;
  const weight = options.weight || fontOption.weight;
  const color = options.color || colorOption.color;
  const fontSize = fitTextToSingleLine(value, box, weight, family);

  ctx.save();
  ctx.font = `${weight} ${fontSize}px ${family}`;
  ctx.fillStyle = color;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(value, box.x, box.y + box.h / 2);
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

    if (current) {
      lines.push(current);
    }
  });

  return lines;
}

function findCommentFontSize(text, box, family, color) {
  let fontSize = 38;

  while (fontSize >= 12) {
    const font = `700 ${fontSize}px ${family}`;
    const lines = splitLinesByWidth(text, box.w, font);
    const lineHeight = Math.ceil(fontSize * 1.28);

    if (lines.length * lineHeight <= box.h) {
      return { fontSize, lines, lineHeight, family, color };
    }

    fontSize -= 1;
  }

  const fallbackFont = `700 12px ${family}`;
  return {
    fontSize: 12,
    lines: splitLinesByWidth(text, box.w, fallbackFont),
    lineHeight: Math.ceil(12 * 1.28),
    family,
    color
  };
}

function drawCommentText(text, box) {
  const fontOption = getFontOption();
  const colorOption = getTextColorOption();
  const { fontSize, lines, lineHeight, family, color } = findCommentFontSize(
    text,
    box,
    fontOption.family,
    colorOption.color
  );

  ctx.save();
  ctx.font = `700 ${fontSize}px ${family}`;
  ctx.fillStyle = color;
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

function buildPackedSlots(box, count, itemSize, gap = 12) {
  if (count <= 0) return [];

  const totalWidth = itemSize * count + gap * (count - 1);
  const startX = box.x;
  const y = box.y + Math.floor((box.h - itemSize) / 2);

  if (totalWidth > box.w) {
    const fittedSize = Math.floor((box.w - gap * (count - 1)) / count);
    return buildPackedSlots(box, count, Math.max(24, fittedSize), gap);
  }

  return Array.from({ length: count }, (_, index) => ({
    x: startX + index * (itemSize + gap),
    y,
    w: itemSize,
    h: itemSize
  }));
}

async function drawIconRow(ids, optionList, box, gap = 12) {
  if (!ids.length) return;

  const options = optionList.filter(option => ids.includes(option.id));
  if (!options.length) return;

  let itemSize = Math.min(box.h, 72);
  const totalPreferred = itemSize * options.length + gap * (options.length - 1);

  if (totalPreferred > box.w) {
    itemSize = Math.floor((box.w - gap * (options.length - 1)) / options.length);
  }

  const slots = buildPackedSlots(box, options.length, Math.max(24, itemSize), gap);
  const images = await Promise.all(options.map(option => loadImage(option.icon)));

  images.forEach((img, index) => {
    if (slots[index]) drawContainImage(img, slots[index]);
  });
}

function getSelectedVcIds() {
  return selectedCheckboxValues('vc');
}

function getPartySelections() {
  return Array.from(document.querySelectorAll('.party-row')).map((row, index) => ({
    slot: index + 1,
    characterId: row.querySelector('.character-select').value,
    weaponId: row.querySelector('.weapon-select').value
  }));
}

function getRandomFallbackThumbFile() {
  if (state.fallbackThumbFile) {
    return state.fallbackThumbFile;
  }

  if (!THUMBNAIL_FALLBACKS.length) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * THUMBNAIL_FALLBACKS.length);
  state.fallbackThumbFile = THUMBNAIL_FALLBACKS[randomIndex];
  return state.fallbackThumbFile;
}

async function getFallbackThumbnailImage() {
  const fallbackFile = getRandomFallbackThumbFile();
  if (!fallbackFile) return null;
  return loadImage(fallbackFile);
}

async function renderCard() {
  ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

  let thumbnailImage = null;

  if (state.thumbDataUrl) {
    thumbnailImage = await loadImage(state.thumbDataUrl);
  } else {
    thumbnailImage = await getFallbackThumbnailImage();
  }

  if (thumbnailImage) {
    drawCoverImage(thumbnailImage, LAYOUT.thumbnail);
  }

  const background = await loadImage(ASSETS.background);
  if (background) {
    ctx.drawImage(background, 0, 0, CANVAS_W, CANVAS_H);
  }

  drawSingleLineText(nameInput.value.trim(), LAYOUT.name, { weight: 900 });
  drawSingleLineText(userIdInput.value.trim(), LAYOUT.userId, { weight: 700 });
  drawSingleLineText(guildInput.value.trim(), LAYOUT.guild, { weight: 700 });

  const playStyles = selectedCheckboxValues('playStyle')
    .map(id => PLAY_STYLE_OPTIONS.find(item => item.id === id)?.label)
    .filter(Boolean);

  drawSingleLineText(playStyles.join(' / '), LAYOUT.playStyle, { weight: 700 });

  await drawIconRow(getSelectedVcIds(), VC_OPTIONS, LAYOUT.voiceChat, 14);
  await drawIconRow(selectedCheckboxValues('playTime'), PLAY_TIME_OPTIONS, LAYOUT.playTime, 14);
  await drawIconRow(selectedCheckboxValues('platform'), PLATFORM_OPTIONS, LAYOUT.platform, 14);

  const party = getPartySelections();
  const characterBoxes = [
    LAYOUT.slot1Character,
    LAYOUT.slot2Character,
    LAYOUT.slot3Character,
    LAYOUT.slot4Character
  ];
  const weaponBoxes = [
    LAYOUT.slot5Weapon,
    LAYOUT.slot6Weapon,
    LAYOUT.slot7Weapon,
    LAYOUT.slot8Weapon
  ];

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

function bindDownloadButton() {
  downloadBtn.addEventListener('click', async () => {
    await renderCard();

    if (isIOS()) {
      const dataUrl = canvas.toDataURL('image/png');
      window.open(dataUrl, '_blank');
      return;
    }

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'nanaori_profile_card.png';
    link.click();
  });
}

function bindShareButton() {
  shareBtn.addEventListener('click', () => {
    const text = [
      '七つの大罪 Origin の自己紹介カードを作成しました。',
      '#ナナオリ自己紹介カード',
      window.location.href
    ].join('\n');

    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

function init() {
  buildVcChoice(vcGroup, VC_OPTIONS);
  buildMultiChoice(playStyleGroup, 'playStyle', PLAY_STYLE_OPTIONS, false);
  buildMultiChoice(playTimeGroup, 'playTime', PLAY_TIME_OPTIONS, true);
  buildMultiChoice(platformGroup, 'platform', PLATFORM_OPTIONS, true);
  buildRadioChoice(fontGroup, 'fontStyle', FONT_OPTIONS, 'radio');
  buildRadioChoice(textColorGroup, 'textColor', TEXT_COLOR_OPTIONS, 'radio');
  buildPartyGrid();

  enforcePlayStyleLimit();
  bindVcBehavior();
  bindGeneralInputEvents();
  bindThumbnailCropper();
  bindDownloadButton();
  bindShareButton();
  updateIOSNotice();

  renderBtn.addEventListener('click', renderCard);

  renderCard();
}

init();
