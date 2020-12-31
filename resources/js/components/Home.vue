<template>
    <v-app id="main">
        <navbar ref="navbar"></navbar>

        <v-main>
            
                <router-view></router-view>
            
        </v-main>

        <app-footer></app-footer>
    </v-app>

</template>

<script>
    import Navbar from './Navbar'
    import Header from './Header'
    import Footer from './Footer'
    export default {
        name: 'App',
        components: {
            'navbar': Navbar,
            'app-header': Header,
            'app-footer': Footer
        }
    }
</script>