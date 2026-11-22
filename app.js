// ============================================
// DRILL DEFINITIONS
// ============================================
const drillsData = [

  {
    title: "Square Cone Drills",
    layout: "square",
    category: ["Speed", "Agility", "Quickness"],
    subtitle: "Change direction. Move faster. Play stronger.",
    metrics: [
      ["4 CONES", "10–12 FT SQUARE"],
      ["2 REPS", "EACH DRILL"],
      ["REST", "20–30 SEC"],
    ],
    setup: [
      ["EQUIPMENT", "4 cones", "Use markers if cones aren't available."],
      ["LAYOUT", "10–12 ft square", "Keep each side of the square even."],
      ["WORK", "2 reps per variation", "Complete each pattern twice."],
      ["RECOVERY", "20–30 seconds", "Rest between reps as needed."],
    ],
    coachingSummary: "Run outside the cones. Change directions sharply by planting with the outside foot.",
    coaching: ["Keep your eyes up.", "Drive through the finish."],
    variations: [
      "Sprint - Sprint - Sprint - Sprint",
      "Side Shuffle - Side Shuffle - Side Shuffle - Side Shuffle",
      "Backpedal - Sprint - Backpedal - Sprint",
      "Sprint - Side Shuffle - Backpedal - Side Shuffle",
      "Backpedal - Side Shuffle - Sprint - Side Shuffle",
    ],
  },
  {
    title: "10 Yard Drills",
    layout: "lane",
    category: ["Speed", "Quickness"],
    subtitle: "Build a quick burst. Stay low. Drive through the finish.",
    variations: [
      "Sprint Down",
      "Sprint Down and Sprint Back",
      "Sprint Down, Sprint Back, Sprint Down",
      "Push Up and Sprint",
      "Vertical Jump and Sprint",
      "Broad Jump and Sprint",
      "Forward Roll and Sprint",
      "Burpee Sprint",
    ],
    lanePatterns: [
      { directions: ["down"], labels: ["SPRINT DOWN"] },
      { directions: ["down", "back"], labels: ["SPRINT DOWN", "SPRINT BACK"] },
      { directions: ["down", "back", "down"], labels: ["SPRINT DOWN", "SPRINT BACK", "SPRINT DOWN"] },
      { directions: ["down"], labels: ["SPRINT"], startAction: "PUSH UP" },
      { directions: ["down"], labels: ["SPRINT"], startAction: "VERTICAL JUMP" },
      { directions: ["down"], labels: ["SPRINT"], startAction: "BROAD JUMP" },
      { directions: ["down"], labels: ["SPRINT"], startAction: "FORWARD ROLL" },
      { directions: ["down"], labels: ["SPRINT"], startAction: "BURPEE" },
    ],
    metrics: [
      ["2 CONES", "10 YD LANE"],
      ["5 REPS", "EACH DRILL"],
      ["REST", "20–30 SEC"],
    ],
    coachingSummary: "Emphasize a quick burst.",
    setup: [
      ["EQUIPMENT", "2 cones", "Place one cone at each end."],
      ["DISTANCE", "10 yards", "Measure between the cones."],
      ["WORK", "5 reps each drill", "Complete the drills in order."],
      ["RECOVERY", "20–30 seconds", "Rest between each rep."],
    ],
    coaching: [
      "Emphasize a quick burst.",
      "Stay low.",
      "Drive through the finish.",
    ],
  },
  {
    title: "Ladder Drills",
    layout: "ladder",
    category: ["Speed", "Agility", "Quickness"],
    subtitle: "Precision first, then build speed. Drive through the finish.",
    variations: [
      { group: "Run Through", label: "One foot per square", footwork: "single" },
      { group: "Run Through", label: "Two feet per square", footwork: "double" },
      { group: "High Knee Through", label: "One foot per square", footwork: "single" },
      { group: "High Knee Through", label: "Two feet per square", footwork: "double" },
      { group: "Hop Through", label: "Two footed", footwork: "double-hop" },
      { group: "Hop Through", label: "One footed (switch)", footwork: "switch-hop" },
      { group: "Hop Through", label: "Lateral two footed hops", footwork: "lateral-hop" },
      { group: "Shuffles", label: "Lateral shuffles", footwork: "lateral-shuffle" },
      { group: "Shuffles", label: "Ickey shuffle", footwork: "ickey" },
    ],
    metrics: [
      ["1 LADDER", "AGILITY LADDER"],
      ["2 REPS", "EACH DRILL"],
      ["REST", "20–30 SEC"],
    ],
    coachingSummary: "Precision first, then build speed.",
    setup: [
      ["EQUIPMENT", "1 agility ladder", "Use the ladder for each footwork pattern."],
      ["WORK", "2 reps of each drill", "Complete each listed pattern."],
      ["RECOVERY", "20–30 seconds", "Rest between each rep."],
      ["FOCUS", "Clean footwork", "Build speed after precision."],
    ],
    coaching: [
      "Avoid contact with the ladder.",
      "Keep your eyes up.",
      "Stay on the balls of your feet.",
      "Drive through the finish.",
    ],
  },
  {
    title: "T Cone Drills",
    layout: "t-cone",
    category: ["Speed", "Agility", "Quickness"],
    subtitle: "Plant sharply. Stay low. Drive through the finish.",
    variations: [
      "Sprint - Shuffle - Shuffle - Shuffle - Backpedal",
      "Sprint all ways",
      "Bear Crawl: Forward, Lateral, Lateral, Lateral, Backward",
      "Sprint, Lateral Bear, Sprint, Lateral Bear, Backpedal",
      "Bear Crawl, Sprint, Bear Crawl, Sprint, Backward Bear",
    ],
    tPatterns: [
      ["SPRINT", "SHUFFLE", "SHUFFLE", "SHUFFLE", "BACKPEDAL"],
      ["SPRINT", "SPRINT", "SPRINT", "SPRINT", "SPRINT"],
      ["FORWARD BEAR CRAWL", "LATERAL BEAR CRAWL", "LATERAL BEAR CRAWL", "LATERAL BEAR CRAWL", "BACKWARD BEAR CRAWL"],
      ["SPRINT", "LATERAL BEAR", "SPRINT", "LATERAL BEAR", "BACKPEDAL"],
      ["BEAR CRAWL", "SPRINT", "BEAR CRAWL", "SPRINT", "BACKWARD BEAR"],
    ],
    metrics: [
      ["4 CONES", "10 YD × 5 YD T"],
      ["2 REPS", "EACH DRILL"],
      ["REST", "20–30 SEC"],
    ],
    coachingSummary: "Touch each cone with your hand.",
    setup: [
      ["EQUIPMENT", "4 cones", "Set three across the top and one at the start."],
      ["LAYOUT", "10 yd × 5 yd", "Use the T-shaped layout shown above."],
      ["WORK", "2 reps each drill", "Complete each listed pattern."],
      ["RECOVERY", "20–30 seconds", "Rest between each rep."],
    ],
    coaching: [
      "Touch each cone with your hand.",
      "Change direction sharply by planting with the outside foot.",
      "Keep your eyes up and stay low.",
      "Drive through the finish.",
    ],
  },
  {
    title: "W Cone Drills",
    layout: "w-cone",
    category: ["Speed", "Agility", "Quickness"],
    subtitle: "Stay low. Change direction sharply. Drive through the finish.",
    variations: [
      "Sprint - Sprint - Sprint - Sprint",
      "Side Shuffle - Side Shuffle - Side Shuffle - Side Shuffle",
      "Sprint - Sprint - Backpedal - Backpedal",
      "Sprint - Side Shuffle - Backpedal - Side Shuffle",
      "Backpedal - Side Shuffle - Sprint - Side Shuffle",
    ],
    wPatterns: [
      ["SPRINT", "SPRINT", "SPRINT", "SPRINT", "SPRINT"],
      ["SHUFFLE", "SHUFFLE", "SHUFFLE", "SHUFFLE", "SHUFFLE"],
      ["SPRINT", "SPRINT", "BACKPEDAL", "BACKPEDAL", "BACKPEDAL"],
      ["SPRINT", "SIDE SHUFFLE", "BACKPEDAL", "SIDE SHUFFLE", "SIDE SHUFFLE"],
      ["BACKPEDAL", "SIDE SHUFFLE", "SPRINT", "SIDE SHUFFLE", "SIDE SHUFFLE"],
    ],
    metrics: [
      ["6 CONES", "5 YD SPACING"],
      ["2 REPS", "EACH WAY"],
      ["REST", "20–30 SEC"],
    ],
    coachingSummary: "Touch each cone with your hand.",
    setup: [
      ["EQUIPMENT", "6 cones", "Arrange three cones in each row."],
      ["LAYOUT", "5-yard spacing", "Stagger the rows to make a W."],
      ["WORK", "2 reps each way", "Complete each pattern in both directions."],
      ["RECOVERY", "20–30 seconds", "Rest between each rep."],
    ],
    coaching: [
      "Touch each cone with your hand.",
      "Stay low and keep your eyes up.",
      "Open your hips to change direction.",
      "Drive through the finish.",
    ],
  },
  {
    title: "Plyometrics",
    layout: "plyometric",
    category: ["Power", "Explosiveness"],
    subtitle: "Emphasize height on jumps and quickness on hops and skips.",
    variations: [
      { label: "Bounding", pattern: "alternating" },
      { label: "High Knee Skips", pattern: "skip" },
      { label: "Broad Jumps", pattern: "broad" },
      { label: "Broad Jumps (3x) to Sprint", pattern: "broad-sprint" },
      { label: "Two Footed Hops", pattern: "two-hop" },
      { label: "Backward Two Footed Hops", pattern: "backward-two-hop" },
      { label: "One Footed Hops", pattern: "one-hop" },
      { label: "Backward One Foot Hops", pattern: "backward-one-hop" },
      { label: "High Hops", pattern: "high-hop" },
      { label: "Split Jumps", pattern: "split-jump" },
      { label: "Slalom Jumps", pattern: "slalom" },
      { label: "One Step Tuck Jumps", pattern: "tuck" },
    ],
    metrics: [
      ["1 REP", "EACH DRILL"],
      ["12 DRILLS", "PLYOMETRIC SET"],
      ["REST", "20–30 SEC"],
    ],
    coachingSummary: "Emphasize height on jumps and quickness on hops and skips.",
    setup: [
      ["EQUIPMENT", "Open space", "Leave room to jump and move safely."],
      ["WORK", "1 rep each drill", "Complete each of the 12 drills."],
      ["RECOVERY", "20–30 seconds", "Rest between each rep."],
      ["FOCUS", "Height and quickness", "Jump high; keep hops and skips quick."],
    ],
    coaching: [
      "Emphasize height on jumps.",
      "Emphasize quickness on hops and skips.",
      "Drive through the finish.",
    ],
  },

];

