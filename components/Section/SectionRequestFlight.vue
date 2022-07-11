<template>
  <section class="app-section bg-black text-center text-white lg:text-start">
    <div class="container flex flex-col gap-4 lg:flex-row">
      <div class="flex flex-col gap-4 lg:basis-full">
        <h2>{{ $t('sections.flight_request.section_heading') }}</h2>

        <p>{{ $t('sections.flight_request.section_sub_heading') }}</p>
      </div>

      <form class="flex flex-col gap-2 lg:basis-full">
        <input
          type="number"
          name="flight-no"
          :aria-label="$t('sections.flight_request.form.flight_no')"
          :placeholder="$t('sections.flight_request.form.flight_no')"
        />

        <input
          type="text"
          name="full-name"
          :aria-label="$t('sections.flight_request.form.full_name')"
          :placeholder="$t('sections.flight_request.form.full_name')"
        />

        <input
          type="number"
          name="height"
          :aria-label="$t('sections.flight_request.form.height')"
          :placeholder="$t('sections.flight_request.form.height')"
        />

        <input
          type="number"
          name="weight"
          :aria-label="$t('sections.flight_request.form.weight')"
          :placeholder="$t('sections.flight_request.form.weight')"
        />

        <input
          type="number"
          name="id-number"
          :aria-label="$t('sections.flight_request.form.national_id')"
          :placeholder="$t('sections.flight_request.form.national_id')"
        />

        <input
          type="tel"
          name="mobile"
          :aria-label="$t('sections.flight_request.form.mobile')"
          :placeholder="$t('sections.flight_request.form.mobile')"
        />

        <input
          type="email"
          name="email"
          :aria-label="$t('sections.flight_request.form.email')"
          :placeholder="$t('sections.flight_request.form.email')"
        />

        <div class="flex items-center justify-between gap-2">
          <p>{{ $t('sections.flight_request.form.terms') }}</p>

          <input type="checkbox" name="terms" aria-label="terms" />
        </div>

        <BaseButton type="pill" class="mx-auto lg:mx-0">Submit</BaseButton>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
  form {
    input {
      @apply py-2 px-4 text-black;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &[type='number'] {
        -moz-appearance: textfield;
      }
    }
  }
</style>
