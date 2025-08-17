// ======================
// BANCO DE LEVADAS POR ESTILO
// Cada passo = 1 colcheia (em 4/4: 16 passos = 4 tempos)
// ======================
const grooves = {
  rock: [
    {
      name: "Rock Clássico I",
      bpm: 120,
      timeSignature: "4/4",
      progression: ["C", "F", "G"],
      loopCount: 2,
      pattern: [
        { step: 0, kick: "bumbo", hihat: "chimbal", snare: null, bass: "bass-C" },
        { step: 1, kick: null, hihat: "chimbal", snare: null, bass: "bass-E8" },
        { step: 2, kick: null, hihat: "chimbal", snare: "caixa", bass: "bass-G8" },
        { step: 3, kick: null, hihat: "chimbal", snare: null, bass: "bass-C8" },

        { step: 4, kick: "bumbo", hihat: "chimbal", snare: null, bass: "bass-C" },
        { step: 5, kick: null, hihat: "chimbal", snare: null, bass: "bass-E8" },
        { step: 6, kick: null, hihat: "chimbal", snare: "caixa", bass: "bass-G8" },
        { step: 7, kick: null, hihat: "chimbal", snare: null, bass: "bass-C8" },

        { step: 8, kick: "bumbo", hihat: "chimbal", snare: null, bass: "bass-F8" },
        { step: 9, kick: null, hihat: "chimbal", snare: null, bass: "bass-A8" },
        { step: 10, kick: null, hihat: "chimbal", snare: "caixa", bass: "bass-C8" },
        { step: 11, kick: null, hihat: "chimbal", snare: null, bass: "bass-F8" },

        { step: 12, kick: "bumbo", hihat: "chimbal", snare: null, bass: "bass-G8" },
        { step: 13, kick: null, hihat: "chimbal", snare: null, bass: "bass-B8" },
        { step: 14, kick: null, hihat: "chimbal", snare: "caixa", bass: "bass-D8" },
        { step: 15, kick: null, hihat: "chimbal", snare: null, bass: "bass-G8" }
      ]
    },
    {
      name: "Rock Alternativo",
      bpm: 100,
      timeSignature: "4/4",
      progression: ["Am", "F", "C", "G"],
      loopCount: 1,
      pattern: [
        { step: 0, kick: "bumbo", hihat: "chimbal", snare: null, bass: "bass-Am" },
        { step: 1, kick: null, hihat: "chimbal", snare: null, bass: "bass-C8" },
        { step: 2, kick: null, hihat: "chimbal", snare: "caixa", bass: "bass-E8" },
        { step: 3, kick: null, hihat: "chimbal", snare: null, bass: "bass-Am8" },

        { step: 4, kick: "bumbo", hihat: "chimbal", snare: null, bass: "bass-Am" },
        { step: 5, kick: null, hihat: "chimbal", snare: null, bass: "bass-C8" },
        { step: 6, kick: null, hihat: "chimbal", snare: "caixa", bass: "bass-E8" },
        { step: 7, kick: null, hihat: "chimbal", snare: null, bass: "bass-Am8" },

        { step: 8, kick: "bumbo", hihat: "chimbal", snare: null, bass: "bass-F8" },
        { step: 9, kick: null, hihat: "chimbal", snare: null, bass: "bass-A8" },
        { step: 10, kick: null, hihat: "chimbal", snare: "caixa", bass: "bass-C8" },
        { step: 11, kick: null, hihat: "chimbal", snare: null, bass: "bass-F8" },

        { step: 12, kick: "bumbo", hihat: "chimbal", snare: null, bass: "bass-C8" },
        { step: 13, kick: null, hihat: "chimbal", snare: null, bass: "bass-E8" },
        { step: 14, kick: null, hihat: "chimbal", snare: "caixa", bass: "bass-G8" },
        { step: 15, kick: null, hihat: "chimbal", snare: null, bass: "bass-C8" }
      ]
    }
  ],
  funk: [
    {
      name: "Funk Clássico",
      bpm: 110,
      timeSignature: "4/4",
      progression: ["C7", "F7"],
      loopCount: 2,
      pattern: [
        { step: 0, kick: "bumbo", hihat: null, snare: null, bass: "bass-C" },
        { step: 1, kick: null, hihat: "chimbal", snare: null, bass: "bass-C8S" },
        { step: 2, kick: null, hihat: null, snare: "caixa", bass: "bass-C16" },
        { step: 3, kick: null, hihat: "chimbal", snare: null, bass: "bass-C16S" },

        { step: 4, kick: "bumbo", hihat: null, snare: null, bass: "bass-C" },
        { step: 5, kick: null, hihat: "chimbal", snare: null, bass: "bass-C8S" },
        { step: 6, kick: null, hihat: null, snare: "caixa", bass: "bass-C16" },
        { step: 7, kick: null, hihat: "chimbal", snare: null, bass: "bass-C16S" },

        { step: 8, kick: "bumbo", hihat: null, snare: null, bass: "bass-F" },
        { step: 9, kick: null, hihat: "chimbal", snare: null, bass: "bass-F8S" },
        { step: 10, kick: null, hihat: null, snare: "caixa", bass: "bass-F16" },
        { step: 11, kick: null, hihat: "chimbal", snare: null, bass: "bass-F16S" },

        { step: 12, kick: "bumbo", hihat: null, snare: null, bass: "bass-F" },
        { step: 13, kick: null, hihat: "chimbal", snare: null, bass: "bass-F8S" },
        { step: 14, kick: null, hihat: null, snare: "caixa", bass: "bass-F16" },
        { step: 15, kick: null, hihat: "chimbal", snare: null, bass: "bass-F16S" }
      ]
    }
  ],
  samba: [
    {
      name: "Samba de Quadra",
      bpm: 108,
      timeSignature: "2/4",
      progression: ["Dm", "G", "C"],
      loopCount: 1,
      pattern: [
        { step: 0, kick: null, hihat: "surdo", snare: "caixa", bass: "bass-Dm" },
        { step: 1, kick: null, hihat: "conducao", snare: null, bass: "bass-F8" },
        { step: 2, kick: null, hihat: "surdo", snare: "caixa", bass: "bass-Dm" },
        { step: 3, kick: null, hihat: "conducao", snare: null, bass: "bass-F8" },
        { step: 4, kick: null, hihat: "surdo", snare: "caixa", bass: "bass-G" },
        { step: 5, kick: null, hihat: "conducao", snare: null, bass: "bass-B8" },
        { step: 6, kick: null, hihat: "surdo", snare: "caixa", bass: "bass-C" },
        { step: 7, kick: null, hihat: "conducao", snare: null, bass: "bass-E8" },
        { step: 8, kick: null, hihat: "surdo", snare: "caixa", bass: "bass-Dm" },
        { step: 9, kick: null, hihat: "conducao", snare: null, bass: "bass-F8" },
        { step: 10, kick: null, hihat: "surdo", snare: "caixa", bass: "bass-Dm" },
        { step: 11, kick: null, hihat: "conducao", snare: null, bass: "bass-F8" },
        { step: 12, kick: null, hihat: "surdo", snare: "caixa", bass: "bass-G" },
        { step: 13, kick: null, hihat: "conducao", snare: null, bass: "bass-B8" },
        { step: 14, kick: null, hihat: "surdo", snare: "caixa", bass: "bass-C" },
        { step: 15, kick: null, hihat: "conducao", snare: null, bass: "bass-E8" }
      ]
    }
  ]
};

