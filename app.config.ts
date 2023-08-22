export default defineAppConfig({
  ui: {
    primary: "sky",
    container: {
      constrained: "max-w-2xl"
    },
    card: {
      header: {
        base: "flex flex-wrap items-center justify-between"
      },
      body: {
        base: "space-y-4"
      }
    },
    dropdown: {
      width: "w-full",
      popper: {
        strategy: "absolute"
      }
    }
  }
});