'use client';
import { useState, useEffect } from 'react';
import HomeSection from '@/sections/Home';
import AboutSection from '@/sections/About';
import ProjectsSection from '@/sections/Projects';
import SkillsSection from '@/sections/Skills';
import ExperienceSection from '@/sections/Experience';
import EducationSection from '@/sections/Education';
import CertificatesSection from '@/sections/Certificates';
import ContactSection from '@/sections/Contact';

const FILE_MAP = [
  { id: 'home.tsx', label: 'home.tsx', icon: '⚛', iconClass: 'file-icon--tsx', language: 'TypeScript React', component: HomeSection },
  { id: 'about.html', label: 'about.html', icon: '🌐', iconClass: 'file-icon--html', language: 'HTML', component: AboutSection },
  { id: 'projects.js', label: 'projects.js', icon: 'JS', iconClass: 'file-icon--js', language: 'JavaScript', component: ProjectsSection },
  { id: 'skills.json', label: 'skills.json', icon: '{ }', iconClass: 'file-icon--json', language: 'JSON', component: SkillsSection },
  { id: 'experience.ts', label: 'experience.ts', icon: 'TS', iconClass: 'file-icon--ts', language: 'TypeScript', component: ExperienceSection },
  { id: 'education.json', label: 'education.json', icon: '{ }', iconClass: 'file-icon--json', language: 'JSON', component: EducationSection },
  { id: 'certificates.yml', label: 'certificates.yml', icon: '📜', iconClass: 'file-icon--json', language: 'YAML', component: CertificatesSection },
  { id: 'contact.css', label: 'contact.css', icon: '#', iconClass: 'file-icon--css', language: 'CSS', component: ContactSection },
];

const MENU_ITEMS = [
  { label: 'File', fileId: 'home.tsx' },
  { label: 'View', fileId: 'projects.js' },
  { label: 'Run', fileId: 'experience.ts' },
  { label: 'Terminal', fileId: 'skills.json' },
  { label: 'About', fileId: 'about.html' }
];
const CV_PATH = '/ayush_final_cv4.pdf';