// ======================
// CONTROLE DE ÁUDIO EM TEMPO REAL
// ======================
let activeAudioElements = {}; // Armazena os áudios atuais por tipo
const audioCache = {}; // Cache para não recarregar arquivos

// Função para carregar ou reutilizar áudio
function getAudio(filename) {
  if (!filename) return null;
  if (audioCache[filename]) {
    audioCache[filename].currentTime = 0;
    return audioCache[filename];
  }

  const audio = new Audio(`audio/${filename}.mp3`);
  audio.preload = "auto";
  audio.volume = 0.8;

  // Cache
  audioCache[filename] = audio;
  return audio;
}

// Função para tocar um passo com controle de muting
function playStep(stepData) {
  // Parar áudios anteriores (opcional: descomente se quiser mudo total)
  Object.keys(activeAudioElements).forEach(key => {
    const audio = activeAudioElements[key];
    if (audio && !audio.ended) {
      audio.pause();
      audio.currentTime = 0;
    }
  });

  // Limpar referências
  activeAudioElements = {};

  const instruments = ["kick", "snare", "hihat", "bass"];
  instruments.forEach(inst => {
    const file = stepData[inst];
    if (file) {
      const audio = getAudio(file);
      if (audio) {
        audio.play().catch(e => {
          console.warn(`Erro ao tocar ${file}:`, e);
        });
        activeAudioElements[inst] = audio;
      }
    }
  });
}

// ======================
// TOCAR GROOVE COM TEMPO EXATO
// ======================
function playGroove(groove, repetitions = 1) {
  const totalSteps = groove.pattern.length;
  const stepDurationMs = (60000 / groove.bpm) / 4; // 1 colcheia em ms
  let stepIndex = 0;
  let cycle = 0;
  const maxCycles = repetitions;

  // Função recursiva com setTimeout para manter o tempo
  function playNext() {
    if (cycle >= maxCycles) return;

    const currentStep = groove.pattern[stepIndex];
    playStep(currentStep);

    stepIndex++;
    if (stepIndex >= totalSteps) {
      stepIndex = 0;
      cycle++;
    }

    setTimeout(playNext, stepDurationMs);
  }

  // Inicia imediatamente
  playNext();
}

// ======================
// FUNÇÃO PRINCIPAL: TOCAR GROOVE ALEATÓRIO
// ======================
function playRandomGroove(style, userBpm) {
  const styleGrooves = grooves[style];
  if (!styleGrooves || styleGrooves.length === 0) {
    alert(`Nenhuma levada disponível para ${style}`);
    return;
  }

  const selectedGroove = styleGrooves[Math.floor(Math.random() * styleGrooves.length)];
  const finalBpm = userBpm || selectedGroove.bpm;

  const status = document.getElementById("status");
  status.textContent = `🎧 Tocando: ${selectedGroove.name} | ${selectedGroove.progression.join(" → ")} | ${finalBpm} BPM`;

  playGroove(selectedGroove, selectedGroove.loopCount || 1);
}