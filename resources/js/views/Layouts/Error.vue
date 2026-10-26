<template>
  <ParentTransition appear :visibility="true">
    <div class="bg-primary flex min-h-screen items-center overflow-hidden">
      <div class="mx-auto w-full max-w-screen-xl px-4 py-4 sm:px-6">
        <div class="bg-secondary rounded-lg px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div class="mx-auto max-w-max">
            <ChildTransition direction="ltr">
              <main class="sm:flex">
                <router-view />
              </main>
            </ChildTransition>
          </div>
        </div>
      </div>
    </div>
  </ParentTransition>
</template>
