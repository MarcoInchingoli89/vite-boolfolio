<script>
import AppBanner from '../components/AppBanner.vue'
export default {
    name: 'AboutView',
    components: { AppBanner }
}
</script>

<template>

    <AppBanner title="About" />
    <div class="container-fluid pt-4">
        <div class="image_wrapper d-flex align-center justify-content-center">
            <!-- immagine Marco -->
            <div class="about_image rounded-circle p-2 mb-3">
                <img width="100" class="img-fluid rounded-circle h-100 w-100" src="../../public/img/marco-about.jpeg"
                    alt="">
            </div>
        </div>
        <!-- info personali -->
        <section class="info_about text-center">
            <div class="container border_bottom_green">
                <h1 class="title_info text-white mb-0 pb-3">I'm <span class="bf_secondary">Marco
                        Inchingoli</span>,
                    a
                    Jr. Full Stack Web
                    Developer</h1>
                <p class="lead text-secondary mb-0 pb-3">Cresciuto a pane e videogiochi, ho sempre avuto una grande
                    passione
                    per la tecnologia. Sin da piccolo ho sempre sognato di entrare nel mondo della programmazione poiché
                    ammaliato dai computer, dai software e dal mondo digitale. I videogiochi mi hanno sviato in un primo
                    momento portandomi a scrivere per varie testate giornalistiche nel settore videoludico come
                    freelance,
                    ma pur mantenendo la passione verso il mondo videoludico, un bisogno di un futuro più concreto mi ha
                    riportato verso il sogno che avevo da bambino. Dopo essere entrato in contatto con la tech academy
                    Boolean, ho intrapreso un lungo percorso che mi ha riportato a quella passione originale, scoprendo
                    un
                    nuovo mondo che mi ha portato ad innamorarmi giorno dopo giorno imparando nuove tecnologie e
                    sviluppando
                    nuove abilità logiche e creative.

                    Non smettete mai di credere nei vostri sogni, poiché potrebbero realizzarsi quando meno te lo
                    aspetti.
                </p>
                <button type="button" class="btn btn-primary rounded-pill px-5 py-3 mb-3">Download CV</button>
            </div>
        </section>
        <!-- esperienze e formazione -->
        <section class="experience_formation">
            <div class="container">
                <div class="row row-cols-2 d-flex">
                    <!-- Experience -->
                    <div class="col">
                        <h3 class="text-white font_jost">Experience</h3>
                        <ul class="list-unstyled">
                            <li class="ms-2 card text-white bg_dark mb-3 px-2 py-2 h-100">
                                <div class="badge badge-primary bg_green w-25 m-2">2022 - 2023</div>
                                <h4 class="text-white font_jost">Full Stack Web Developer Trainee</h4>
                                <p class="bf_secondary m-0 mb-3">Boolean Careers - A tempo pieno - Da remoto</p>
                                <p class="text-secondary font_jost">
                                    Con Boolean ho intrapreso un percorso intensivo durato per 6 mesi che mi ha formato
                                    non solo a livello di competenze tecniche, ma anche a livello personale. In questi
                                    mesi ho imparato ad approcciarmi al mondo del Web Development e ho appreso le
                                    principali tecnologie front-end e back-end quali HTML, CSS (SASS), Bootstrap,
                                    JavaScript, Vue, Vite, PHP, MySql e Laravel. La didattica è avvenuta in remoto e si
                                    suddivideva in lezione mattutina ed esercizio pomeridiano. Gli esercizi oltre a
                                    mettere in pratica ciò che vedevamo la mattina in chiave teorica ci ha permesso di
                                    portare a casa una serie di progetti, alcuni ispirati a Web App note come WhatsApp,
                                    Spotify, PlayStation, Netflix e molte altre.
                                </p>
                            </li>
                        </ul>
                        <ul class="list-unstyled">
                            <li class="ms-2 card text-white bg_dark mb-3 px-2 py-2 h_363">
                                <div class="badge badge-primary bg_green w-25 m-2">2008 - 2022</div>
                                <h4 class="text-white font_jost">Redattore Freelance</h4>
                                <p class="bf_secondary m-0 mb-3">Varie testate giornalistiche - Da remoto</p>
                                <p class="text-secondary font_jost">
                                    Ho lavorato come redattore freelance per varie testate videoludiche tra cui
                                    TheGamesMachine, IGN e PSMania, e collaboro saltuariamente per le testate FocusTech
                                    e InfinityNews dove scrivo articoli di vario genere, ma soprattutto nel settore
                                    scientifico e videoludico.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <!-- Education -->
                    <div class="col">
                        <h3 class="text-white font_jost">Education</h3>
                        <ul class="list-unstyled">
                            <li class="ms-2 card text-white bg_dark mb-3 px-2 py-2 h_363">
                                <div class="badge badge-primary bg_green w-25 m-2">2022 - 2023</div>
                                <h4 class="text-white font_jost">Master Full Stack Web Developer</h4>
                                <p class="bf_secondary m-0 mb-3">Boolean Careers - A tempo pieno - Da remoto</p>
                                <p class="text-secondary font_jost">
                                    In sei mesi di corso intensivo per un totale di oltre 700 ore di lezione ho appreso
                                    e utilizzato le seguenti tecnologie:
                                    <!-- Tecnologie apprese -->
                                <div class="container">
                                    <div class="row row-cols-2">
                                        <div class="col">
                                            <ul>
                                                <li>HTML5</li>
                                                <li>CSS</li>
                                                <li>JavaScript</li>
                                                <li>MySQL</li>
                                                <li>PHP</li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li>Vite</li>
                                                <li>Vue</li>
                                                <li>Bootstrap</li>
                                                <li>SASS</li>
                                                <li>Laravel</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                </p>
                            </li>
                        </ul>
                        <ul class="list-unstyled">
                            <li class="ms-2 card text-white bg_dark mb-3 px-2 py-2 h_363">
                                <div class="badge badge-primary bg_green w-25 m-2">2002 - 2007</div>
                                <h4 class="text-white font_jost">Istituto d'Istruzione Superiore "Carlo e Nello
                                    Rosselli"</h4>
                                <p class="bf_secondary m-0 mb-3">Diploma in Elettronica e Telecomunicazioni</p>
                                <p class="text-secondary font_jost">Valutazione: 70/100</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;1,300&family=Satisfy&display=swap');

.container-fluid {
    background-color: $bf-primary;

    .about_image {
        height: 250px;
        width: 250px;
        background-color: rgba(0, 0, 0, 0.2);

        img {
            object-fit: cover;
            object-position: right top;
        }
    }

    .title_info,
    p {
        font-family: 'Jost', sans-serif;
    }

    .btn-primary {
        background-color: $bf-secondary;
        border-color: $bf-secondary;
    }

    .btn-primary:hover {
        background-color: transparent;
    }

    .border_bottom_green {
        border-bottom: 2.5px solid $bf-secondary;
    }

    .bf_secondary {
        color: $bf-secondary;
    }

    .bg_green {
        background-color: $bf-secondary;
    }

    .bg_dark {
        background-color: $bf-dark;
    }

    .font_jost {
        font-family: 'Jost', sans-serif;
    }
}

.h_363 {
    height: 363px;
}
</style>