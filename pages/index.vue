<script setup lang="ts">
const host = useRequestURL().host;
let hosting = { url: "https://pages.cloudflare.com", title: "CloudFlare Pages" };
if (host.includes(".netlify.app")) {
  hosting = { url: "https://www.netlify.com/products/#netlify-edge-functions", title: "Netlify Edge Functions" };
} else if (host.includes(".vercel.app")) {
  hosting = { url: "https://vercel.com/features/edge-functions", title: "Vercel Edge Functions" };
} else if (host.includes(".lagon.dev")) {
  hosting = { url: "https://lagon.app", title: "Lagon" };
} else if (host.includes(".deno.dev")) {
  hosting = { url: "https://deno.com/deploy", title: "Deno Deploy" };
}
const isD1 = host.includes("nuxt-todos-edge.pages.dev");
const { loggedIn } = useUserSession();
</script>

<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold leading-6">
        Todo List
      </h3>
      <UButton
        v-if="!loggedIn"
        to="/api/auth/github"
        icon="i-simple-icons-github"
        label="Login with GitHub"
        color="black"
        external
      />
      <UButton
        v-else
        to="/todos"
        icon="i-heroicons-list-bullet"
        label="Go to Todos"
        color="black"
      />
    </template>
    <p class="font-medium">
      Welcome to Todos!
    </p>
    <p>
      This is a Nuxt demo app
    </p>
  </UCard>
</template>
