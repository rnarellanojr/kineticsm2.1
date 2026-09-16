const QUESTION_BANK = [
  {id:"R01",level:"recall",q:"What relationship does biopharmaceutics primarily examine?",options:["Product properties and patient exposure","Drug price and patient adherence","Disease severity and hospital stay","Prescriber preference and brand selection"],answer:"Product properties and patient exposure",explanation:"Biopharmaceutics links drug and product properties to bioavailability and patient exposure."},
  {id:"R02",level:"recall",q:"What does bioavailability describe?",options:["How quickly and how much active drug becomes available","How long a tablet remains physically intact","How much excipient is present in a dosage form","How rapidly the kidneys eliminate an inactive ingredient"],answer:"How quickly and how much active drug becomes available",explanation:"Bioavailability concerns the rate and extent at which active drug becomes available in systemic circulation or at the intended site."},
  {id:"R03",level:"recall",q:"Which sequence correctly follows an oral systemic drug from the dosage form to circulation?",options:["Release, dissolution, permeation, systemic input","Dissolution, release, systemic input, permeation","Permeation, dissolution, release, systemic input","Systemic input, permeation, dissolution, release"],answer:"Release, dissolution, permeation, systemic input",explanation:"An oral systemic product proceeds through release, dissolution, permeation, and systemic input."},
  {id:"R04",level:"recall",q:"Which event occurs during the release step of an oral solid dosage form?",options:["Disintegration and drug release","Drug crossing the intestinal lining","Drug entering systemic circulation","Hepatic elimination of the drug"],answer:"Disintegration and drug release",explanation:"Release includes breakup of the dosage form and liberation of the drug."},
  {id:"R05",level:"recall",q:"Which event defines dissolution in the oral absorption process?",options:["Drug enters gastrointestinal fluid as dissolved molecules","Drug crosses the intestinal membrane","Drug survives hepatic first-pass metabolism","The dosage form reaches the stomach"],answer:"Drug enters gastrointestinal fluid as dissolved molecules",explanation:"Dissolution places drug molecules into the gastrointestinal fluid."},
  {id:"R06",level:"recall",q:"What occurs during permeation?",options:["Dissolved drug crosses the intestinal lining","The tablet breaks into smaller fragments","The drug enters gastrointestinal fluid","The liver metabolizes the absorbed drug"],answer:"Dissolved drug crosses the intestinal lining",explanation:"Permeation is the movement of dissolved drug across the intestinal membrane."},
  {id:"R07",level:"recall",q:"What characterizes systemic input after oral administration?",options:["Drug survives transit and first-pass processes to reach circulation","Drug particles break free from the dosage form","Drug reaches saturation concentration at the particle surface","The tablet coating remains on the disintegration screen"],answer:"Drug survives transit and first-pass processes to reach circulation",explanation:"Systemic input occurs when drug reaches the circulation after gastrointestinal transit and first-pass losses."},
  {id:"R08",level:"recall",q:"Which factor belongs to formulation influence on release and dissolution?",options:["Particle size","Hepatic activity","Gastrointestinal motility","Membrane function"],answer:"Particle size",explanation:"Particle size is a product and formulation factor that can change release and dissolution."},
  {id:"R09",level:"recall",q:"Which factor represents a patient influence on drug absorption?",options:["Gastrointestinal pH","Tablet crystal form","Manufacturing hardness","Excipient selection"],answer:"Gastrointestinal pH",explanation:"Patient factors include gastrointestinal pH, motility, fluid, food, membrane function, and hepatic activity."},
  {id:"R10",level:"recall",q:"What is the exposure goal of a systemic drug product?",options:["Drug enters circulation for delivery to a distant site","Drug remains only on the product surface","Drug stays near the administration site with minimal circulation","Drug avoids all contact with biological membranes"],answer:"Drug enters circulation for delivery to a distant site",explanation:"Systemic delivery uses the circulation to carry drug to a distant site of action."},
  {id:"R11",level:"recall",q:"What is the exposure goal of a local drug product?",options:["Place drug at or near the site of action","Maximize hepatic first-pass metabolism","Produce the highest possible blood concentration","Distribute drug equally to all tissues"],answer:"Place drug at or near the site of action",explanation:"Local delivery aims to place drug at or near its site of action while avoiding unnecessary systemic exposure."},
  {id:"R12",level:"recall",q:"What controls the overall absorption rate when several steps occur in sequence?",options:["The slowest step","The first step","The final step","The step with the largest drug amount"],answer:"The slowest step",explanation:"The rate-limiting step is the slowest step in the sequence."},
  {id:"R13",level:"recall",q:"What is the likely rate-limiting step for a poorly water-soluble drug with adequate permeability?",options:["Dissolution","Membrane permeation","Hepatic metabolism","Renal elimination"],answer:"Dissolution",explanation:"Poor aqueous solubility can slow entry into solution, making dissolution the likely bottleneck."},
  {id:"R14",level:"recall",q:"What is the likely rate-limiting step for a highly soluble drug with low permeability?",options:["Membrane permeation","Dissolution","Disintegration","Drug release from a controlled-release matrix"],answer:"Membrane permeation",explanation:"A highly soluble drug dissolves readily, but low permeability slows passage across the intestinal lining."},
  {id:"R15",level:"recall",q:"What commonly limits the rate of an extended-release product?",options:["Drug release from the formulation","Saturation solubility at the particle surface","Immediate intestinal permeation","Direct entry into systemic circulation"],answer:"Drug release from the formulation",explanation:"An extended-release formulation intentionally meters the release of drug."},
  {id:"R16",level:"recall",q:"Which statement applies to intravenous administration?",options:["It has no absorption step","Dissolution always limits its input rate","Disintegration must occur before systemic input","Intestinal permeation controls its bioavailability"],answer:"It has no absorption step",explanation:"An intravenous dose enters systemic circulation directly."},
  {id:"R17",level:"recall",q:"What does disintegration do to a solid dosage form?",options:["Breaks it into smaller units","Converts all drug into dissolved molecules","Measures the fraction absorbed in vivo","Proves bioequivalence between products"],answer:"Breaks it into smaller units",explanation:"Disintegration opens a solid dosage form and breaks it into smaller units or fragments."},
  {id:"R18",level:"recall",q:"Which statement about disintegration is correct?",options:["A dosage form can disintegrate without complete drug dissolution","Complete disintegration proves complete absorption","Disintegration directly measures dissolution rate","Every fragment must become a dissolved molecule during the test"],answer:"A dosage form can disintegrate without complete drug dissolution",explanation:"A fragment can remain solid after the tablet loses its original shape."},
  {id:"R19",level:"recall",q:"What is part of the typical USP disintegration test setup?",options:["A basket-rack assembly with six tubes","A rotating cylinder with a transdermal patch","A flow-through cell for low-solubility drugs","A paddle positioned over a disk"],answer:"A basket-rack assembly with six tubes",explanation:"The typical disintegration apparatus uses a six-tube basket-rack assembly that moves vertically in a controlled medium."},
  {id:"R20",level:"recall",q:"Which residue is consistent with complete disintegration?",options:["A soft mass with no palpably firm core","An intact tablet with a hard center","Only fully dissolved drug molecules","A dry compact retaining its original shape"],answer:"A soft mass with no palpably firm core",explanation:"Complete disintegration allows a soft residue without a palpably firm core. Insoluble coating fragments may remain."},
  {id:"R21",level:"recall",q:"Which outcome cannot be established by disintegration testing alone?",options:["Bioequivalence between products","Consistency of tablet breakup","A manufacturing change that delays breakup","Compliance with a permitted disintegration specification"],answer:"Bioequivalence between products",explanation:"Disintegration alone cannot establish dissolution rate, absorption, bioequivalence, or clinical efficacy."},
  {id:"R22",level:"recall",q:"Which solubility-permeability combination defines BCS Class I?",options:["High solubility and high permeability","Low solubility and high permeability","High solubility and low permeability","Low solubility and low permeability"],answer:"High solubility and high permeability",explanation:"BCS Class I combines high solubility with high permeability."},
  {id:"R23",level:"recall",q:"Which solubility-permeability combination defines BCS Class II?",options:["Low solubility and high permeability","High solubility and high permeability","High solubility and low permeability","Low solubility and low permeability"],answer:"Low solubility and high permeability",explanation:"BCS Class II combines low solubility with high permeability."},
  {id:"R24",level:"recall",q:"Which solubility-permeability combination defines BCS Class III?",options:["High solubility and low permeability","Low solubility and high permeability","High solubility and high permeability","Low solubility and low permeability"],answer:"High solubility and low permeability",explanation:"BCS Class III combines high solubility with low permeability."},
  {id:"R25",level:"recall",q:"Which solubility-permeability combination defines BCS Class IV?",options:["Low solubility and low permeability","High solubility and low permeability","Low solubility and high permeability","High solubility and high permeability"],answer:"Low solubility and low permeability",explanation:"BCS Class IV combines low solubility with low permeability."},
  {id:"R26",level:"recall",q:"What does dissolution rate describe?",options:["How fast a solid drug enters solution","The maximum amount dissolved at equilibrium","How fast dissolved drug crosses a membrane","The fraction of dose eliminated by the kidneys"],answer:"How fast a solid drug enters solution",explanation:"Dissolution rate is a dynamic property that describes how quickly solid drug enters solution."},
  {id:"R27",level:"recall",q:"What does solubility describe?",options:["The maximum amount that dissolves under specified conditions","The time required for a tablet to break apart","The rate at which drug crosses the intestinal lining","The percentage released at each sampling time"],answer:"The maximum amount that dissolves under specified conditions",explanation:"Solubility is an equilibrium property describing how much drug can dissolve under specified conditions."},
  {id:"R28",level:"recall",q:"In the boundary-layer model, what does C₁ represent?",options:["Concentration near saturation at the particle surface","Drug concentration in systemic circulation","Bulk-solution concentration far from the particle","Amount of undissolved drug remaining in the tablet"],answer:"Concentration near saturation at the particle surface",explanation:"C₁ is the concentration at the particle surface, where it approaches saturation solubility."},
  {id:"R29",level:"recall",q:"What does a dissolution test measure at specified sampling times?",options:["Amount or percentage of drug released into a defined medium","Fraction of dose absorbed into systemic circulation","Clinical efficacy in an individual patient","Complete disappearance of all excipients"],answer:"Amount or percentage of drug released into a defined medium",explanation:"Dissolution testing measures drug release into a defined medium over time."},
  {id:"R30",level:"recall",q:"Which set correctly matches USP Apparatus IV to VII with their names?",options:["IV flow-through cell; V paddle over disk; VI rotating cylinder; VII reciprocating holder","IV basket; V paddle; VI flow-through cell; VII rotating cylinder","IV reciprocating cylinder; V basket; VI paddle; VII flow-through cell","IV paddle over disk; V rotating cylinder; VI reciprocating holder; VII basket"],answer:"IV flow-through cell; V paddle over disk; VI rotating cylinder; VII reciprocating holder",explanation:"USP Apparatus IV is the flow-through cell, V is paddle over disk, VI is the rotating cylinder, and VII is the reciprocating holder."},

  {id:"U01",level:"understanding",q:"A drug has poor aqueous solubility but crosses the intestinal membrane readily once dissolved. Which process should formulation efforts primarily improve?",options:["Dissolution or solubilization","Membrane permeation","Hepatic blood flow","Renal filtration"],answer:"Dissolution or solubilization",explanation:"Adequate permeability removes membrane crossing as the main barrier, so poor entry into solution becomes the likely bottleneck."},
  {id:"U02",level:"understanding",q:"A drug dissolves readily in gastrointestinal fluid but crosses the intestinal lining slowly. Which property most likely limits absorption?",options:["Membrane permeability","Aqueous solubility","Tablet disintegration time","Particle surface area"],answer:"Membrane permeability",explanation:"High solubility allows rapid dissolution, while low permeability slows movement across the intestinal membrane."},
  {id:"U03",level:"understanding",q:"A tablet passes the USP disintegration test but releases drug very slowly in the dissolution test. Which conclusion is most appropriate?",options:["Passing disintegration does not guarantee rapid dissolution","The dissolution result must be incorrect","The product has proven bioequivalence","The drug must have high permeability"],answer:"Passing disintegration does not guarantee rapid dissolution",explanation:"Disintegration confirms breakup of the dosage form, not molecular dissolution or absorption."},
  {id:"U04",level:"understanding",q:"A manufacturer reduces drug-particle size without changing the crystal form. What is the most likely result?",options:["Faster dissolution from greater surface area","Higher equilibrium solubility in every solvent","Lower membrane permeability","Complete removal of first-pass metabolism"],answer:"Faster dissolution from greater surface area",explanation:"Smaller particles provide more surface area in contact with liquid, which increases dissolution rate without necessarily changing equilibrium solubility."},
  {id:"U05",level:"understanding",q:"What happens to dissolution rate when the stagnant boundary layer becomes thicker and other factors remain constant?",options:["Dissolution becomes slower","Dissolution becomes faster","Equilibrium solubility doubles","Membrane permeability increases"],answer:"Dissolution becomes slower",explanation:"A thicker boundary layer increases the diffusion distance, reducing dissolution rate."},
  {id:"U06",level:"understanding",q:"The concentration at the particle surface remains constant while the bulk concentration decreases. What happens to the concentration gradient C₁ − C₂?",options:["It increases and favors faster dissolution","It decreases and favors slower dissolution","It becomes zero immediately","It changes membrane permeability only"],answer:"It increases and favors faster dissolution",explanation:"Lower C₂ increases the difference between surface and bulk concentrations, strengthening the driving force for diffusion."},
  {id:"U07",level:"understanding",q:"An ophthalmic product produces extensive systemic absorption without improving its eye effect. Why is this undesirable?",options:["It may add systemic adverse effects without improving local benefit","It always prevents the drug from reaching the eye","It guarantees poor product stability","It converts local delivery into intravenous delivery"],answer:"It may add systemic adverse effects without improving local benefit",explanation:"A local product should concentrate exposure at the site of action. Unnecessary systemic exposure can add adverse effects."},
  {id:"U08",level:"understanding",q:"A capsule tends to float during dissolution testing. Which USP apparatus is a typical choice?",options:["Apparatus I, basket","Apparatus II, paddle","Apparatus III, reciprocating cylinder","Apparatus V, paddle over disk"],answer:"Apparatus I, basket",explanation:"The basket apparatus is commonly used for tablets or capsules that tend to float."},
  {id:"U09",level:"understanding",q:"A laboratory needs a widely used apparatus for an immediate-release oral tablet. Which choice is most appropriate?",options:["Apparatus II, paddle","Apparatus V, paddle over disk","Apparatus VI, rotating cylinder","Apparatus VII, reciprocating holder"],answer:"Apparatus II, paddle",explanation:"The paddle apparatus is widely used for immediate-release and many modified-release oral products."},
  {id:"U10",level:"understanding",q:"An extended-release product must be tested in sequential media that simulate changing gastrointestinal conditions. Which apparatus is a typical choice?",options:["Apparatus III, reciprocating cylinder","Apparatus I, basket","Apparatus V, paddle over disk","Apparatus VI, rotating cylinder"],answer:"Apparatus III, reciprocating cylinder",explanation:"The reciprocating-cylinder apparatus supports extended-release testing across sequential media."}
];

