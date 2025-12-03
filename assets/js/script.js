// small helpers: menu toggle, year, smooth scroll and form validation
document.addEventListener('DOMContentLoaded', function(){
  // menu toggle (works for all menu buttons pointing to .main-nav siblings)
  document.querySelectorAll('.menu-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const nav = btn.nextElementSibling;
      if(!nav) return;
      nav.style.display = (nav.style.display === 'flex' || nav.style.display === 'block') ? 'none' : 'flex';
    });
  });

  // set year in footer
  const year = new Date().getFullYear();
  document.querySelectorAll('#year,#year2,#year3,#year4').forEach(el=>{
    if(el) el.textContent = year;
  });

  // smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // contact form simple validation + simulate send
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();
      const msgBox = document.getElementById('formMessage');

      if(!name || !email || !phone || !message){
        msgBox.style.color = 'crimson';
        msgBox.textContent = 'Please complete all fields.';
        return;
      }

      // basic email check
      if(!/^\S+@\S+\.\S+$/.test(email)){
        msgBox.style.color = 'crimson';
        msgBox.textContent = 'Enter a valid email address.';
        return;
      }

      // simulate submit (you can hook to an endpoint later)
      msgBox.style.color = 'green';
      msgBox.textContent = 'Message sent. I will contact you within 24 hours.';
      form.reset();
    });
  }
});
