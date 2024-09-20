import { ref, onMounted, onUnmounted } from 'vue';

export function useMultipleIntersectionObserver(targetElements) {
  const isInViewport = ref([]);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      isInViewport.value[index] = entry.isIntersecting;
    });
  });

  onMounted(() => {
    targetElements.forEach((el, index) => {
      if (el.value) {
        observer.observe(el.value);
        isInViewport.value[index] = false;
      }
    });
  });

  onUnmounted(() => {
    targetElements.forEach((el) => {
      if (el.value) {
        observer.unobserve(el.value);
      }
    });
  });

  return { isInViewport };
}