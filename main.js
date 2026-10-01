// ── PROJECT ARTICLE DATA ──────────────────────────────────────────────────────

const articles = {
  altf4: {
    type: 'FEATURED CAPSTONE',
    tags: ['Active Directory', 'Windows Server', 'Security'],
    title: 'ALTF4.local: Enterprise IT Capstone',
    sections: [
      {
        heading: 'Overview',
        content: `<p>Enterprise-style capstone project focused on hardening and modernizing a Windows Server and Active Directory environment.</p>`
      },
      {
        heading: 'What I Did',
        content: `<ul>
          <li>Hardened Active Directory with Semperis DSP, remediating key vulnerabilities and improving the security score from 84% to 92%</li>
          <li>Migrated DNS from Windows Server 2012 R2 to 2022 with zero downtime</li>
          <li>Automated DHCP configuration backups with PowerShell</li>
          <li>Deployed a Read-Only Domain Controller (RODC)</li>
          <li>Enforced Group Policy and AppLocker policies</li>
          <li>Provisioned Active Directory users in bulk from CSV</li>
        </ul>`
      }
    ],
    stack: ['Windows Server 2022', 'Active Directory', 'Semperis DSP', 'Group Policy', 'AppLocker', 'PowerShell', 'RODC']
  },

  homelab: {
    type: 'FEATURED LAB PROJECT',
    tags: ['Windows Server', 'Active Directory', 'Networking'],
    title: 'Mini Enterprise Home Lab',
    sections: [
      {
        heading: 'Overview',
        content: `<p>Designed and deployed a Windows Server domain environment from scratch to simulate an enterprise IT infrastructure. The goal was to build hands-on experience with Active Directory, DNS, DHCP, and Group Policy in a realistic domain-joined setup.</p>`
      },
      {
        heading: 'What I Built',
        content: `<ul>
          <li>Windows Server domain controller deployed and configured from scratch</li>
          <li>Active Directory structure with users, groups, and OUs</li>
          <li>Permissions and role-based access controls configured</li>
          <li>Group Policy Objects (GPOs) applied for enterprise-style policy enforcement</li>
          <li>DNS zones and DHCP scopes set up and managed</li>
          <li>Domain-joined client machines connected and tested</li>
        </ul>`
      },
      {
        heading: 'Troubleshooting',
        content: `<p>Worked through real-world issues including DNS resolution failures, authentication errors on domain-joined clients, and DHCP lease conflicts. Each issue was diagnosed methodically using Event Viewer, nslookup, ipconfig, and PowerShell cmdlets.</p>`
      },
      {
        heading: 'Key Takeaways',
        content: `<p>This project gave me practical, hands-on experience that directly mirrors enterprise IT environments. Every task — from AD user management to DNS troubleshooting — is a skill that translates directly to sysadmin and IT support roles.</p>`
      }
    ],
    stack: ['Windows Server', 'Active Directory', 'DNS', 'DHCP', 'Group Policy', 'PowerShell', 'Event Viewer']
  },

  pihole: {
    type: 'HOME LAB PROJECT',
    tags: ['Pi-hole', 'Proxmox', 'DNS', 'Linux'],
    title: 'Pi-hole Network-Wide Ad Blocker & DNS Server',
    sections: [
      {
        heading: 'Overview',
        content: `<p>Deployed a Pi-hole DNS server inside a Proxmox LXC container to provide network-wide ad blocking, malware domain filtering, and DNS monitoring for all devices on the home network — without any per-device configuration required.</p>
        <p style="margin-top:12px;">GitHub: <a href="https://github.com/richard-gits-it/pi-hole" target="_blank" style="color:var(--cyan);">github.com/richard-gits-it/pi-hole</a></p>`
      },
      {
        heading: 'Architecture',
        content: `<ul>
          <li>Pi-hole deployed as an LXC container on Proxmox VE hypervisor</li>
          <li>Router DHCP configured to automatically distribute Pi-hole DNS to all clients</li>
          <li>No per-device configuration required — all traffic filtered at the DNS level</li>
          <li>300,000+ domain blocklists imported targeting malware, phishing, tracking, and telemetry</li>
        </ul>`
      },
      {
        heading: 'Results',
        content: `<ul>
          <li>Achieved 20–30% DNS query blocking rate across all connected devices</li>
          <li>Monitored query logs in real time to identify suspicious or high-volume domains</li>
          <li>Tuned whitelists to resolve DNS resolution issues without compromising security</li>
          <li>Gained practical experience with DNS infrastructure, LXC containers, and network-level security</li>
        </ul>`
      }
    ],
    stack: ['Pi-hole', 'Proxmox LXC', 'DNS', 'DHCP Integration', 'Linux (Debian)', 'Network Security']
  },

  honeypot: {
    type: 'SECURITY PROJECT',
    tags: ['Cybersecurity', 'Oracle Cloud', 'Threat Monitoring'],
    title: 'Cloud Honeypot Monitoring Lab (OCI)',
    sections: [
      {
        heading: 'Overview',
        content: `<p>Deployed a deliberately exposed cloud-based Linux honeypot on Oracle Cloud Infrastructure (OCI) to observe real-world unauthorized access attempts. The project was designed to study attacker behavior, understand common cloud threats, and document findings for a security portfolio.</p>`
      },
      {
        heading: 'Architecture',
        content: `<ul>
          <li>Provisioned a Linux compute instance on Oracle Cloud Infrastructure (free tier)</li>
          <li>Configured cloud firewall/security groups to expose SSH and common attack-surface ports</li>
          <li>Deployed logging tools to capture authentication attempts and network traffic</li>
          <li>Monitored SSH brute-force, credential stuffing, and port scanning activity</li>
        </ul>`
      },
      {
        heading: 'Findings',
        content: `<p>Within hours of deployment, the instance was receiving automated attack traffic from IPs across multiple countries. Observed patterns included high-volume SSH dictionary attacks using common usernames and passwords, automated port enumeration, and persistent reconnection attempts. All findings were documented and analyzed.</p>`
      },
      {
        heading: 'Key Takeaways',
        content: `<p>This project provided real-world insight into how quickly exposed cloud infrastructure is discovered and targeted. It reinforced the importance of strong authentication, minimal attack surface, and proactive monitoring — all critical skills for a career in IT security and systems administration.</p>`
      }
    ],
    stack: ['Oracle Cloud Infrastructure (OCI)', 'Linux', 'SSH', 'Cloud Networking', 'Security Monitoring', 'Log Analysis']
  }
};


