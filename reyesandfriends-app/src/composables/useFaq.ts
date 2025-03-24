import { ref } from 'vue';

export function useFaq() {
  const faqs = ref([
    { question: 'Fumo?', answer: 'Fumo.', open: false },
    { question: 'Fumo Fumo Fumo?', answer: 'Yes, Fumo Fumo.', open: false },
    { question: 'Lorem?', answer: 'Ipsum.', open: false },
  ]);

  const toggleFaq = (index: number) => {
    faqs.value[index].open = !faqs.value[index].open;
  };

  return { faqs, toggleFaq };
}
