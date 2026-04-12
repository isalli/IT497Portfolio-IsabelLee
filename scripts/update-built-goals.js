const fs = require("fs");

const files = [
  "static/js/main.ad64511b.js",
  "build/static/js/main.ad64511b.js"
];

const menuFrom =
  '(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#faith",children:"Spiritual Portfolio"})}),';
const menuTo =
  '(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#detailed-action-plan",children:"Detailed Action Plan"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#faith",children:"Spiritual Portfolio"})}),';

const faithFrom =
  'categories:[{categoryName:"Detailed Action Plan for Ongoing Spiritual and Professional Development",categoryDescription:"A goals-focused plan to guide consistent growth in discipleship and career preparation.",principles:[{reference:"Short-Term (0-12 Months)",title:"Spiritual Development Goals",content:"Maintain weekly reflection through journaling or prayer focused on integrity, service, and accountability. Practice Christlike leadership in academic and professional teamwork. Conduct quarterly self-assessments to ensure alignment between values and actions."},{reference:"Short-Term (0-12 Months)",title:"Professional Development Goals",content:"Continue building and refining backend development projects. Update my professional portfolio website quarterly. Improve technical communication through documentation and collaboration."},{reference:"Long-Term (1-5 Years)",title:"Long-Term Goals",content:"Integrate ethical decision-making consistently into my technical work. Grow into leadership or mentorship roles in my field. Maintain my portfolio as a living document reflecting continuous growth."},{reference:"Commitment",title:"Commitment Statement",content:"I commit to lifelong growth by aligning my professional skills with spiritual values, ensuring integrity, service, and accountability guide my career."}]},{categoryName:"Faith",categoryDescription:"Core spiritual principles that guide my path",principles:[';
const faithTo =
  'categories:[{categoryName:"Guiding Principle 1: Faith",categoryDescription:"Faith has guided my personal and professional journey through uncertainty and growth.",principles:[';

const sectionReplacement =
  '):null}function DetailedActionPlan(){const{isDark:e}=(0,t.useContext)(l);return(0,c.jsx)(f.pT,{bottom:!0,duration:1e3,distance:"40px",children:(0,c.jsxs)("div",{className:"faith-section",id:"detailed-action-plan",children:[(0,c.jsxs)("div",{className:"faith-header",children:[(0,c.jsx)("h1",{className:e?"dark-mode faith-heading":"faith-heading",children:"Detailed Action Plan for Ongoing Spiritual and Professional Development"}),(0,c.jsx)("p",{className:e?"dark-mode faith-subtitle":"faith-subtitle",children:"A goals-focused plan to guide consistent growth in discipleship and career preparation."})]}),(0,c.jsx)("div",{className:"faith-categories",children:[{title:"Spiritual Development Goals",reference:"Short-Term (0-12 Months)",content:"Maintain weekly reflection through journaling or prayer focused on integrity, service, and accountability. Practice Christlike leadership in academic and professional teamwork. Conduct quarterly self-assessments to ensure alignment between values and actions."},{title:"Professional Development Goals",reference:"Short-Term (0-12 Months)",content:"Continue building and refining backend development projects. Update my professional portfolio website quarterly. Improve technical communication through documentation and collaboration."},{title:"Long-Term Goals",reference:"Long-Term (1-5 Years)",content:"Integrate ethical decision-making consistently into my technical work. Grow into leadership or mentorship roles in my field. Maintain my portfolio as a living document reflecting continuous growth."},{title:"Commitment Statement",reference:"Commitment",content:"I commit to lifelong growth by aligning my professional skills with spiritual values, ensuring integrity, service, and accountability guide my career."}].map(((t,i)=>(0,c.jsxs)("div",{className:"faith-category",children:[(0,c.jsx)("h2",{className:e?"dark-mode category-title":"category-title",children:t.title}),(0,c.jsx)("p",{className:e?"dark-mode category-description":"category-description",children:t.reference}),(0,c.jsx)("div",{className:"principles-container",children:(0,c.jsxs)("div",{className:e?"dark-mode principle-card":"principle-card",children:[(0,c.jsxs)("div",{className:"principle-header",children:[(0,c.jsx)("h3",{className:"principle-title",children:t.title}),(0,c.jsx)("p",{className:"principle-reference",children:t.reference})]}),(0,c.jsx)("p",{className:"principle-content",children:t.content})]})})]},i)))}]})})}function w(){const{isDark:e}=(0,t.useContext)(l);return';

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

  if (source.includes("Detailed Action Plan for Ongoing Spiritual and Professional Development")) {
    source = source.replace(
      /categories:\[\{categoryName:"Detailed Action Plan for Ongoing Spiritual and Professional Development"[\s\S]*?\},\{categoryName:"Guiding Principle 1: Faith",categoryDescription:"Faith has guided my personal and professional journey through uncertainty and growth.",principles:\[/,
      faithTo
    );
    changed = true;
  }

  if (source.includes('):null}function w(){const{isDark:e}=(0,t.useContext)(l);return') && !source.includes("detailed-action-plan")) {
    source = source.replace('):null}function w(){const{isDark:e}=(0,t.useContext)(l);return', sectionReplacement);
    changed = true;
  }

  fs.writeFileSync(file, source, "utf8");
  console.log(changed ? `updated: ${file}` : `no-change: ${file}`);
}