const QUIZ_SECONDS = 15 * 60;
const ATTEMPT_RECALL = 10;
const ATTEMPT_UNDERSTANDING = 5;
const ATTEMPT_TOTAL = ATTEMPT_RECALL + ATTEMPT_UNDERSTANDING;

const state = {
  attempt: [],
  optionOrders: new Map(),
  index: 0,
  score: 0,
  responses: [],
  answered: false,
  active: false,
  finished: false,
  deadline: null,
  startedAt: null,
  timerId: null,
  lastWarningSecond: null,
  musicOn: true,
  soundOn: true,
  musicTimerId: null,
  musicStep: 0,
  audioContext: null,
  studentName: "",
  studentSection: ""
};

const els = {
  stats: document.getElementById("stats"),
  startCard: document.getElementById("startCard"),
  studentForm: document.getElementById("studentForm"),
  studentName: document.getElementById("studentName"),
  studentSection: document.getElementById("studentSection"),
  formError: document.getElementById("formError"),
  quizCard: document.getElementById("quizCard"),
  resultsCard: document.getElementById("resultsCard"),
  questionCount: document.getElementById("questionCount"),
  score: document.getElementById("score"),
  timer: document.getElementById("timer"),
  timerStat: document.getElementById("timerStat"),
  timerBar: document.getElementById("timerBar"),
  questionLevel: document.getElementById("questionLevel"),
  questionText: document.getElementById("questionText"),
  choices: document.getElementById("choices"),
  feedback: document.getElementById("feedback"),
  feedbackTitle: document.getElementById("feedbackTitle"),
  feedbackText: document.getElementById("feedbackText"),
  nextButton: document.getElementById("nextButton"),
  musicButton: document.getElementById("musicButton"),
  musicIcon: document.getElementById("musicIcon"),
  musicLabel: document.getElementById("musicLabel"),
  soundButton: document.getElementById("soundButton"),
  soundIcon: document.getElementById("soundIcon"),
  soundLabel: document.getElementById("soundLabel"),
  resetButton: document.getElementById("resetButton"),
  resultKicker: document.getElementById("resultKicker"),
  resultPercent: document.getElementById("resultPercent"),
  resultSummary: document.getElementById("resultSummary"),
  resultName: document.getElementById("resultName"),
  resultSection: document.getElementById("resultSection"),
  resultTotal: document.getElementById("resultTotal"),
  resultCompleted: document.getElementById("resultCompleted"),
  resultDuration: document.getElementById("resultDuration"),
  newAttemptButton: document.getElementById("newAttemptButton")
};

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function selectAttempt() {
  const recall = QUESTION_BANK.filter(function (item) { return item.level === "recall"; });
  const understanding = QUESTION_BANK.filter(function (item) { return item.level === "understanding"; });
  let selected = [];
  let signature = "";
  let previous = "";
  try { previous = localStorage.getItem("biopharmaceuticsQuizLastAttempt") || ""; } catch (error) { previous = ""; }

  for (let tries = 0; tries < 30; tries += 1) {
    selected = shuffle([
      ...shuffle(recall).slice(0, ATTEMPT_RECALL),
      ...shuffle(understanding).slice(0, ATTEMPT_UNDERSTANDING)
    ]);
    signature = selected.map(function (item) { return item.id; }).sort().join("|");
    if (signature !== previous) break;
  }

  if (signature === previous) {
    const selectedIds = new Set(selected.map(function (item) { return item.id; }));
    const replacement = recall.find(function (item) { return !selectedIds.has(item.id); });
    const recallIndex = selected.findIndex(function (item) { return item.level === "recall"; });
    if (replacement && recallIndex >= 0) selected[recallIndex] = replacement;
    selected = shuffle(selected);
    signature = selected.map(function (item) { return item.id; }).sort().join("|");
  }

  try { localStorage.setItem("biopharmaceuticsQuizLastAttempt", signature); } catch (error) { /* Storage is optional. */ }
  return selected;
}

