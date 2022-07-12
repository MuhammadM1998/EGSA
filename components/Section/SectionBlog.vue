<template>
  <section class="app-section">
    <div class="container flex flex-col gap-8 lg:flex-row lg:items-center">
      <div
        class="flex flex-col items-center gap-4 text-center lg:basis-2/5 lg:items-start lg:text-start"
      >
        <h2>{{ $t('sections.blog.section_heading') }}</h2>

        <p>{{ $t('sections.blog.section_sub_heading') }}</p>

        <BaseButton type="pill">
          {{ $t('components.buttons.all_articles') }}
        </BaseButton>
      </div>

      <div
        class="flex flex-col items-center gap-8 md:flex-row md:justify-center lg:basis-3/5"
      >
        <BaseArticleCard
          img-url="../assets/images/Blog-Earth-from-Space.webp"
          :title="$t('sections.blog.articles.article1.title')"
          :sub-title="$t('sections.blog.articles.article1.sub_title')"
        />

        <BaseArticleCard
          img-url="../assets/images/Blog-Solar-Eclipse.webp"
          :title="$t('sections.blog.articles.article2.title')"
          :sub-title="$t('sections.blog.articles.article2.sub_title')"
        />
      </div>
    </div>
  </section>
</template>
