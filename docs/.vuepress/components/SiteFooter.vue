<template>
  <footer class="vp-site-footer">
    <p class="vp-site-footer-text">Dokumentation von 54 Grad Software GmbH</p>

    <nav class="vp-site-footer-links" aria-label="Rechtliches">
      <a
        href="https://www.54gradsoftware.de/impressum"
        target="_blank"
        rel="noopener noreferrer"
        >Impressum</a
      >
      <a
        href="https://www.54gradsoftware.de/datenschutz"
        target="_blank"
        rel="noopener noreferrer"
        >Datenschutz</a
      >
    </nav>
  </footer>
</template>

<style scoped>
.vp-site-footer {
  margin-top: 2rem;
  padding: 1.5rem 2.5rem;
  border-top: 1px solid var(--vp-c-border);

  color: var(--vp-c-text-mute);
  font-size: 0.9rem;
  text-align: center;

  transition: border-color var(--vp-t-color);
}

.vp-site-footer-text {
  margin: 0 0 0.5rem;
}

.vp-site-footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  justify-content: center;
}

.vp-site-footer-links a {
  color: inherit;
  text-decoration: none;
}

.vp-site-footer-links a:hover,
.vp-site-footer-links a:focus-visible {
  color: var(--vp-c-accent);
  text-decoration: underline;
}

@media (max-width: 719px) {
  .vp-site-footer {
    padding-inline: 1.5rem;
  }
}
</style>
