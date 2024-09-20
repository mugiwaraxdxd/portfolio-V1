import { onMounted, ref } from "vue"

    export function ObserveElements (query) {

        const currentSection = ref('');

        onMounted(() => {

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio > 0) {
                        currentSection.value = entry.target.getAttribute('id')
                    }
                })
            },
                {
                    rootMargin: '0px 0px -90% 0px'
                }
            )
            document.querySelectorAll(query).forEach((section) => {
                observer.observe(section)
            })
        })

        return currentSection;
    }