function getAudioContext() {
  if (!state.audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) state.audioContext = new AudioContextClass();
  }
  return state.audioContext;
}

async function unlockAudio() {
  const context = getAudioContext();
  if (context && context.state === "suspended") await context.resume();
}

function tone(frequency, duration, type, volume, delay) {
  const context = getAudioContext();
  if (!context) return;
  const start = context.currentTime + (delay || 0);
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type || "sine";
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(Math.max(volume || 0.03, 0.0002), start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function playCorrect() {
  if (!state.soundOn) return;
  tone(523.25, 0.18, "triangle", 0.11, 0);
  tone(659.25, 0.22, "triangle", 0.11, 0.09);
  tone(783.99, 0.34, "square", 0.08, 0.18);
}

function playIncorrect() {
  if (!state.soundOn) return;
  tone(220, 0.28, "sawtooth", 0.1, 0);
  tone(164.81, 0.38, "square", 0.08, 0.12);
}

function playWarning(second) {
  if (!state.soundOn) return;
  tone(second <= 2 ? 1046.5 : 880, 0.16, "square", 0.12, 0);
}

function playBuzzer() {
  if (!state.soundOn) return;
  const context = getAudioContext();
  if (!context) return;
  const start = context.currentTime;
  [145, 151].forEach(function (frequency) {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    for (let pulse = 0; pulse < 6; pulse += 1) {
      gain.gain.linearRampToValueAtTime(0.085, start + pulse * 0.14 + 0.025);
      gain.gain.linearRampToValueAtTime(0.012, start + pulse * 0.14 + 0.11);
    }
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.9);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.94);
  });
}

