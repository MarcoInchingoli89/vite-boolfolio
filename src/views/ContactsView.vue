<script>
import AppBanner from '../components/AppBanner.vue';
import axios from 'axios';
import { state } from '../state';
export default {
    name: 'ContactsView',
    components: { AppBanner },
    data() {
        return {
            state,
            name: '',
            email: '',
            message: '',
            success: false,
            loading: false,
            errors: {}
        }
    },
    methods: {

        sendForm() {
            this.loading = true;

            this.errors = {};

            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            axios.post(`${this.state.base_api_url}/api/contacts`, data).then((response) => {
                this.success = response.data.success;
                console.log(response);

                if (this.success) {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                } else {
                    this.errors = response.data.errors;
                }
                this.loading = false;
            })
        }
    }
}
</script>

<template>
    <AppBanner title="Contattami" />
    <div class="container-fluid bg_contacts">
        <div class="container align-items-center justify-content-center">
            <div class="row">
                <div class="col mt-4 mb-4">
                    <h5 class="text-white text-uppercase font_jost">I miei contatti</h5>
                    <ul class="list-unstyled text-white">
                        <li>

                            <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor"
                                class="bi bi-house-door-fill" viewBox="0 0 16 16">
                                <path
                                    d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                            </svg>

                            <span class="font_jost ms-2 align-middle">Colleferro (RM)</span>

                        </li>
                        <li class="my-2">

                            <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor"
                                class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>

                            <span class="font_jost ms-2 align-middle">3491906363</span>

                        </li>
                        <li class="my-2">


                            <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor"
                                class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path
                                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                            </svg>

                            <span class="font_jost ms-2 align-middle">marco.inchingoli@gmail.com</span>

                        </li>
                        <li class="my-2">


                            <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor" class="bi bi-linkedin"
                                viewBox="0 0 16 16">
                                <path
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>

                            <a class="text-decoration-none text-white" href="https://www.linkedin.com/in/marco-inchingoli/"
                                target="_blank"><span class="font_jost ms-2 align-middle">/marco-inchingoli</span></a>

                        </li>
                        <li class="my-2">


                            <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor" class="bi bi-github"
                                viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>

                            <a class="text-decoration-none text-white" href="https://github.com/MarcoInchingoli89"
                                target="_blank"><span class="font_jost ms-2 align-middle">MarcoInchingoli89</span></a>

                        </li>
                    </ul>
                </div>
                <div class="col mt-4 mb-4">
                    <div v-if="success" class="alert alert-success text-start" role="alert">
                        Messaggio inviato con successo!
                    </div>

                    <form class="d-flex flex-column" @submit.prevent="sendForm()">
                        <h5 class="text-white text-uppercase font_jost">Inviami un messaggio</h5>
                        <div class="d-flex">
                            <div class="mb-3">
                                <input type="text" name="name" id="name" v-model="name"
                                    class="form-control w_custom bg_input text-white" placeholder="Nome"
                                    aria-describedby="fullNameHelper" required>

                                <p v-for="(error) in errors.name">
                                    {{ error }}
                                </p>
                            </div>

                            <div class="mb-3 ms-4">
                                <input type="email" name="email" id="email" v-model="email"
                                    class="form-control w_custom bg_input text-white" placeholder="Email"
                                    aria-describedby="emailHelper" required>

                                <p v-for="(error) in errors.name">
                                    {{ error }}
                                </p>
                            </div>
                        </div>


                        <div class="mb-3">
                            <textarea class="form-control bg_input border-0 text-white" placeholder="Messaggio"
                                name="message" id="message" v-model="message" rows="5" required></textarea>
                        </div>

                        <p v-for="(error) in errors.name">
                            {{ error }}
                        </p>
                        <div class="d-flex justify-content-center">
                            <button type="submit"
                                class="btn btn-primary rounded-pill px-5 py-3 mb-3 btn_w_custom font_jost font_custom"
                                :disabled="loading">
                                {{
                                    loading ? 'Sending...' : 'Invia Messaggio'
                                }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;1,300&family=Satisfy&display=swap');

.bg_contacts {
    background-color: $bf-primary;
}

.w_custom {
    width: 24rem;
    padding: 0.6rem 1rem;
    border: 0;
}

.bg_input {
    background-color: $bf-darker;
}

.btn_w_custom {
    width: 15rem;
    padding: 0.6rem 1rem;
}

.btn-primary {
    background-color: $bf-secondary;
    border-color: $bf-secondary;
}

.btn-primary:hover {
    background-color: transparent;
}

.font_custom {
    font-weight: bold;
}

.font_jost {
    font-family: 'Jost', sans-serif;
}
</style>