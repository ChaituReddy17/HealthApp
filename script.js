const startBtn = document.getElementById('startBtn')
const resetBtn = document.getElementById('resetBtn')
const questions = document.getElementById('questions')
const finishBtn = document.getElementById('finishBtn')
const reportBox = document.getElementById('reportBox')
const reportMain = document.getElementById('reportMain')
const reportTitle = document.getElementById('reportTitle')
const reportSubtitle = document.getElementById('reportSubtitle')
const confettiCanvas = document.getElementById('confetti')
const nameInput = document.getElementById('name')
const placeInput = document.getElementById('place')
const doctorInput = document.getElementById('doctorName')
const tone = document.getElementById('tone')

function animateFingerprint() {
  const finger = document.getElementById('finger')
  finger.classList.add('pulse')
  const ring = document.createElement('div')
  ring.className = 'scan-ring'
  ring.style.width = '240px'
  ring.style.height = '240px'
  ring.style.background = 'radial-gradient(circle, rgba(255,255,255,0.06), rgba(255,255,255,0))'
  ring.style.left = '-60px'
  ring.style.top = '-55px'
  ring.style.position = 'absolute'
  finger.appendChild(ring)
  ring.animate([{transform:'scale(0.2)',opacity:0},{transform:'scale(1.1)',opacity:1},{transform:'scale(1.8)',opacity:0}],{duration:1500,iterations:2})
  setTimeout(()=>{finger.classList.remove('pulse'); ring.remove();},1700)
}

startBtn.addEventListener('click',()=>{
  if(!nameInput.value.trim()){nameInput.focus();return}
  animateFingerprint()
  setTimeout(()=>{
    questions.classList.remove('hidden')
    startBtn.disabled = true
  },900)
})

resetBtn.addEventListener('click',()=>{
  questions.classList.add('hidden')
  reportBox.classList.add('hidden')
  startBtn.disabled = false
  reportMain.innerText = '---'
})

finishBtn.addEventListener('click',()=>{
  const who = nameInput.value.trim()
  const where = placeInput.value.trim() || 'somewhere lovely'
  const mood = document.getElementById('q1').value
  const snack = document.getElementById('q2').value || 'mystery snack'
  const color = document.getElementById('q3').value
  const sleep = document.getElementById('q4').value
  const morecute = document.getElementById('q5').value
  const nick = document.getElementById('q6').value
  const emoji = document.getElementById('q7').value || 'Baby'
  const selectedTone = tone.value
  let stat = ''
  if(morecute === 'Youu') stat = '100% — can clearly see how handsome I am 😎'
  else if(morecute === 'Mee') stat = '99% Because you cant see how cute i am so 99% 😒 .Remember fake doctor ni preminchaleni fake patient kuda Patient tho samanam'
  else stat = 'At least you agreed That we are cute 😎'
  let slep = ''
  if(sleep === 'Youu') slep = 'Only Before Sleep 😒'
  else if(sleep === 'Mee') slep = 'only after waking up 😒'
  else slep = 'Thannnnkkkssuuuuuu for rembering on both times 😎'
  let emoj = ''
  if(emoji === '🎀') emoj = 'Am i that pookie 🎀 and you are pookie and always be my Pretty little Baby 🎶'
  else if(emoji === '😘') emoj = 'Am i that lovely 😘 '
  else if(emoji === '🤡') emoj = 'I am happy to be a 🤡. Because I am maybe a reason for you to Luagh. Nannu chusthe navvuvasthundhi antey navvu rojju navvu naaku ok Baby because You are Pretty little Baby 🎶'
  else emoj = 'I will stay as chaitzzz you said this 🧸 na. No Kohli Only Ammmzzz 🤭 who is Pretty little Baby 🎶'

  const sillyLines = [
    `${who} from ${where} — secret mood: ${mood}. Snack preference: ${snack}. Color aura: ${color}.`,
    `Dr.Chaitanya says: vital signs = 100% adorable. Please smile immediately.`,
    `${stat}`,
    `${slep} `,
    `${emoj}`,
    `I will always be your ${nick} baby dont worry 😏`,
    `Diagnosis: acute cuteness with side effects of contagious laughter.`,
    `Temperature: warm (from all the love i had for you).
    'Heart rate: elevated when you text back.`,
    'Symptoms: Uncontrollable smiling, blushing, thinking of Mee constantly. 🙃',
    'Diagnosis: You’re officially the cutest patient in the world. Treatment: Stay with Doctor Chaitanya forever 💘',
    'Future Consultation Recomendation: Overflowing Cuteness — dentist might complain of excessive cuteness',
    'Side effects may include: Butterflies, sudden laughter, random texts saying Hi baby, I miss you baby, Can we chat Baby. and etc',
    'Warning: Patient may refuse to see any other doctor except Doctor Chaitanya 😏.',
    'Strong recommendation: Daily dose of Chaitzzzz’s attention, unlimited care, and 24/7 chat. also Meet Chaitzzzz as soon as possible he is grinding for Kohli physique',
    'Medication : Call Chaitzzz as Chaitzzz baby, and make chat with him and listen songs songs with him 😁 and don`t do dhanam your earphones 🥲',
    'Fees : “Send 3 selfies(One keeping pout, second one with muscle, third one your wish), 1 voice note as song, 5 😘 emojis for Doctor in Whatsapp.”',
    'All Fees regarding the treatment shall be paid in the Whatsapp Chat',
    'You are officially declared the Cutest Girlfriend of Chaitzzzzz🏆.',
    'Follow-up Appointment: Anytime at your ease 😘.'
  ]

  let ending = ''
  if(selectedTone === 'Flirty') ending = "If you smile I'll schedule a follow-up checkup on call 😉"
  else if(selectedTone === 'Super cheesy') ending = 'I need and baby call now. You can Call me I am impressed 😏'
  else if(selectedTone === 'Sassy') ending = 'I need a hug when we met. Stop being this extra, it’s unfair.'
  else ending = ''
  const pick = sillyLines.concat([ending])
  reportTitle.innerText = `Test Report — ${who}`
  reportSubtitle.innerText = `Dr.Chaitanya's baby Healthcheck`

  reportMain.innerHTML = ''
  const full = pick.join('\n\n')
  let i=0
  const t = setInterval(()=>{
    reportMain.innerText = full.slice(0,i)
    i++
    if(i>full.length){clearInterval(t); revealConfetti()}
  },18)

  reportBox.classList.remove('hidden')
  questions.classList.add('hidden')
})