function playRacePhrase() {
  if (!state.musicOn || !state.active || state.finished) return;
  const remaining = state.deadline ? Math.ceil((state.deadline - Date.now()) / 1000) : QUIZ_SECONDS;
  if (remaining <= 5) return;
  const patterns = [
    [261.63, 329.63, 392, 523.25, 392, 329.63, 440, 523.25],
    [293.66, 369.99, 440, 587.33, 440, 369.99, 493.88, 587.33],
    [329.63, 415.3, 493.88, 659.25, 493.88, 415.3, 554.37, 659.25],
    [246.94, 311.13, 369.99, 493.88, 369.99, 311.13, 415.3, 493.88]
  ];
  const pattern = patterns[state.musicStep % patterns.length];
  state.musicStep += 1;
  pattern.forEach(function (note, index) {
    tone(note, 0.2, "triangle", 0.032, index * 0.26);
    if (index % 2 === 0) tone(note / 2, 0.16, "square", 0.011, index * 0.26);
  });
}

function startBackgroundMusic() {
  stopBackgroundMusic();
  if (!state.musicOn || !state.active || state.finished) return;
  playRacePhrase();
  state.musicTimerId = window.setInterval(playRacePhrase, 2080);
}

function stopBackgroundMusic() {
  if (state.musicTimerId) window.clearInterval(state.musicTimerId);
  state.musicTimerId = null;
}

