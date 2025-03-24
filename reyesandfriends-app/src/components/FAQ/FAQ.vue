<template>
  <section>
    <div class="container faq-container mt-5 mb-5">
      <ul class="faq-list">
        <li v-for="(faq, index) in faqs" :key="index" class="faq-item">
          <div 
            class="faq-question has-background-primary has-text-white" 
            @click="toggleFaq(index)"
          >
            {{ faq.question }}
          </div>
          <div 
            class="faq-answer has-background-black-ter has-text-white" 
            v-if="faq.open"
          >
            {{ faq.answer }}
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFaq } from '../../composables/useFaq';

export default defineComponent({
  name: 'FAQ',
  setup() {
    const { faqs, toggleFaq } = useFaq();
    return { faqs, toggleFaq };
  },
});
</script>

<style scoped>
.faq-list {
  border: 1px solid #dbdbdb;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
}

.faq-item {
  border-bottom: 1px solid #dbdbdb;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  padding: 1rem;
  cursor: pointer;
}

.faq-answer {
  padding: 1rem;
}

.faq-container {
  max-width: 80%;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .faq-container {
    max-width: 100%;
  }
}
</style>