function revealConfetti(){
  confettiCanvas.classList.remove('hidden')
  const ctx = confettiCanvas.getContext('2d')
  confettiCanvas.width = innerWidth; confettiCanvas.height = innerHeight
  const pieces = []
  for(let i=0;i<120;i++){
    pieces.push({x:Math.random()*innerWidth,y:Math.random()*-innerHeight,speed:2+Math.random()*6,w:6+Math.random()*8,h:6+Math.random()*8,rot:Math.random()*360})
  }
  let raf
  function frame(){
    ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height)
    for(const p of pieces){
      p.y += p.speed
      p.x += Math.sin(p.y/30)*2
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180)
      ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h)
      ctx.restore()
    }
    if(pieces[0].y < innerHeight + 200) raf = requestAnimationFrame(frame)
    else {cancelAnimationFrame(raf); confettiCanvas.classList.add('hidden')}
  }
  frame()
}

document.getElementById('shareBtn').addEventListener('click',()=>{
  const who = encodeURIComponent(nameInput.value.trim())
  const where = encodeURIComponent(placeInput.value.trim())
  const url = `${location.origin}${location.pathname}?name=${who}&place=${where}`
  navigator.clipboard.writeText(url).then(()=>{alert('Link copied! Paste to send it :)')})
})

document.getElementById('downloadBtn').addEventListener('click',()=>{
  const card = document.getElementById('report').cloneNode(true)
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'><foreignObject width='100%' height='100%'>${new XMLSerializer().serializeToString(card)}</foreignObject></svg>`
  const blob = new Blob([svg],{type:'image/svg+xml;charset=utf-8'})
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a'); a.href = url; a.download = 'HealthReport.svg'; a.click(); URL.revokeObjectURL(url)
})

;(function prefill(){
  const p = new URLSearchParams(location.search)
  if(p.get('name')) nameInput.value = p.get('name')
  if(p.get('place')) placeInput.value = p.get('place')
})()