function formatClock(totalSeconds) {
  const seconds = Math.max(0, Math.ceil(totalSeconds));
  const minutesPart = Math.floor(seconds / 60);
  const secondsPart = String(seconds % 60).padStart(2, "0");
  return minutesPart + ":" + secondsPart;
}

function formatDuration(totalSeconds) {
  const seconds = Math.max(0, Math.round(totalSeconds));
  const minutesPart = Math.floor(seconds / 60);
  const secondsPart = seconds % 60;
  if (minutesPart === 0) return secondsPart + " sec";
  return minutesPart + " min " + secondsPart + " sec";
}

function updateTimer() {
  if (!state.active || state.finished || !state.deadline) return;
  const remainingMs = Math.max(0, state.deadline - Date.now());
  const remainingSeconds = Math.ceil(remainingMs / 1000);
  const ratio = remainingMs / (QUIZ_SECONDS * 1000);
  const hue = remainingSeconds <= 60 ? 0 : Math.round(174 * ratio);
  els.timer.textContent = formatClock(remainingSeconds);
  els.timerBar.style.width = Math.max(0, ratio * 100) + "%";
  els.timerStat.style.setProperty("--timer-hue", String(hue));
  els.timerBar.style.setProperty("--timer-hue", String(hue));
  els.timerStat.classList.toggle("warning", remainingSeconds <= 60 && remainingSeconds > 0);
  els.timerStat.classList.toggle("expired", remainingSeconds <= 0);
  els.timerBar.classList.toggle("expired", remainingSeconds <= 0);

  if (remainingSeconds <= 5 && remainingSeconds > 0 && state.lastWarningSecond !== remainingSeconds) {
    state.lastWarningSecond = remainingSeconds;
    playWarning(remainingSeconds);
  }

  if (remainingMs <= 0) {
    playBuzzer();
    finishQuiz(true);
  }
}

