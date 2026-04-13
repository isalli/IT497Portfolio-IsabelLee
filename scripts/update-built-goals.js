const fs = require("fs");

const files = [
  "static/js/main.ad64511b.js",
  "build/static/js/main.ad64511b.js"
];

const menuFrom =
  '(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#faith",children:"Spiritual Portfolio"})}),';
const menuTo =
  '(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#faith",children:"Detailed Action Plan"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#faith",children:"Spiritual Portfolio"})}),';

const faithFrom =
  'categories:[{categoryName:"Guiding Principle 1: Faith",categoryDescription:"Faith has guided my personal and professional journey through uncertainty and growth.",principles:[';
const faithTo =
  'categories:[{categoryName:"Detailed Action Plan for Ongoing Spiritual and Professional Development",categoryDescription:"A goals-focused plan to guide consistent growth in discipleship and career preparation.",principles:[{reference:"Short-Term (0-12 Months)",title:"Spiritual Development Goals",content:"Maintain weekly reflection through journaling or prayer focused on integrity, service, and accountability. Practice Christlike leadership in academic and professional teamwork. Conduct quarterly self-assessments to ensure alignment between values and actions."},{reference:"Short-Term (0-12 Months)",title:"Professional Development Goals",content:"Continue building and refining backend development projects. Update my professional portfolio website quarterly. Improve technical communication through documentation and collaboration."},{reference:"Long-Term (1-5 Years)",title:"Long-Term Goals",content:"Integrate ethical decision-making consistently into my technical work. Grow into leadership or mentorship roles in my field. Maintain my portfolio as a living document reflecting continuous growth."},{reference:"Commitment",title:"Commitment Statement",content:"I commit to lifelong growth by aligning my professional skills with spiritual values, ensuring integrity, service, and accountability guide my career."}]},{categoryName:"Guiding Principle 1: Faith",categoryDescription:"Faith has guided my personal and professional journey through uncertainty and growth.",principles:[';

for (const file of files) {
  let source = fs.readFileSync(file, "utf8");
  let changed = false;

  if (
    source.includes(menuFrom) &&
    !source.includes('children:"Detailed Action Plan"')
  ) {
    source = source.replace(menuFrom, menuTo);
    changed = true;
  }

  if (source.includes(faithFrom)) {
    source = source.replace(faithFrom, faithTo);
    changed = true;
  }

  fs.writeFileSync(file, source, "utf8");
  console.log(changed ? `updated: ${file}` : `no-change: ${file}`);
}