// ============================================
// WORKOUT PLANS (All 16 Plans)
// ============================================
const workoutPlans = [
  {
    id: "tier-i",
    name: "Tier I",
    description: "Even Day Workout",
    drills: drillsData
  },
  {
    id: "tier-ii",
    name: "Tier II",
    description: "Advanced Workout",
    drills: drillsData
  },
  {
    id: "tier-iii",
    name: "Tier III",
    description: "Elite Workout",
    drills: drillsData
  },
  {
    id: "off-season-conditioning",
    name: "Off-Season Conditioning Plan",
    description: "Build endurance and strength",
    drills: drillsData
  },
  {
    id: "hip-mobility-primer",
    name: "Hip Mobility Primer",
    description: "Warm-up for hip flexibility",
    drills: drillsData
  },
  {
    id: "fast-twitch-activation",
    name: "Fast-Twitch Activation Primer",
    description: "Activate explosive power",
    drills: drillsData
  },
  {
    id: "breath-work-cooldown",
    name: "Breath Work Cooldown Finisher",
    description: "Recovery and breathing",
    drills: drillsData
  },
  {
    id: "core-strength-finisher",
    name: "Core Strength Finisher",
    description: "Build core stability",
    drills: drillsData
  },
  {
    id: "total-body-flexibility",
    name: "Total-Body Flexibility Cooldown Finisher",
    description: "Full-body stretching",
    drills: drillsData
  },
  {
    id: "total-body-mobility-primer",
    name: "Total-Body Mobility Primer",
    description: "Full-body mobility work",
    drills: drillsData
  },
  {
    id: "foam-roller-warmup",
    name: "Foam Roller Warm-Up",
    description: "Self-massage and prep",
    drills: drillsData
  },
  {
    id: "progressive-dynamic-warmup",
    name: "Progressive Dynamic Warm-Up",
    description: "Dynamic movement preparation",
    drills: drillsData
  },
  {
    id: "hiit-warmup",
    name: "Hiit Warm-Up",
    description: "High-intensity interval prep",
    drills: drillsData
  },
  {
    id: "med-ball-warmup",
    name: "Med Ball Warm-Up",
    description: "Medicine ball exercises",
    drills: drillsData
  },
  {
    id: "total-body-warmup",
    name: "Total-Body Warm-Up",
    description: "Complete warm-up routine",
    drills: drillsData
  },
  {
    id: "reactive-stability-primer",
    name: "Reactive Stability Primer",
    description: "Build reactive stability",
    drills: drillsData
  }
];