function renderQuestion() {
  const item = state.attempt[state.index];
  state.answered = false;
  els.questionCount.textContent = (state.index + 1) + " / " + ATTEMPT_TOTAL;
  els.score.textContent = String(state.score);
  els.questionLevel.textContent = item.level.toUpperCase();
  els.questionText.textContent = item.q;
  els.feedback.hidden = true;
  els.choices.innerHTML = "";
  els.nextButton.textContent = state.index === ATTEMPT_TOTAL - 1 ? "Finish quiz" : "Next question";

  const options = state.optionOrders.get(item.id);
  options.forEach(function (option, optionIndex) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.dataset.option = option;
    button.innerHTML = '<span class="choice-letter">' + String.fromCharCode(65 + optionIndex) + '</span><span></span>';
    button.lastElementChild.textContent = option;
    button.addEventListener("click", function () { answerQuestion(option, button); });
    els.choices.appendChild(button);
  });
}

function answerQuestion(selectedOption, selectedButton) {
  if (state.answered || state.finished) return;
  state.answered = true;
  const item = state.attempt[state.index];
  const isCorrect = selectedOption === item.answer;
  if (isCorrect) state.score += 1;
  state.responses.push({id:item.id, level:item.level, correct:isCorrect});
  els.score.textContent = String(state.score);

  [...els.choices.children].forEach(function (button) {
    button.disabled = true;
    if (button.dataset.option === item.answer) button.classList.add("correct");
  });
  if (!isCorrect) selectedButton.classList.add("wrong");

  els.feedbackTitle.textContent = isCorrect ? "Correct" : "Incorrect";
  els.feedbackText.textContent = item.explanation;
  els.feedback.hidden = false;
  if (isCorrect) playCorrect(); else playIncorrect();
}

