function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + d.toUTCString() + ";path=/";
}
function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(cname) === 0) return c.substring(cname.length, c.length);
  }
  return "";
}

// Load todos from cookie
function loadTodos() {
  const data = getCookie('todo_list');
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Save todos to cookie
function saveTodos(todos) {
  setCookie('todo_list', JSON.stringify(todos), 365);
}

// Render todos
function renderTodos(todos) {
  const ftList = document.getElementById('ft_list');
  ftList.innerHTML = '';
  todos.forEach((todo, idx) => {
    const div = document.createElement('div');
    div.className = 'todo';
    div.textContent = todo;
    div.onclick = function() {
      if (confirm('Do you want to remove this TO DO?')) {
        todos.splice(idx, 1);
        saveTodos(todos);
        renderTodos(todos);
      }
    };
    ftList.appendChild(div);
  });
}

// Main
let todos = loadTodos();
renderTodos(todos);

document.getElementById('new-btn').onclick = function() {
  const text = prompt('Enter a new TO DO:');
  if (text && text.trim() !== '') {
    todos.push(text.trim());
    saveTodos(todos);
    renderTodos(todos);
  }
};