// Find plan by ID
function findPlanById(planId) {
  return workoutPlans.find(plan => plan.id === planId);
}

// ============================================
// STATE MANAGEMENT
// ============================================
let currentPlanId = localStorage.getItem("fieldwork-current-plan") || "tier-i";
let currentPlanData = findPlanById(currentPlanId) || workoutPlans[0];

// Set the current plan and load its progress
function setCurrentPlan(planId) {
  const plan = findPlanById(planId);
  if (!plan) {
    console.error(`Plan ${planId} not found`);
    return;
  }
  
  currentPlanId = planId;
  currentPlanData = plan;
  localStorage.setItem("fieldwork-current-plan", planId);
  
  // Reset active workout to 0 and reload progress for this plan
  activeWorkout = 0;
  loadProgress();
  selectedVariationsByWorkout = currentPlanData.drills.map((drill, index) =>
    drill.variations ? readSelectedVariations(getStorageKeyForDrill(index), drill.variations.length) : new Set()
  );
  completed = readProgress().filter((index) => {
    const drill = currentPlanData.drills[index];
    return drill && drill.variations && selectedVariationsByWorkout[index].size === drill.variations.length;
  });
  
  render();
  renderMenu();
}

// Generate a storage key for a drill in the current plan
function getStorageKeyForDrill(drillIndex) {
  const drillTitle = currentPlanData.drills[drillIndex]?.title || `drill-${drillIndex}`;
  const sanitized = drillTitle.toLowerCase().replace(/\s+/g, "-");
  return `fieldwork-plan-${currentPlanId}-${sanitized}`;
}

// Generate storage key for progress in current plan
function getProgressStorageKey() {
  return `fieldwork-plan-${currentPlanId}-completed`;
}

// ============================================
// DOM ELEMENT REFERENCES (queried after DOM loads - see DOMContentLoaded handler)
// ============================================
// const backButton = document.querySelector("#back-button");
// const menuButton = document.querySelector("#workout-menu-button");
// const workoutMenuElement = document.querySelector("#workout-menu");
// const workoutList = document.querySelector("#workout-list");
// const variationList = document.querySelector("#variation-list");
// const progressDots = document.querySelector("#progress-dots");
// const finishButton = document.querySelector("#finish-button");
// const finishLabel = document.querySelector("#finish-label");
// const finishNote = document.querySelector("#finish-note");
// const sessionProgress = document.querySelector("#session-progress");
// const tabs = [...document.querySelectorAll(".tab")];
// const panels = [...document.querySelectorAll(".tab-panel")];

let activeWorkout = 0;
let selectedVariationsByWorkout = [];

// Initialize state
function initializeState() {
  selectedVariationsByWorkout = currentPlanData.drills.map((drill, index) =>
    drill.variations ? readSelectedVariations(getStorageKeyForDrill(index), drill.variations.length) : new Set()
  );
  completed = readProgress().filter((index) => {
    const drill = currentPlanData.drills[index];
    return drill && drill.variations && selectedVariationsByWorkout[index].size === drill.variations.length;
  });
}

let completed = [];
initializeState();

// ============================================
// PROGRESS TRACKING (Plan-Aware)
// ============================================
function readProgress() {
  try {
    const key = getProgressStorageKey();
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(saved) 
      ? saved.filter((index) => Number.isInteger(index) && index >= 0 && index < currentPlanData.drills.length)
      : [];
  } catch (e) {
    console.error("Error reading progress:", e);
    return [];
  }
}

function saveProgress() {
  try {
    const key = getProgressStorageKey();
    localStorage.setItem(key, JSON.stringify(completed));
    return true;
  } catch (e) {
    console.error("Error saving progress:", e);
    return false;
  }
}

function readSelectedVariations(key, variationCount) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    return new Set(Array.isArray(saved) ? saved.filter((i) => Number.isInteger(i) && i >= 0 && i < variationCount) : []);
  } catch (e) {
    console.error("Error reading selected variations:", e);
    return new Set();
  }
}

function getSelectedVariations(drillIndex = activeWorkout) {
  return selectedVariationsByWorkout[drillIndex] || new Set();
}

function saveSelectedVariations(drillIndex = activeWorkout) {
  const key = getStorageKeyForDrill(drillIndex);
  try {
    localStorage.setItem(key, JSON.stringify([...getSelectedVariations(drillIndex)]));
    return true;
  } catch (e) {
    console.error("Error saving selected variations:", e);
    return false;
  }
}

// ============================================
// SWIPE GESTURE SUPPORT
// ============================================
let touchStartX = 0;
let touchStartY = 0;
let mouseStartX = 0;
let mouseStartY = 0;
let isMouseDown = false;

function initializeSwipeGestures() {
  const fieldCard = document.querySelector("#field-card");
  if (!fieldCard) return;
  
  // Touch events
  fieldCard.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, false);
  
  fieldCard.addEventListener("touchend", (e) => {
    if (e.changedTouches.length === 0) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = Math.abs(touchEndY - touchStartY);
    
    // Only trigger if horizontal distance > 50px and vertical distance is small
    if (Math.abs(deltaX) > 50 && deltaY < 50) {
      if (deltaX < 0) {
        // Swipe left - next drill
        navigateNextDrill();
      } else {
        // Swipe right - previous drill
        navigatePreviousDrill();
      }
    }
  }, false);
  
  // Mouse events (for desktop testing)
  fieldCard.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    mouseStartX = e.clientX;
    mouseStartY = e.clientY;
  }, false);
  
  fieldCard.addEventListener("mouseup", (e) => {
    if (!isMouseDown) return;
    isMouseDown = false;
    
    const mouseEndX = e.clientX;
    const mouseEndY = e.clientY;
    
    const deltaX = mouseEndX - mouseStartX;
    const deltaY = Math.abs(mouseEndY - mouseStartY);
    
    // Only trigger if horizontal distance > 50px and vertical distance is small
    if (Math.abs(deltaX) > 50 && deltaY < 50) {
      if (deltaX < 0) {
        // Drag left - next drill
        navigateNextDrill();
      } else {
        // Drag right - previous drill
        navigatePreviousDrill();
      }
    }
  }, false);
  
  fieldCard.addEventListener("mouseleave", () => {
    isMouseDown = false;
  }, false);
}

