const IP = "91.121.237.128:7770";

const commands = [
["/sendloc id","إرسال موقعك"],
["/Showid [ID]","إعطاء البطاقة الشخصية"],
["/Pay","تحويل فلوس لشخص"],
["/handsup","رفع يدك"],
["/Frisk","تفتيش شخص"],
["/Dropgun","رمي السلاح في الأرض"],
["/Grabgun","حمل السلاح المرمي"],
["/Fixvw","إذا كنت لا ترى اللاعبين"],
["/Lock","قفل سيارتك"],
["/Call","الاتصال بالشرطة أو أي شخص"],
["/join","لكي تشتغل"],
["/Buyhouse","شراء منزل"],
["/Buyvehicle","شراء سيارة من المعرض"],
["/inv","معرفة ماذا تحمل معك / الحقيبة"],
["/robbiz","سرقة المحل"],
["/RDM ID","طلب أدمن"],
["/location","أمر وظائف"],
["/accept death","إنهاء الشخصية"],
["/quitjob","الخروج من الشغل"],
["/stuck","إذا علقت في مكان"],
["/buy","شراء من المحل"],
["/sell","بيع شيء مثل الأسلحة أو المخدرات"],
["/use repairkit","تصليح السيارات"],
["/give id weapon","إعطاء الشخص سلاح"],
["/give id","إعطاء شخص أي شيء"],
["/vstash","فتح خزانة السيارة"],
["/buylevel","شراء مستوى الشخصية"],
["/upgrade","ترقية المنزل والدروع"],
["/myupgrades","رؤية الأشياء التي قمت بترقيتها"],
["/pay","إعطاء الشخص فلوس"],
["/locate","إظهار GPS"],
["/skill","إظهار مستواك في الأعمال"],
["/drop","رمي الأشياء في الأرض"],
["/gang quit confirm","الخروج من العصابة"],
["/faction quit confirm","الخروج من المنظمة"],
["/findcar","معرفة مكان سيارتك"],
["/phone","إظهار الهاتف"],
["/changepass","تغيير كلمة السر"],
["/givekeys","إعطاء مفتاح السيارة"]
];

const factionLeader = [
["/faction invite","لإضافة عضو"],
["/faction kick","لطرد عضو"],
["/faction rank","لإعطاء رنك"],
["/faction offlinekick","لطرد شخص غير متصل"],
["/faction roster","رؤية جميع الأشخاص في المنظمة"],
["/faction respawncars","إعادة سيارات المنظمة"]
];

const factionMembers = [
["/takeweaponlic","لأخذ رخصة الأسلحة"],
["/takecarlic","لأخذ رخصة القيادة"],
["/take","لأخذ الأسلحة والمخدرات"],
["/ticket","لإعطاء غرامة"],
["/gov","للتكلم في راديو الدولة"],
["/deploy","لإنشاء حاجز"],
["/undeploy","لإزالة الحاجز"],
["/undeployall","لإزالة جميع الحواجز"],
["/mdc","لفتح الكمبيوتر في السيارة أو بجانب الكمبيوتر"],
["/badge","لتشغيل وإطفاء الشارة"],
["/vticket","غرامة للسيارة"],
["/dl","رؤية ID السيارة"],
["/Cuff id","لتكلبش شخص"],
["/Uncuff id","فك الكلبشة عن شخص"],
["/Detain id","تركيب شخص مكلبش في سيارة"],
["/vtake","لأخذ أشياء من السيارة"],
["/giveweaponlic","إعطاء رخصة أسلحة"],
["/impound","لحجز سيارة"],
["/charge","لوضع شخص في قائمة المطلوبين"]
];

const gang = [
["/gang invite (id 0)","إرسال دعوة انضمام إلى العصابة"],
["/gang rank (id 0 rank 1-6)","اختيار رنك العصابة"],
["/gang kick (id 0)","إخراج عضو من العصابة"],
["/gang roster","رؤية جميع أعضاء العصابة"],
["/gang skin id (0-10)","اختيار سكن العصابة"],
["/gang online","رؤية أعضاء العصابة الأونلاين"],
["/gang quit confirm","الخروج من العصابة"],
["/gang offlinekick","إخراج الأعضاء الأوفلاين"],
["/drag (id 0)","سحب شخص"],
["/gstash","فتح خزنة العصابة"],
["/selldreg (id 0 - dreg - prix)","بيع المخدرات"],
["/grespawncars","إعادة وتصليح سيارات العصابة"],
["/userdreg","استخدام المخدرات"],
["/usercrack","استخدام المخدرات"],
["/usermeht","استخدام المخدرات"],
["/robbank","سرقة بنك"],
["/capture","أخذ بوينت"],
["/claim","أخذ ترف"],
["/f","التحدث مع أعضاء العصابة"],
["/togturfs","رؤية مناطق حرب العصابات"],
["/bandana","تفعيل شارة العصابة"],
["/tie","تكلبش شخص مخطوف"],
["/Grabgun","حمل السلاح من الأرض"],
["/Dropgun","رمي السلاح في الأرض"],
["/Frisk","تفتيش شخص"]
];

function renderCommands(items, elementId){
  const el = document.getElementById(elementId);
  if(!el) return;
  el.innerHTML = items.map(([cmd,meaning]) => `
    <button class="command" data-command="${escapeAttr(cmd)}" data-meaning="${escapeAttr(meaning)}">
      <code>${escapeHtml(cmd)}</code>
      <span>${escapeHtml(meaning)}</span>
    </button>
  `).join("");
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
function escapeAttr(s){ return escapeHtml(s); }

renderCommands(commands,"commandsList");
renderCommands(factionLeader,"factionLeader");
renderCommands(factionMembers,"factionMembers");
renderCommands(gang,"gangList");

const pages = document.querySelectorAll(".page");
const navs = document.querySelectorAll(".nav-btn");

function showPage(id){
  pages.forEach(p => p.classList.toggle("active", p.id === id));
  navs.forEach(n => n.classList.toggle("active", n.dataset.page === id));
  window.scrollTo({top:0,behavior:"smooth"});
}

document.addEventListener("click", e => {
  const pageBtn = e.target.closest("[data-page]");
  if(pageBtn) showPage(pageBtn.dataset.page);

  const command = e.target.closest(".command");
  if(command){
    document.getElementById("modalCommand").textContent = command.dataset.command;
    document.getElementById("modalMeaning").textContent = command.dataset.meaning;
    document.getElementById("modal").classList.add("open");
  }
});

document.getElementById("closeModal").addEventListener("click",()=>document.getElementById("modal").classList.remove("open"));
document.getElementById("modal").addEventListener("click",e=>{
  if(e.target.id==="modal") e.currentTarget.classList.remove("open");
});

document.getElementById("copyIp").addEventListener("click", async ()=>{
  try{
    await navigator.clipboard.writeText(IP);
    const toast = document.getElementById("toast");
    toast.textContent = "تم نسخ IP: " + IP;
    toast.classList.add("show");
    setTimeout(()=>toast.classList.remove("show"),2200);
  }catch{
    alert(IP);
  }
});

window.addEventListener("load",()=>{
  setTimeout(()=>{
    document.getElementById("splash").style.opacity="0";
    document.getElementById("splash").style.transition="opacity .45s ease";
    setTimeout(()=>{
      document.getElementById("splash").remove();
      document.getElementById("app").classList.remove("hidden");
    },450);
  },3000);
});
