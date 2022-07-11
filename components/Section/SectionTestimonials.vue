<template>
  <section class="app-section bg-gray-100">
    <div
      class="container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
    >
      <BaseTestimonialCard
        :name="$t('sections.testimonials.testimonial1.name')"
        :position="$t('sections.testimonials.testimonial1.position')"
        :quote="$t('sections.testimonials.testimonial1.quote')"
        img-url="../assets/images/Mustafa-Amir.webp"
      />

      <BaseTestimonialCard
        :name="$t('sections.testimonials.testimonial2.name')"
        :position="$t('sections.testimonials.testimonial2.position')"
        :quote="$t('sections.testimonials.testimonial2.quote')"
        img-url="../assets/images/Ziad-Turky.webp"
      />

      <BaseTestimonialCard
        :name="$t('sections.testimonials.testimonial3.name')"
        :position="$t('sections.testimonials.testimonial3.position')"
        :quote="$t('sections.testimonials.testimonial3.quote')"
        img-url="../assets/images/Omar-Maged.webp"
      />
    </div>
  </section>
</template>
