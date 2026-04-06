const fs = require("fs");

const files = [
  "static/js/main.ad64511b.js",
  "build/static/js/main.ad64511b.js",
];

const insert = '{categoryName:"Christlike Attributes: Patience, Sharing, and Loving My Enemies",categoryDescription:"These Christlike attributes guide how I respond to challenges, pressure, and relationships in academic and professional settings.",principles:[{reference:"Christlike Attributes",title:"Patience, Sharing, and Loving My Enemies",content:"Three Christlike attributes have become especially important in my journey: patience, sharing, and loving my enemies. These attributes guide how I respond to challenges, pressure, and relationships in both academic and professional environments. Patience: One personal warning sign I experience is frustration, especially when learning complex technical concepts or facing delays. When impatience arises, I become less receptive to feedback and spiritual guidance. Practicing patience allows me to slow down, trust the Lord\'s timing, and approach problems thoughtfully. Professionally, patience helps me learn deeply, debug carefully, and collaborate more effectively. Sharing: A warning sign related to sharing is becoming overly self-reliant or focused only on my responsibilities. Christ teaches that sharing includes knowledge, time, and encouragement. When I choose to share my skills by helping classmates or supporting teammates, I feel more aligned with my discipleship and recognize that my technical abilities are meant to bless others. Loving My Enemies: Loving my enemies has been one of the most challenging attributes to practice. This often appears when I feel misunderstood or criticized. Defensiveness is a warning sign for me. Christ\'s example teaches me to respond with humility, patience, and love rather than resentment. Applying this principle helps me maintain peace, avoid conflict, and act with Christlike charity in professional situations. A comprehensive review of my portfolio shows greater cohesion between spiritual principles and professional content. These Christlike attributes now guide how I present my work and who I am becoming."}]}';

const from = '}]}]},E={title:a()("Ethical Dilemma Analysis';
const to = `}]}},${insert}]},E={title:a()("Ethical Dilemma Analysis`;

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  if (!src.includes(from)) {
    console.log(`marker not found: ${file}`);
    continue;
  }

  const out = src.replace(from, to);
  if (out === src) {
    console.log(`no changes: ${file}`);
    continue;
  }

  fs.writeFileSync(file, out, "utf8");
  console.log(`updated: ${file}`);
}
