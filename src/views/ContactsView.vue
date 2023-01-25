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
    <div class="container mt-4">
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat illo asperiores
            provident aut incidunt. Voluptate necessitatibus nisi delectus, dolorum reprehenderit accusamus aspernatur
            saepe sequi doloribus ullam similique aut dolor!</p>

        <div v-if="success" class="alert alert-success text-start" role="alert">
            Messaggio inviato con successo!
        </div>

        <form @submit.prevent="sendForm()">
            <div class="mb-3">
                <label for="" class="form-label">Full Name</label>
                <input type="text" name="name" id="name" v-model="name" class="form-control" placeholder="Marco Rossi"
                    aria-describedby="fullNameHelper" required>

                <p v-for="(error) in errors.name">
                    {{ error }}
                </p>

                <small id="fullNameHelper" class="text-muted">Add your full name</small>
            </div>

            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="email" name="email" id="email" v-model="email" class="form-control"
                    placeholder="marcorossi@example.com" aria-describedby="emailHelper" required>

                <p v-for="(error) in errors.name">
                    {{ error }}
                </p>

                <small id="emailHelper" class="text-muted">Add your email</small>
            </div>

            <div class="mb-3">
                <label for="" class="form-label">Message</label>
                <textarea class="form-control" name="message" id="message" v-model="message" rows="5"
                    required></textarea>
            </div>

            <p v-for="(error) in errors.name">
                {{ error }}
            </p>

            <button type="submit" class="btn btn-dark" :disabled="loading"> {{
                loading? 'Sending...': 'Contact me'
            }}</button>
        </form>
    </div>

</template>

<style lang="scss" scoped>

</style>