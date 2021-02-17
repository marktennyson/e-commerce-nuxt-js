<template>
    <div id="mainDiv">
                <div id="heroPart">
                  <!-- This example requires Tailwind CSS v2.0+ -->
                  <nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Icon when menu is open. -->
          <!--
            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
          <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span class="sr-only">View notifications</span>
          <!-- Heroicon name: outline/bell -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div>
            <button v-on:click="counter = true" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
          </div>
          
          <div v-if="counter === true" class="origin-top-right absolute z-20 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div class="hidden sm:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>
<div class="relative bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
        <!-- This example requires Tailwind CSS v2.0+ -->


        <!-- <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <span class="sr-only">Workflow</span>
                <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg">
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true">
                  <span class="sr-only">Open main menu</span>
                  Heroicon name: outline/menu 
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Product</a>

            <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Features</a>

            <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>

            <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Company</a>

            <a href="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
          </div>
        </nav> -->
      </div>

      
        <!-- Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95" -->
     
      

      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Data to enrich your</span>
            <span class="block text-indigo-600 xl:inline">online business</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="">
  </div>
</div>

                </div>
                  <div id="infoPart">
                    <section class="text-gray-600 body-font">
                      <div class="container px-5 py-24 mx-auto">
                        <div class="text-center mb-20">
                          <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1>
                          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                        </div>
                        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                          <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                              </svg>
                              <span class="title-font font-medium">Authentic Cliche Forage</span>
                            </div>
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                              </svg>
                              <span class="title-font font-medium">Kinfolk Chips Snackwave</span>
                            </div>
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                              </svg>
                              <span class="title-font font-medium">Coloring Book Ethical</span>
                            </div>
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                              </svg>
                              <span class="title-font font-medium">Typewriter Polaroid Cray</span>
                            </div>
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                              </svg>
                              <span class="title-font font-medium">Pack Truffaut Blue</span>
                            </div>
                          </div>
                          <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                              </svg>
                              <span class="title-font font-medium">The Catcher In The Rye</span>
                            </div>
                          </div>
                        </div>
                        <!-- <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> -->
                      </div>
                    </section>
                  </div>
                  
                  <div id="productsDetailsPart">
                    <section class="text-gray-600 body-font">
                      <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap w-full mb-20">
                          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                          </div>
                          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                        </div>
                        <div class="flex flex-wrap -m-4">
                          <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                              <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content">
                              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                          </div>
                          <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                              <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content">
                              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                          </div>
                          <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                              <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content">
                              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                          </div>
                          <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                              <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content">
                              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                          </div>
  
                          <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                              <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content">
                              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                          </div>
                          <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                              <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content">
                              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                          </div>
                          <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                              <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content">
                              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                          </div>
                          <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                              <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content">
                              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  
                  <div id="testimonial">
                    <section class="text-gray-600 body-font">
                      <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div class="h-full text-center">
                              <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302">
                              <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                              <p class="text-gray-500">Senior Product Designer</p>
                            </div>
                          </div>
                          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div class="h-full text-center">
                              <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300">
                              <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                              <p class="text-gray-500">UI Develeoper</p>
                            </div>
                          </div>
                          <div class="lg:w-1/3 lg:mb-0 p-4">
                            <div class="h-full text-center">
                              <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305">
                              <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                              <p class="text-gray-500">CTO</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div id="statictics">
                    <section class="text-gray-600 body-font">
                      <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-20">
                          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                        </div>
                        <div class="flex flex-wrap -m-4 text-center">
                          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                              </svg>
                              <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                              <p class="leading-relaxed">Downloads</p>
                            </div>
                          </div>
                          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                              </svg>
                              <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                              <p class="leading-relaxed">Users</p>
                            </div>
                          </div>
                          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                              </svg>
                              <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
                              <p class="leading-relaxed">Files</p>
                            </div>
                          </div>
                          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                              </svg>
                              <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
                              <p class="leading-relaxed">Places</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div id="Footer">
                    <footer class="text-gray-600 body-font">
                      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span class="ml-3 text-xl">Tailblocks</span>
                          </a>
                          <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                        </div>
                        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                              </li>
                            </nav>
                          </div>
                          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                              </li>
                            </nav>
                          </div>
                          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                              </li>
                            </nav>
                          </div>
                          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">First Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                              </li>
                              <li>
                                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                              </li>
                            </nav>
                          </div>
                        </div>
                      </div>
                      <div class="bg-gray-100">
                        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                          <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
                          </p>
                          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a class="text-gray-500">
                              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                              </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                              </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                              </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                              </svg>
                            </a>
                          </span>
                        </div>
                      </div>
                    </footer>
                  </div>
            </div>
            
        </div>
