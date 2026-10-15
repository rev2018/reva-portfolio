    const onVisibilityChange = () => {
      const keyInteraction = Boolean(document.querySelector(".key-face:hover, .key-face:focus"));
      setIsBusy(document.hidden || Boolean(modal) || keyInteraction);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [modal]);

  const previewKey = useCallback((item) => {
    if (restoreTimer.current) window.clearTimeout(restoreTimer.current);
    setIsBusy(true);
    typeScreen(item.title, item.description);
  }, [typeScreen]);

  const restoreWelcome = useCallback((element) => {
    if (element && element.matches?.(":focus")) return;
    if (modal) return;
    if (restoreTimer.current) window.clearTimeout(restoreTimer.current);
    restoreTimer.current = window.setTimeout(() => {
      if (document.querySelector(".section-dialog-panel")) return;
      const focusedKey = sceneRef.current?.querySelector(".key-face:focus");
      if (!focusedKey) {
        setIsBusy(false);
        typeScreen(WELCOME_TITLE, WELCOME_DESC);
      }
    }, 350);
  }, [modal, typeScreen]);

  const openSection = useCallback((section) => {
    if (restoreTimer.current) window.clearTimeout(restoreTimer.current);
    clearTyping();
    lastScreenRequest.current = { title: "", description: "" };
    setScreenStatus("READY");
    setIsBusy(true);
    setModal(section);
  }, [clearTyping]);

  const closeSection = useCallback(() => {
    setModal(null);
    setIsBusy(false);
    typeScreen(WELCOME_TITLE, WELCOME_DESC);
  }, [typeScreen]);

  const handleNav = (section) => openSection(section);

  return <div className="portfolio-shell">
    <header className="site-header">
      <span className="header-spacer" aria-hidden="true" />
      <nav className="main-nav" aria-label="Main navigation">
        <button type="button" onClick={() => handleNav("projects")}>Projects</button>
        <button type="button" onClick={() => handleNav("profile")}>Profile</button>
        <button type="button" onClick={() => handleNav("experience")}>Experience</button>
        <button type="button" onClick={() => handleNav("skills")}>Toolkit</button>
      </nav>
    </header>

    <main id="top">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          
          <h1 id="hero-title">Hey, I'm <span>Reva</span></h1>
          <p>I like figuring out what happens between a messy CSV and data someone can actually trust. I use Python and SQL to explore data quality, build useful workflows, and understand what makes pipelines dependable.</p>
        </div>

        <div className={`device-scene ${isBusy || modal ? "is-paused" : ""}`} ref={sceneRef}>
          <img className="device-artwork" src="/device-reference.png" alt="A graphite mechanical console with an inset screen and recessed switch openings" fetchPriority="high" />
          <div className="terminal-screen" aria-label={`Console screen. ${screenTitle || "Loading title"}. ${screenDescription}`}>
            <div className="terminal-meta"><span>REVA / DATA SYSTEMS INDEX</span><span className="terminal-status"><i />{screenStatus}</span></div>
            <h2 aria-label={screenTitle || WELCOME_TITLE} className="terminal-title" style={{ "--title-length": Math.max(screenTitleTarget.length + 1, 1) }}><span>{screenTitle}</span><span className="terminal-caret" aria-hidden="true" /></h2>
            <p className="terminal-description">{screenDescription}</p>
            <span className="terminal-corner" aria-hidden="true">SYS.01</span>
          </div>
          {keyItems.map((item, index) => <DeviceKey key={item.id} item={item} index={index} onPreview={previewKey} onLeave={restoreWelcome} onOpen={openSection} />)}
          <div className="key-position key-position-contact-bar" style={{ "--x": "73.893%", "--y": "72.754%", "--w": "24.349%", "--h": "10.938%", "--wave-delay": "850ms" }}>
            <a className="key-face cap-contact" href={`mailto:${profile.email}`} aria-label={`Email Reva at ${profile.email}`} onPointerEnter={() => previewKey({ title: "Let's talk", description: `Send a note to ${profile.email}` })} onPointerLeave={(event) => restoreWelcome(event.currentTarget)} onFocus={() => previewKey({ title: "Let's talk", description: `Send a note to ${profile.email}` })} onBlur={(event) => restoreWelcome(event.currentTarget)}>
              <span className="contact-return" aria-hidden="true">↵</span><span className="contact-key-text">LET'S TALK</span><Arrow />
            </a>
          </div>
        </div>

      </section>

      <section className="hello-section" id="contact">
        <div className="hello-title"><p className="eyebrow">CONTACT / OPEN TO OPPORTUNITIES</p><h2>Got a role, a project,<br /><span>or a data problem?</span></h2></div>
        <div className="hello-details">
          <p>I’m looking for an entry-level Data Engineering role where I can put Python, SQL, and data-quality skills to work while learning how reliable pipelines are built in practice. Have an opening, a project, or an idea worth talking through? Send me a note.</p>
          <a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a>
          <div className="contact-details-list">
            <span className="contact-detail-label">LINKEDIN</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedinDisplay} <Arrow /></a>
            <span className="contact-detail-label">PHONE</span>
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
          </div>
          <div className="resume-actions"><a className="resume-view" href={profile.resumeUrl} target="_blank" rel="noreferrer">View resume <Arrow /></a><a className="resume-download" href={profile.resumeUrl} download="Reva_Saxena_Resume.pdf"><span aria-hidden="true">↓</span> Download PDF</a><a className="resume-download" href="/Reva_Saxena_Resume.docx" download="Reva_Saxena_Resume.docx"><span aria-hidden="true">↓</span> Download DOCX</a></div>
        </div>
      </section>
    </main>

    {modal && <SectionDialog section={modal} onClose={closeSection} />}
  </div>;
}

export default App;
