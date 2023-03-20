<template>
    <v-app-bar
        class="px-3"
        flat
        color="background"
        border
        density="compact"
        >
        <v-btn v-for="social in socials" disabled class="d-none d-sm-block mx-1"></v-btn>

        <v-spacer></v-spacer>

        <v-tabs
            v-model="page"
            centered
            color="primary"
        >
            <v-tab
                v-for="link in links"
                :key="link.title"
                @click="$router.push({ name: link.route })"
            >
                <v-icon class="mr-2">{{  link.icon }}</v-icon>
                {{ link.title }}
            </v-tab>
        </v-tabs>
        <v-spacer></v-spacer>

        <v-btn v-for="social in socials" :icon="social.icon" class="d-none d-sm-block mx-1" @click="open_url(social.url)"></v-btn>
    </v-app-bar>
    <v-footer class="d-sm-none d-md-none" dense app>
        <v-spacer></v-spacer>
        <v-btn v-for="social in socials" :icon="social.icon" class="mx-1" @click="open_url(social.url)" flat></v-btn>
    </v-footer>
</template>

<script lang="ts">
export default {
    data: () => ({
        page: 0,
        links: [
            {
                title: 'Home',
                route: 'home',
                icon: 'mdi-home'
            },
            {
                title: 'My Work',
                route: 'work',
                icon: 'mdi-code-json'
            },
            {
                title: 'Cat',
                route: 'cat',
                icon: 'mdi-cat'
            }
        ],
        socials: [
            {
                icon: 'mdi-twitter',
                url: 'https://twitter.com/naexris'
            },
            {
                icon: 'mdi-github',
                url: 'https://github.com/naexris'
            }
        ]
    }),
    methods: {
        update_page() {
            this.page = this.links.map(e => e.route).indexOf(this.$route.name as string)
        },
        open_url(url: string) {
            window.open(url, '_blank')
        }
    },
    watch:{
        $route (to, from){
            this.update_page()
        }
    } ,
    mounted() {
        this.update_page()
    }
}
</script>