function nextQuestion() {
  if (!state.answered || state.finished) return;
  if (state.index >= ATTEMPT_TOTAL - 1) {
    finishQuiz(false);
    return;
  }
  state.index += 1;
  renderQuestion();
}

function finishQuiz(timeExpired) {
  if (state.finished) return;
  state.finished = true;
  state.active = false;
  if (state.timerId) window.clearInterval(state.timerId);
  state.timerId = null;
  stopBackgroundMusic();

  const completed = new Date();
  const elapsedSeconds = Math.min(QUIZ_SECONDS, (completed.getTime() - state.startedAt) / 1000);
  const unanswered = ATTEMPT_TOTAL - state.responses.length;
  const percent = Math.round((state.score / ATTEMPT_TOTAL) * 100);

  els.stats.hidden = true;
  els.startCard.hidden = true;
  els.quizCard.hidden = true;
  els.resultsCard.hidden = false;
  els.resultKicker.textContent = timeExpired ? "TIME EXPIRED" : "QUIZ COMPLETE";
  els.resultPercent.textContent = percent + "%";
  els.resultSummary.textContent = state.score + " of " + ATTEMPT_TOTAL + " correct." + (unanswered ? " " + unanswered + " unanswered." : " All questions answered.");
  els.resultName.textContent = state.studentName;
  els.resultSection.textContent = state.studentSection;
  els.resultTotal.textContent = state.score + " / " + ATTEMPT_TOTAL;
  els.resultCompleted.textContent = completed.toLocaleString(undefined, {dateStyle:"medium", timeStyle:"medium"});
  els.resultDuration.textContent = formatDuration(elapsedSeconds);
}

