// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// Active tab state
let activeTab = 'all';

function setTab(tab, el) {
  activeTab = tab;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  filterScholarships();
}

// Countdown to deadline
function getCountdown(deadlineStr) {
  if (!deadlineStr || deadlineStr === 'Ongoing') return null;
  const deadline = new Date(deadlineStr);
  const now = new Date();
  const diff = deadline - now;
  if (diff <= 0) return 'Deadline passed';
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return 'Due today!';
  if (days === 1) return '1 day left';
  if (days <= 30) return `${days} days left`;
  const months = Math.floor(days / 30);
  return `~${months} month${months > 1 ? 's' : ''} left`;
}

// Render scholarship cards
function renderCard(s) {
  const countdown = getCountdown(s.deadline);
  const countdownHTML = countdown
    ? `<span class="countdown ${s.urgent ? 'countdown-urgent' : ''}">${countdown}</span>`
    : '';

  return `
    <div class="card">
      <div class="card-header">
        <div>
          <div class="card-title">${s.title}</div>
          <div class="card-org">${s.org}</div>
        </div>
        <span class="badge badge-level">${s.level === 'undergraduate' ? 'Undergrad' : 'Postgrad'}</span>
      </div>
      <p class="card-desc">${s.description}</p>
      <div class="card-badges">
        <span class="badge badge-country">📍 ${s.country}</span>
        <span class="badge badge-field">${s.field}</span>
        <span class="badge ${s.funding === 'Full' ? 'badge-full' : 'badge-partial'}">${s.funding} Scholarship</span>
        <span class="badge badge-deadline ${s.urgent ? 'badge-urgent' : ''}">📅 ${s.deadline}</span>
        ${countdownHTML}
      </div>
      <div class="card-footer">
        <div class="card-amount">💰 ${s.amount}</div>
        <a href="${s.link}" target="_blank" rel="noopener noreferrer" class="apply-btn">Apply Now →</a>
      </div>
    </div>
  `;
}

// Filter and render
function filterScholarships() {
  if (typeof scholarships === 'undefined') return;

  const search = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const field = document.getElementById('fieldFilter')?.value || '';
  const country = document.getElementById('countryFilter')?.value || '';
  const funding = document.getElementById('fundingFilter')?.value || '';

  const results = scholarships.filter(s => {
    const matchTab =
      activeTab === 'all' ||
      s.level === activeTab ||
      (activeTab === 'local' && s.country === 'Nigeria');
    const matchSearch =
      !search ||
      s.title.toLowerCase().includes(search) ||
      s.org.toLowerCase().includes(search) ||
      s.field.toLowerCase().includes(search) ||
      s.country.toLowerCase().includes(search);
    const matchField = !field || s.field === field || s.field === 'Any';
    const matchCountry = !country || s.country === country;
    const matchFunding = !funding || s.funding === funding;
    return matchTab && matchSearch && matchField && matchCountry && matchFunding;
  });

  const totalEl = document.getElementById('totalCount');
  const fullEl = document.getElementById('fullCount');
  const urgentEl = document.getElementById('urgentCount');
  const countEl = document.getElementById('resultsCount');
  const list = document.getElementById('cardList');

  if (totalEl) totalEl.textContent = results.length;
  if (fullEl) fullEl.textContent = results.filter(s => s.funding === 'Full').length;
  if (urgentEl) urgentEl.textContent = results.filter(s => s.urgent).length;
  if (countEl) countEl.textContent = `Showing ${results.length} scholarship${results.length !== 1 ? 's' : ''}`;

  if (!list) return;

  if (results.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No scholarships found</h3>
        <p>Try adjusting your filters or search term.</p>
      </div>`;
    return;
  }

  list.innerHTML = results.map(renderCard).join('');
}

// Search on Enter key
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  if (input) {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') filterScholarships();
    });
  }
  filterScholarships();
});
