<script>
  import Counter from "$components/Counter.svelte";
  import SimpleProduct from "$components/ecommerce/SimpleProduct.svelte";
  import ModernProduct from "$components/ecommerce/ModernProduct.svelte";
  import Workation from "$components/ecommerce/Workation.svelte";
  import ProjectsList from "$components/ecommerce/ProjectsList.svelte";
  import Food from "$components/ecommerce/Food.svelte";
  import { onMount } from "svelte";

  let Slider;
  onMount(async () => {
    const module = await import("$components/Slider.svelte");
    Slider = module.default;
  });
</script>

<style>
  .GradientLockup_root__sBkgs {
    grid-template-columns: 1fr minmax(-webkit-min-content, 640px) 1fr;
    grid-template-columns: 1fr minmax(min-content, 640px) 1fr;
  }
  @media (min-width: 1280px) {
    .GradientLockup_root__sBkgs {
      grid-template-columns: 2rem 1fr 52.5% 2rem;
    }
  }
  @media (min-width: 1024px) {
    .GradientLockup_root__sBkgs {
      grid-template-columns: 2rem 1fr 59.375% 2rem;
      grid-template-rows: auto 2.25rem auto 2.25rem;
    }
  }
</style>

<main class="container mx-auto">
  <h1 class="text-4xl bold">TailwindCSS integration with Svelte Next</h1>
  <p>Collection of TailwindCSS components using Svelte</p>
  <h2 class="text-3xl bold">Color Pallets</h2>
  <ul class="space-y-2">
    <li>
      <ul class="grid h-6 grid-cols-10">
        <li class="bg-red-50" />
        <li class="bg-red-100" />
        <li class="bg-red-200" />
        <li class="bg-red-300" />
        <li class="bg-red-400" />
        <li class="bg-red-500" />
        <li class="bg-red-600" />
        <li class="bg-red-700" />
        <li class="bg-red-800" />
        <li class="bg-red-900" />
      </ul>
    </li>
    <li>
      <ul class="grid h-6 grid-cols-10">
        <li class="bg-yellow-50" />
        <li class="bg-yellow-100" />
        <li class="bg-yellow-200" />
        <li class="bg-yellow-300" />
        <li class="bg-yellow-400" />
        <li class="bg-yellow-500" />
        <li class="bg-yellow-600" />
        <li class="bg-yellow-700" />
        <li class="bg-yellow-800" />
        <li class="bg-yellow-900" />
      </ul>
    </li>
    <li>
      <ul class="grid h-6 grid-cols-10">
        <li class="bg-green-50" />
        <li class="bg-green-100" />
        <li class="bg-green-200" />
        <li class="bg-green-300" />
        <li class="bg-green-400" />
        <li class="bg-green-500" />
        <li class="bg-green-600" />
        <li class="bg-green-700" />
        <li class="bg-green-800" />
        <li class="bg-green-900" />
      </ul>
    </li>
    <li>
      <ul class="grid h-6 grid-cols-10">
        <li class="bg-blue-50" />
        <li class="bg-blue-100" />
        <li class="bg-blue-200" />
        <li class="bg-blue-300" />
        <li class="bg-blue-400" />
        <li class="bg-blue-500" />
        <li class="bg-blue-600" />
        <li class="bg-blue-700" />
        <li class="bg-blue-800" />
        <li class="bg-blue-900" />
      </ul>
    </li>
    <li>
      <ul class="grid h-6 grid-cols-10">
        <li class="bg-purple-50" />
        <li class="bg-purple-100" />
        <li class="bg-purple-200" />
        <li class="bg-purple-300" />
        <li class="bg-purple-400" />
        <li class="bg-purple-500" />
        <li class="bg-purple-600" />
        <li class="bg-purple-700" />
        <li class="bg-purple-800" />
        <li class="bg-purple-900" />
      </ul>
    </li>
    <li>
      <ul class="grid h-6 grid-cols-10">
        <li class="bg-pink-50" />
        <li class="bg-pink-100" />
        <li class="bg-pink-200" />
        <li class="bg-pink-300" />
        <li class="bg-pink-400" />
        <li class="bg-pink-500" />
        <li class="bg-pink-600" />
        <li class="bg-pink-700" />
        <li class="bg-pink-800" />
        <li class="bg-pink-900" />
      </ul>
    </li>
  </ul>
  <h2 class="text-3xl bold">Projects</h2>
  <ProjectsList />
  <h2 class="text-3xl bold">e-commerece</h2>
  <Food />
  <!-- <Workation /> -->
  <div
    class="space-y-20 overflow-hidden sm:space-y-32 md:space-y-40 lg:space-y-44">
    <div class="">
      <section id="">
        <div class="grid GradientLockup_root__sBkgs">
          <SimpleProduct />
          <!-- <ModernProduct /> -->
        </div>
      </section>
    </div>

    <!-- <svelte:component this={Slider} foo="bar" /> -->
  </div>
</main>