async function startQuiz(event) {
  event.preventDefault();
  const name = els.studentName.value.trim();
  const section = els.studentSection.value.trim();
  if (!name || !section) {
    els.formError.hidden = false;
    if (!name) els.studentName.focus(); else els.studentSection.focus();
    return;
  }

  els.formError.hidden = true;
  await unlockAudio();
  state.studentName = name;
  state.studentSection = section;
  state.attempt = selectAttempt();
  state.optionOrders = new Map(state.attempt.map(function (item) { return [item.id, shuffle(item.options)]; }));
  state.index = 0;
  state.score = 0;
  state.responses = [];
  state.answered = false;
  state.active = true;
  state.finished = false;
  state.startedAt = Date.now();
  state.deadline = state.startedAt + QUIZ_SECONDS * 1000;
  state.lastWarningSecond = null;

  els.startCard.hidden = true;
  els.resultsCard.hidden = true;
  els.quizCard.hidden = false;
  els.stats.hidden = false;
  els.timerStat.classList.remove("warning", "expired");
  els.timerBar.classList.remove("expired");
  els.timer.textContent = "15:00";
  els.timerBar.style.width = "100%";
  renderQuestion();
  updateTimer();
  state.timerId = window.setInterval(updateTimer, 100);
  startBackgroundMusic();
}

function returnToStart(requireConfirmation) {
  if (requireConfirmation && state.active && !window.confirm("End the current attempt and return to the start screen?")) return;
  state.active = false;
  state.finished = false;
  if (state.timerId) window.clearInterval(state.timerId);
  state.timerId = null;
  stopBackgroundMusic();
  els.stats.hidden = true;
  els.quizCard.hidden = true;
  els.resultsCard.hidden = true;
  els.startCard.hidden = false;
  els.formError.hidden = true;
}

async function toggleMusic() {
  state.musicOn = !state.musicOn;
  if (state.musicOn) {
    await unlockAudio();
    startBackgroundMusic();
  } else {
    stopBackgroundMusic();
  }
  els.musicButton.setAttribute("aria-pressed", String(state.musicOn));
  els.musicButton.title = state.musicOn ? "Turn background music off" : "Turn background music on";
  els.musicIcon.textContent = state.musicOn ? "♫" : "×";
  els.musicLabel.textContent = state.musicOn ? "Music on" : "Music off";
}

async function toggleSound() {
  state.soundOn = !state.soundOn;
  if (state.soundOn) await unlockAudio();
  els.soundButton.setAttribute("aria-pressed", String(state.soundOn));
  els.soundButton.title = state.soundOn ? "Turn sound effects off" : "Turn sound effects on";
  els.soundIcon.textContent = state.soundOn ? "♪" : "×";
  els.soundLabel.textContent = state.soundOn ? "Effects on" : "Effects off";
}

els.studentForm.addEventListener("submit", startQuiz);
els.nextButton.addEventListener("click", nextQuestion);
els.resetButton.addEventListener("click", function () { returnToStart(true); });
els.newAttemptButton.addEventListener("click", function () { returnToStart(false); });
els.musicButton.addEventListener("click", toggleMusic);
els.soundButton.addEventListener("click", toggleSound);
els.studentName.addEventListener("input", function () { els.formError.hidden = true; });
els.studentSection.addEventListener("input", function () { els.formError.hidden = true; });
document.addEventListener("keydown", function (event) {
  if ((event.key === "Enter" || event.key === " ") && state.answered && !state.finished && document.activeElement === document.body) nextQuestion();
});

returnToStart(false);