function navigateNextDrill() {
  if (activeWorkout < currentPlanData.drills.length - 1) {
    activeWorkout++;
    render();
  }
}

function navigatePreviousDrill() {
  if (activeWorkout > 0) {
    activeWorkout--;
    render();
  }
}

// ============================================
// PREVIOUS/NEXT DRILL NAVIGATION DISPLAY
// ============================================
function renderNavigationDisplay() {
  const navContainer = document.querySelector("#drill-nav-display");
  if (!navContainer) return;
  
  const hasPrevious = activeWorkout > 0;
  const hasNext = activeWorkout < currentPlanData.drills.length - 1;
  
  const previousDrill = hasPrevious ? currentPlanData.drills[activeWorkout - 1].title : null;
  const nextDrill = hasNext ? currentPlanData.drills[activeWorkout + 1].title : null;
  
  let html = '<div class="nav-display">';
  
  if (previousDrill) {
    html += `<div class="nav-item nav-previous"><span class="nav-label">← PREVIOUS</span><span class="nav-title">${previousDrill}</span></div>`;
  }
  
  if (nextDrill) {
    html += `<div class="nav-item nav-next"><span class="nav-label">NEXT →</span><span class="nav-title">${nextDrill}</span></div>`;
  }
  
  if (!previousDrill && !hasNext) {
    html += '<div class="nav-info">No adjacent drills</div>';
  }
  
  html += '</div>';
  
  navContainer.innerHTML = html;
}

// ============================================
// MENU RENDERING (Plan Selection)
// ============================================
function renderMenu() {
  const workoutList = document.querySelector("#workout-list");
  if (!workoutList) {
    console.warn("renderMenu: workout-list element not found");
    return;
  }
  
  // Update drill count display
  const drillCount = document.querySelector("#drill-count");
  if (drillCount) {
    drillCount.textContent = `${currentPlanData.drills.length} DRILLS`;
  }
  
  workoutList.replaceChildren();
  
  if (!workoutPlans || workoutPlans.length === 0) {
    console.warn("renderMenu: workoutPlans is empty");
    return;
  }
  
  workoutPlans.forEach((plan) => {
    const button = document.createElement("button");
    button.className = `workout-option${plan.id === currentPlanId ? " is-selected" : ""}`;
    button.type = "button";
    button.setAttribute("aria-current", plan.id === currentPlanId ? "step" : "false");
    
    const icon = document.createElement("span");
    icon.className = "plan-icon";
    icon.textContent = plan.id === currentPlanId ? "✓" : "○";
    
    const text = document.createElement("span");
    const title = document.createElement("strong");
    title.textContent = plan.name;
    const detail = document.createElement("small");
    detail.textContent = plan.description;
    text.append(title, detail);
    
    const arrow = document.createElement("span");
    arrow.className = "option-arrow";
    arrow.textContent = "→";
    
    button.append(icon, text, arrow);
    
    button.addEventListener("click", () => {
      setCurrentPlan(plan.id);
      closeMenu();
    });
    
    workoutList.append(button);
  });
}

function closeMenu() {
  const menu = document.querySelector("#workout-menu");
  if (menu) {
    menu.classList.remove("is-visible");
  }
}

function renderVariations(workout) {
  variationList.replaceChildren();
  const selectedVariations = getSelectedVariations();
  const nextIndex = drill.variations.findIndex((_, index) => !selectedVariations.has(index));
  const nextVariation = nextIndex === -1 ? drill.variations.length : nextIndex;
  const itemName = drill.layout === "square" ? "variation" : "drill";
  let previousGroup = "";
  drill.variations.forEach((variation, index) => {
    const variationGroup = typeof variation === "string" ? "" : variation.group;
    const variationLabel = typeof variation === "string" ? variation : variation.label;
    const accessibleLabel = variationGroup ? `${variationGroup} — ${variationLabel}` : variationLabel;
    if (variationGroup && variationGroup !== previousGroup) {
      const heading = document.createElement("li");
      heading.className = "variation-group-heading";
      heading.textContent = variationGroup;
      variationList.append(heading);
      previousGroup = variationGroup;
    }
    const item = document.createElement("li");
    const isSelected = selectedVariations.has(index);
    const isLocked = index > nextVariation;
    item.className = `variation-item${isSelected ? " is-selected" : ""}${index === nextVariation ? " is-next" : ""}`;
    const select = document.createElement("button");
    select.className = "variation-select";
    select.type = "button";
    select.disabled = isLocked;
    select.setAttribute("aria-label", isLocked
      ? `Complete the previous ${itemName} first. ${accessibleLabel}`
      : `${isSelected ? "Uncheck" : "Complete"} ${itemName}: ${accessibleLabel}`);
    select.setAttribute("aria-pressed", String(isSelected));
    const number = document.createElement("span");
    number.className = "variation-number";
    number.textContent = String(index + 1);
    const name = document.createElement("span");
    name.className = "variation-name";
    name.textContent = variationLabel;
    const choice = document.createElement("span");
    choice.className = "variation-choice";
    choice.setAttribute("aria-hidden", "true");
    choice.textContent = "✓";
    select.append(number, name, choice);
    select.addEventListener("click", () => {
      const currentSelections = getSelectedVariations(activeWorkout);
      if (selectedVariations.has(index)) {
        for (const selectedIndex of currentSelections) {
          if (selectedIndex >= index) currentSelections.delete(selectedIndex);
        }
      } else {
        const next = drill.variations.findIndex((_, variationIndex) => !currentSelections.has(variationIndex));
        if (index !== next) return;
        currentSelections.add(index);
      }
      const selectionsSaved = saveSelectedVariations(activeWorkout);
      let progressSaved = true;
      if (completed.includes(activeWorkout) && currentSelections.size < drill.variations.length) {
        completed = completed.filter((completedIndex) => completedIndex !== activeWorkout);
        progressSaved = saveProgress();
      }
      render();
      if (!selectionsSaved) finishNote.textContent = "VARIATION SELECTIONS COULD NOT BE SAVED.";
      else if (!progressSaved) finishNote.textContent = "PROGRESS COULD NOT BE SAVED ON THIS DEVICE.";
      variationList.querySelectorAll(".variation-select")[index].focus();
    });
    item.append(select);
    variationList.append(item);
  });
  document.querySelector("#variation-count").textContent = String(drill.variations.length);
}

