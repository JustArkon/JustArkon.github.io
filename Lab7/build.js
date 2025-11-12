const standartText = "Enter your question..."

Object.assign(document.body.style, {
  margin: '0',
  padding: '0',
  background: '#000',
  fontFamily: 'sans-serif',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  overflow: 'hidden',
});

const container = document.createElement('div');
Object.assign(container.style, {
  position: 'fixed',
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  width: 'min(90vw, 400px)',
  gap: '10px',
});
document.body.appendChild(container);

function applyElementStyle(inputEl, btnEl) {
  const containerWidth = container.getBoundingClientRect().width;
  const height = Math.max(Math.min(window.innerHeight * 0.06, 50), 35);

  Object.assign(inputEl.style, {
    width: `${containerWidth * 0.75 - 10}px`,
    height: `${height}px`,
    borderRadius: '8px',
    border: '1px solid #444',
    background: '#111',
    color: '#eee',
    padding: '0 10px',
    fontSize: '1rem',
    fontWeight: '500',
  });

  Object.assign(btnEl.style, {
    width: `${containerWidth * 0.25 - 10}px`,
    height: `${height}px`,
    borderRadius: '8px',
    border: 'none',
    background: '#9b4cff',
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  });
}

const input = document.createElement('input');
input.type = 'text';
input.placeholder = standartText;
container.appendChild(input);

const btn = document.createElement('button');
btn.textContent = '→';
container.appendChild(btn);

applyElementStyle(input, btn);

const circle = document.createElement('div');
circle.textContent = standartText;
Object.assign(circle.style, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#fff',
  fontSize: '2rem',
  width: 'min(60vw, 60vh)',
  height: 'min(60vw, 60vh)',
  borderRadius: '50%',
  background: 'radial-gradient(circle, #9b4cff, #4a007f 70%)',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});
document.body.appendChild(circle);

window.addEventListener('resize', () => {
  applyElementStyle(input, btn);
});

window.elements = { btn, input, circle };
