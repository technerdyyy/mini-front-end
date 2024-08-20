const close = document.getElementById('closeSidebarBtn');

close.addEventListener('click', function() {
  document.getElementById('sidebar').style.right = '-250px';
});