function updateRoutePreview(workout) {
  const selectedVariations = getSelectedVariations();
  const nextIndex = drill.variations.findIndex((_, index) => !selectedVariations.has(index));
  const previewIndex = nextIndex === -1 ? drill.variations.length - 1 : nextIndex;
  const previewLabel = nextIndex === -1 ? "LAST UP" : "NEXT UP";

  if (drill.layout === "lane") {
    const pattern = drill.lanePatterns[previewIndex];
    const laneXs = pattern.directions.length === 1 ? [380] : pattern.directions.length === 2 ? [360, 400] : [350, 380, 410];
    const labelOffsets = pattern.directions.length === 1 ? [24] : pattern.directions.length === 2 ? [-24, 24] : [-20, 12, 20];
    document.querySelectorAll(".lane-segment").forEach((segment, index) => {
      const direction = pattern.directions[index];
      segment.toggleAttribute("hidden", !direction);
      if (!direction) return;
      const x = laneXs[index];
      segment.setAttribute("d", direction === "down" ? `M${x} 90 V285` : `M${x} 285 V90`);
      segment.dataset.direction = direction;
      const label = document.querySelector(`.lane-step-label[data-leg="${index}"]`);
      label.toggleAttribute("hidden", false);
      label.textContent = pattern.labels[index];
      label.setAttribute("transform", `translate(${x + labelOffsets[index]} 201) rotate(-90)`);
    });
    document.querySelectorAll(".lane-step-label").forEach((label, index) => {
      label.toggleAttribute("hidden", !pattern.directions[index]);
    });
    const actionLabel = document.querySelector("#lane-action-label");
    actionLabel.textContent = pattern.startAction || "";
    actionLabel.toggleAttribute("hidden", !pattern.startAction);
    document.querySelector("#diagram-description").textContent =
      `10-yard lane for ${drill.variations[previewIndex]}. Two cones are 10 yards apart.`;
  } else if (drill.layout === "t-cone") {
    const movements = drill.tPatterns[previewIndex];
    renderTConeRoute(movements);
    document.querySelector("#diagram-description").textContent =
      `T cone drill ${previewIndex + 1}: ${drill.variations[previewIndex]}. Follow the numbered route from start through the cones.`;
  } else if (drill.layout === "w-cone") {
    renderWRoute(drill.wPatterns[previewIndex]);
    document.querySelector("#diagram-description").textContent =
      `W cone drill ${previewIndex + 1}: ${drill.variations[previewIndex]}. Follow the numbered W-shaped route.`;
  } else if (drill.layout === "plyometric") {
    const variation = drill.variations[previewIndex];
    document.querySelector("#plyo-pattern-label").textContent = variation.label.toUpperCase();
    renderPlyometricPreview(variation.pattern);
    document.querySelector("#diagram-description").textContent =
      `${variation.label} preview. Follow the movement markers from start toward the finish.`;
  } else if (drill.layout === "ladder") {
    const variation = drill.variations[previewIndex];
    const footworkDescriptions = {
      single: "one alternating footprint in each square",
      double: "two sequential footprints in each square",
      "double-hop": "both feet landing together in each square",
      "switch-hop": "single-foot hops alternating sides",
      "lateral-hop": "paired sideways-facing hops in each square",
      "lateral-shuffle": "alternating sideways-facing steps in each square",
      ickey: "an in-in-out sequence through each square",
    };
    document.querySelector("#ladder-group-label").textContent = variation.group.toUpperCase();
    document.querySelector("#ladder-pattern-label").textContent = variation.label.toUpperCase();
    renderLadderFootsteps(variation.footwork);
    document.querySelector("#diagram-description").textContent =
      `${variation.group}: ${variation.label}. Numbered footprints show ${footworkDescriptions[variation.footwork]}, following the arrow from start to finish.`;
  } else {
    const movements = drill.variations[previewIndex].split(/\s*-\s*/);
    document.querySelectorAll(".route-segment").forEach((segment, index) => {
      segment.dataset.movement = movements[index].toLowerCase();
    });
    document.querySelectorAll(".route-labels text").forEach((label, index) => {
      label.textContent = movements[index].toUpperCase();
      label.dataset.movement = movements[index].toLowerCase();
    });
    document.querySelector("#diagram-description").textContent =
      `Variation ${previewIndex + 1}: ${movements.join(", ")} around the four cones.`;
  }
  document.querySelector("#variation-preview-label").textContent =
    `${previewLabel}: ${drill.layout === "square" ? "VARIATION" : "DRILL"} ${previewIndex + 1}`;
  document.querySelector("#field-caption-hint").textContent =
    drill.layout === "plyometric" ? "HEIGHT ON JUMPS · QUICKNESS ON HOPS"
      : drill.layout === "w-cone" ? "TOUCH EACH CONE · STAY LOW"
      : drill.layout === "t-cone" ? "TOUCH EACH CONE · STAY LOW"
      : drill.layout === "lane" ? "DRIVE THROUGH THE FINISH"
      : drill.layout === "ladder" ? "NUMBERED FOOTSTEPS FROM START"
        : "KEEP YOUR HEAD UP";
}

