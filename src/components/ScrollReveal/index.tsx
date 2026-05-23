import { useEffect } from 'react'

const ScrollReveal = () => {
  useEffect(() => {
    document.body.classList.add('js-reveal')

    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      document.body.classList.remove('js-reveal')
      observer.disconnect()
    }
  }, [])

  return null
}

export default ScrollReveal
