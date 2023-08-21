<script setup>
const { loggedIn } = useUserSession();
const colorMode = useColorMode();

watch(loggedIn, () => {
  if (!loggedIn.value) {
    navigateTo("/");
  }
});

function toggleColorMode() {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
}

useHead({
  htmlAttrs: { lang: "en" },
  link: [{ rel: "icon", href: "/icon.png" }],
});

useSeoMeta({
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  title: "io238 Todos",
  description:
    "A Nuxt demo hosted with Edge-side rendering, authentication and queyring a SQLite database",
  ogImage: "/social-image.png",
  twitterImage: "/social-image.png",
  twitterCard: "summary_large_image",
});

import { useGeolocation, useTimeAgo } from "@vueuse/core";
const { isSupported, coords, locatedAt } = useGeolocation();
const timeAgo = useTimeAgo(locatedAt);
</script>

<template>
  <UContainer class="py-10 flex flex-col justify-center">
    <div class="mb-2 text-right">
      <UButton
        square
        variant="ghost"
        color="black"
        :icon="
          $colorMode.preference === 'dark'
            ? 'i-heroicons-moon'
            : 'i-heroicons-sun'
        "
        @click="toggleColorMode"
      />
    </div>

    <NuxtPage />

    <footer class="text-center mt-2">
      <NuxtLink
        href="https://github.com/io238/nuxt-todos-edge"
        target="_blank"
        class="text-sm text-gray-500 hover:text-gray-700"
      >
        GitHub
      </NuxtLink>

      <div class="text-sm mt-5">
        <div v-if="isSupported && locatedAt">
          {{ coords.latitude }}, {{ coords.longitude }}
          <div class="text-red">
            {{ timeAgo }}
          </div>
        </div>
        <div v-else>
          <UAlert icon="i-heroicons-map-pin" color="red" variant="solid" title="Warning" description="Location not available!" />
        </div>
      </div>
    </footer>
  </UContainer>
  <UNotifications />
</template>

<style lang="postcss">
body {
  @apply font-sans text-gray-950 bg-gray-50 dark:bg-gray-950 dark:text-gray-50;
}
</style>