function renderWRoute(movements) {
  const namespace = "http://www.w3.org/2000/svg";
  const route = document.querySelector("#w-cone-route");
  const labels = document.querySelector("#w-cone-route-labels");
  const points = [
    [140, 300],
    [220, 132],
    [300, 300],
    [380, 132],
    [460, 300],
    [540, 132],
  ];
  route.replaceChildren();
  labels.replaceChildren();

  movements.forEach((movement, index) => {
    const [startX, startY] = points[index];
    const [endX, endY] = points[index + 1];
    const distance = Math.hypot(endX - startX, endY - startY);
    const inset = Math.min(42, distance / 3);
    const unitX = (endX - startX) / distance;
    const unitY = (endY - startY) / distance;
    const path = document.createElementNS(namespace, "path");
    path.setAttribute("class", "w-cone-segment");
    path.setAttribute("d", `M${startX + unitX * inset} ${startY + unitY * inset} L${endX - unitX * inset} ${endY - unitY * inset}`);
    path.setAttribute("marker-end", "url(#arrow)");
    path.dataset.movement = movement.toLowerCase();
    route.append(path);

    const label = document.createElementNS(namespace, "g");
    label.setAttribute("class", "w-cone-step-label");
    label.setAttribute("transform", `translate(${(startX + endX) / 2} ${(startY + endY) / 2})`);
    const badge = document.createElementNS(namespace, "circle");
    badge.setAttribute("r", "10");
    const number = document.createElementNS(namespace, "text");
    number.setAttribute("y", "4");
    number.textContent = String(index + 1);
    label.append(badge, number);
    labels.append(label);
  });
}

function renderTConeRoute(movements) {
  const namespace = "http://www.w3.org/2000/svg";
  const route = document.querySelector("#t-cone-route");
  const labels = document.querySelector("#t-cone-route-labels");
  const points = [
    [380, 308],
    [380, 144],
    [220, 144],
    [380, 144],
    [540, 144],
    [380, 308],
  ];
  route.replaceChildren();
  labels.replaceChildren();

  movements.forEach((movement, index) => {
    const [startX, startY] = points[index];
    const [endX, endY] = points[index + 1];
    const distance = Math.hypot(endX - startX, endY - startY);
    const inset = Math.min(25, distance / 3);
    const startInset = [
      startX + ((endX - startX) / distance) * inset,
      startY + ((endY - startY) / distance) * inset,
    ];
    const endInset = [
      endX - ((endX - startX) / distance) * inset,
      endY - ((endY - startY) / distance) * inset,
    ];
    const path = document.createElementNS(namespace, "path");
    path.setAttribute("class", "t-cone-segment");
    path.setAttribute("d", `M${startInset[0]} ${startInset[1]} L${endInset[0]} ${endInset[1]}`);
    path.setAttribute("marker-end", "url(#arrow)");
    path.dataset.movement = movement.toLowerCase();
    route.append(path);

    const label = document.createElementNS(namespace, "g");
    label.setAttribute("class", "t-cone-step-label");
    label.setAttribute("transform", `translate(${(startX + endX) / 2} ${(startY + endY) / 2})`);
    const badge = document.createElementNS(namespace, "circle");
    badge.setAttribute("r", "10");
    const number = document.createElementNS(namespace, "text");
    number.setAttribute("y", "4");
    number.textContent = String(index + 1);
    label.append(badge, number);
    labels.append(label);
  });
}

function renderLadderFootsteps(footwork) {
  const namespace = "http://www.w3.org/2000/svg";
  const footsteps = document.querySelector("#ladder-footsteps");
  const rows = [307, 257, 207, 157, 107];
  const steps = [];
  let stepNumber = 1;

  rows.forEach((y, cell) => {
    const alternatingFoot = cell % 2 === 0 ? "L" : "R";
    switch (footwork) {
      case "double":
        steps.push({ foot: "L", x: 358, y: y + 9, number: stepNumber++ });
        steps.push({ foot: "R", x: 402, y: y - 9, number: stepNumber++ });
        break;
      case "double-hop":
        steps.push({ foot: "L", x: 365, y, number: cell + 1, hop: true });
        steps.push({ foot: "R", x: 395, y, number: cell + 1, hop: true });
        break;
      case "lateral-hop":
        steps.push({ foot: "L", x: 365, y, number: cell + 1, rotation: 90, hop: true });
        steps.push({ foot: "R", x: 395, y, number: cell + 1, rotation: 90, hop: true });
        break;
      case "lateral-shuffle":
        steps.push({ foot: "L", x: 358, y: y + 8, number: stepNumber++, rotation: 90 });
        steps.push({ foot: "R", x: 402, y: y - 8, number: stepNumber++, rotation: 90 });
        break;
      case "ickey": {
        const leadFoot = alternatingFoot;
        const trailFoot = leadFoot === "L" ? "R" : "L";
        const leadX = leadFoot === "L" ? 358 : 402;
        const trailX = trailFoot === "L" ? 358 : 402;
        steps.push({ foot: leadFoot, x: leadX, y: y + 10, number: stepNumber++ });
        steps.push({ foot: trailFoot, x: trailX, y, number: stepNumber++ });
        steps.push({ foot: leadFoot, x: leadFoot === "L" ? 302 : 458, y: y - 10, number: stepNumber++ });
        break;
      }
      case "single":
      case "switch-hop":
      default:
        steps.push({
          foot: alternatingFoot,
          x: alternatingFoot === "L" ? 360 : 400,
          y,
          number: cell + 1,
          hop: footwork === "switch-hop",
        });
        break;
    }
  });

  footsteps.replaceChildren();
  steps.forEach(({ foot, x, y, number, rotation = 0, hop = false }) => {
    const marker = document.createElementNS(namespace, "g");
    marker.setAttribute("class", `ladder-footstep${hop ? " is-hop" : ""}`);
    marker.setAttribute("transform", `translate(${x} ${y}) rotate(${rotation})`);
    const shape = document.createElementNS(namespace, "path");
    shape.setAttribute("class", `footprint-shape is-${foot.toLowerCase()}`);
    shape.setAttribute("d", "M-7 10 C-10 7 -8 2 -6 -3 L-4 -9 C-3 -13 3 -13 4 -9 L8 0 C10 5 8 9 4 11 C0 13 -4 13 -7 10Z");
    const label = document.createElementNS(namespace, "text");
    label.setAttribute("class", "footprint-letter");
    label.setAttribute("y", "4");
    label.setAttribute("transform", `rotate(${-rotation})`);
    label.textContent = foot;
    marker.append(shape, label);
    footsteps.append(marker);

    const numberLabel = document.createElementNS(namespace, "text");
    numberLabel.setAttribute("class", "footstep-number");
    numberLabel.setAttribute("x", String(x + 11));
    numberLabel.setAttribute("y", String(y + 3));
    numberLabel.textContent = String(number);
    footsteps.append(numberLabel);
  });
}

