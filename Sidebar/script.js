const close = document.getElementById('closeSidebarBtn');
const open = document.getElementById('openSidebarBtn');

close.addEventListener('click', function() {
  document.getElementById('sidebar').style.right = '-250px';
});

open.addEventListener('click', function() {
  document.getElementById('sidebar').style.right = 0;
});