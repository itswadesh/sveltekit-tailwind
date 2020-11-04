<script>
  import Counter from "$components/Counter.svelte";
  import { onMount } from "svelte";

  let Slider;
  onMount(async () => {
    const module = await import("$components/Slider.svelte");
    Slider = module.default;
  });
</script>

<main>
  <h1>Hello world!</h1>

  <Counter />
  <svelte:component this={Slider} foo="bar" />
</main>