function renderPlyometricPreview(pattern) {
  const namespace = "http://www.w3.org/2000/svg";
  const markers = document.querySelector("#plyo-steps");
  const rows = [294, 246, 198, 150, 102];
  const count = pattern === "broad-sprint" ? 3 : rows.length;
  const singleFoot = pattern === "one-hop" || pattern === "backward-one-hop";
  const slalom = pattern === "slalom";
  const pair = ["broad", "broad-sprint", "two-hop", "backward-two-hop", "high-hop", "split-jump", "slalom", "tuck"].includes(pattern);
  markers.replaceChildren();

  rows.slice(0, count).forEach((y, index) => {
    const x = slalom ? (index % 2 === 0 ? 354 : 406) : 380;
    const feet = pair && !singleFoot ? ["L", "R"] : [pattern === "backward-one-hop" ? "R" : index % 2 === 0 ? "L" : "R"];
    feet.forEach((foot, footIndex) => {
      const marker = document.createElementNS(namespace, "g");
      const offsetX = pair ? (footIndex === 0 ? -12 : 12) : 0;
      const offsetY = pattern === "split-jump" ? (footIndex === 0 ? 8 : -8) : 0;
      const rotation = pattern.indexOf("backward") === 0 ? 180 : slalom ? (index % 2 === 0 ? -18 : 18) : 0;
      marker.setAttribute("class", "plyo-footstep");
      marker.setAttribute("transform", `translate(${x + offsetX} ${y + offsetY}) rotate(${rotation})`);
      const shape = document.createElementNS(namespace, "path");
      shape.setAttribute("class", `footprint-shape is-${foot.toLowerCase()}`);
      shape.setAttribute("d", "M-7 10 C-10 7 -8 2 -6 -3 L-4 -9 C-3 -13 3 -13 4 -9 L8 0 C10 5 8 9 4 11 C0 13 -4 13 -7 10Z");
      marker.append(shape);
      markers.append(marker);
    });

    const number = document.createElementNS(namespace, "text");
    number.setAttribute("class", "plyo-step-number");
    number.setAttribute("x", String(x + 25));
    number.setAttribute("y", String(y + 4));
    number.textContent = String(index + 1);
    markers.append(number);
  });
  document.querySelector("#plyo-sprint-label").toggleAttribute("hidden", pattern !== "broad-sprint");
}

function renderSetupAndCoaching(workout) {
  const setupGrid = document.querySelector("#setup-grid");
  setupGrid.replaceChildren();
  drill.setup.forEach(([labelText, valueText, noteText]) => {
    const item = document.createElement("div");
    const label = document.createElement("span");
    label.className = "setup-label";
    label.textContent = labelText;
    const value = document.createElement("strong");
    value.textContent = valueText;
    const note = document.createElement("small");
    note.textContent = noteText;
    item.append(label, value, note);
    setupGrid.append(item);
  });

  document.querySelector("#coaching-summary").textContent = drill.coachingSummary;
  const coachingList = document.querySelector("#coaching-list");
  coachingList.replaceChildren();
  drill.coaching.forEach((point, index) => {
    const item = document.createElement("li");
    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");
    const text = document.createElement("div");
    const cue = document.createElement("strong");
    cue.textContent = point;
    text.append(cue);
    item.append(number, text);
    coachingList.append(item);
  });
}

function renderProgress() {
  progressDots.replaceChildren();
  currentPlanData.drills.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = `progress-dot${index === activeWorkout ? " is-current" : ""}${completed.includes(index) ? " is-done" : ""}`;
    dot.setAttribute("aria-hidden", "true");
    progressDots.append(dot);
  });
  sessionProgress.textContent = `${completed.length} OF ${currentPlanData.drills.length} DRILLS COMPLETE`;
}

