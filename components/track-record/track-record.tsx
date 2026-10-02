import Image from "next/image";
import { aboutIntro, experience } from "@/content/experience";
import { CONTENT_REQUIRED } from "@/content/placeholders";
import "./track-record.css";

/** /about: linha do tempo concisa, do mais recente para o mais antigo; complementa o CV */
export function TrackRecord() {
  return (
    <section id="about" aria-labelledby="page-title" className="about pad-x env-paper" data-env="paper">
      <div className="wrap about__inner">
        <div className="g12 about__top">
          <div className="g12 about__head" data-reveal="wind">
            <div className="heading about__title">
              <p className="t-overline ink-2">Track record</p>
              <h1 id="page-title" tabIndex={-1} className="t-display2 page-title">
                Where the work happened.
              </h1>
            </div>
            <div className="t-body about__intro">
              {aboutIntro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <figure className="about__portrait">
            <Image
              src="/media/portrait.png"
              alt="Illustrated self-portrait: Vitor in a fedora and suspenders, tipping his hat, a tweed jacket over one arm."
              width={271}
              height={460}
              sizes="118px"
            />
            <figcaption className="t-overline ink-2">The author</figcaption>
          </figure>
        </div>
        <div>
          <div className="brow g12 col-heads t-overline ink-2" aria-hidden="true">
            <span className="tl__period">Period</span>
            <span className="tl__who">Role · organisation</span>
            <span className="tl__systems">Systems</span>
            <span className="tl__contribution">Contribution</span>
          </div>
          <ol className="list-reset">
            {experience.map((e) => (
              <li key={e.period + (e.project ?? e.organization)} className="brow g12">
                <p className="t-meta tl__period">
                  <time>{e.period}</time>
                </p>
                <div className="tl__who">
                  <h2 className="t-title3">{e.project ?? e.organization}</h2>
                  <p className="t-bodysm ink-2">{e.project ? `${e.organization} · ${e.role}` : e.role}</p>
                </div>
                <div className="tl__systems">
                  <p className="t-body">{e.context}</p>
                  {e.systems.length > 0 && <p className="t-meta ink-2">{e.systems.join(" · ")}</p>}
                </div>
                <p className="t-body tl__contribution">{e.contribution || CONTENT_REQUIRED}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
