<script>
  // import {
  //   VideoIcon,
  //   ChevronRightIcon,
  //   HeartIcon,
  //   ShoppingCartIcon,
  //   SmileIcon,
  //   UserIcon
  // } from "svelte-feather-icons";
  let cls = "",
    errorStr = null,
    geo = null,
    gettingLocation = false;
  function submit(q) {
    // this.$router.push(`/search/${q}`);
  }
  function closeSidebar() {
    this.sidebar = false;
  }
  function logout() {
    // this.$store.dispatch("auth/logout").then(() => {});
  }
  function go(url) {
    // this.$router.push(url);
  }
</script>

<style>
  .blur {
    backdrop-filter: saturate(180%) blur(5px);
  }
  .desktop-badge {
    font-size: 8px;
    right: -6px;
    top: -6px;
    height: 15px;
    width: 14px;
    border-radius: 50%;
    display: inline-block;
  }
  .desktop-badge .number {
    margin-top: 1.5px;
    margin-left: -1px;
  }

  .fix-search {
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    padding: 10px;
    z-index: 100;
    margin: 0px;
  }
</style>

<header class="z-20 w-full mb-10 bg-white shadow-lg opacity-75 blur">
  <nav class="container flex flex-wrap items-center justify-between mx-auto">
    <div class="flex flex-wrap items-center flex-shrink-0 order-1 text-orange">
      <a href="/" class="flex items-center font-bold">
        <img class="h-6 mx-2" v-lazy="`/logo.svg`" alt="Home" />
        LrNr
      </a>
    </div>
    <div
      class="order-4 w-full px-2 md:hidden lg:block md:w-1/2 md:mb-0 md:pr-6 md:order-3">
      <!-- <Search class="pb-2 md:pb-0" /> -->
    </div>
    <div class="order-3 py-3 ml-10 mr-3 md:order-4 headings">
      <div
        class="items-center justify-between flex-shrink-0 hidden text-sm font-bold leading-loose tracking-wider md:flex">
        <a class="flex flex-col items-center mx-4" href="/allocated">
          <!-- <SmileIcon class="h-5" /> -->
          <div>Allocated</div>
        </a>
        <a class="flex flex-col items-center mx-3" href="/my/questions">
          <!-- <HeartIcon class="h-5 center" /> -->
          <div class="text-xs font-bold headings">Author Quiz</div>
        </a>
        <a class="flex flex-col items-center mx-3" href="/videos">
          <!-- <VideoIcon class="h-5 center" /> -->
          <div class="text-xs font-bold headings">Videos</div>
        </a>
        <a class="relative flex flex-col items-center mx-3" href="/quiz">
          <!-- <UserIcon class="h-5 ml-1" /> -->
          <div>User Quiz</div>
        </a>
      </div>
    </div>
  </nav>
</header>