function render() {
  const drill = currentPlanData.drills[activeWorkout];
  const hasDetails = Boolean(drill.variations);
  const selectedVariations = getSelectedVariations();
  const titleMatch = drill.title.match(/^(.*?)(?:\s+(Drills|Drill))?$/);
  
  // Query DOM elements (lazy load after DOM is ready)
  const backButton = document.querySelector("#back-button");
  const finishButton = document.querySelector("#finish-button");
  const finishLabel = document.querySelector("#finish-label");
  const finishNote = document.querySelector("#finish-note");
  
  // Update plan name display
  const currentPlanNameEl = document.querySelector("#current-plan-name");
  if (currentPlanNameEl) {
    currentPlanNameEl.textContent = currentPlanData.name.toUpperCase();
  }
  const currentPlanTitleEl = document.querySelector("#current-plan-title");
  if (currentPlanTitleEl) {
    currentPlanTitleEl.textContent = currentPlanData.name.toUpperCase();
  }
  
  document.querySelector("#workout-title span").textContent = titleMatch[1];
  document.querySelector("#workout-title em").textContent = titleMatch[2] || "";
  document.querySelector("#workout-subtitle").textContent = hasDetails
    ? drill.subtitle.toUpperCase()
    : "COACH-SHEET DETAILS COMING SOON";
  const trail = document.querySelector("#category-trail");
  trail.replaceChildren();
  (drill.category || []).forEach((label, index) => {
    if (index) {
      const separator = document.createElement("b");
      separator.setAttribute("aria-hidden", "true");
      trail.append(separator);
    }
    const item = document.createElement("span");
    item.textContent = label.toUpperCase();
    trail.append(item);
  });

  document.querySelector("#drill-number").textContent = String(activeWorkout + 1);
  if (backButton) {
    backButton.disabled = activeWorkout === 0;
    backButton.setAttribute("aria-label", activeWorkout === 0
      ? "No previous workout"
      : `Previous workout: ${currentPlanData.drills[activeWorkout - 1].title}`);
  }
  document.querySelector("#field-card").setAttribute("aria-label", hasDetails ? `${drill.title} drill layout` : `${drill.title} details unavailable`);
  document.querySelector("#diagram-wrap").hidden = !hasDetails;
  document.querySelector("#unavailable-message").hidden = hasDetails;
  document.querySelector("#field-caption").hidden = !hasDetails;
  document.querySelector("#stats-row").hidden = !hasDetails;
  document.querySelector("#details-card").hidden = !hasDetails;
  document.querySelector("#finish-wrap").hidden = !hasDetails;
  document.querySelector("#diagram-title").textContent = `${drill.title} drill layout`;
  document.querySelector("#square-layout").toggleAttribute("hidden", drill.layout !== "square");
  document.querySelector("#lane-layout").toggleAttribute("hidden", drill.layout !== "lane");
  document.querySelector("#t-cone-layout").toggleAttribute("hidden", drill.layout !== "t-cone");
  document.querySelector("#w-cone-layout").toggleAttribute("hidden", drill.layout !== "w-cone");
  document.querySelector("#plyometric-layout").toggleAttribute("hidden", drill.layout !== "plyometric");
  document.querySelector("#ladder-layout").toggleAttribute("hidden", drill.layout !== "ladder");
  if (hasDetails) {
    drill.metrics.forEach(([title, detail], index) => {
      document.querySelector(`#metric-${["one", "two", "three"][index]}-title`).textContent = title;
      document.querySelector(`#metric-${["one", "two", "three"][index]}-detail`).textContent = detail;
    });
    document.querySelector("#tab-variations").textContent = drill.layout === "square" ? "DRILL VARIATIONS" : "DRILL CHECKLIST";
    renderSetupAndCoaching(drill);
    renderVariations(drill);
    updateRoutePreview(drill);
  }

  const allVariationsChecked = hasDetails && selectedVariations.size === drill.variations.length;
  const isComplete = completed.includes(activeWorkout);
  const hasNextWorkout = activeWorkout < currentPlanData.drills.length - 1;
  if (finishButton) {
    finishButton.classList.toggle("is-complete", isComplete);
    finishButton.disabled = !hasDetails || !allVariationsChecked || !hasNextWorkout;
  }
  const checklistLabel = drill.layout === "square" ? "VARIATIONS" : "DRILLS";
  const checklistItem = drill.layout === "square" ? "VARIATION" : "DRILL";
  if (finishLabel) {
    finishLabel.textContent = allVariationsChecked
      ? hasNextWorkout ? "NEXT EXERCISE" : "SESSION COMPLETE"
      : `CHECK OFF ALL ${drill.variations?.length || 5} ${checklistLabel}`;
  }
  if (finishNote) {
    finishNote.textContent = isComplete
      ? "DRILL COMPLETE. READY FOR THE NEXT ONE?"
      : allVariationsChecked ? `ALL ${checklistLabel} CHECKED. READY TO MOVE ON.` : `CHECK OFF EACH ${checklistItem}, THEN MOVE ON.`;
  }
  renderProgress();
  renderNavigationDisplay();
  renderMenu();
}

// All event listeners are set up in the DOMContentLoaded handler below

// ============================================
// UTILITY FUNCTIONS
// ============================================

function activateTab(index, tabs, panels) {
  tabs.forEach((tab, tabIndex) => {
    const active = tabIndex === index;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    if (panels[tabIndex]) {
      panels[tabIndex].hidden = !active;
    }
  });
}

// ============================================
// EVENT LISTENERS & INITIALIZATION
// ============================================

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Query DOM elements
  const menuButton = document.querySelector("#workout-menu-button");
  const menu = document.querySelector("#workout-menu");
  const backButton = document.querySelector("#back-button");
  const variationList = document.querySelector("#variation-list");
  const finishButton = document.querySelector("#finish-button");
  const tabs = [...document.querySelectorAll(".tab")];
  const panels = [...document.querySelectorAll(".tab-panel")];

  // Attach event listeners
  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      menu.hidden = !menu.hidden;
      menuButton.setAttribute("aria-expanded", String(!menu.hidden));
    });
  }

  if (backButton) {
    backButton.addEventListener("click", () => {
      if (activeWorkout === 0) return;
      activeWorkout -= 1;
      if (menu) menu.hidden = true;
      if (menuButton) menuButton.setAttribute("aria-expanded", "false");
      render();
    });
  }

  if (menu && menuButton) {
    document.addEventListener("click", (event) => {
      if (!menu.hidden && !menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.hidden = true;
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (menu && menuButton) {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !menu.hidden) {
        menu.hidden = true;
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.focus();
      }
    });
  }

  if (tabs.length > 0) {
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activateTab(index, tabs, panels));
      tab.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          const next = (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
          activateTab(next, tabs, panels);
          tabs[next].focus();
        }
      });
    });
  }

  if (finishButton) {
    finishButton.addEventListener("click", () => {
      const drill = currentPlanData.drills[activeWorkout];
      if (!drill.variations || getSelectedVariations().size !== drill.variations.length || activeWorkout >= currentPlanData.drills.length - 1) return;
      if (!completed.includes(activeWorkout)) {
        completed.push(activeWorkout);
        completed.sort((a, b) => a - b);
      }
      const saved = saveProgress();
      activeWorkout += 1;
      render();
      if (!saved) {
        const sessionProgress = document.querySelector("#session-progress");
        if (sessionProgress) sessionProgress.textContent = "PROGRESS COULD NOT BE SAVED ON THIS DEVICE.";
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      activeWorkout += 1;
      if (activeWorkout >= currentPlanData.drills.length) {
        activeWorkout = currentPlanData.drills.length - 1;
      }
      render();
    } else if (event.key === "ArrowLeft") {
      if (activeWorkout === 0) return;
      activeWorkout -= 1;
      if (menu) menu.hidden = true;
      if (menuButton) menuButton.setAttribute("aria-expanded", "false");
      render();
    }
  });

  // Initial render
  render();
  renderMenu();
  if (tabs.length > 0) {
    activateTab(0, tabs, panels);
  }
});

// Initial render if DOM is already loaded
if (document.readyState !== "loading") {
  const menuButton = document.querySelector("#workout-menu-button");
  const menu = document.querySelector("#workout-menu");
  const backButton = document.querySelector("#back-button");
  const variationList = document.querySelector("#variation-list");
  const finishButton = document.querySelector("#finish-button");
  const tabs = [...document.querySelectorAll(".tab")];
  const panels = [...document.querySelectorAll(".tab-panel")];
  
  render();
  renderMenu();
  if (tabs.length > 0) {
    activateTab(0, tabs, panels);
  }
}

