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
    <AppBanner title="Contacts" />
    <div class="container-fluid bg_contacts">
        <div class="container align-items-center justify-content-center">
            <div class="row">
                <div class="col"></div>
                <div class="col mt-4 mb-4">
                    <div v-if="success" class="alert alert-success text-start" role="alert">
                        Messaggio inviato con successo!
                    </div>

                    <form class="d-flex flex-column" @submit.prevent="sendForm()">
                        <div class="d-flex">
                            <div class="mb-3">
                                <input type="text" name="name" id="name" v-model="name"
                                    class="form-control w_custom bg_input text-white" placeholder="Name"
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
                            <textarea class="form-control bg_input border-0 text-white" placeholder="Message" name="message"
                                id="message" v-model="message" rows="5" required></textarea>
                        </div>

                        <p v-for="(error) in errors.name">
                            {{ error }}
                        </p>
                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary rounded-pill px-5 py-3 mb-3 btn_w_custom"
                                :disabled="loading">
                                {{
                                    loading ? 'Sending...' : 'Send Message'
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
    width: 14rem;
    padding: 0.6rem 1rem;
}

.btn-primary {
    background-color: $bf-secondary;
    border-color: $bf-secondary;
}

.btn-primary:hover {
    background-color: transparent;
}
</style>