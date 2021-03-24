<script lang="ts">
  import { theme } from './store'
  import ToggleTheme from '$lib/ToggleTheme.svelte'
  import Counter from '$lib/Counter.svelte'
  import Timer from '$lib/Timer.svelte'
  import SimpleProduct from "$lib/ecommerce/SimpleProduct.svelte";
  import ModernProduct from "$lib/ecommerce/ModernProduct.svelte";
  import Workation from "$lib/ecommerce/Workation.svelte";
  import ProjectsList from "$lib/ecommerce/ProjectsList.svelte";
  import Food from "$lib/ecommerce/Food.svelte";
 
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>SvelteKit ❤️ Tailwind 2</title>
  <meta name="title" content="SvelteKit ❤️ Tailwind 2" />
  <meta
    name="description"
    content="SvelteKit and Tailwind 2 toggle dark/light theme demo"
  />
  <meta
    name="keywords"
    content="Svelte, SvelteKit, Svelte-kit, Tailwind, HTML, CSS, JavaScript"
  />
  <meta name="author" content="@dansvel" />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://metatags.io/" />
  <meta property="og:title" content="SvelteKit ❤️ Tailwind 2" />
  <meta
    property="og:description"
    content="SvelteKit and Tailwind 2 toggle dark/light theme demo"
  />
  <meta
    property="og:image"
    content="https://github.com/dansvel/sveltekit-typescript-postcss-tailwind2/raw/master/screenshot.png"
  />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://metatags.io/" />
  <meta property="twitter:title" content="SvelteKit ❤️ Tailwind 2" />
  <meta
    property="twitter:description"
    content="SvelteKit and Tailwind 2 toggle dark/light theme demo"
  />
  <meta
    property="twitter:image"
    content="https://github.com/dansvel/sveltekit-typescript-postcss-tailwind2/raw/master/screenshot.png"
  />
</svelte:head>

<h1 class="mb-4 text-5xl font-extrabold">Hello {$theme} world!</h1>

<ToggleTheme />

<blockquote class="p-2 mb-2 text-xl bg-gray-200 dark:bg-gray-800">
  <a href="https://github.com/dansvel/sveltekit-typescript-postcss-tailwind2"
    ><b>Github repo</b></a
  >
  or
  <a href="https://dev.to/dansvel/sveltekit-svelte-next-with-tailwind-2-4dnn"
    ><b>dev.to post</b></a
  >
</blockquote>
<p>
  Visit the <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.
</p>
<p>The title is using utility class, but all other elements is using style component.</p>
<p>Just check <code>src/routes/index.svelte</code> to see the code.</p>
<br/>
<a href="https://svelte.dev/blog/sveltekit-beta" target="blank" class="px-4 py-2 text-white">
  Sveltekit beta released
</a>  <a href="https://kit.svelte.dev/docs" target="blank">including documentation</a>
<Counter />
<Timer />
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
<style lang="postcss">
  p {
    @apply text-lg;
    @apply mt-0 mb-1;
    & code {
      @apply px-1;
      @apply dark:bg-gray-800 bg-gray-200;
    }
  }
</style>
