<script>
import AppBanner from '../components/AppBanner.vue'
export default {
    name: 'ContactsView',
    components: { AppBanner }
}
</script>

<template>

    <AppBanner title="Contacts Page" />
    <div class="container">
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat illo asperiores
            provident aut incidunt. Voluptate necessitatibus nisi delectus, dolorum reprehenderit accusamus aspernatur
            saepe sequi doloribus ullam similique aut dolor!</p>

        <form action="">
            <div class="mb-3">
                <label for="" class="form-label">Full Name</label>
                <input type="text" name="" id="" class="form-control" placeholder="Marco Rossi"
                    aria-describedby="fullNameHelper">
                <small id="fullNameHelper" class="text-muted">Add your full name</small>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="email" name="" id="" class="form-control" placeholder="marcorossi@example.com"
                    aria-describedby="emailHelper">
                <small id="emailHelper" class="text-muted">Add your email</small>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Message</label>
                <textarea class="form-control" name="" id="" rows="5"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Contact Me</button>
        </form>
    </div>

</template>

<style lang="scss">
@use './styles/general.scss'
</style>