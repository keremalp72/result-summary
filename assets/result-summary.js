const summaryData = [
  {
    name: "reactionScore",
    label: "Reaction",
    icon: "reaction-icon.svg",
    score: 80,
  },
  {
    name: "memoryScore",
    label: "Memory",
    icon: "memory-icon.svg",
    score: 92,
  },
  {
    name: "verbalScore",
    label: "Verbal",
    icon: "Verbal-icon.svg",
    score: 61,
  },
  {
    name: "visualScore",
    label: "Visual",
    icon: "Visual-icon.svg",
    score: 73,
  },
];
// const reaction = [
//   {
//     name: "reactionScore",
//     label: "Reaction",
//     icon: "assets/img/reaction-icon.svg",
//     score: 80,
//   },
// ];
// const memory = [
//   {
//     name: "memoryScore",
//     label: "Memory",
//     icon: "assets/img/memory-icon.svg",
//     score: 92,
//   },
// ];

// const verbal = [
//   {
//     name: "verbalScore",
//     label: "Verbal",
//     icon: "assets/img/verbal-icon.svg",
//     score: 61,
//   },
// ];
// const visual = [
//   {
//     name: "visualScore",
//     label: "Visual",
//     icon: "assets/img/visual-icon.svg",
//     score: 73,
//   },
// ];

reactiondata.innerHTML = `
<div class="features-left">
<img src="assets/img/${summaryData[0].icon}" alt="" />
<h3>${summaryData[0].label}</h3>
</div>
<div class="features-right">
<h4>${summaryData[0].score}<span>/ 100</span></h4>
</div>      
`;
memorydata.innerHTML = `
<div class="features-left">
<img src="assets/img/${summaryData[1].icon}" alt="" />
<h3>${summaryData[1].label}</h3>
</div>
<div class="features-right">
<h4>${summaryData[1].score}<span>/ 100</span></h4>
</div>
`;
verbaldata.innerHTML = `
<div class="features-left">
<img src="assets/img/${summaryData[2].icon}" alt="" />
<h3>${summaryData[2].label}</h3>
</div>
<div class="features-right">
<h4>${summaryData[2].score}<span>/ 100</span></h4>
</div>
`;
visualdata.innerHTML = `
<div class="features-left">
<img src="assets/img/${summaryData[3].icon}" alt="" />
<h3>${summaryData[3].label}</h3>
</div>
<div class="features-right">
<h4>${summaryData[3].score}<span>/ 100</span></h4>
</div>
`;

let ortalama= 0;

for (const data of summaryData) {
    
    ortalama = ortalama + data.score;
}
ortalamahesaplama.innerText = Math.floor(ortalama / summaryData.length);