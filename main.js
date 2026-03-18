// ── PROJECT ARTICLE DATA ──────────────────────────────────────────────────────

const articles = {
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

function openArticle(id) {
  const art = articles[id];
  if (!art) return;

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
    <div class="article-title">${art.title}</div>
    ${sectionsHtml}
    <div class="article-section">
      <h3>Tech Stack</h3>
      <div class="article-stack">${stackHtml}</div>
    </div>
  `;

  const overlay = document.getElementById('articleOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeArticle() {
  document.getElementById('articleOverlay').classList.remove('active');
  document.body.style.overflow = '';
}


// ── EVENT LISTENERS ───────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Close overlay when clicking the backdrop
  document.getElementById('articleOverlay').addEventListener('click', function (e) {
    if (e.target === this) closeArticle();
  });

  // Close overlay with Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeArticle();
  });
});