// ── ARTICLE OVERLAY ───────────────────────────────────────────────────────────

let lastFocus = null;

function openArticle(id) {
  const art = articles[id];
  if (!art) return;
  lastFocus = document.activeElement;

  const tagsHtml = art.tags
    .map(t => `<span class="article-tag">${t}</span>`)
    .join('');

  const sectionsHtml = art.sections
    .map(s => `
      <div class="article-section">
        <h3>${s.heading}</h3>
        ${s.content}
      </div>
    `)
    .join('');

  const stackHtml = art.stack
    .map(s => `<span class="stack-tag">${s}</span>`)
    .join('');

  document.getElementById('articleContent').innerHTML = `
    <div class="article-tag-row">
      <span class="article-tag type">${art.type}</span>
      ${tagsHtml}
    </div>
    <div class="article-title" id="articleTitle">${art.title}</div>
    ${sectionsHtml}
    <div class="article-section">
      <h3>Tech Stack</h3>
      <div class="article-stack">${stackHtml}</div>
    </div>
  `;

  const overlay = document.getElementById('articleOverlay');
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  overlay.scrollTop = 0;
  const closeBtn = overlay.querySelector('.article-close');
  if (closeBtn) closeBtn.focus();
}

function closeArticle() {
  const overlay = document.getElementById('articleOverlay');
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}


// ── TABS ──────────────────────────────────────────────────────────────────────

function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(group => {
    const list = group.querySelector('.tab-list');
    const tabs = Array.from(group.querySelectorAll('.tab'));
    const panels = Array.from(group.querySelectorAll('.tab-panel'));

    tabs.forEach(tab => {
      const panel = document.getElementById(tab.dataset.tab);
      tab.id = tab.id || 'tab-' + tab.dataset.tab;
      tab.setAttribute('aria-controls', tab.dataset.tab);
      if (panel) {
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', tab.id);
      }
    });

    function select(tab, focus) {
      tabs.forEach(t => {
        const on = t === tab;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
      });
      panels.forEach(p => p.classList.toggle('active', p.id === tab.dataset.tab));
      if (focus) tab.focus();
      tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab, false));
      tab.addEventListener('keydown', e => {
        let n = null;
        if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') n = tabs[0];
        if (e.key === 'End') n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });

    select(tabs.find(t => t.classList.contains('active')) || tabs[0], false);

    // fade hint at the right edge while more tabs are scrolled out of view
    function hint() {
      const more = list.scrollWidth - list.clientWidth - list.scrollLeft > 4;
      list.classList.toggle('has-more', more);
    }
    list.addEventListener('scroll', hint, { passive: true });
    window.addEventListener('resize', hint);
    hint();
  });
}


// ── SIDE OUTLINE (highlights current section) ─────────────────────────────────

function initToc() {
  const links = Array.from(document.querySelectorAll('.toc a'));
  const targets = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  function update() {
    const y = window.scrollY + window.innerHeight * 0.3;
    let current = targets[0];
    targets.forEach(t => { if (t.offsetTop <= y) current = t; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current.id));
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}


// ── EVENT LISTENERS ───────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initToc();

  // Close overlay when clicking the backdrop
  document.getElementById('articleOverlay').addEventListener('click', function (e) {
    if (e.target === this) closeArticle();
  });

  // Close overlay with Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeArticle();
  });
});