export default function Portfolio() {
  const [activeFile, setActiveFile] = useState('home.tsx');
  const [openTabs, setOpenTabs] = useState(FILE_MAP.map(f => f.id));
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [explorerOpen, setExplorerOpen] = useState(true);
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const activeFileData = FILE_MAP.find(f => f.id === activeFile);
  const ActiveComponent = activeFileData?.component || HomeSection;

  const handleFileClick = (fileId) => {
    setActiveFile(fileId);
    if (!openTabs.includes(fileId)) {
      setOpenTabs([...openTabs, fileId]);
    }
    setMobileSidebarOpen(false);
  };

  const handleTabClose = (e, fileId) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(t => t !== fileId);
    if (newTabs.length === 0) newTabs.push('about.html');
    setOpenTabs(newTabs);
    if (activeFile === fileId) setActiveFile(newTabs[newTabs.length - 1]);
  };

  return (
    <div className="vscode-layout">
      {/* ===== TITLE BAR ===== */}
      <div className="titlebar">
        <button
          className="mobile-hamburger"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
        <div className="titlebar__controls">
          <span className="titlebar__dot titlebar__dot--red" />
          <span className="titlebar__dot titlebar__dot--yellow" />
          <span className="titlebar__dot titlebar__dot--green" />
        </div>
        <div className="titlebar__menu">
          {MENU_ITEMS.map(item => (
            <button 
              className="titlebar__menu-item" 
              key={item.label}
              onClick={() => handleFileClick(item.fileId)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="titlebar__search">
          <div className="titlebar__search-box">
            🔍 ayush-bharti : portfolio
          </div>
        </div>
        <div className="titlebar__spacer" />
      </div>

      {/* ===== TAB BAR ===== */}
      <div className="tabbar-row">
        {openTabs.map(tabId => {
          const file = FILE_MAP.find(f => f.id === tabId);
          if (!file) return null;
          return (
            <div
              key={tabId}
              className={`tab ${activeFile === tabId ? 'tab--active' : ''}`}
              onClick={() => setActiveFile(tabId)}
            >
              <span className={`tab__icon ${file.iconClass}`}>{file.icon}</span>
              <span>{file.label}</span>
              <button
                className="tab__close"
                onClick={(e) => handleTabClose(e, tabId)}
                aria-label={`Close ${file.label}`}
              >
                ×
              </button>
            </div>
          );
        })}
      </div>

      {/* ===== ACTIVITY BAR ===== */}
      <div className="activitybar">
        <div className="activitybar__top">
          <button
            className={`activitybar__icon ${sidebarOpen ? 'activitybar__icon--active' : ''}`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title="Explorer"
          >
            <svg viewBox="0 0 24 24"><path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zM14 22.57l-.07.43H2.5V7.5H7v11.07L8.5 20H14v2.57zM20 16.5H8.5V1.5H16v4.5h4v10.5z"/></svg>
          </button>
          <a
            className="activitybar__icon"
            href="https://github.com/ayushbharti20"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '24px', height: '24px' }}>
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.872 8.182 6.853 9.508.498.093.679-.217.679-.48l-.009-1.722c-2.782.604-3.369-1.341-3.369-1.341-.454-1.15-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.578 9.578 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.396.1 2.65.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855l-.009 2.747c0 .266.18.576.685.479C19.13 20.198 22 16.442 22 12.017 22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <a
            className="activitybar__icon"
            href="https://linkedin.com/in/ayushbharti20/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '24px', height: '24px' }}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            className="activitybar__icon"
            href="mailto:ayushbharti2022005@gmail.com"
            title="Email"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '24px', height: '24px' }}>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a
            className="activitybar__icon"
            href={CV_PATH}
            target="_blank"
            rel="noopener noreferrer"
            download="Ayush_Bharti_CV.pdf"
            title="Download CV"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '24px', height: '24px' }}>
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
          </a>
        </div>
        <div className="activitybar__bottom">
          <button className="activitybar__icon" title="Settings">
            <svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1115.6 12 3.6 3.6 0 0112 15.6z"/></svg>
          </button>
        </div>
      </div>

      {/* ===== SIDEBAR ===== */}
      <div className={`sidebar ${mobileSidebarOpen ? 'sidebar--open' : ''}`}
           style={!sidebarOpen ? { display: 'none' } : undefined}>
        <div className="sidebar__header">PORTFOLIO</div>
        <div className="sidebar__section">
          <div className="sidebar__section-header" onClick={() => setExplorerOpen(!explorerOpen)}>
            <span className={`sidebar__chevron ${explorerOpen ? 'sidebar__chevron--open' : ''}`}>▶</span>
            <span>PORTFOLIO</span>
          </div>
          {explorerOpen && (
            <ul className="sidebar__files">
              {FILE_MAP.map(file => (
                <li
                  key={file.id}
                  className={`sidebar__file ${activeFile === file.id ? 'sidebar__file--active' : ''}`}
                  onClick={() => handleFileClick(file.id)}
                  data-file={file.id}
                >
                  <span className={`sidebar__file-icon ${file.iconClass}`}>
                    {file.icon}
                  </span>
                  <span>{file.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <a href={CV_PATH} target="_blank" rel="noopener noreferrer" download="Ayush_Bharti_CV.pdf" className="sidebar__cv-btn">
          ⬇ Download Resume PDF
        </a>
      </div>

      {/* ===== EDITOR ===== */}
      <div className="editor-area" style={!sidebarOpen ? { gridColumn: '2 / -1' } : undefined}>
        <div className="breadcrumbs">
          <span>ayush-bharti</span>
          <span className="breadcrumbs__sep">›</span>
          <span>src</span>
          <span className="breadcrumbs__sep">›</span>
          <span style={{ color: 'var(--text-primary)' }}>{activeFile}</span>
        </div>
        <div className="editor" key={activeFile}>
          <ActiveComponent />
        </div>
      </div>

      {/* ===== STATUS BAR ===== */}
      <div className="statusbar">
        <div className="statusbar__left">
          <span className="statusbar__item statusbar__item--remote">
            ⚡ remote
          </span>
          <span className="statusbar__item">⎇ main</span>
        </div>
        <div className="statusbar__right">
          <span className="statusbar__item">{activeFileData?.language || 'Plain Text'}</span>
          <span className="statusbar__item">UTF-8</span>
          <span className="statusbar__item">💜 Ayush Bharti Dark</span>
          <span className="statusbar__item" style={{ opacity: 0.6 }}>
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}
