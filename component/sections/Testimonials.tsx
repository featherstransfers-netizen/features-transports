"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

// Updated testimonial data
const testimonials = [
  {
    id: 1,
    initial: "K",
    name: "Kerry M",
    date: "March 2025",
    rating: 5,
    comment: "Really efficient service from Anna and Tim. Great communication, competitively priced, friendly manner and punctual. Will always use when visiting this area. Highly recommend",
  },
  {
    id: 2,
    initial: "F",
    name: "Fiona T",
    date: "Jan 2024",
    rating: 5,
    comment: "Excellent transfer service. Professional, reliable, good local knowledge and better value for money than many of the other transfer services available. Would definitely use again.",
  },
  {
    id: 3,
    initial: "J",
    name: "Jonathan A",
    date: "March 2023",
    rating: 5,
    comment: "Excellent and affordable transfer company, no need to think twice.",
  },
  {
    id: 4,
    initial: "D",
    name: "Daniil M",
    date: "Dec 2019",
    rating: 5,
    comment: "Simply the best transfer option for a ski trip that I have seen so far. They managed not only to take us to and from the airport for a very reasonable price, but also to quickly rearrange the itinerary when one of the flights was delayed. I am always very happy to see people doing their business not just for money but also to make their customers happy. I would totally recommend",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Calculate how many items to show based on screen width
  const [itemsToShow, setItemsToShow] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1280) {
        setItemsToShow(4) // Show 4 on xl screens
      } else if (width >= 1024) {
        setItemsToShow(3) // Show 3 on lg screens
      } else if (width >= 768) {
        setItemsToShow(2) // Show 2 on md screens
      } else {
        setItemsToShow(1) // Show 1 on sm screens
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Get visible testimonials based on startIndex and itemsToShow
  const getVisibleTestimonials = () => {
    const visibleTestimonials = []
    for (let i = 0; i < itemsToShow; i++) {
      const index = (startIndex + i) % testimonials.length
      visibleTestimonials.push(testimonials[index])
    }
    return visibleTestimonials
  }

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setStartIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  // Render stars
  const renderStars = (count: number) => {
    return Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        className="h-2 lg:h-4 w-2 lg:w-4 fill-blue-600 text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))
  }

  return (
    <section className="bg-white py-16" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 flex flex-col items-start md:flex-row md:items-center md:justify-between">
          <div
            className={`mb-6 md:mb-0 ${inView ? 'opacity-100' : 'opacity-0'}`}
            style={{
              animation: inView ? "fadeInUp 0.6s ease-out forwards" : "none",
            }}
          >
            <p className="text-sm uppercase tracking-wider text-gray-500">TESTIMONIALS</p>
            <h2 className="text-3xl font-bold md:text-4xl">
              What Our <span className="text-blue-600">Enchanted</span> <br className="md:hidden" />
              Customers <span className="text-blue-600">say</span>
            </h2>
          </div>
          <div></div> 
        </div> 

        <div className="relative">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                style={{
                  animation: inView ? `fadeInUp 0.6s ease-out forwards ${index * 0.1 + 0.3}s` : "none",
                }}
              >
                <div className="mb-4 flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                    <span className="font-medium">{testimonial.initial}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>

                <div className="mb-4 flex">{renderStars(testimonial.rating)}</div>

                <p className="text-sm text-gray-600">{testimonial.comment}</p>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="mt-8 flex justify-end space-x-2">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}